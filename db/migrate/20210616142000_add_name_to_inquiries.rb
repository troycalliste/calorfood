class AddNameToInquiries < ActiveRecord::Migration[6.1]
  def change
    add_column :inquiries, :name, :string
    add_column :inquiries, :phone, :string
  end
end
