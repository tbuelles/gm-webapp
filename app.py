from flask import Flask, render_template, redirect, url_for, Response
from newsparse import get_news, get_urls

app = Flask(__name__)

@app.route('/')
def index():
    urls = get_urls()
    news = get_news()
    return render_template('index.html', urls=urls, news=news)

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False, port=5000)
"""
Cron:
- (0 20 * * *): Fetch queries from YouTube API via youtube/scheduler.py. Update urls saved in gm-webapp/urls.json
- (30 20 * * *): Deploy to Heroku. Note that this is localtime (PST).

Todo:
- Fix Daily Show
- Stopwatch Background
"""
