async function f(){
    return 1;
}

async function teste (){
    const r = await f();
    console.log(r);
    f().then(res => console.log(res));
    r.then(res => console.log(res));
}
teste();