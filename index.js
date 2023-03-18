// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(name){
         cats.push(name);
}
    function destructivelyPrependCat(name){
        cats.unshift(name);
    }
    function destructivelyRemoveLastCat(){
        cats.pop();
    }
    function destructivelyRemoveFirstCat(){
        cats.shift();
    }
    function appendCat(name){
        let cat=cats.slice();
        cat.push(name);
        return cat;
    }
    function prependCat(name){
        let cat=cats.slice();
        cat.unshift(name)
        return cat;
    }
    function removeLastCat(){
        let cat=cats.slice();
        cat.pop();
        return cat;
    }
    function removeFirstCat(){
        let cat=cats.slice();
        cat.shift();
        return cat;
    }
  
  