const f = async () => {
    return 1;
};
f()
    .then(res => res)
    .then(res => res + 2)
    .then(res => res % 2 == 1)
    .then(res => console.log(res));