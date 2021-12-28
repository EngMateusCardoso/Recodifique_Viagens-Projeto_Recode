function exibir_estes(tipo){
    let Destinos = document.getElementsByClassName('card');
    if ( tipo == 'Todos'){
        for (var i = 0; i < Destinos.length; i++){
            Destinos[i].style = "display: block; width: 175px;"
        }
    }else{
        for (var i = 0; i < Destinos.length; i++){
            if ( tipo == Destinos[i].id)
                Destinos[i].style = "display: block; width: 175px;"
            else
                Destinos[i].style = "display: none; width: 175px;"
        }
    }
}

function editarmodal(nome){
    let destino = document.getElementById('Modal_local');
    destino.innerHTML = nome;
}