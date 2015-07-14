# https://github.com/zenorocha/jquery-boilerplate
(($, window) ->

  # ---------------------------------------------------------------------

  pluginName = 'simple_form_attachments'
  document = window.document

  defaults =
    debug: false
    sortable_options:
      items: 'tr'
      handle: '.handle'
      axis: 'y'
    slide_speed: 'fast'

  # ---------------------------------------------------------------------

  class Plugin

    constructor: (@element, options) ->
      @options = $.extend {}, defaults, options

      @$element = $(@element)

      @_defaults = defaults
      @_name = pluginName

      @init()
      @attachments_counter = 0

    init: ->
      @init_sortable() if @is_sortable()
      @init_fileupload()

    init_sortable: () ->
      @get_attachment_list().sortable(@options.sortable_options)

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
          @get_attachment_list().find('tr').remove() unless @is_multiple()

          for file in data.files
            properties = {
              size: @get_kb_from_bytes(file.size)
              mime_type: file.type
              multiple: @is_multiple()
              thumb_url: URL.createObjectURL(file)
            }
            result = $.extend({}, file, properties)
            $template = @get_attachment_template(result).addClass('uploading')
            data.context = $template
            $template.data('data', data)
            @get_attachment_list().append($template)

          data.submit()

        fail: (e, data) =>
          @set_logs(e, data) if @options.debug
          $result = $(JSON.parse(data.jqXHR.responseText).html).addClass('has_error')
          data.context.replaceWith($result)

        progress: (e, data) =>
          @set_logs(e, data) if @options.debug
          progress = parseInt(data.loaded / data.total * 100, 10)
          data.context.find('.progress.bar').width(progress+'%')

        done: (e, data) =>
          @set_logs(e, data) if @options.debug
          console.log data.result.html if @options.debug
          data.context.replaceWith data.result.html

        stop: (e, data) =>
          @set_logs(e, data) if @options.debug
          @enable_form_submit()

      @$element.on 'click', 'button.delete, button.close', (e) =>
        e.preventDefault()
        e.stopPropagation()
        $template = $(e.currentTarget).closest('tr')
        @remove_template($template)

      @$element.on 'click', 'button.cancel', (e) =>
        e.preventDefault()
        e.stopPropagation()
        $template = $(e.currentTarget).closest('tr')
        data = $template.data('data') || {}
        @enable_form_submit()

        if !data.jqXHR
          data.errorThrown = 'abort'
          e.data.fileupload._trigger('fail', e, data)
        else
          data.jqXHR.abort()

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

    get_attachment_list: -> @$element.find('table.attachments.list')
    get_attachments_path: -> @$element.data('attachments-path')
    get_disabled_submit_text: -> @$element.data('disabled-submit-text')
    get_file_input: -> @$element.find('input.file')
    get_form: -> @$element.parents('form').first()
    get_form_submit: -> @get_form().find('input[type="submit"]')
    get_max_number_of_files: -> @$element.data('max-number-of-files')
    get_number_of_files: ->
      @get_attachment_list().children('tr').not('.has_error').length

    get_attachment_type_input: ->
      @$element.find('input[name="attachment_type"]')
    get_attachment_multiple_input: ->
      @$element.find('input[name="attachment[multiple]"]')
    get_attachment_parent_class_input: ->
      @$element.find('input[name="attachment_parent[class]"]')
    get_attachment_parent_name_input: ->
      @$element.find('input[name="attachment_parent[name]"]')
    get_attachment_relation_key_input: ->
      @$element.find('input[name="attachment_relation[key]"]')
    get_attachment_relation_name_input: ->
      @$element.find('input[name="attachment_relation[name]"]')
    get_attachment_relation_type_input: ->
      @$element.find('input[name="attachment_relation[type]"]')
    get_attachment_relation_referenced_input: ->
      @$element.find('input[name="attachment_relation[referenced]"]')

    get_relation_name: -> @$element.data('relation-name')
    get_relation_key: -> @$element.data('relation-key')

    get_kb_from_bytes: (bytes) -> parseInt(parseInt(bytes)/1024)

    get_attachment_template: (file) =>
      template = Handlebars.compile(@$element.find('script#attachment_template').html())
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
    is_sortable: -> @get_attachment_list().hasClass('sortable')

  # ---------------------------------------------------------------------

  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(this, "plugin_#{pluginName}")
        $.data(@, "plugin_#{pluginName}", new Plugin(@, options))

  # ---------------------------------------------------------------------

)(jQuery, window)

# =====================================================================

$ ->

  $('div.simple_form_attachments').simple_form_attachments()

  $('body').on 'dom_update', (e) ->
    $('div.simple_form_attachments').simple_form_attachments()
