const fs = require('fs');
const f1 = (nome) => {
    const f2 = (erro, conteudo) => {
        if(!erro)
            console.log(conteudo.toString());
        const f3 = (erro, conteudo) => {
            if (!erro)
                console.log(conteudo.toString());
        }
        fs.readFile(nome, f3);
    }
    fs.readFile(nome, f2);
}

f1("arquivo.txt");