function main(){
    console.log('A');
    setTimeout(
      function exec1(){ 
        console.log('B'); 
    }
    , 2000);
    setTimeout(
        function exec2(){
            console.log("C")
        }
        ,1000
    )
   // runWhileLoopForNSeconds(3);
   someFunction();
    console.log('D');
  }
  main();
//   function runWhileLoopForNSeconds(sec){
//     let start = Date.now(), now = start;
//     while (now - start < (sec*1000)) {
//       now = Date.now();
//     }
//   }
function someFunction(){
    console.log("Bye bye");
}