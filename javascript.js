const inputButton = document.querySelector('.input-button');
const input = document.querySelector('.user-input');




inputButton.textContent = "Shake the Etch A Sketch";



const container = document.querySelector('.container');

const sizeOfGrid = 16;
// making the grid

const createGrid = (amtOfGrids) => {
    for(let i = 0; i < amtOfGrids; i++)
    {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for(let j = 0; j < amtOfGrids; j++)
        {
            const widthAndHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            // This is one way you can create the hover for the mouse or... look below

            /*
            gridBox.addEventListener("mouseenter", () => {    
                gridBox.style.backgroundColor = "black";
            });
            */


            row.appendChild(gridBox);
            
        }

        container.appendChild(row);
        
    }
} 

//createGrid(sizeOfGrid);

// second way you can create the hover method below

inputButton.addEventListener("click", () => {
    createGrid(input.value);


    const allDivs = document.querySelectorAll('.grid-box');
    console.log(allDivs);

    // this is another way to do the hover but it is bad, because you would have to call this function again. 
    allDivs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    });

});





