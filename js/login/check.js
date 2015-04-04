// JavaScript Document
if(!window.localStorage.getItem('ctrl4c'))
{
	window.localStorage.clear();
	window.location='index.html';
}

$(document).on("click","#logoutUser",function(){
   var URL = "http://automation.ctrl4c.com/mobileapi/index.php/mobilelogin/";
	if(window.confirm('Do you want to logout'))
	{
		if(window.localStorage.getItem('ctrl4c'))
		{
			$.ajax({
			   type: "POST",
			   url: URL+'changetologout',
			   contentType: "application/x-www-form-urlencoded; charset=utf-8",
			   dataType: "json",
			   data: {key: localStorage.getItem('ctrl4c') },
			   crossDomain: true,
			   cache: false,
			   success: function(data) {
				   obj = JSON.parse(data);
				  // alert(obj.result);
				   if (obj && obj.result === true) {
					
				window.localStorage.clear();
			    	window.location='index.html';
				   }
			   },
			   error: function(e) {
				   alert('Error: ' + e.message);
			   }
	   });
			
			
		}	
	}
});
