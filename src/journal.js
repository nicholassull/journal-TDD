export default function Journal(textArray, title) {
  this.textArray = textArray;
  this.title = title;
}

Journal.prototype.numberWords = function(){
  return this.textArray.length + 1;
}