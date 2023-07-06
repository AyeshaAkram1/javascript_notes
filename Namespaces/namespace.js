var namespace1={
    u:2,
    Number:function(){
        console.log("This is first namespace number");
    }
}

var namespace2={
    v:3,
    Number:function(){
        console.log("this is second namespace number");
    }
}

namespace1.Number();
namespace2.Number();