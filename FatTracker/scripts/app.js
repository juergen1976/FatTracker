(function (global) {
    var mobileSkin = "",
        app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        $("#welcomeDialog").data("kendoMobileModalView").open();
    }, false);

    app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout"});

    app.changeSkin = function (e) {
        if (e.sender.element.text() === "Flat") {
            e.sender.element.text("Native");
            mobileSkin = "flat";
        }
        else {
            e.sender.element.text("Flat");
            mobileSkin = "";
        }

        app.application.skin(mobileSkin);
    };
})(window);

function closeModalViewLogin() {
        $("#welcomeDialog").kendoMobileModalView("close");
    }

function deleteFatEntry(e) {
    debugger;
    var listView = $("#mainListView").kendoMobileListView();
    var item = $(e.target).closest("li");
    var data = listView.dataSource.getByUid(item.data("uid"));
    alert(data.Fat);
}