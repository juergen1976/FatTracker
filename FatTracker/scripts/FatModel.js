var fatViewModel = kendo.observable({
    
    entryDate: 0,
    fat: 0,
    water: 0,
    muscle: 0,
    
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
   },
    
    remove: function(fatEntry) {
        
    }
});