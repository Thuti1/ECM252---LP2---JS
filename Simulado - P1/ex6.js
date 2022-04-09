function f1(){
    console.log('f1');
}
function f2(f){
    console.log('f2');
    f();
}
function f3(f){
    f();
    console.log('f3');
    return function(){
        console.log('f4');
    }
}
f2(f1);
f3(f1)();