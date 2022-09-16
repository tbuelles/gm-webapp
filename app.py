from flask import Flask, render_template, redirect, url_for, Response
import time
import json
from datetime import datetime, date, timedelta
from youtube_api import tagesschau
from apscheduler.schedulers.background import BackgroundScheduler
tagesschau_url = ''

scheduler = BackgroundScheduler()
scheduler.add_job(func=tagesschau, trigger='cron', hour='20', minute='00')
scheduler.start()

app = Flask(__name__)

@app.route('/')
def index():
    day_label = time.strftime('%a') + ' ' + time.strftime('%x')
    try:
        with open('urls.json', 'r') as f:
            urls = json.load(f)
    except:
        urls = {}
    url = urls.get('tagesschau')
    return render_template('index.html', day_label=day_label, url=url)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, port=5000)


"""
Todo:
- Bind 'r' to Reset Button
- Get more YouTube Videos
- News
- Weather
"""
