from django.contrib.syndication.views import Feed
from django.core.urlresolvers import reverse
from blog.models import Post
from django.utils import text, html

class LatestPostsFeed(Feed):
	title="Latest Posts"
	link="feeds"
	description="Latest 10 blog posts on TheCodeShip"

	def items(self):
		return Post.objects.order_by('-created')[:10]

	def item_title(self,item):
		return item.title

	def item_description(self,item):
		return text.truncate_html_words(item.content,50)

	def item_link(self,item):
		return item.get_absolute_url()