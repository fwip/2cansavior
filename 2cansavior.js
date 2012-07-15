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
    var i;
    var rows = document.getElementsByTagName('tr');
    for (i=0; i<rows.length;i++){
        var tds = rows[i].getElementsByTagName('td');
        var avatar = tds[0];
        var content = tds[1];
        if (shouldFilter(avatar, content)){
            content.innerHTML = "Message redacted.";
        }
    }
});
