from datetime import datetime
from time import mktime
import json
import feedparser

def get_img(article):
    try:
        media = article.media_content[0]
        img_url = media.get('url')
    except:
        img_url = ''
    return img_url


def get_urls():
    try:
        with open('urls.json', 'r') as f:
            urls = json.load(f)
    except:
        urls = {}
    return urls

def get_news():
    try:
        with open('feeds.json', 'r') as f:
            feeds = json.load(f)
    except:
        feeds = {}

    news = {}
    for key, rss_url in feeds.items():
        articles = feedparser.parse(rss_url).entries
        news[key] = articles
        for article in articles:
            img_url = get_img(article)
            if img_url:
                article['img'] = img_url
            elif key == 'nyt':
                article['img'] = 'https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png'
    return news
