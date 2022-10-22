$(document).ready(function() {
$('#first_form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var password = $('#password').val();
	 var email = $('#email').val();
	 var phone = $('#phone').val();
 
    $(".error").remove();
    if (first_name.length < 2) {
      $('#first_name').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
        $('#last_name').after('<span class="error">This field is required</span>');
    }
	 if (password.length <4 || password.length>8) {
         $('#password').after('<span class="error">password should be between 4 to 8 characters</span>');
    }
	       if (email.length < 1) {
                $('#email').after('<span class="error">This field is required</span>');
            } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
              $('#email').after('<span class="error">Enter a valid email</span>');
            }
			if (phone.length < 1) {
                $('#phone').after('<span class="error">This field is required</span>');
            }else if (phone.length != 11) {
                $('#phone').after('<span class="error">Enter a valid phone number with 11 digits</span>');
            } else if (/^\d+$/.test(phone) == false) {
              $('#phone').after('<span class="error">Enter a valid phone number</span>');
            }
			if($(".error").length === 0){
				alert("Submitted successully!")
			}
  
   });
});

 
