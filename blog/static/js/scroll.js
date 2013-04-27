/*
* TheCodeShip version 2
* Copyright 2013, Ayman Farhat
* www.thecodeship.com
* Free to use under the GNU General Public License 3
* http://www.gnu.org/copyleft/gpl.html
*/
  
  /* Infinite ajax scrolling and back to top scrolling */
  var pageNum = 1;
  ivar hasNextPage;
  var baseUrl = location.href;

  $(document).ready(function()
  {
  	hasNextPage = ($('ul.postlist').data('numpages') > 1)
    $(window).bind('scroll',loadOnScroll);
    $('#scrollTop').bind('click',scrollUp);
  });

  /* Detect end of page scroll */
  var loadOnScroll = function()
  {
    if ($(window).scrollTop() >= ($(document).height() - $(window).innerHeight()))
    {
      $(window).unbind('scroll',loadOnScroll);
      loadItems();
    }
  }

  /* Get posts in JSON format, build html list code and append it to end */
  var loadItems = function()
  {
    if(hasNextPage === true)
    {
      pageNum++;
      
	  var url = baseUrl+'?page='+pageNum;

      $.ajax({
        url:url,
        beforeSend:function()
        {
          $('.spinner').css('display','block');
        },
        success:function(data)
        {
		  dataObj = jQuery.parseJSON(data);
		  hasNextPage = dataObj.hasNext;
          $(".postlist").append(buildHtml(dataObj));
        },
        complete:function(data)
        {
          $('.spinner').css('display','none');
          $(window).bind('scroll',loadOnScroll);
		},
      });
    }
  }

  /* Glues the data in JSON to an html string for appending it later */
  function buildHtml(data)
  {
    var post_html = '';
    var posts = data.itemList;
	var template = $('#post_template').html();

    for(var i in posts)
	{
		var tags_html = '';
		var post = posts[i];
		var taglist = post.tags;

		for(var k in taglist)
			tags_html += '<li><a href="{0}">{1}</a></li>'.format(taglist[k].url,taglist[k].name);
		
		tags_html += '<div class="clear"></div>';

		var article_html = template
						 .replace(/\$created/g,post.created)
						 .replace(/\$abs_url/g,post.url)
						 .replace(/\$title/g,post.title)
						 .replace(/\$content/g,post.excerpt)
						 .replace(/\$tags/g,tags_html);
		
		post_html += "<li>"+article_html+"</li>";
	}
    return post_html;
  }

  /* String.format for building strings */
  String.prototype.format = function() 
  {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) 
    {
      return typeof args[number] != 'undefined'? args[number]:match;
    });
  };

  /* Scrolls the window upward slowly */
  var scrollUp = function()
  {
    $('html, body').animate({scrollTop:0}, 'slow');
  }
