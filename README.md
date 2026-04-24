# 🚀 MeterFlow - API Management Platform

MeterFlow is a full-stack API management platform that allows developers to generate API keys, track usage, enforce rate limiting, and manage billing with integrated payments.

---

## 🌟 Features

### 🔐 Authentication
- JWT-based Signup & Login
- Secure protected routes

### 🔑 API Key Management
- Generate API keys
- View all keys
- Secure storage

### 🚪 API Gateway
- Proxy external APIs
- API key validation
- Centralized request handling

### 🚫 Rate Limiting (Redis)
- Upstash Redis integration
- Prevents API abuse
- Production-ready scaling

### 📊 Usage Tracking
- Track API calls per key
- Store request logs
- View recent activity

### 💰 Billing System
- Usage-based pricing
- Free tier included
- Dynamic cost calculation

### 💳 Payment Integration
- Razorpay integration
- Secure checkout flow
- Test mode enabled

### 📈 Dashboard
- API usage analytics
- Interactive charts (Recharts)
- Clean UI

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

### Infrastructure
- Redis (Upstash)
- Razorpay

---

## ⚙️ Environment Variables

### Backend (.env)

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
REDIS_URL=your_upstash_url
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
PORT=5000

### Frontend (.env)


VITE_API_URL=http://localhost:5000


---

## 🚀 Installation

### 1️⃣ Clone Repository


git clone https://github.com/your-username/meterflow.git

cd meterflow


---

### 2️⃣ Backend Setup


cd backend
npm install
npm run dev


---

### 3️⃣ Frontend Setup


cd frontend
npm install
npm run dev

---

## 🌍 Deployment

| Service   | Platform       |
|----------|--------------|
| Frontend | Vercel       |
| Backend  | Render       |
| Database | MongoDB Atlas|
| Redis    | Upstash      |

---

## 💡 How It Works

1. User logs in → receives JWT  
2. Generates API key  
3. Calls `/gateway` with API key  
4. Backend:
   - Validates key  
   - Applies rate limit (Redis)  
   - Logs usage  
   - Forwards request  
5. Usage is tracked & billed  
6. Payment via Razorpay  

---

## 📸 Screenshots

### 📊 Dashboard
![Dashboard](./screenshots/Dashboard.png)

### 🔑 API Keys & Usage
![API Keys](./screenshots/dashboard2.png)

### 🔐 Login Page
![Login](./screenshots/login.png)

### 📝 Signup Page
![Signup](./screenshots/signup.png)

---

## 🧠 Learnings

- Built API Gateway architecture  
- Implemented Redis-based rate limiting  
- Integrated payment gateway  
- Designed scalable backend system  

---

## 📌 Future Improvements

- Subscription plans  
- Webhook-based payment verification  
- Advanced analytics dashboard  
- Multi-API support  

---

## 👨‍💻 Author

**Abhishek Pandey**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
