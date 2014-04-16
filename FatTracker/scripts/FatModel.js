var FatModel = kendo.data.Model.define({
        fields: {
            "entryDate": {
                type: "date"
            },
            "fat": {
                type: "number"
            },
            "water": {
                type: "number"
            },
            "muscle": {
                type: "number"
            }
    	}
});


var fatViewModel = kendo.observable({
    
    entryDate: 0,
    fat: 0,
    water: 0,
    muscle: 0,
    
    fats: [],
 
    // add a new fat entry
    create: function(e) {
        // add the items to the array of expenses 
        this.get("fats").push(new FatModel({EntryDate: new Date(), 
                                   Fat: this.get("fat"), 
                                   Water: this.get("water"),
             					  Muscle: this.get("muscle")}));

 		$("#txtFat").blur();
         e.preventDefault();
   },
    
    remove: function(e) {
        var that = this;
        $.each(that.fats, function(idx, fatEntry) {
            if (e.data.uid === fatEntry.uid) {
                that.fats.splice(idx, 1);
                return true;
            }
        });
    }
});