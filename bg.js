chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "getusers"){
            sendResponse({users: localStorage.evilusers});
        }
    }
    );
