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

var viewModel = kendo.observable({

    // the expenses array will hold the grid values
    expenses: [],

    // type array populates the drop down
    type: [
        { name: "Food", value: "food"}, 
        { name: "Merchant", value: "merchant"}, 
        { name: "Bills", value: "bills" }
    ],

    // expenseType holds the currently selected value of the dropdown list
    expenseType: "food", 

    // the values are bound to the merchant and amount fields
    merchant: null,
    amount: null,

    // event to execute on click of add button
    create: function(e) {

        // add the items to the array of expenses 
        this.get("expenses").push({Type: this.get("expenseType"), 
                                   Merchant: this.get("merchant"), 
                                   Amount: this.get("amount")});

        // reset the form 
        this.set("expenseType", "food");
        this.set("merchant", "");
        this.set("amount", "");
    }
});