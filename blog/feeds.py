from django.contrib.syndication.views import Feed
from django.core.urlresolvers import reverse
from blog.models import Post
from django.utils import text, html

class LatestPostsFeed(Feed):
	title="Latest Posts"
	link="feeds"
	description="Latest 10 blog posts on TheCodeShip"

	def get_object(self,request,*args,**kwargs):
		if kwargs['count'] is None:
			kwargs['count']=10
		return kwargs['count']

	def items(self,count):
		print count
		return Post.objects.order_by('-created')[:count]

	def item_title(self,item):
		return item.title

	def item_description(self,item):
		return text.truncate_html_words(item.content,50)

	def item_link(self,item):
		return item.get_absolute_url()