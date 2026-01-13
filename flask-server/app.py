from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory task data
tasks = [
    {
        'id': 1,
        'title': 'Complete project setup',
        'status': 'completed'
    },
    {
        'id': 2,
        'title': 'Implement backend API',
        'status': 'completed'
    },
    {
        'id': 3,
        'title': 'Build frontend UI',
        'status': 'pending'
    },
    {
        'id': 4,
        'title': 'Write documentation',
        'status': 'pending'
    },
    {
        'id': 5,
        'title': 'Deploy application',
        'status': 'pending'
    }
]

@app.route('/')
def home():
    return {'message': 'Flask API is running'}

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

if __name__ == '__main__':
    app.run(debug=True, port=8080)