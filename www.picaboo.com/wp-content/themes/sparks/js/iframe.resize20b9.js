$(document).ready(function () {
	//utility to detect if it is iOS
	function iOS() {
		return [
		  'iPad Simulator',
		  'iPhone Simulator',
		  'iPod Simulator',
		  'iPad',
		  'iPhone',
		  'iPod'
		].includes(navigator.platform)
		// iPad on iOS 13 detection
		|| (navigator.userAgent.includes("Mac"))
	  }

	  $("#mlslider-iframe").on('load', function () {
			var iframe = document.getElementById("mlslider-iframe"); 
			 //iframe.width = iframe.contentWindow.document.body.scrollWidth; 
			var height = 0;
			if (iOS()){
				height = iframe.contentDocument.documentElement.offsetHeight;							
			}
			else{
				height = iframe.contentWindow.document.body.scrollHeight;
			}
			iframe.height =  height;
		});
	
	if (!iOS()){
		window.onresize = function() 
		{ 
			var iframe = document.getElementById("mlslider-iframe"); 
			//iframe.width = iframe.contentWindow.document.body.scrollWidth; 
			//console.log(iframe.width);
			var height = 0;
// 			if (iOS()){
// 				height = iframe.contentDocument.documentElement.offsetHeight;
// 			}
// 			else{
// 				height = iframe.contentWindow.document.body.scrollHeight;
// 			}
			height = iframe.contentWindow.document.body.scrollHeight;
			iframe.height = height;
			var iframeJqueryObj = $("#mlslider-iframe");
			iframeJqueryObj.removeClass("iFrame-ml-slider");
		}  
	}         
});