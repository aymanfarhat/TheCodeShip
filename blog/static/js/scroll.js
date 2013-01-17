  /* Javascript for the infinite ajax scrolling and back to top scrolling */
  var pageNum = 1;
  var hasNextPage = true;
  var baseUrl = location.href;

  /* Detect end of page scroll */
  var loadOnScroll = function()
  {
    if ($(window).scrollTop() >= ($(document).height() - $(window).innerHeight()))
    {
      $(window).unbind();
      loadItems();
    }
  }

  /* Get posts in JSON format, build html list code and append it to end */
  var loadItems = function()
  {
    if (hasNextPage == false)
      return false;

    else
    {
      pageNum++;
      var url = baseUrl+'?page='+pageNum;

      $.ajax({
        url:url,
        dataType:'json',
        beforeSend:function()
        {
          $('.spinner').css('display','block');
        },
        success:function(data)
        {
          $(".postlist").append(buildHtml(data));
          hasNextPage = data.hasNext;
        },
        complete:function(data)
        {
          $('.spinner').css('display','none');
          $(window).bind('scroll',loadOnScroll);
        }
      });
    }
  }

  /* Glues the data in JSON to an html string for appending it later */
  function buildHtml(data)
  {
    var html = '';
    var posts = data.itemList;

    for(var i = 0; i < posts.length; i++)
      html += '<li><article><header><time datetime="{0}" pubdate>{0}</time><h1><a href="{1}" rel="bookmark" title="{2}">{2}</a></h1></header><p>{3}</p><p><a href="{1}" class="more-link">Read more &#9660;</a></p></article></li>'.format(posts[i].created,posts[i].url,posts[i].title,posts[i].excerpt);
    
    return html;
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

  /* Show scroll to top button after the user scrolls */
  var showScrollToTop = function()
  {
    if($(window).scrollTop() > 300)
      $('#scrollTop').css('display','block');
  }

  /* Scrolls the window upward slowly */
  var scrollUp = function()
  {
    $('html, body').animate({scrollTop:0}, 'slow');
  }