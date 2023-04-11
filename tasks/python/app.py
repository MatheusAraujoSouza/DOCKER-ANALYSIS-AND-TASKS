from flask import Flask
import random

app = Flask(__name__)

quotes = [
    "Life is like a box of chocolates. You never know what you're gonna get. - Forrest Gump",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt"
]

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/quote')
def random_quote():
    return random.choice(quotes)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')