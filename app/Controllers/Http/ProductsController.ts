import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from "App/Models/Product";
export default class ProductsController {
  public async getAllProduct() {
    return {
      status: 200,
      data: await Product.all(),
      msg: "get data successfully"
    }
  }
  public async storeProduct({request}: HttpContextContract) {
    const productImage = request.file('productImage')
    const product = new Product()
    if(!productImage) {
      return {
        status: 400,
        data: null,
        msg: 'Please upload file'
      }
    }

    await productImage.move(Application.tmpPath('upload'))
    product.productName = request.input('productName') as string
    product.unit = request.input('unit') as string
    product.stock = request.input('stock') as number
    product.price = request.input('price') as number
    product.productImage = request.file('productImage')?.fileName as string
    console.log(product)
    await product.save()

    return {
      status: 200,
      data: product,
      msg: 'Product has been saved'
    }
  }
  public async getProduct({params}: HttpContextContract) {
    const id = params.id

    return {
      status: 200,
      data: await Product.findBy('id', id),
      msg: 'Get Product Successfully'
    }
  }

  public async updateProduct({request, params}: HttpContextContract) {
    const productImage = request.file('productImage')
    let product = await Product.findByOrFail('id', params.id)
    if(productImage) {
      await productImage.move(Application.tmpPath('upload'))
      product.productImage = request.file('productImage')?.fileName as string
    }

    product.productName = request.input('productName')
    product.unit = request.input('unit')
    product.stock = request.input('stock')
    product.price = request.input('price')

    await product.save()

    return {
      status: 200,
      data: product,
      msg: 'Product has been updated'
    }
  }
  public async deleteProduct({params}: HttpContextContract) {
    const product = await Product.findByOrFail('id', params.id)

    product.delete()

    return { 
      status: 200,
      data: null,
      msg: 'Product has been deleted'
    }
  }
}
