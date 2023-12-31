# Triveous
# Endpoints
## User Routes
### POST user/register
Register a new user.

### Request Body:

    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "city: "patna"
    }
  
### Response:

Status: 201 Created

Body:{
  "message": "User is Registered"
}

### POST user/login
Login with existing user credentials.

### Request Body:

    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
### Response:

Status: 200 Created

### Body:

    {
      "token": "your_jwt_token",
      "message": "Login Successfull"
    }

    
## Category Routes
### Create a new category.

### POST /category/create
### Request Body:

    {
      "name": "mobile"
    }
### Response:

Status: 201 Created

### Body:

    {
      "message": "Category added successfully"
    }

    
### GET /category/getAll
Get all categories.

### Response:

Status: 200 OK Body:

      [
      {
        "_id": "category_id",
        "name": "mobile"
      },
      {
        "_id": "category_id",
        "name": "laptop"
      },
      ...
      ]

      
## Product Routes
### POST /product/create
Create a new product.

Request Body:

      {
        "title": "oppo",
        "description": "camera phone",
        "price": 9500,
        "availability": true,
        "categoryId": "category_id"
      }
Response:

Status: 201 Created Body:

      {
        "message": "Product added successfully"
      }
      
### GET /product/categoryId/:categoryId
Get all products under a specific category.

Response:

Status: 200 OK Body:

        [
          {
            "_id": "product_id",
            "title": "oppo",
            "description": "camera phone",
            "price": 9500,
            "availability": true,
            "categoryId": "category_id"
          },
          {
            "_id": "product_id",
            "title": "redmi",
            "description": "durable phone",
            "price":10500,
            "availability": false,
            "categoryId": "category_id"
          },
          ...
        ]

        
### GET product/productsId/:productsId
Get a specific product by its ID.

Response:

Status: 200 OK Body:

          {
            "_id": "product_id",
            "title": "oppo",
            "description": "camera phone",
            "price": 9500,
            "availability": true,
            "categoryId": "category_id"
          }

          
## Cart Routes
### GET /cart/getAll/:userID
Get all data from the user's cart.

Response:

Status: 200 OK Body:

        {
          "_id": "cart_id",
          "userId": "user_id",
          "items": [
            {
              "_id": "item_id",
              "productId": "product_id",
              "quantity": 2,
              "price": 9500
            },
            ...
          ]
        }


### POST /cart/add
Add a product to the cart.

Response:

Status: 200 OK Body:

{
  "message": "Product added to cart successfully"
}


### PATCH /cart/:productId
Update the quantity of a product in the cart.

Request Body:

        {
          "quantity": 3
        }
Response:

Status: 200 OK Body:

        {
          "message": "Cart item is updated now"
        }
        
### DELETE /cart/delete/:productId
Delete an item from the cart.

Response:

Status: 200 OK Body:

      {
        "message": "cart item is deleted now"
      }

      
## Order Routes
### POST /order/add/:productId
Place an order for a specific product.

Response:

Status: 201 OK Body:

      {
        "message": "order is placed now"
      }
      
### GET /order/getAll
Get the order history for the authenticated user.

Response:

Status: 200 OK Body:

      [
        {
          "_id": "order_id",
          "userId": "user_id",
          "items": [
            {
              "_id": "item_id",
              "productId": "product_id",
              "quantity": 2
            },
            ...
          ],
          "totalPrice": 19000,
          "date": "2023-07-26T10:15:00.000Z"
        },
        ...
      ]
      
### GET /order/:orderId
Get detailed information of a specific order by its ID.

Response:

Status: 200 OK Body:

      {
        "_id": "order_id",
        "userId": "user_id",
        "items": [
          {
            "_id": "item_id",
            "productId": "product_id",
            "quantity": 2
          },
          ...
        ],
        "totalPrice":19000,
        "date": "2023-07-26T10:15:00.000Z"
      }

  ## demo
  ### video link:- https://drive.google.com/file/d/1Kit5Os_BfDKBsNxsmSAafEvuWwbof7gq/view?usp=sharing
  ### Deployed link:- https://task-sogi.onrender.com/
