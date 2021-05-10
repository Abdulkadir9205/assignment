function validateForm() {
    var a = document.getElementById("email");
    var b = document.getElementById("pwd");
    var c = document.getElementById("username");
    var d = document.getElementById("cpwd");
    var e = document.getElementById("firstname");
    var f = document.getElementById("lastname");
    var g = document.getElementById("phone");
    var gender = document.getElementById("gender");
    

    // Single Selection
    if (a.value == "" || b.value == "" || c.value =="" || d.value == "" || e.value == "" || f.value =="" || g.value == "" ){
    	alert("The fields with red field cannot be blank");
    	a.style.border = "3px solid red";
    	b.style.border = "3px solid red";
    	c.style.border = "3px solid red";
    	d.style.border = "3px solid red";
    	e.style.border = "3px solid red";
    	f.style.border = "3px solid red";
    	g.style.border = "3px solid red";
    	// h.style.border = "3px solid red";
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

    if (c.value == ""){
        alert("The field with red field cannot be blank");
        c.focus();
        c.style.border = "3px solid red";
        return false;
    }

    if (d.value == ""){
        alert("The field with red field cannot be blank");
        d.focus();
        d.style.border = "3px solid red";
        return false;
    }
    
    if (d.value != b.value){
        alert("your password does not match");
        d.focus();
        d.style.border = "3px solid red";
        return false;
    }

    if (e.value == ""){
        alert("The field with red field cannot be blank");
        e.focus();
        e.style.border = "3px solid red";
        return false;
    }

    if (f.value == ""){
        alert("The field with red field cannot be blank");
        f.focus();
        f.style.border = "3px solid red";
        return false;
    }

    if (g.value == ""){
        alert("The field with red field cannot be blank");
        g.focus();
        g.style.border = "3px solid red";
        return false;
    }

 //    if(document.form.gender.selectedIndex === 0){
	// 	alert ( "Please select city!");
	// 	gender.style.border = "3px solid red";
	// 	return false;
	// }

	if(gender.value === "null"){
		alert ( "Please select gender");
		gender.style.border = "3px solid red";
		return false;
	}

	if(gender.value === "male"){
		
		return true;
	}

	if(gender.value === "female"){
		
		return true;
	}

	if(gender.value === "other"){
		
		return true;
	}

	var sel = document.getElementById("gender");
	//get the selected option
	var selectedText = sel.options[sel.selectedIndex].text;
	alert("You have selected : "+selectedText);
	//return true;
  
    if(b.value.length < 8){
    	alert("please enter at least 8 characters");
    	b.focus();
    	b.style.border = "3px solid red";
    	return false;
    }
    
    if(b.value !== d.value ){
    	alert("either of the password are incorrect");
    	b.focus();
    	b.style.border = "3px solid red";
    	c.style.border = "3px solid red";
    	return false;
    }
}