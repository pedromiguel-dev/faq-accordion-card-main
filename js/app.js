var acor = document.getElementsByClassName('acordeoes');

    for (let i = 0; i < acor.length; i++){

    acor[i].addEventListener('click', function(){
        this.classList.toggle("active");
        
    })   
}