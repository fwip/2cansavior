chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "getusers"){
            var evilusers = localStorage.evilusers;
            if (evilusers){
                evilusers = evilusers.split(',');
            }
                sendResponse({users: evilusers});
        }
    }
    );
