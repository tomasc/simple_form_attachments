SimpleFormAttachments::Engine.routes.draw do
  scope module: :simple_form_attachments do
    post "/attachments" => "upload#create", as: :attachments
  end
end
