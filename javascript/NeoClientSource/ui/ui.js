pemilu.ui.ready = function () {

    window.controllerUKM = new pemilu.controllerUKM();
	controllerUKM = window.controllerUKM;

    pemilu.ui.rivets.bind();
    pemilu.ui.rivets.setup();
    pemilu.ui.bind();

	controllerUKM.setUKMList("{}",view);
}

/* Function to bind the element with handler */
pemilu.ui.bind = function ()
{
    $("#test").bind("click", function(){
        $("#test-click").show();
    });

}