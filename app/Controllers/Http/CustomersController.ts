import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Customer from "App/Models/Customer";

export default class CustomersController {
  public async getAllCustomer() {
    return {
      status: 200,
      data: await Customer.all(),
      msg: 'Get data sucessfully'
    }
  }
  public async getCustomer({params}: HttpContextContract) {
    const customer = await Customer.findByOrFail('id', params.id)

    return {
      status: 200,
      data: customer,
      msg: 'Get data successfully'
    }
  }
  public async storeCustomer({request}: HttpContextContract) {
    const ktp = request.file('ktp')
    if(!ktp) {
      return {
        status: 400,
        data: null,
        msg: 'Please upload file'
      }
    }
    let customer = new Customer()
    await ktp.move(Application.tmpPath('upload'))
    customer.name = request.input('name')
    customer.contact = request.input('contact')
    customer.email = request.input('email')
    customer.address = request.input('address')
    customer.discount = request.input('discount')
    customer.discountType = request.input('discountType')
    customer.ktp = request.file('ktp')?.fileName as string

    await customer.save()

    return {
      status: 200,
      data: customer,
      mag: 'data has been added'      
    }
  }
  public async updateCustomer({request, params}: HttpContextContract) {
    const ktp = request.file('ktp')
    let customer = await Customer.findByOrFail('id', params.id)
    if(ktp) {
      await ktp.move(Application.tmpPath('upload'))
      customer.ktp = request.file('ktp')?.fileName as string
    }

    customer.name = request.input('name')
    customer.contact = request.input('contact')
    customer.email = request.input('email')
    customer.address = request.input('address')
    customer.discount = request.input('discount')
    customer.discountType = request.input('discountType')

    await customer.save()

    return {
      status: 200,
      data: customer,
      mag: 'data has been updated'      
    }
  }
  public async deleteCustomer({params}: HttpContextContract) {
    let customer = await Customer.findByOrFail('id', params.id)

    await customer.delete()
    return{
      status: 200,
      data: 0,
      msg: 'Data has been edited'
    }

  }
}
