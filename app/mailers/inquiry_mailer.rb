class InquiryMailer < ApplicationMailer
  def inquiry_notification(name, email, subject, message)
@name = name if name
@phone = phone if phone
mail(to: ['troycallist@gmail.com', 'sankofadreams@yahoo.com'], subject: 'You have a new inquiry!')
end
end
