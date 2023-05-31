//*Snake App


console.log('Iniciando App..');
console.log('Snake El Juego');


const config = {
    rows:15,
    columns:17
}

//*DOM
const body = document.getElementsByTagName('body')[0];
const squares = document.getElementsByClassName('squares');
const board = document.getElementById('board');


console.log(body);
console.log(squares);
console.log(board);


//*Board

// board.append(square);

for (let i = 1; i <= (config.rows * config.columns); i++) {
    
    const square = document.createElement('div'); // creacion del div dentro del juego
    square.textContent = i;
    square.classList.add("squares");
    board.append(square);
}



let index = 0;
let step;
let oldevent;

const snake = [];

snake[0] = 1; //snake--head
snake[1] = 0; //snake--body

squares[snake[1]].classList.add('snake--body');//posicion 0
squares[snake[0]].classList.add('snake--head'); //posicion 1


body.addEventListener('keyup',(e)=>{
    console.log('keyup');
    console.log(e.key);

    if((oldevent === undefined) ||
    (oldevent === 'ArrowRight' && e.key !== 'ArrowLeft') ||
    (oldevent === 'ArrowLeft' && e.key !== 'ArrowRight') ||
    (oldevent === 'ArrowUp' && e.key !== 'ArrowDown') ||
    (oldevent === 'ArrowDown' && e.key !== 'ArrowUp')) {

     switch (e.key) {
         case 'ArrowRight':
             step = 1;
             break;
         case 'ArrowLeft':
             step = (-1);
             break;
         case 'ArrowUp':
             step = (-config.columns);
             break;
         case 'ArrowDown':
             step = config.columns;
             break;
         default:
             step = 0
             break;
     }

        oldevent = e.key;

        if (squares[snake[0]].classList.contains('snake--head')) {//1
            squares[snake[0]].classList.remove('snake--head');
        }
        if (squares[snake[1]].classList.contains('snake--body')) {//0
            squares[snake[1]].classList.remove( 'snake--body');
        }
        snake[1] = snake[0]; // La posicion que tenia el head se la doy al body
        snake[0] = snake[1] + step; // La posicion del head le sumo lo que calculo el switch

        squares[snake[1]].classList.add('snake--body');
        squares[snake[0]].classList.add('snake--head');
    }

})



//     if (e.key === 'ArrowRight') {
//         console.log('derecha');
//         if (squares[index - 1].classList.contains('snake--body')) {//0
//             console.log('e');
//             squares[index - 1].classList.remove('snake--body');
//         }
//         if (squares[index].classList.contains('snake--head')) {//1
//             console.log('e');
//             squares[index].classList.remove('snake--head');
//         }
//         if (squares[index + 1].classList.contains('snake--body')) {//0
//             console.log('e');
//             squares[index + 1].classList.remove( 'snake--body');
//         }

//         squares[index].classList.add('snake--body');
//         squares[++index].classList.add('snake--head'); 
//     }
       
//     else if(e.key === 'ArrowLeft') {
//         console.log('derecha');
//         if (squares[index - 1].classList.contains('snake--body')) {//0
//             console.log('e');
//             squares[index - 1].classList.remove('snake--body');
//         }
//         if (squares[index].classList.contains('snake--head')) {//1
//             console.log('e');
//             squares[index].classList.remove('snake--head');
//         }
//         if (squares[index + 1].classList.contains('snake--body')) {//0
//             console.log('e');
//             squares[index + 1].classList.remove('snake--body');
//         }

//         squares[index].classList.add('snake--body');
//         squares[--index].classList.add('snake--head'); 
//     }

// })
