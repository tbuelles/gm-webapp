from flask import Flask, render_template, redirect, url_for, Response
import time
from datetime import datetime, date, timedelta
app = Flask(__name__)

@app.route('/')
def index():
    day_label = str(date.today())
    title = 'tagesschau 20:00 Uhr, 12.09.2022'
    url = 'https://www.youtube.com/embed/yQuv1kIN7Io?'
    # title, url = tagesschau()
    return render_template('index.html', **locals())

if __name__ == "__main__":
    app.run(debug=True, port=5001)


"""
Todo:
- Bind Enter to Start/Stop
- Toggle Stopwatch
- Get more YouTube videos
"""
