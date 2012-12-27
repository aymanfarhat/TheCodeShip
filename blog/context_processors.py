from blog.models import Category

# context processor functions
def all_categories(request):
	all_categories = Category.objects.all()
	return {'all_categories':all_categories,}