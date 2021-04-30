import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'productName'})
  public productName: string

  @column({columnName: 'unit'})
  public unit: string

  @column({columnName: 'stock'})
  public stock: number

  @column({columnName: 'price'})
  public price: number

  @column({columnName: 'productImage'})
  public productImage: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
