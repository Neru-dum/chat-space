class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text          :content,  null:false
      t.string        :image,    null:false
      t.references     :user,     foreign_key: true
      t.references     :group,    foreign_key: true
      t.timestamps
    end
  end
end