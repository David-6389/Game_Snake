//*Snake App


console.log('Iniciando App..');
console.log('Snake El Juego');

//*DOM
const body = document.getElementsByTagName('body')[0];
const squares = document.getElementsByClassName('squares');
const board = document.getElementById('board');


console.log(body);
console.log(squares);
console.log(board);
// console.log(squares.item(0));
// console.log(squares[0]);
// squares[index].classList.toggle('snake--body');
// squares[index + 1].classList.toggle('snake--head');    

index=0;
squares[index].classList.add('snake--body');//posicion 0
squares[++index].classList.add('snake--head'); //posicion 1


body.addEventListener('keyup',(e)=>{
    console.log('keyup');
    console.log(e.key);
    if (e.key === 'ArrowRight') {
        console.log('derecha');
        if (squares[index - 1].classList.contains('snake--body')) {//0
            console.log('e');
            squares[index - 1].classList.remove('snake--body');
        }
        if (squares[index].classList.contains('snake--head')) {//1
            console.log('e');
            squares[index].classList.remove('snake--head');
        }
        if (squares[index + 1].classList.contains('snake--body')) {//0
            console.log('e');
            squares[index + 1].classList.remove('snake--body');
        }

        squares[index].classList.add('snake--body');
        squares[++index].classList.add('snake--head'); 
    }

    //! codifica la funcionalidad de movimiento hace la izquierda 
})
