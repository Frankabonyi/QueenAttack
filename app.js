let row1, col1, row2, col2, count = 1, numChecked=0;
const board = document.querySelector('.board');

board.addEventListener('click', (e)=> {
    if(e.target.classList.contains('white')){
        e.target.classList.toggle("checked")
    } else if ( e.target.classList.contains('dark-wood')) {
        e.target.classList.toggle("checked")
    }
})

document.querySelector('.btn-attack').addEventListener('click', ()=>{
    cells = board.getElementsByTagName('*')
    let i,cell
    for(i=0; i<cells.length; ++i){
        cell = cells[i]
        if(cell.classList.contains('checked')){
            numChecked++
            if(count==1){
                row1 = cell.getAttribute('id').toString().split('')[0];
                col1 = cell.getAttribute('id').toString().split('')[1];
                count++;
            }
            if(count==2){
                row2 = cell.getAttribute('id').toString().split('')[0];
                col2 = cell.getAttribute('id').toString().split('')[1];               
            }   
        }
    }
    if(numChecked>2){
        document.querySelector('.result').textContent = 'You can only select two Queens';
        clearQueen();
    }  else{
        checkMatch(row1,col1,row2,col2);
    }    
})

// Checking for Queen Attack
checkMatch = (fr,fc,sr,sc)=>{
   if((row1+col1)===(row2+col2)){
        document.querySelector('.result').textContent = 'Sorry! you have to select two Queens';
        clearQueen();
   }else{
    row1=parseInt(row1); col1=parseInt(col1); row2=parseInt(row2); col2=parseInt(col2);

        if(row1 === row2 || col1 === col2 || (Math.abs(row1+col1) ===  Math.abs(row2+col2)) || (Math.abs(row1-col1) === Math.abs(row2-col2)) ){
            document.querySelector('.result').textContent = 'Queen Can Attack';
            clearQueen();
        }
        else{
            document.querySelector('.result').textContent = 'Sorry! Queen Cannot Attack';
            clearQueen();
        }
   }
  
}

const clearQueen = ()=> {
    
        cells = board.getElementsByTagName('*')
        let i,cell;
        for(i=0; i<cells.length; ++i){
            cell = cells[i]
            if(cell.classList.contains('checked')){
                cell.classList.remove('checked');
                numChecked = 0;
                count =1;
            }           
        }
}












