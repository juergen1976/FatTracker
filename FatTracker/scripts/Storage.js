function saveAll() {
  _.each(fatViewModel, function(fatModel) {
      var modelJSON = FatModel.toJSON();
      
      // save per key
      localStorage.setItem(modelJSON.EntryDate, modelJSON);
  });  
}

function loadAll() {
    
}

function deleteAll() {
    
}