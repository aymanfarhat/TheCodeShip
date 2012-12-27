from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import ListView, DetailView

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$','blog.views.index', name='home'),
    url(r'^tag/(?P<tagslug>[-\w]+)/$','blog.views.showtag',name='showtag'),
    url(r'^(?P<slug>[-\w]+)/$','blog.views.showcategory',name='showcategory'),
    url(r'^(?P<catslug>[-\w]+)/(?P<postslug>[-\w]+)/$','blog.views.showpost',name='showpost'),
    url(r'^tinymce/', include('tinymce.urls')),
)