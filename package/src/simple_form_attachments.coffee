import numeral from 'numeraljs'
import Handlebars from 'handlebars/dist/handlebars.min.js'
import Sortable from 'sortablejs'

# /* The jQuery UI widget factory, can be omitted if jQuery UI is already included */
require('imports-loader?define=>false&exports=>false!blueimp-file-upload/js/vendor/jquery.ui.widget.js');
# /* The Iframe Transport is required for browsers without support for XHR file uploads */
require('imports-loader?define=>false&exports=>false!blueimp-file-upload/js/jquery.iframe-transport.js');
# /* The basic File Upload plugin */
require('imports-loader?define=>false&exports=>false!blueimp-file-upload/js/jquery.fileupload.js');
# /* The File Upload processing plugin */
require('imports-loader?define=>false&exports=>false!blueimp-file-upload/js/jquery.fileupload-process.js');
# /* The File Upload validation plugin */
require('imports-loader?define=>false&exports=>false!blueimp-file-upload/js/jquery.fileupload-validate.js');

(($, window) ->
  pluginName = 'simple_form_attachments'
  document = window.document

  defaults =
    debug: false
    sortable_options:
      animation: 150
      draggable: '.simple_form_attachments__attachment'
      forcePlaceholderSize: true
      ghostClass: 'simple_form_attachments__attachment__ghost'
      handle: '.simple_form_attachments__attachment__col__handle'
      # axis: 'y'
      # containment: 'parent'
      # placeholder: 'simple_form_attachments__attachment__placeholder'

    slide_speed: 'fast'

  class Plugin
    constructor: (@element, options) ->
      @options = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()
      @attachments_counter = 0

    init: ->
      @set_unique_ids()

      @get_file_input().on 'fileuploadalways', (e) => @init_sortable() if @is_sortable()
      @init_sortable() if @is_sortable()
      @init_fileupload()

    init_sortable: () ->
      @sortable = new Sortable(@get_attachment_list()[0], @options.sortable_options)

    init_fileupload: () ->
      console.log "init jQuery.fileupload" if @options.debug
      @get_file_input().fileupload
        dataType: 'json'
        dropZone: @$element
        formData: {
          'attachment_type]': @get_attachment_type_input().val(),
          'attachment_parent[name]': @get_attachment_parent_name_input().val(),
          'attachment_parent[class]': @get_attachment_parent_class_input().val(),
          'attachment_relation[type]': @get_attachment_relation_type_input().val(),
          'attachment_relation[key]': @get_attachment_relation_key_input().val(),
          'attachment_relation[name]': @get_attachment_relation_name_input().val(),
          'attachment_relation[referenced]': @get_attachment_relation_referenced_input().val(),
          'authenticity_token': $('meta[name="csrf-token"]').attr('content')
          'attachment_relation[multiple]': @is_multiple()
        }
        namespace: 'simple_form_attachments'
        url: @get_attachments_path()
        # getNumberOfFiles: -> 2
        # maxNumberOfFiles: 2

        start: (e, data) =>
          @set_logs(e, data) if @options.debug
          @disable_form_submit()

        add: (e, data) =>
          @set_logs(e, data) if @options.debug
          @get_attachment_list().find('.simple_form_attachments__attachment').remove() unless @is_multiple()

          for file in data.files
            properties = {
              size: (file.size)
              size_human: @get_size_human(file.size)
              mime_type: file.type
              multiple: @is_multiple()
              thumb_url: URL.createObjectURL(file)
            }
            result = $.extend({}, file, properties)
            $template = @get_attachment_template(result).addClass('simple_form_attachments__attachment__is_uploading')
            data.context = $template
            $template.data('data', data)
            @get_attachment_list().append($template)

          data.submit()

        fail: (e, data) =>
          @set_logs(e, data) if @options.debug
          if !!data.jqXHR.responseText
            $result = $(JSON.parse(data.jqXHR.responseText).html).addClass('simple_form_attachments__attachment__has_error')
            $result.find('.simple_form_attachments__attachment__col__errors');
            data.context.replaceWith($result)

        progress: (e, data) =>
          @set_logs(e, data) if @options.debug
          progress = parseInt(data.loaded / data.total * 100, 10)
          data.context.find('.simple_form_attachments__attachment__col__progress__bar').width(progress+'%')

        done: (e, data) =>
          @set_logs(e, data) if @options.debug
          console.log data.result.html if @options.debug
          $result = $(data.result.html).addClass('simple_form_attachments__attachment__is_uploaded')
          data.context.replaceWith($result)

        stop: (e, data) =>
          @set_logs(e, data) if @options.debug
          @enable_form_submit()

      @$element.on 'click', '.simple_form_attachments__button__delete, .simple_form_attachments__button__close', (e) =>
        e.preventDefault()
        e.stopPropagation()
        $template = $(e.currentTarget).closest('.simple_form_attachments__attachment')
        @remove_template($template)

      @$element.on 'click', '.simple_form_attachments__button__cancel', (e) =>
        e.preventDefault()
        e.stopPropagation()
        $template = $(e.currentTarget).closest('.simple_form_attachments__attachment')
        data = $template.data('data') || {}
        @enable_form_submit()

        if !!data.jqXHR
          data.jqXHR.abort()
        else
          data.errorThrown = 'abort'
          e.data.fileupload._trigger('fail', e, data)

        @remove_template($template)

      @$element.on 'dragover', (e) =>
        e.preventDefault()
        @$element.addClass('dragover')

      @$element.on 'dragleave', (e) =>
        e.preventDefault()
        @$element.removeClass('dragover')

      @$element.on 'drop', (e) =>
        e.preventDefault()
        @$element.removeClass('dragover')

    # ---------------------------------------------------------------------

    get_attachment_list: -> @$element.find('.simple_form_attachments__attachment_list')
    get_attachments_path: -> @$element.data('attachments-path')
    get_disabled_submit_text: -> @$element.data('disabled-submit-text')
    get_file_input: -> @$element.find('input.file')
    get_form: -> @$element.parents('form').first()
    get_form_submit: -> @get_form().find('input[type="submit"]').first()
    get_max_number_of_files: -> @$element.data('max-number-of-files')
    get_number_of_files: -> @get_attachment_list().children('.simple_form_attachments__attachment').not('.simple_form_attachments__attachment__has_error').length

    get_attachment_type_input: -> @$element.find('input[name="attachment_type"]')
    get_attachment_multiple_input: -> @$element.find('input[name="attachment[multiple]"]')
    get_attachment_parent_class_input: -> @$element.find('input[name="attachment_parent[class]"]')
    get_attachment_parent_name_input: -> @$element.find('input[name="attachment_parent[name]"]')
    get_attachment_relation_key_input: -> @$element.find('input[name="attachment_relation[key]"]')
    get_attachment_relation_name_input: -> @$element.find('input[name="attachment_relation[name]"]')
    get_attachment_relation_type_input: -> @$element.find('input[name="attachment_relation[type]"]')
    get_attachment_relation_referenced_input: -> @$element.find('input[name="attachment_relation[referenced]"]')

    get_relation_name: -> @$element.data('relation-name')
    get_relation_key: -> @$element.data('relation-key')

    get_size_human: (bytes) -> numeral(bytes).format('0.0 b')

    get_attachment_template: (file) =>
      template = Handlebars.compile(@$element.find('script#simple_form_attachments__template').html())
      $(template(file))

    # ---------------------------------------------------------------------

    set_logs: (e, data) ->
      console.log e.type
      console.log e
      console.log data

    enable_form_submit: ->
      $submit = @get_form_submit()
      submit_text = $submit.data('submit-text')
      $submit.removeAttr('disabled')
      $submit.val(submit_text)

    disable_form_submit: ->
      $submit = @get_form_submit()
      $submit.attr('data-submit-text', $submit.val())
      $submit.val(@get_disabled_submit_text()).attr('disabled', 'disabled')

    remove_template: ($template) -> $template.slideUp(@options.slide_speed).promise().done -> $(this).remove()

    create_index: -> new Date().getTime() + @attachments_counter++

    # ---------------------------------------------------------------------

    is_multiple: -> @get_file_input().attr('multiple') != undefined
    is_sortable: -> @get_attachment_list().hasClass('simple_form_attachments__attachment_list__is_sortable')

    # ---------------------------------------------------------------------

    set_unique_ids: ->
      $input = @get_file_input()
      default_id = $input.attr('id')
      $label = @$element.find("[for='#{default_id}']")
      $input.data('default-id', default_id)
      $label.data('default-for', default_id)
      new_id = "#{default_id}__#{@guid()}"
      $input.attr('id', new_id)
      $label.attr('for', new_id)

    # ---------------------------------------------------------------------

    guid: -> @s4() + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + '-' + @s4() + @s4() + @s4()
    s4: -> Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

  # ---------------------------------------------------------------------

  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(this, "plugin_#{pluginName}")
        $.data(@, "plugin_#{pluginName}", new Plugin(@, options))
)(jQuery, window)
