from django.conf.urls import patterns, include, url
from django.contrib import admin
from blog.views import IndexView,CategoryView,TagsView,ShowPost
from blog.feeds import LatestPostsFeed

admin.autodiscover()

urlpatterns = patterns('',
	url(r'^feed/latest/?(?P<count>[0-9]+)?/$',LatestPostsFeed(),name="feed"),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$',IndexView.as_view(), name='home'),
    url(r'^tag/(?P<tagslug>[-\w]+)/$',TagsView.as_view(),name='showtag'),
    url(r'^(?P<slug>[-\w]+)/$',CategoryView.as_view(),name='showcategory'),
    url(r'^(?P<catslug>[-\w]+)/(?P<postslug>[-\w]+)/$',ShowPost.as_view(),name='showpost'),
    url(r'^tinymce/', include('tinymce.urls')),
)