function show (a,b,action){
    if(action==="add"){
     a+b;
    }
    console.log("hiiiiii");
    if(action==="sub"){
        return a-b;
    }
    if(action==="multi"){
        return a*b;
    }
    if(action==="div"){
        return a/b;
    }
}
console.log(show(2,3, "add"));