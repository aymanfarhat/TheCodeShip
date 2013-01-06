from django.http import HttpResponse
from blog.models import Post
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, InvalidPage
from django.views.generic import ListView,DetailView

class ListPosts(ListView):
	context_object_name="posts"
	paginate_by = 5
	allow_empty = True
	
	def get_template_names(self):
		if self.request.is_ajax():
			return ['json/postlist.json']
		else:
			return ['postlist.html']

class IndexView(ListPosts):
	queryset = Post.objects.order_by('created')

class CategoryView(ListPosts):
	#def get(self,request,*args,**kwargs):
		#return HttpResponse(request.GET.get('page'))

	def get_queryset(self):
		return Post.objects.filter(category__slug=self.kwargs['slug']).order_by('created')

class TagsView(ListPosts):
	def get_queryset(self):
		return Post.objects.filter(tags__name__in=[self.kwargs['tagslug']]).order_by('created')

class ShowPost(DetailView):
	template_name="post.html"
	context_object_name='post'

	def get_object(self):
		return get_object_or_404(Post.objects.filter(category__slug=self.kwargs['catslug'],slug=self.kwargs['postslug']))