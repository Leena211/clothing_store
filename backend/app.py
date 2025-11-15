from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "Python Backend Working 🚀"}

if __name__ == '__main__':
    app.run(port=5000)
