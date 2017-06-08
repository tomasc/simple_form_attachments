SimpleFormAttachments::Engine.routes.draw do
  scope module: :simple_form_attachments do
    get 'attachments/:id' => 'upload#show', as: :attachment
    post 'attachments' => 'upload#create', as: :attachments
  end
end
