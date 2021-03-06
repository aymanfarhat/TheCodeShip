let utils = {
  hasClass: (elem, className) => {
      return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  },
  addClass: (elem, className) => {
      if (!utils.hasClass(elem, className)) {
          elem.className += ' ' + className;
      }
  },
  removeClass: (elem, className) => {
      var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';

      if (utils.hasClass(elem, className)) {
          while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
              newClass = newClass.replace(' ' + className + ' ', ' ');
          }

          elem.className = newClass.replace(/^\s+|\s+$/g, '');
      }
  }
};

(function () {

    // Convert all content links into target=_blank
    var links = document.querySelectorAll('.entry-content a');

    for (var i = 0, length = links.length; i < length; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }

    // Side menu toggle
    var menuOpenIcon = document.getElementById('js-mtoggle-open-icon');
    var menuCloseIcon = document.getElementById('js-mtoggle-close-icon');
    var mToggleButton = document.getElementById('js-mtoggle');
    var sideMenu = document.getElementById('js-side-menu');
    var menuIsOpen = false;

    mToggleButton.addEventListener('click', function() {
      if (menuIsOpen) {
        utils.removeClass(sideMenu, 'side-menu__open');
        utils.addClass(menuCloseIcon, 'hidden');
        utils.removeClass(menuOpenIcon, 'hidden');

        menuIsOpen = false;
      } else {
        utils.addClass(sideMenu, 'side-menu__open');
        utils.addClass(menuOpenIcon, 'hidden');
        utils.removeClass(menuCloseIcon, 'hidden');

        menuIsOpen = true;
      }
    });

    const offlineBanner = document.getElementById('js-offline-banner');
    const refreshBtn = document.getElementById('js-refresh-btn');

    function handleNetworkChange(event) {
      if (navigator.onLine) {
        utils.removeClass(offlineBanner, 'offline-status--hidden');
      } else {
        utils.addClass(offlineBanner, 'offline-status--hidden')
      }
    }

    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);

    refreshBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.location.reload(true);
    });
})();

window.addEventListener("load", () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log(err));
  }
  else {
    console.warn('Service Worker not supported in this browser');
  }
});
