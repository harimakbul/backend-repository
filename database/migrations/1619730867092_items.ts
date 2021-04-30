import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Items extends BaseSchema {
  protected tableName = 'items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('transactionCodeSales')
      table.string('product')
      table.integer('qty')
      table.integer('totalPrice')
      table.integer('paymentAmount')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
