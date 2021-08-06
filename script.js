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
//     0,1,2,
//     3,4,5,
//     6,7,8,
//     0,4,8,
//     2,4,6,
//     0,3,6,
//     1,4,7,
//     2,5,8
function limpar(){
    while(tabela.length){
        tabela.pop()
    }
    for(i=0; i<=8; i++){
        $('#tag'+i).empty();
    }
}
function verificaVitoria(){
    if(tabela[0] == tabela[1] && tabela[0] == tabela[2] && tabela[0] != null){
        $('#titulo').text('vitoria do '+tabela[0])
        limpar()
    }else  if(tabela[3] == tabela[4] && tabela[3] == tabela[5] && tabela[3] != null){
        $('#titulo').text('vitoria do '+tabela[3])
        limpar()
    }else  if(tabela[6] == tabela[7] && tabela[6] == tabela[8] && tabela[6] != null){
        $('#titulo').text('vitoria do '+tabela[6])
        limpar()
    }else  if(tabela[0] == tabela[4] && tabela[0] == tabela[8] && tabela[0] != null){
        $('#titulo').text('vitoria do '+tabela[0])
        limpar()
    }else  if(tabela[2] == tabela[4] && tabela[2] == tabela[6] && tabela[2] != null){
        $('#titulo').text('vitoria do '+tabela[2])
        limpar()
    }else  if(tabela[0] == tabela[3] && tabela[0] == tabela[6] && tabela[0] != null){
        $('#titulo').text('vitoria do '+tabela[0])
        limpar()
    }else  if(tabela[1] == tabela[4] && tabela[1] == tabela[7] && tabela[1] != null){
        $('#titulo').text('vitoria do '+tabela[1])
        limpar()
    }else  if(tabela[2] == tabela[5] && tabela[2] == tabela[8] && tabela[2] != null){
        $('#titulo').text('vitoria do '+tabela[2])
        limpar()
    }else if (tabela[0] != null && tabela[1] != null && tabela[2] != null && tabela[3] != null && tabela[4] != null && tabela[5] != null && tabela[6] != null && tabela[7] != null && tabela[8] != null){
        $('#titulo').text('VELHA')
        limpar()
    }
}

function jogarTag0(){
    if(tabela[0] == null){
        if(vez){
            $('#tag0').addClass('x')
            tag0.innerHTML = 'X'
            tabela[0] = 'x'
            vez = false      
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag0.appendChild(item)
            tabela[0] = 'O'
            vez = true         
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag1(){
    
    if(tabela[1] == null){
        if(vez){
            $('#tag1').addClass('x')
            tag1.innerHTML = 'X'
            tabela[1] = 'x'
            vez = false
           
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag1.appendChild(item)
            tabela[1] = 'O'
            vez = true    
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag2(){
    if(tabela[2] == null){
        if(vez){
            $('#tag2').addClass('x')
            tag2.innerHTML = 'X'
            tabela[2] = 'x'
            vez = false
            
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag2.appendChild(item)
            tabela[2] = 'O'
            vez = true
             
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }
}
function jogarTag3(){
    if(tabela[3] == null){
        if(vez){
            $('#tag3').addClass('x')
            tag3.innerHTML = 'X'
            tabela[3] = 'x'
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
function jogarTag4(){
    if(tabela[4] == null){
        if(vez){
            $('#tag4').addClass('x')
            tag4.innerHTML = 'X'
            tabela[4] = 'x'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag4.appendChild(item)
            tabela[4] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}
function jogarTag5(){
    if(tabela[5] == null){
        if(vez){
            $('#tag5').addClass('x')
            tag5.innerHTML = 'X'
            tabela[5] = 'x'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag5.appendChild(item)
            tabela[5] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}
function jogarTag6(){
    if(tabela[6] == null){
        if(vez){
            $('#tag6').addClass('x')
            tag6.innerHTML = 'X'
            tabela[6] = 'x'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag6.appendChild(item)
            tabela[6] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}
function jogarTag7(){
    if(tabela[7] == null){
        if(vez){
            $('#tag7').addClass('x')
            tag7.innerHTML = 'X'
            tabela[7] = 'x'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag7.appendChild(item)
            tabela[7] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}
function jogarTag8(){
    if(tabela[8] == null){
        if(vez){
            $('#tag8').addClass('x')
            tag8.innerHTML = 'X'
            tabela[8] = 'x'
            vez = false
        }else{
            let item = document.createElement('div')
            item.className = "circle"
            tag8.appendChild(item)
            tabela[8] = 'O'
            vez = true
           
        }
        verificaVitoria()
    }else{
        alert('Posição Preenchida')
        
    }

}