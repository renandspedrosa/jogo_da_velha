let jogadorO
let jogadorX
let vez = false
let tag0 = window.document.getElementById('tag0')
let tag1 = window.document.getElementById('tag1')
let tag2 = window.document.getElementById('tag2')
let tag3 = window.document.getElementById('tag3')
let tag4 = window.document.getElementById('tag4')
let tag5 = window.document.getElementById('tag5')
let tag6 = window.document.getElementById('tag6')
let tag7 = window.document.getElementById('tag7')
let tag8 = window.document.getElementById('tag8')

var tabela = []
var vitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    /*
    0,1,2,
    3,4,5,
    6,7,8,
    0,4,8,
    2,4,6,
    0,3,6,
    1,4,7,
    2,5,8
    */
]
function verificaVitoria(){
    for(var a=0; a<=8; a++){
        if(vitoria[a][0] == vitoria[a][1] && vitoria[a][0] == vitoria[a][2]){
            let campeao = document.getElementById('campeao')
            
            
        } 
    }
}


function adiciona_O_NoArray(n){
    for(var a = 0; a<=8; a++){
        for(var b = 0; b<=8; b++){
            if(vitoria[a][b] == n ){
                vitoria[a][b] = 'O'
            }
        }
    }    
}


function jogarTag0(){
    
    if(tabela[0] == null){
        if(vez){
            tag0.innerHTML = 'X'
       
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag0.appendChild(item)
            tabela[0] = 'O'
            adiciona_O_NoArray(0)
            verificaVitoria()       
        }
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag1(){
    
    if(tabela[1] == null){
        if(vez){
            tag1.innerHTML = 'X'
          
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag1.appendChild(item)
            tabela[1] = 'O'
            adiciona_O_NoArray(1)
            verificaVitoria()    
        }
        
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag2(){
    if(tabela[2] == null){
        if(vez){
            tag2.innerHTML = 'X'
       
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag2.appendChild(item)
            tabela[2] = 'O'
            adiciona_O_NoArray(2)
            verificaVitoria()    
       
        }
        
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag3(){
    if(tabela[3] == null){
        if(vez){
            tag3.innerHTML = 'X'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag3.appendChild(item)
            tabela[3] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}

