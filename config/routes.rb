Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get "/", to: "static#home"
get "/catering", to: "static#catering"
get "/personalchef", to: "static#personalchef"
get "/mealprep", to: "static#mealprep"
get "/about", to: "static#about"
get "/contact", to: "static#contact"
end
