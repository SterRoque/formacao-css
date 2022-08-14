const container = document.querySelector('.container');
const btnNao = container.querySelector('.eu');
const resposta = container.querySelector('.resul');

function rand(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
btnNao.addEventListener('mouseover', () => {
    let positionX = rand(-200, 200);
    let positionY = rand(-200, 200);

    console.log(`X: ${positionX}, Y: ${positionY}`);

    btnNao.style.transform = `translate(${positionX}px, ${positionY}px)`;
    
});
btnNao.addEventListener('click', ()=> {
    resposta.innerHTML = 'AEEEE ME PEGOUUUU!!'
})


