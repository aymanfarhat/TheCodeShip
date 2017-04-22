Title: Javascript URL Object
Date: 2013-05-20 11:00
Slug: javascript-url-object
Category: Web Development 
Summary: I've been doing some operations on URLs in Javascript where I needed to extract different parts from a string URL, such as the domain, port, and most importantly the parameter values. I really wished there was some function which takes a string URL and breaks it down into an ...
Tags: javascript, parameters, urls, parsing

I've been doing some operations on URLs in Javascript where I needed to extract different parts from a string URL, such as the domain, port, and most importantly the parameter values. I really wished there was some function which takes a string URL and breaks it down into an object of accessible properties automatically. What I particularly wanted in such a data structure is to have easy access to the URL's parameter values as key value pairs and store a parameters multiple values automatically into an array too.

So I ended up writing my own function for generating such a structure for a string URL. In this implementation, there are 3 optional parameters:

- The URL string, if not supplied the value defaults to the current window's location.
- An unescape option to remove any escaping(for example space escape) from the parameter values, is true by default.
- A convert to number option, for converting any numeric values in the parameters from string to int or float, it true by default.
Getting most of the URL values was done through a nice trick which is to add a hyperlink element to the DOM and theN access the values via the hyperlink object by calling its generated attributes, namely: protocol, hostname, port, hash, pathname, and search. Calling the search attribute of the URL would return a string of the parameters part of the URL, from there the job was to parse that string and its values and generate a set of key(parameter name) value(parameter value) pairs representing it. Here is the full implementation:

 
```javascript
function urlObject(options) {
    "use strict";
    /*global window, document*/

    var url_search_arr,
        option_key,
        i,
        urlObj,
        get_param,
        key,
        val,
        url_query,
        url_get_params = {},
        a = document.createElement('a'),
        default_options = {
            'url': window.location.href,
            'unescape': true,
            'convert_num': true
        };

    if (typeof options !== "object") {
        options = default_options;
    } else {
        for (option_key in default_options) {
            if (default_options.hasOwnProperty(option_key)) {
                if (options[option_key] === undefined) {
                    options[option_key] = default_options[option_key];
                }
            }
        }
    }

    a.href = options.url;
    url_query = a.search.substring(1);
    url_search_arr = url_query.split('&');

    if (url_search_arr[0].length > 1) {
        for (i = 0; i < url_search_arr.length; i += 1) {
            get_param = url_search_arr[i].split("=");

            if (options.unescape) {
                key = decodeURI(get_param[0]);
                val = decodeURI(get_param[1]);
            } else {
                key = get_param[0];
                val = get_param[1];
            }

            if (options.convert_num) {
                if (val.match(/^\d+$/)) {
                    val = parseInt(val, 10);
                } else if (val.match(/^\d+\.\d+$/)) {
                    val = parseFloat(val);
                }
            }

            if (url_get_params[key] === undefined) {
                url_get_params[key] = val;
            } else if (typeof url_get_params[key] === "string") {
                url_get_params[key] = [url_get_params[key], val];
            } else {
                url_get_params[key].push(val);
            }

            get_param = [];
        }
    }

    urlObj = {
        protocol: a.protocol,
        hostname: a.hostname,
        host: a.host,
        port: a.port,
        hash: a.hash.substr(1),
        pathname: a.pathname,
        search: a.search,
        parameters: url_get_params
    };

    return urlObj;
}
```

And here is sample usage with a sample output:
 
```
urlObject({'url':'http://localhost.test?name=ayman&age=22&gpa=3.5&course=programming&course=mathematics&course=algorithms'});
  

 

{
  "protocol": "http:",
  "hostname": "localhost.test",
  "host": "localhost.test",
  "port": "",
  "hash": "",
  "pathname": "/",
  "search": "?name=ayman&age=22&gpa=3.5&course=programming&course=mathematics&course=algorithms",
  "parameters": {
  "name": "ayman",
  "age": 22,
  "gpa": 3.5,
  "course": [
     "programming",
     "mathematics",
     "algorithms"]
  }
}
```  

The code is also available as a Gist here.

I hope that you find this code snippet helpful in your work, would love to hear any suggestions and comments from your side about the code too. Have a good day!

Update (Jan 12, 2014)
I just updated the code above with a refactored and unit tested version of the old function. Fixed some bugs and style problems. The code conforms to Third Edition of the ECMAScript Programming Language Standard via JSLint. The gist is up to date and it is also available on JSFiddle for testing.

