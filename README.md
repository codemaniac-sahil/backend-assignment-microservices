# Pizza Delivery Microservices System

This repository contains microservices for a Pizza Delivery Platform. The system is divided into four microservices: User Service, Delivery Service, Admin Service, and Restaurant Service. Each microservice is responsible for specific functionalities related to users, deliveries, administration, and restaurant management.

## System Architecture

The system is built using Node.js, Express.js, and MongoDB with Mongoose. Each microservice is contained in its own directory, and communication between microservices is done through HTTP RESTful APIs.

### Services

1. **User Service:**
   - Allows users to check out online restaurants in their city.
   - Allows users to place pizza orders.
   - Maintains order history for each user.

2. **Delivery Service:**
   - Enables restaurant owners to update the status of pizza deliveries.

3. **Admin Service:**
   - Allows admin users to add or remove restaurants from the platform.

4. **Restaurant Service:**
   - Enables restaurant owners to manage their menu by adding, updating, or removing items.
   - Allows restaurant owners to manage the online/offline status of their restaurants.

## Setting Up the System Locally

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/backend-assignment-microservices.git
   cd backend-assignment-microservices
   ```

2. **Install Dependencies:**

   Install dependencies for each microservice:

   ```bash
   cd user-service
   npm install

   cd ../delivery-service
   npm install

   cd ../admin-service
   npm install

   cd ../restaurant-service
   npm install
   ```

3. **Set Up MongoDB:**

   Start a MongoDB server locally. You can use the default settings or customize the MongoDB connection string in each service's code if needed.

4. **Build Docker Images:**

   Build Docker images for each microservice:

   ```bash
   cd user-service
   docker build -t user-service .

   cd ../delivery-service
   docker build -t delivery-service .

   cd ../admin-service
   docker build -t admin-service .

   cd ../restaurant-service
   docker build -t restaurant-service .
   ```

5. **Run Docker Containers:**

   Run Docker containers for each microservice:

   ```bash
   docker run -p 3001:3001 user-service
   docker run -p 3002:3002 delivery-service
   docker run -p 3003:3003 admin-service
   docker run -p 3004:3004 restaurant-service
   ```

   Ensure that the ports specified in the `docker run` commands match the ports used by each microservice.

## Testing the System

To test the system, you can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/). Follow the API endpoints described in the respective microservice sections earlier in this README.

Example API requests:

- **User Service:**
  - GET Online Restaurants: `GET http://localhost:3001/restaurants/{city}`
  - Place Order: `POST http://localhost:3001/orders`
  - Get Order History: `GET http://localhost:3001/orders/{userId}`

- **Delivery Service:**
  - Update Delivery Status: `PUT http://localhost:3002/deliveries/{orderId}`

- **Admin Service:**
  - Add Restaurant: `POST http://localhost:3003/restaurants`
  - Remove Restaurant: `DELETE http://localhost:3003/restaurants/{restaurantId}`

- **Restaurant Service:**
  - Add Menu Item: `POST http://localhost:3004/menu/{restaurantId}`
  - Update Menu Item: `PUT http://localhost:3004/menu/{restaurantId}/{itemId}`
  - Remove Menu Item: `DELETE http://localhost:3004/menu/{restaurantId}/{itemId}`
  - Update Restaurant Status: `PUT http://localhost:3004/restaurants/{restaurantId}/status`

## Cleaning Up

To stop and remove the Docker containers, use the following commands:

```bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
```

This will stop and remove all Docker containers.
