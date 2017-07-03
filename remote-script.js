! function() {
    "use strict";
    var a = window.editDeskArticle = {
        version: "{1.0}",
        init: function() {
            var currentUrl = window.location.href;
            if(currentUrl.startsWith('http://support.august.com/customer/en/portal/articles/')) {
                var currentArticleIdentifier = currentUrl.replace('http://support.august.com/customer/en/portal/articles/', '');
                currentArticleIdentifier = currentArticleIdentifier.split(/[?#]/)[0];
                var destinationUrl = 'https://august.desk.com/admin/content-management/articles/' + currentArticleIdentifier + '/edit';
                window.open(destinationUrl,'_blank');
            } else if(currentUrl.startsWith('http://support.august.com/customer/portal/articles/')) {
                var currentArticleIdentifier = currentUrl.replace('http://support.august.com/customer/portal/articles/', '');
                currentArticleIdentifier = currentArticleIdentifier.split(/[?#]/)[0];
                var destinationUrl = 'https://august.desk.com/admin/content-management/articles/' + currentArticleIdentifier + '/edit';
                window.open(destinationUrl,'_blank');
            } else {
                console.log('Not gonna work on this site!');
            }
        }
    }
}();