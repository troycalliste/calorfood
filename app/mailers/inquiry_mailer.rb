class InquiryMailer < ApplicationMailer
  def inquiry_notification(name, phone)
@name = name if name
@phone = phone if phone
mail(to: ['troycallist@gmail.com'], subject: 'You have a new inquiry!')
end
end
