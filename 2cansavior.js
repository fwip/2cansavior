/* Returns a boolean of whether the post should be filtered */
function shouldFilter(avatar, content){
    /* Filter on blocked users */
    var i;
    if (! evilusers){
        return false;
    }
    for (i=0; i<evilusers.length;i++){
        var username = "/users/"+evilusers[i].toLowerCase();
        if (avatar.innerHTML.indexOf(username) !== -1){
            return true;
        }
    }
}
// Retrieve list of blocked users
var evilusers;
chrome.extension.sendMessage({greeting: "getusers"}, function(response) {
    evilusers=response.users;

    /* Main */
    var posts = $("div").filter(function() {
        return ($(this).css('border-bottom-left-radius') === '8px' );
    });
    var i;
    for (i=2; i<posts.length;i+=3){
        var outer = posts[i];
        var avatar = posts[i+1];
        var content = posts[i+2];
        if (shouldFilter(avatar, content)){
            content.innerHTML = "Message redacted.";
        }
    }
});
