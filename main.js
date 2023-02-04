let selectedLi =document.querySelectorAll('.container .card .selection ul li');
// console.log(selectedLi);
selectedLi.forEach(li => {
  li.onclick= function(){
    selectedLi.forEach(li2 => {
      li2.classList.remove('active');
    });
    li.classList.toggle('active');
  }
});

let submit =document.querySelector('.container .card .button input');
submit.onclick=()=>{
  let flag = false ;
  selectedLi.forEach(li2 => {
    if(li2.classList.contains('active')){
      flag=true ;
    }     
  });
  if(flag){
    let selected =document.querySelector('.container .card .selection ul li.active');
    // console.log(selected) ;
    document.querySelector('.selection span').innerHTML = selected.innerHTML ;
    let cardshow =document.querySelector('.container .card.show');
    cardshow.style.display='none' ;
    let cardhidden =document.querySelector('.container .card.hidden');
    cardhidden.style.display='flex'
  }else{
    // console.log("no one selected") ;
  }
}

