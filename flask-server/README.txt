# Task API Backend

## Setup
1. Create virtual environment: `python -m venv venv`
2. Activate virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`
3. Install dependencies: `pip install -r requirements.txt`

## Run
```bash
python app.py
```

Server will run on http://localhost:8080

## API Endpoints

### GET /api/tasks
Returns a list of all tasks.

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

## Testing
Test the API with curl:
```bash
curl http://localhost:8080/api/tasks
```