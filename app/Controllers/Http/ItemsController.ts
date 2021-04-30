import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Item from 'App/Models/Item'

export default class ItemsController {
  public async getAllItem() {
    return {
      status: 200,
      data: await Item.all(),
      msg: "get data successfully"
    }
  }
  public async storeItem({request}: HttpContextContract) {
    const item = new Item()

    item.transactionCodeSales = request.input('transactionCodeSales') as string
    item.product = request.input('product') as string
    item.qty = request.input('qty') as number
    item.totalPrice = request.input('totalPrice') as number
    item.paymentAmount = request.input('paymentAmount') as number
    await item.save()

    return {
      status: 200,
      data: item,
      msg: 'Item has been saved'
    }
  }
  // public async getProduct({params}: HttpContextContract) {
  //   const id = params.id

  //   return {
  //     status: 200,
  //     data: await Product.findBy('id', id),
  //     msg: 'Get Product Successfully'
  //   }
  // }

  public async updateItem({request, params}: HttpContextContract) {
    let item = await Item.findByOrFail('id', params.id)

    item.qty = request.input('qty')
    item.totalPrice = (request.input('qty') as number) * request.input('price') as number

    await item.save()

    return {
      status: 200,
      data: item,
      msg: 'Item has been updated'
    }
  }
  public async deleteItem({params}: HttpContextContract) {
    const item = await Item.findByOrFail('id', params.id)

    item.delete()

    return { 
      status: 200,
      data: null,
      msg: 'Item has been deleted'
    }
  }
}
