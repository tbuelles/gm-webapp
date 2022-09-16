from flask import Flask, render_template, redirect, url_for, Response
import json

app = Flask(__name__)

@app.route('/')
def index():
    try:
        with open('urls.json', 'r') as f:
            urls = json.load(f)
    except:
        urls = {}
    return render_template('index.html', urls=urls)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, port=5000)


"""
Cron:
- Fetch queries from YouTube API via youtube/scheduler.py
- Updated urls saved in in urls.json as key:url
Todo:
- Cronjob deploy to Heroku
- Get more YouTube Videos
- News
- Weather
- time.strftime is local on Heroku server. Fix.
"""
