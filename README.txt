# Task Manager - Full Stack Application

A full-stack task management application built with React and Flask.

## 🚀 Features

- View all tasks with real-time data
- Visual distinction between completed and pending tasks
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Error handling and loading states
- RESTful API backend

## 🛠️ Tech Stack

**Frontend:**
- React 18
- CSS3 (Responsive Design)
- Fetch API

**Backend:**
- Flask 3.0
- Flask-CORS
- Python 3.8+

## 📋 Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

## 🏃 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/Connor-Karr/tc-take-home-task-tracker-connor-karr.git
cd tc-take-home-task-tracker-connor-karr
```

### 2. Start the Backend
```bash
cd flask-server
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```
Backend will run on `http://localhost:8080`

### 3. Start the Frontend
```bash
cd client
npm install
npm start
```
Frontend will open at `http://localhost:3000`

## 📁 Project Structure
```
tc-take-home-task-tracker-connor-karr/
├── flask-server/          # Backend API
│   ├── app.py
│   ├── requirements.txt
│   └── README.md
├── client/                # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   └── TaskList.css
│   │   ├── App.js
│   │   └── App.css
│   └── README.md
└── README.md
```

## 🔌 API Endpoints

### `GET /api/tasks`
Returns all tasks

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Complete project setup",
      "status": "completed"
    }
  ],
  "count": 5
}
```

## 🎨 Design Features

- **Completed Tasks**: Green background with strikethrough text
- **Pending Tasks**: Orange background with normal text
- **Responsive**: Breakpoints at 768px (tablet) and 480px (mobile)
- **Animations**: Slide-in effects and hover transitions
- **Loading States**: Spinner animation during data fetch
- **Error Handling**: Retry button with clear error messages

## 🧪 Testing

### Backend:
```bash
curl http://localhost:8080/api/tasks
```

### Frontend:
1. Open http://localhost:3000
2. Verify tasks load correctly
3. Test responsive design by resizing browser
4. Test error handling by stopping backend
