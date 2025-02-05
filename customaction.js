function gotowhatsapp(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var Address = document.getElementById("Address").value;
    var Product = document.getElementById("myorder").value;
    var Productname= document.getElementById("Productname").value;
    var ProductImage= document.getElementById("ProductImage").value;
    if(name =="" && phone=="" && email=="" && Address=="" && Product=="" && Productname=="" && ProductImage=="" ){

        alert("Please Enter all details");
    }
    else{
        var url = "mailto:surpriseinside97@gmail.com?subject=Interested To Buy Custom Product&body="
        + "Hello!%0a" +"I Am "
        + name + " And I Am Interested For Custom Order%0a"
        + "Can We Discuss Required Details For My Order.%0aProduct Name:-"+Productname
        +"%0aWhat I Want In My Product:-%0a" + Product +"%0a"
        + "My Details:-%0a"
        + "Phone: " + phone + "%0a"
        + "Email: " + email + "%0a"
        + "Address: " + Address+"%0a"
        + "Image Link: " + ProductImage;


        window.open(url).focus();

    }
}
function gotohome(){
    window.location ="index.html";
}

