class StaticController < ApplicationController
  def home
    @inquiry = Inquiry.new
  end
end
