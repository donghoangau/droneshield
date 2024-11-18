const { test, expect } = require('@playwright/test')

const baseURL = 'https://petstore.swagger.io/v2'


test.describe('Petstore Orders API Tests', () => {
  let orderId

  test('Get store inventory', async ({ request }) => {
    const response = await request.get(`${baseURL}/store/inventory`)

    expect(response.status()).toBe(200)

    const responseBody = await response.json()
    
    expect(typeof responseBody).toBe('object')

    // Check if the response contains keys representing inventory statuses
    expect(responseBody).toHaveProperty('available')
    expect(typeof responseBody.available).toBe('number')
    expect(responseBody).toHaveProperty('pending')
    expect(typeof responseBody.pending).toBe('number') 
    expect(responseBody).toHaveProperty('sold')
    expect(typeof responseBody.sold).toBe('number')

  })

  test('Place a new order for a pet', async ({ request }) => {
    const newOrder = {
      id: 1,
      petId: 1,
      quantity: 1,
      shipDate: new Date().toISOString(),
      status: 'placed',
      complete: true,
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: newOrder,
    })

    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.id).toBe(newOrder.id)
    expect(responseBody.petId).toBe(newOrder.petId)
    expect(responseBody.quantity).toBe(newOrder.quantity)
    expect(responseBody.status).toBe(newOrder.status)

    orderId = responseBody.id
  })

  test('Get order details by order ID', async ({ request }) => {
    const response = await request.get(`${baseURL}/store/order/${orderId}`)

    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.id).toBe(orderId)
    expect(responseBody.status).toBe('placed')
  })
})

test.describe.skip('Petstore Orders API Tests unhappy test cases', () => {
  test('Delete order by ID', async ({ request }) => {
    const response = await request.delete(`${baseURL}/store/order/${orderId}`)

    expect(response.status()).toBe(200)

    // Verify that the order has been deleted
    const getResponse = await request.get(`${baseURL}/store/order/${orderId}`)
    expect(getResponse.status()).toBe(404)
  })

  test('Place a new order for a pet invalid data', async ({ request }) => {
    const newOrder = {
      id: -2,
      petId: 1.1,
      quantity: -9,
      shipDate: new Date().toISOString(),
      status: 'placed',
      complete: true,
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: newOrder,
    })

    expect(response.status()).toBe(400)
    const responseBody = await response.json()
    expect(responseBody.id).toBe(newOrder.id)
    expect(responseBody.petId).toBe(newOrder.petId)
    expect(responseBody.quantity).toBe(newOrder.quantity)
    expect(responseBody.status).toBe(newOrder.status)

  })

  test('Place a new order for a pet, quantity 0', async ({ request }) => {
    const newOrder = {
      id: 1,
      petId: 1,
      quantity: 0,
      shipDate: new Date().toISOString(),
      status: 'placed',
      complete: true,
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: newOrder,
    })

    expect(response.status()).toBe(400)
    const responseBody = await response.json()
    expect(responseBody.id).toBe(newOrder.id)
    expect(responseBody.petId).toBe(newOrder.petId)
    expect(responseBody.quantity).toBe(newOrder.quantity)
    expect(responseBody.status).toBe(newOrder.status)

  })

  test('Get order details for a non-existent order', async ({ request }) => {
    const nonExistentOrderId = 1234567890 // This ID that is unlikely to exist
    const response = await request.get(`${baseURL}/store/order/${nonExistentOrderId}`)

    expect(response.status()).toBe(404) // Expecting a 404 Not Found
  })

   test('Get order details for an invalid order input', async ({ request }) => {
        const nonExistentOrderId = -9
        const response = await request.get(`${baseURL}/store/order/${nonExistentOrderId}`)
    
        expect(response.status()).toBe(400)
      })

  test('Delete order with invalid ID format', async ({ request }) => {
    const invalidOrderId = 'invalid-id'; // Invalid ID format
    const response = await request.delete(`${baseURL}/store/order/${invalidOrderId}`);

    expect(response.status()).toBe(400)
  })

  test('Place an order with missing required fields', async ({ request }) => {
    const incompleteOrder = {
      petId: 12345, // Missing 'id', 'quantity', 'shipDate', 'status', and 'complete'
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: incompleteOrder,
    })

    expect(response.status()).toBe(400) // Expecting a 400 Bad Request
  })

  // Edge Case 2: Place an order with incorrect data types
  test('Place an order with incorrect data types', async ({ request }) => {
    const invalidOrder = {
      id: 'invalid-id', //should be a number
      petId: 'invalid-petId',
      quantity: 'two', // should be a number
      shipDate: 'invalid-date', // should be a valid date string
      status: 123, // should be a string
      complete: 'yes', // should be a boolean
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: invalidOrder,
    })

    expect(response.status()).toBe(400)
  })

  test('Place an order with a past ship date', async ({ request }) => {
    const pastOrder = {
      id: 1002,
      petId: 12345,
      quantity: 1,
      shipDate: '1970-01-15T06:56:07.890+0000', // A past date
      status: 'placed',
      complete: false,
    }

    const response = await request.post(`${baseURL}/store/order`, {
      data: pastOrder,
    })

    expect(response.status()).toBe(422) // Unprocess able request
    const responseBody = await response.json()
    expect(responseBody.shipDate).toBe(pastOrder.shipDate)
  })

  test('Get order details with invalid ID format', async ({ request }) => {
    const invalidOrderId = 'abc123' // Invalid ID format

    const response = await request.get(`${baseURL}/store/order/${invalidOrderId}`)

    expect(response.status()).toBe(400) // The API should return 404 Not Found
  })

  test('Delete order with a negative ID', async ({ request }) => {
    const negativeOrderId = -9999

    const response = await request.delete(`${baseURL}/store/order/${negativeOrderId}`)

    expect(response.status()).toBe(400) // should return 400 as bad request
  })
})