from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from django.core.urlresolvers import reverse
from tinymce.models import HTMLField

class Post(models.Model):
	title = models.CharField(max_length=100,unique=True)
	slug = models.SlugField(max_length=100,unique=True)
	content = HTMLField()
	created = models.DateTimeField(db_index=True)
	tags = TaggableManager(blank=True)
	meta_desc = models.CharField(max_length=150,blank=True)
	author = models.ForeignKey(User)
	category = models.ForeignKey('blog.Category')

	def __unicode__(self):
		return "%s" % self.title

	def get_absolute_url(self):
		return reverse('blog.views.showpost',args=[str(self.category.slug),str(self.slug)])

class Category(models.Model):
	name = models.CharField(max_length=100,unique=True)
	slug = models.SlugField(unique=True)
	description = models.TextField()
	parent = models.ForeignKey('self',null=True,blank=True)

	class Meta:
		verbose_name_plural = "Categories"

	def __unicode__(self):
		return "%s" % self.name

	def get_absolute_url(self):
		return reverse('blog.views.showcategory',args=[str(self.slug)])

	def countposts(self):
		return len(Post.objects.filter(category__name=self.name))