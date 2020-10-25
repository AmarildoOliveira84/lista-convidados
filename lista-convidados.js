class ListaConvidados{
 constructor(){
     this.contador=0
     this.id=0
 }
    adicionar(){
        this.contador=this.contador+1
let nome = document.getElementById("inputConvidado").value




let div = document.createElement("div")
div.classList.add("item-lista")
div.id="conv"+this.id
 
let span = document.createElement("span")
span.innerText = nome
let img = document.createElement("img")
img.src="img/delete.svg"
img.setAttribute("onclick","lista.excluir('"+div.id+"')")

div.appendChild(span)
div.appendChild(img)

let lista = document.getElementById("lista")
lista.appendChild(div)

let contador = document.getElementById("contador")
contador.innerText = this.contador
this.id=this.id+1

    }
    excluir(id){
 let conv = document.getElementById(id)
 let lista = document.getElementById("lista")
 lista.removeChild(conv)

 this.contador = this.contador-1
 let contador = document.getElementById("contador")
 contador.innerText = this.contador
}
    
}

var lista = new ListaConvidados()