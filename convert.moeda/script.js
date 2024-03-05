let quantia = parseFloat(document.querySelector('#quantia').value)
let opcion01 = document.querySelector('#de')
let opcion02 = document.querySelector('#para')

let res = document.querySelector('.resul-p')

function clicou(){
    if(quantia.length == 0 || Number(quantia) < 0){
        alert('valor invalido')
    } else {
        let real = 1
        let dolar = 4.95
        let euro = 5.37
        let btic = 331826.12
        let valor = Number(quantia)

        let n = ''
        let n1 = quantia * n

        switch(opcion01.value){
            case '0':

                break
            case '1':

                break
            case '2':

                break
            case '3':

                break
        }

        switch(opcion02.value){
            case '4':

                break
            case '5':

                break
            case '6':
 
                break
            case '7':

                break
        }
    }
}