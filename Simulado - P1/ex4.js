const valores = [1,2,3,4,5];

const res = valores.reduce((ac, v) => {
    return v % 2 == 1 ? ac + v : ac;
});
console.log(res);