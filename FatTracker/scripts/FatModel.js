var mobileListViewModel = kendo.observable({
    source: [ "foo", "bar" ],
    newItemValue: "",
    add: function(e) {
        var val = this.get("newItemValue");
        if (val) {
            this.source.push(val);
        }

        $("#listview-new-item").blur();
        e.preventDefault();
    },

    onClick: function(e) {
        kendoConsole.log("event :: click (" + e.item.text() + ")", false, "#mobile-listview-events");
    }
});