#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Alex Markovits'
SITENAME = '[wip]'
SITEURL = 'https://wip.ai'

PATH = 'content'

TIMEZONE = 'America/Los_Angeles'

DEFAULT_LANG = 'en'

GITHUB_URL = 'http://github.com/amarkovits-1c/blog'

# Feed generation is usually not desired when developing
FEED_ATOM = 'feed/all.atom.xml'
FEED_RSS = 'feed/all.rss.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

ARTICLE_URL = '{category}/{slug}'
ARTICLE_SAVE_AS = '{category}/{slug}/index.html'
CATEGORY_URL = '{slug}'
CATEGORY_SAVE_AS = '{slug}/index.html'

AUTHOR_URL = 'author/{slug}'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'

AUTHORs_URL = 'authors'
AUTHORs_SAVE_AS = 'authors/index.html'

TAG_URL = 'tag/{slug}'
TAG_SAVE_AS = 'tag/{slug}/index.html'

THEME = './themes/thecodeship'

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

PLUGIN_PATHS = [THEME + "/plugins"]
PLUGINS = ['assets', 'sitemap']

DEFAULT_DATE_FORMAT = ('%B %d, %Y')
DEFAULT_CATEGORY = 'General'

GOOGLE_ADS_SIDEBAR='<strong>the adds will go here</strong>'
GOOGLE_ADS_ARTICLE_BOTTOM='<strong>the adds will go here</strong>'
