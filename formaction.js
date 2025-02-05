function gotowhatsapp(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var Address = document.getElementById("Address").value;
    var Product = document.getElementById("Product").value;
    var SubProduct = document.getElementById("SubProduct").value;
    if(name =="" && phone=="" && email=="" && Address=="" && Product=="" && SubProduct==""){

        alert("Please Enter all details");
    }
    else{
        var url = "mailto:surpriseinside97@gmail.com?subject=Interested To Buy Your Product&body="
        + "Hello!%0a" +"I Am "
        + name + " And I Am Interested To Buy Your Product%0a"
        + "Please Tell Me Required Details For " + SubProduct +"%0a"
        + "My Details:-%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Address: " + Address ;

        window.open(url).focus();

    }
}
function gotohome(){
    window.location ="index.html";
}

