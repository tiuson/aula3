var map = function() {  
    var summary = this.text;
    if (summary) { 
        summary = summary.split(""); 
        for (var i = summary.length - 1; i >= 0; i--) {
            if (summary[i])  {      
               emit(summary[i], 1); 
            }
        }
    }
};
var reduce = function( key, values ) {    
    return Array.sum(values);
}
db.Vocabulary.mapReduce(map,reduce,{out:"resultado3"})
