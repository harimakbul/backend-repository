import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'transactionCodeSales'})
  public transactionCodeSales: string

  @column({columnName: 'product'})
  public product: string

  @column({columnName: 'qty'})
  public qty: number

  @column({columnName: 'totalPrice'})
  public totalPrice: number

  @column({columnName: 'paymentAmount'})
  public paymentAmount: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
