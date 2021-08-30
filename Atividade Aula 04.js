let ListaProdutos = []

class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

let prod1 = new Produto(01, "amaciante", 20)
let prod2 = new Produto(02, "banana", 6)
let prod3 = new Produto(03, "chocolate", 5)
let prod4 = new Produto(04, "queijo", 39)

ListaProdutos.push(prod1)
ListaProdutos.push(prod2)
ListaProdutos.push(prod3)


// ---- Funções CRUD ----

function create(produto) {
    ListaProdutos.push(produto)
}

function read(id) {
    for(let produto of ListaProdutos){
        if(produto.id == id) {
            return produto;
        }
    }
}

function update(id, novoNome, novoPreco) {
    for(let produto of ListaProdutos){
        if(produto.id == id) {
            produto.nome = novoNome;
            produto.preco = novoPreco;
        }
    }
}

function deletar(produto){
    ListaProdutos.splice(ListaProdutos.indexOf(produto, 1)); 
}


// Teste
console.log("--- LISTA INICIAL ---")
console.log(ListaProdutos)

//INSERIR (create)
/*
let produto = prod4;
create(produto);
*/
/*
let produto = new Produto(05, "carne", 100);
create(produto);
console.log("--- NOVA LISTA ---")
console.log(ListaProdutos)
*/

// BUSCAR (read)
/*
console.log("--- RESULTADO DA BUSCA ---")
console.log(read(03));
*/

// ATUALIZAR (update)
/*
update(02, "Veja", 25);
console.log("--- NOVA LISTA ---")
console.log(ListaProdutos)
*/

// DELETAR (delete)
/*
let produto = prod3;
deletar(produto);
console.log("--- NOVA LISTA ---")
console.log(ListaProdutos)
*/




