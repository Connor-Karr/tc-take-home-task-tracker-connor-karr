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
    return {'message': 'Flask API is running', 'status': 'success'}

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    try:
        return jsonify({
            'status': 'success',
            'data': tasks,
            'count': len(tasks)
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        'status': 'error',
        'message': 'Resource not found'
    }), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({
        'status': 'error',
        'message': 'Internal server error'
    }), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)