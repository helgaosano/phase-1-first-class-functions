function receivesAFunction(callback){
    callback();
}
let function1 = function(){
    return '';
}
function returnsANamedFunction(){
    return function1;
}

function returnsAnAnonymousFunction(){
    return ()=> "Anonymous function";
}