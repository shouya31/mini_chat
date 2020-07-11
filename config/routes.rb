Rails.application.routes.draw do
  root to: 'messages#show'
  resources :messages, only: [:create]
end
