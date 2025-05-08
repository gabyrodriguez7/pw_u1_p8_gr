let contador1=0;
let contador2=0;
function validar(){
    let fila = parseFloat(document.getElementById('id_fila').value);
    let columna = parseFloat(document.getElementById('id_columna').value);
    let unoporuno = document.getElementById('id_1x1');
    let unopordos = document.getElementById('id_1x2');
    let resultado = fila + columna;
    let mod = resultado%2;

    console.log(mod);


    if(mod === 0){
        if(fila === 1){
            if(columna === 1){
                document.getElementById('id_1x1').innerHTML= '<button>0</button>';
                contador1 +=1;
            }else if (columna === 2) {
                document.getElementById('id_1x2').innerHTML= '<button>0</button>';
                contador1 +=1;
            }else if (columna === 3) {
                document.getElementById('id_1x3').innerHTML= '<button>0</button>';
                contador1 +=1;
            }
        }else if(fila === 2){
            if(columna === 1){
                document.getElementById('id_2x1').innerHTML = ('<button>0</button>');
                contador1+=1;
            }else if (columna === 2) {
                document.getElementById('id_2x2').innerHTML=('<button>0</button>');
                contador1+=1;
            }else if (columna === 3) {
                document.getElementById('id_2x3').innerHTML=('<button>0</button>');
                contador1+=1;
            }
        }else if(fila === 3){
            if(columna === 1){
                document.getElementById('id_3x1').innerHTML=('<button>0</button>');
                contador1+=1;
            }else if (columna === 2) {
                document.getElementById('id_3x2').innerHTML=('<button>0</button>');
                contador1+=1;
            }else if (columna === 3) {
                document.getElementById('id_3x3').innerHTML=('<button>0</button>');
                contador1+=1;
            }
        }

    }else {
        if(fila === 1){
            if(columna === 1){
                document.getElementById('id_1x1').innerHTML= '<button>X</button>';
                contador2 +=1;
            }else if (columna === 2) {
                document.getElementById('id_1x2').innerHTML= '<button>X</button>';
                contador2 +=1;
            }else if (columna === 3) {
                document.getElementById('id_1x3').innerHTML= '<button>X</button>';
                contador2 +=1;
            }
        }
        if(fila === 2){
            if(columna === 1){
                document.getElementById('id_2x1').innerHTML=('<button>X</button>');
                contador2 +=1;
            }else if (columna === 2) {
                document.getElementById('id_2x2').innerHTML=('<button>X</button>');
                contador2 +=1;
            }else if (columna === 3) {
                document.getElementById('id_2x3').innerHTML=('<button>X</button>');
                contador2 +=1;
            }
        }
        if(fila === 3){
            if(columna === 1){
                document.getElementById('id_3x1').innerHTML=('<button>X</button>');
                contador2 +=1;
            }else if (columna === 2) {
                document.getElementById('id_3x2').innerHTML=('<button>X</button>');
                contador2 +=1;
            }else if (columna === 3) {
                document.getElementById('id_3x3').innerHTML=('<button>X</button>');
                contador2 +=1;
            }

        }
    }
    console.log('contador1 '+ contador1);
    console.log('contador2 '+ contador2);
    if(contador1 >= 3){
    document.getElementById('id_texto').innerText = 'Felicitaciones';
    }
    if(contador2 >= 3){
    document.getElementById('id_texto').innerText = 'Felicitaciones';
    }


}