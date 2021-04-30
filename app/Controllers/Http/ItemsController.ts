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

  // public async updateProduct({request, params}: HttpContextContract) {
  //   const productImage = request.file('productImage')
  //   let product = await Product.findByOrFail('id', params.id)
  //   if(productImage) {
  //     await productImage.move(Application.tmpPath('upload'))
  //     product.productImage = request.file('productImage')?.fileName as string
  //   }

  //   product.productName = request.input('productName')
  //   product.unit = request.input('unit')
  //   product.stock = request.input('stock')
  //   product.price = request.input('price')

  //   await product.save()

  //   return {
  //     status: 200,
  //     data: product,
  //     msg: 'Product has been updated'
  //   }
  // }
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
