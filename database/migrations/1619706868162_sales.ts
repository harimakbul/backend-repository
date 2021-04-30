import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sales extends BaseSchema {
  protected tableName = 'sales'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('transactionCode')
      table.string('transactionDate')
      table.integer('customer')
      table.integer('totalAmount')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
