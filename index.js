let cats = ["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat(name){
    cats.push(name)
 }
 function destructivelyPrependCat(name){
    cats.unshift(name)
 }
 function destructivelyRemoveLastCat(name){
    cats.pop(name)
 }
 function destructivelyRemoveFirstCat(name){
    cats.shift(name)
 }
 function appendCat(name){
    let newcat=[...cats];
    newcat.push(name)
    return newcat 
 }
 function prependCat(name){
    let newcat=[...cats];
    newcat.unshift(name)
    return newcat
 }
 function removeLastCat(name){
    let newcat=[...cats];
    newcat.pop(name)
    return newcat 
}
function removeFirstCat(name){
    let newcat=[...cats];
    newcat.shift(name)
    return newcat 
}