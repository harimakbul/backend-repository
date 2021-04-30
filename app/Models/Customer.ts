import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({columnName: 'name'})
  public name: string

  @column({columnName: 'contact'})
  public contact: string

  @column({columnName: 'email'})
  public email: string

  @column({columnName: 'address'})
  public address: string

  @column({columnName: 'discount'})
  public discount: number

  @column({columnName: 'discountType'})
  public discountType: number

  @column({columnName: 'ktp'})
  public ktp: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
