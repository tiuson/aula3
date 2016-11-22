var map = function(){
	emit(this.text.substring(this.text.length-2,this.text.length),1);
}
var reduce = function(key, values){
	return Array.sum(values);
}
db.Vocabulary.mapReduce(map,reduce,{query:
{
	text:  /((ar)|(er)|(ir)|(or)|(ur))$/
}, out:"resultado"})
