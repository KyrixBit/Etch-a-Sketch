const container = document.querySelector('.major-grid')

const button = document.querySelector('.grid-number')
button.addEventListener('click', () =>{
    container.innerHTML = '';
    let userpromptrows = prompt("How many rows you want? Max is 10")
    let userpromptcolumns = prompt("How many columns you want? Max is 10")


    for (let i = 0; i < Number(userpromptrows); i++) {
        const row = document.createElement('div');
        row.classList.add('row');

            for (let j = 0; j < Number(userpromptcolumns); j++) {
                const square = document.createElement('div');
                square.classList.add('square');

                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'black';
                });

                row.append(square);
            }
        container.append(row);
    }
})
