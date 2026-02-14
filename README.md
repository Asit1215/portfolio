# Johar Chat - Real-Time Mobile Chat Application

A full-stack real-time chat application built with React Native (Expo), Node.js, Express, MongoDB, and Socket.IO.

## Features

- **User Registration & Login** - Email and password authentication
- **JWT Authentication** - Secure token-based auth
- **User Profile** - Name and avatar display
- **User List** - Browse all registered users
- **One-to-One Real-Time Chat** - Instant messaging via Socket.IO
- **Message Timestamps** - When messages were sent
- **Read Status** - Message read indicators (✓✓)
- **Online/Offline Status** - See who's online in real-time
- **Persistent Messages** - All chats stored in MongoDB
- **Clean Mobile UI** - Modern dark theme, responsive design

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React Native, Expo |
| Navigation | React Navigation |
| HTTP Client | Axios |
| Real-time | Socket.IO Client |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose) |
| Real-time Server | Socket.IO |
| Auth | JWT, bcryptjs |

## Project Structure

```
Johar/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── config/         # Database config
│   │   ├── middleware/     # Auth middleware
│   │   ├── models/         # User, Message schemas
│   │   ├── routes/         # Auth, Users API
│   │   └── socket/         # Socket.IO handlers
│   └── package.json
├── mobile/                  # React Native (Expo) app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # API configuration
│   │   ├── context/        # Auth, Socket providers
│   │   ├── navigation/     # App navigator
│   │   ├── screens/        # Login, Register, Home, Chat
│   │   ├── services/       # API client
│   │   └── theme/          # Colors, styles
│   └── package.json
└── README.md
```

## Prerequisites

- **Node.js** 18+ 
- **MongoDB** (local or Atlas)
- **Expo CLI** (`npm install -g expo-cli`) or use `npx expo`
- **Expo Go** app on your phone (for physical device testing)

## Step-by-Step Setup

### 1. Clone/Navigate to Project

```bash
cd Johar
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
copy .env.example .env    # Windows
# cp .env.example .env   # Mac/Linux

# Edit .env with your settings:
# - MONGODB_URI (e.g., mongodb://localhost:27017/johar-chat)
# - JWT_SECRET (use a strong random string)
# - PORT (default: 5000)
```

### 3. Start MongoDB

Make sure MongoDB is running locally, or use MongoDB Atlas and update `MONGODB_URI` in `.env`.

### 4. Start Backend Server

```bash
# From backend folder
npm run dev
```

Server runs at `http://localhost:5000`. You should see:
```
MongoDB Connected: localhost
Server running on port 5000
```

### 5. Mobile App Setup

```bash
# Open new terminal, from project root
cd mobile

# Install dependencies
npm install

# (Optional) Generate proper app icons/splash
node scripts/create-assets.js
```

### 6. Configure API URL for Your Device

Edit `mobile/src/config/api.js`:

- **Android Emulator**: Use `10.0.2.2` (already set)
- **iOS Simulator**: Use `localhost` (already set)
- **Physical Device**: Set `DEVELOPMENT_IP` to your computer's local IP (e.g., `192.168.1.100`)

Find your IP:
- Windows: `ipconfig` → IPv4 Address
- Mac/Linux: `ifconfig` or `ip addr`

### 7. Start Mobile App

```bash
# From mobile folder
npx expo start
```

Then:
- Press **a** for Android emulator
- Press **i** for iOS simulator  
- Scan QR code with **Expo Go** on physical device

## API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register user | No |
| POST | `/api/auth/login` | Login | No |
| GET | `/api/auth/me` | Get current user | Yes |
| GET | `/api/users` | List all users | Yes |
| GET | `/api/users/:id` | Get user by ID | Yes |
| PUT | `/api/users/profile` | Update profile | Yes |
| GET | `/api/users/:userId/messages` | Get chat history | Yes |

## Socket.IO Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `message:send` | Client → Server | Send new message |
| `message:sent` | Server → Client | Message sent confirmation |
| `message:received` | Server → Client | New message from another user |
| `message:read` | Both | Mark message as read |
| `typing:start` | Client → Server | User started typing |
| `typing:stop` | Client → Server | User stopped typing |
| `user:online` | Server → Client | User came online |
| `user:offline` | Server → Client | User went offline |

## MongoDB Schemas

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  isOnline: Boolean,
  lastSeen: Date
}
```

### Message
```javascript
{
  sender: ObjectId (ref: User),
  receiver: ObjectId (ref: User),
  content: String,
  read: Boolean,
  readAt: Date,
  createdAt: Date
}
```

## Troubleshooting

**"Network request failed"**  
- Ensure backend is running on port 5000  
- For physical device: Use computer's local IP in `mobile/src/config/api.js`  
- Check firewall allows connections on port 5000  

**"Authentication required"**  
- Token may have expired - try logging in again  

**MongoDB connection error**  
- Verify MongoDB is running  
- Check `MONGODB_URI` in `.env`  

**Expo app won't start**  
- Run `npm install` in mobile folder  
- Clear cache: `npx expo start -c`  

## License

ISC
