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
    
    fats: [new FatModel({EntryDate: new Date(2014,04, 10), Fat: 22, Water: 67, Muscle: 22}),
    	   new FatModel({EntryDate: new Date(2014,04, 11), Fat: 23, Water: 66, Muscle: 20})
    ],
 
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
    },
    
    clearAll: function(e) {
        // Delete all
        this.get("fats").length = 0;
    }
});