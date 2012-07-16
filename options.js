// Saves options to localStorage.
function save_options() {
    var eviluser_textbox = document.getElementById("evilusers");
    var evilusers = eviluser_textbox.value.toLowerCase().replace(/\s/g, "");
    localStorage.evilusers = evilusers;
    // Update status to let user know options were saved.
    
       var status = document.getElementById("status");
       status.innerHTML = "Options Saved.";
       setTimeout(function() {
       status.innerHTML = "";
       }, 750);
       
}
// Restores select box state to saved value from localStorage.
function restore_options() {
    document.getElementById('save_button').onclick = save_options;
    var evilusers = localStorage.evilusers;
    if (!evilusers) {
        return;
    }
    document.getElementById("evilusers").value = evilusers;
}

window.onload = restore_options;
