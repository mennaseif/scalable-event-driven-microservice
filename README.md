# scalable-event-driven-microservice

 A Node.js microservice using Kafka for real-time event processing and MongoDB for data storage, following Domain-Driven Design principles.

 ## Features
- 🚀 Kafka producer/consumer for real-time event processing
- 🏗️ Domain-Driven Design architecture
- 🗄️ MongoDB with proper indexing
- 🐳 Docker & Kubernetes ready
- 📝 REST API with pagination/filtering

## Project Structure
scalable event-driven microservice/
├── database/
|     ├── dbConnection.js         # MongoDB connection
└── models/
│       └── log.models.js       # Logs schema
│           
│
├── database/
│   └── models/
│       └── log.models.js       # Logs schema
│
├── middleware/
│   ├── catchError.js
│   └── globalError.js
│
├── utils/
│   └── appError.js
│
├── modules/
│   └── logs/
│       ├── router.js           # Express routes
│       └── controller.js       # Express controller
│
├── kafka/
│   ├── consumer.js             # Kafka consumer
│   └── producer.js             # Kafka producer
│
├── index.js                    # Main app entry
├── .env                        # Environment variables
├── .gitignore
└── docker-compose.yml

## Prerequisites
- Node.js 18+
- Docker 20+
- Kafka (included in Docker setup)
- MongoDB (included in Docker setup)

  
## Setup Instructions

### 1. Local Development

# Clone repository
git clone https://github.com/your-repo/event-driven-microservice.git
cd event-driven-microservice

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env file with your configurations
nano .env 


 Docker Setup
 
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

 Environment Variables
Create .env file with these variables:

KAFKA_BROKER=localhost:9092
BASE_URL="http://localhost:3000"
MONGO_URI="mongodb://localhost:27017/scalable-event-driven-microservice"
PORT=3000

 Running the Service
# Development mode (with nodemon)
npm run dev

# Production mode
npm start

API Endpoints
Method	Endpoint	Description
POST	/api/getlogs	Create new activity log
GET	/api/postlogs	Get paginated/filtered logs

Sample Request:

POST /api/postlogs
{
  "userId": "user122",
  "action": "login"
}

Deployment
Docker Build

docker build -t event-service .
docker run -p 3000:3000 event-service



