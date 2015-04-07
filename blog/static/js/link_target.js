/*
* TheCodeShip version 2
* Copyright 2013, Ayman Farhat
* www.thecodeship.com
* Free to use under the GNU General Public License 3
* http://www.gnu.org/copyleft/gpl.html
*/

/**
* Sets all the hyperlinks inside a certain container 
* to target _blank if not target is set
**/

function hyperlinkTargetBlank(container) {
    if (typeof container != 'undefined') {
    
        var links = container.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            if (!links[i].target &&
                links[i].hostname !== window.location.hostname) {
                links[i].target = '_blank'; 
            }
        }
    }
}

$(document).ready(function () {
    var body = document.getElementsByClassName("post");
    hyperlinkTargetBlank(body[0]);
});
