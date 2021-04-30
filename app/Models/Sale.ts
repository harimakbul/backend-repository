import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Item from './Item'

export default class Sale extends BaseModel {

  @hasMany(() => Item, {
    localKey: 'transactionCode',
    foreignKey: 'transactionCodeSales',
  })
  public item: HasMany<typeof Item>

  @column({ isPrimary: true })
  public id: number

  public transactionCode: string
  public transactionDate: string
  public customer: number
  public totalAmount: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
