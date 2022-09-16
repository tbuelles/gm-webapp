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
- (0 20 * * *): Fetch queries from YouTube API via youtube/scheduler.py. Update urls saved in gm-webapp/urls.json
- (30 20 * * *): Deploy to Heroku. Note that this is localtime (PST).

Todo:
- Cronjob deploy to Heroku
- Get more YouTube Videos
- News
- Weather
- time.strftime is local on Heroku server. Fix.
"""
