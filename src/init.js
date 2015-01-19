(function () {
		alert("content script is running");
		var nb = new nicebook();
		nb.init(function(){
			alert("setup complete");
		});
})();