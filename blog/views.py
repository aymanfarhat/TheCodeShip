from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.views.generic.simple import direct_to_template
from blog.models import Post
from blog.context_processors import all_categories
from django.template import RequestContext
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator, EmptyPage, InvalidPage

def index(request):	
	allposts = Post.objects.order_by('created')
	paginator = Paginator(allposts,5)
	page = paginator.page(1)
	return direct_to_template(request,'postlist.html',{'posts':page.object_list,'page':page})

def showpost(request,catslug,postslug):
	post = get_object_or_404(Post.objects.filter(category__slug=catslug,slug=postslug))
	return direct_to_template(request,"post.html",{'post':post})

def showcategory(request,slug):
	categposts = Post.objects.filter(category__slug=slug).order_by('created');
	return direct_to_template(request,"postlist.html",{"posts":categposts})

def showtag(request,tagslug):
	posts_with_tag = Post.objects.filter(tags__name__in=[tagslug]).order_by('created')
	return direct_to_template(request,"postlist.html",{"posts":posts_with_tag})