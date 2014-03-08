pemilu.ui.ready = function () {

    window.controller = new pemilu.controller();
	controller = window.controller;

    pemilu.ui.rivets.bind();
    pemilu.ui.rivets.setup();
    pemilu.ui.bind();

	controller.setReportList("{}",view);
}

/* Function to bind the element with handler */
pemilu.ui.bind = function ()
{
    

}