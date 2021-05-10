function validateForm() {
    var a = document.getElementById("email");
    var b = document.getElementById("pwd");
    

    // Single Selection
    if (a.value == "" && b.value == ""){
    	alert("The field with red field cannot be blank");
    	a.style.border = "3px solid red";
    	b.style.border = "3px solid red";
    	return false;
    }

    if (a.value == ""){
        alert("The field with red field cannot be blank");
        a.focus();
        a.style.border = "3px solid red";
        return false;
    }

    if (b.value == ""){
        alert("The field with red field cannot be blank");
        b.focus();
        b.style.border = "3px solid red";
        return false;
    }

  
    if(b.value.length < 8){
    	alert("password must be at least 8 characters");
    	b.focus();
    	b.style.border = "3px solid red";
    	return false;
    }
    else{
        return true;
    }
}