var fatViewModel = kendo.observable({
    
    entryDate: null,
    fat: null,
    water: null,
    muscle: null,
    
    fats: [],
 
    // add a new fat entry
    create: function(e) {

        // add the items to the array of expenses 
        this.get("fats").push({EntryDate: new Date(), 
                                   Fat: this.get("fat"), 
                                   Water: this.get("water"),
             					  Muscle: this.get("muscle")});

 $("#txtFat").blur();
            e.preventDefault();
    }
    
});