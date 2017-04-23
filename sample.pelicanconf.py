#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Ayman Farhat'
SITENAME = 'The Code Ship'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Asia/Beirut'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
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

PLUGIN_PATHS = [THEME + "/plugins"]
PLUGINS = ['assets']

DEFAULT_DATE_FORMAT = ('%B %d, %Y')
DEFAULT_CATEGORY = 'General'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
