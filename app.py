from flask import Flask, render_template, redirect, url_for, Response
import time
import json
from datetime import datetime, date, timedelta

app = Flask(__name__)

@app.route('/')
def index():
    day_label = time.strftime('%a') + ' ' + time.strftime('%x')
    try:
        with open('urls.json', 'r') as f:
            urls = json.load(f)
    except:
        urls = {}
    return render_template('index.html', day_label=day_label, urls=urls)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, port=5000)


"""
Todo:
- Bind 'r' to Reset Button
- Get more YouTube Videos
- News
- Weather
"""
