# HOW TO RUN

1. Open the ShoppyGlobe-NodeJS-Backend folder in vs code
2. Install the node_modules folder by typing on terminal: npm install
3. Run the server.js file by typing on terminal: node .\server.js
4. You can also run it by typing on terminal: npm start
5. If you want to use nodemon to run the server, type on terminal: npm run dev
6. Now you can test the apis using ThunderClient
7. You can now test the the functionality of ShoppyGlobe webapp and integration of frontend with backend

## HOW TO USE

1. There is a .env file to store environment variable.
2. There is a db.js file in config folder to connect to the MongoDB database.
3. There is a seedData.js file in config folder to add the initial data to the MongoDB database.
4. There is a authMiddleware.js file middlewares folder which is used to authenticate the user in cart routes.
5. There is a server.js which acts the base file and uses the db.js, seedData.js, cors middleware, express.json middleware, the productRoutes, cartRoutes and authRoutes and connects to the port 5000.
6. There are productRoutes.js, cartRoutes.js and authRoutes.js in routes folder which use the respective controllers for different api calls.
7. There are productController.js, cartController.js, authController.js which use the respective models and give the login for each api.
8. There are productModel.js, cartModel.js and userModel.js which define the schema for product, cart and user collections respectively in MongoDB database and create respective models.
9. ES modules are used in this project.
10. On total there are nine apis to interact with Mongodb database.
11. Get all products api to fetch all products from MongoDB database with method: GET and url: http://localhost:5000/api/products
12. Get product by id api to fetch product having a particular id from the MongoDB database with method: GET and url: http://localhost:5000/api/products/${id} where in place of ${id}, the id of the product will be written.
13. Get cart api to fetch items in the cart of the user from the MongoDB database with method: GET and url: http://localhost:5000/api/cart and it also needs a Bearer JWT token to verify the user in the authorization of header of the request.
14. Add to cart api to add an item to the cart of the user in MongoDB database with method: POST and url: http://localhost:5000/api/cart and it also needs a Bearer JWT token to verify the user in the authorization of header of request and in the body of the request, it needs productId and quantity in JSON format.
15. Update cart item api to update the quantity of the item in the cart of the user in MongoDB database with method: PUT and url: http://localhost:5000/api/cart/${itemId} where in place of ${itemId}, the id of the product will be written and it also needs a Bearer JWT token to verify the user in the authorization of header of request and in the body of the request, it needs quantity in JSON format.
16. Remove cart item api to remove the item from the cart of the user in MongoDB database with method: DELETE and url: http://localhost:5000/api/cart/${itemId} where in place of ${itemId}, the id of the product will be written and it also needs a Bearer JWT token to verify the user in the authorization of header of request.
17. Empty cart api to clear the cart of the user in MongoDB database with method: DELETE and url: http://localhost:5000/api/cart and it also needs a Bearer JWT token to verify the user in the authorization of header of the request.
18. Register user api to register the user in the MongoDB database with method: POST and url: http://localhost:5000/api/register and in the body of the request, it needs username, password, name, email, city and mobile in JSON format.
19. Login user api to login the user and get the JWT token with MongoDB database with method: POST and url: http://localhost:5000/api/login and in the body of the request, it needs username and password in JSON format. 
20. You can refer to the .pdf file given with the ThunderClient test screenshots for backend.
21. You can also refer to the frontend code to see how it is used to interact with MongoDB database.

### GitHub Link
https://github.com/sohailreza16/ShoppyGlobe-NodeJS-Backend.git