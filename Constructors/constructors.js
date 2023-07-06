class parentClass{
    constructor(){
        console.log("Hi");
    }

    
}
//console.log(new parentClass());
class child extends parentClass{
    constructor(){
       console.log(super())
        console.log("i am a child")
    }
}

var c1=new child()
console.log(c1)