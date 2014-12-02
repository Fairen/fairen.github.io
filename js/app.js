$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: '040c7bae0c1644a48dddd7b318dfc786',
        accessToken : '190514654.467ede5.e24ab0c9f0874be4953cdd6087492270',
        target: 'instafeed',
        get: 'user',
        userId: 190514654,
        links: true,
        limit: 4,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
 
});