
A full‑stack web application to explore NASA's **Astronomy Picture of the Day (APOD)**.  
Built with **Spring Boot (Java)** for the backend and **React + Vite** for the frontend.

---
## (Important Info)
  Backend runs at: http://localhost:9090
  Frontend runs at: http://localhost:5173

## ✨ Features
- 📅 Today's APOD — aligned to NASA’s US Eastern Time
- 🖼️ Recent Gallery — browse the latest APODs with caching for performance
- 🔍 Search by Date — view APODs from any specific date
- ⚡ Responsive UI — clean React interface with loading states and gallery grid

---

## 🛠️ Tech Stack
- **Backend**: Spring Boot, REST API, Caffeine Cache
- **Frontend**: React, Vite, Axios
- **API**: NASA APOD API
- **Build Tools**: Maven, Node.js
  
---

## ⚙️ Setup Instructions

### 🔧 Backend (Spring Boot)
1. Install **Java 17+** and **Maven**
2. Set your NASA API key as an environment variable:
   ```bash
   export NASA_API_KEY=your_key_here   # Linux/Mac
   setx NASA_API_KEY "your_key_here"  # Windows
Backend runs at: http://localhost:9090

### Frontend (React + Vite)
1. Install Node.js (LTS)
2. Create a .env file in frontend/:
   VITE_NASA_API_KEY=your_key_here
3. Install dependencies and run:
  npm install
  npm run dev

4. Frontend runs at: http://localhost:5173

### Environment & Secrets
  Backend: application.properties uses ${NASA_API_KEY}
  Frontend: .env uses VITE_NASA_API_KEY
  Both .env and application.properties are ignored in Git for safety
