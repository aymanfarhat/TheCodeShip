// Convert all content links into target=_blank
(function () {
    var links = document.querySelectorAll('.entry-content a');

    console.log(links);

    for (var i = 0, length = links.length; i < length; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }
})();
