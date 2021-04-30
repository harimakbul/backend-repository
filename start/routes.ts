/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

Route.group(() => {
  // Route for product
  Route.get('getAllProduct', 'ProductsController.getAllProduct')
  Route.post('storeProduct', 'ProductsController.storeProduct')
  Route.get('getProduct/:id', 'ProductsController.getProduct')
  Route.put('updateProduct/:id', 'ProductsController.updateProduct')
  Route.delete('deleteProduct/:id', 'ProductsController.deleteProduct')

  // Route for customer
  Route.get('getAllCustomer', 'customersController.getAllCustomer')
  Route.post('storeCustomer', 'customersController.storeCustomer')
  Route.get('getCustomer/:id', 'customersController.getCustomer')
  Route.put('updateCustomer/:id', 'customersController.updateCustomer')
  Route.delete('deleteCustomer/:id', 'customersController.deleteCustomer')

  // Route for customer
  Route.get('getAllItem', 'ItemsController.getAllItem')
  Route.post('storeItem', 'ItemsController.storeItem')
  // Route.get('getCustomer/:id', 'ItemsController.getCustomer')
  // Route.put('updateCustomer/:id', 'ItemsController.updateCustomer')
  Route.delete('deleteItem/:id', 'ItemsController.deleteItem')
}).prefix('api/v1')