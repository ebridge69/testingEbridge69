function sah() {
		$("#disable").attr("disabled", "disabled").off('click');
		var x1=$("#div2").hasClass("disabledDiv");
		
		(x1==true)?$("#div2").removeClass("disabledDiv"):$("#disable").addClass("disabledDiv");
  sah1(document.getElementById("div1"));

}

    function sah1(el) {
        try {
            el.disabled = el.disabled ? false : true;
        } catch (E) {}
        if (el.childNodes && el.childNodes.length > 0) {
            for (var x = 0; x < el.childNodes.length; x++) {
                sah1(el.childNodes[x]);
            }
        }
    }