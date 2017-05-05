// Convert all content links into target=_blank
(function () {
    var links = document.querySelectorAll('.entry-content a');

    for (var i = 0, length = links.length; i < length; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }

    var sideBar = document.getElementsByClassName('sidebar-ad-container'),
        sideBarAdAnchor = sideBar[0];

        var sidebarAdRect = sideBarAdAnchor.getBoundingClientRect(),
            adContainerTop = sidebarAdRect.top + document.body.scrollTop;

    window.addEventListener('scroll', function () {
            bodyScroll = document.body.scrollTop;
        
        if (bodyScroll >= adContainerTop) {
            sideBarAdAnchor.classList.add('stick');
        } else {
            sideBarAdAnchor.classList.remove('stick');
        }
    });
})();
