const sibtn =document.querySelector('#sibtn');

sibtn.addEventListener('click',function() {
    alert('Sabia que dirias que si,al final Soy un papucho')
});
const nobnt = document.querySelector('#nobnt');
nobnt.addEventListener('mouseover', function(){
    const randdomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobnt.style.setProperty('top',randomY+'%');
    nobnt.style.setProperty('left',randdomX+'%');
    nobnt.style.setProperty('transform',`translate(-${randdomX}%,-${randomY}%)`);
})
