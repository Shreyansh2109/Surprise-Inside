// mail option
function mailme(){
    window.location ="form.html";
}
function mailmeco(){
    window.location ="custom.html";
}
function wpme(){
    window.location= href="mailmailto:surpriseinside97@gmail.com?subject=Interested To Buy Your Product&body="
}


// return policy
function poppolicy() {
    var confirmation = confirm("There Is No Return Policy!!! For More Details Contact Us");
    if (confirmation) {
        window.location.href = window.location.href;
    }
}

// welcome Message
function showAlert() {
    var overlay = document.getElementById('overlay');
    var alertBox = document.getElementById('alertBox');
    overlay.style.display = 'flex';
    alertBox.style.display = 'block';
}

function closeAlert() {
    var overlay = document.getElementById('overlay');
    var alertBox = document.getElementById('alertBox');
    overlay.style.display = 'none';
    alertBox.style.display = 'none';
}
