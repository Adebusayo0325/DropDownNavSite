 const menu = document.querySelector('#menu');
  const closeBtn = document.querySelector('#cancel');
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('#head')
  const btn$ = document.querySelector('#head2')
  const ul = document.querySelector('.features');
   const uiIl = document.querySelector('.company');
  const uil = document.querySelector('#ul');
  const marginIncrease = document.querySelector('#topper');

    btn.addEventListener("click", function() {
      
      // ul.style.display = 'block'
      // ul.classList.toggle('active')
 uil.parentNode.classList.toggle('active')
 marginIncrease.classList.toggle('marginChange')
      // alert("workinng")
      

    }) 
    menu.addEventListener("click", function() {
      
    
 nav.classList.add('appear')
menu.style.display ="none"
closeBtn.style.display = "block"
      
      

    }) 

     closeBtn.addEventListener("click", function() {
      menu.style.display ="block"
      
  nav.classList.remove('appear')
  closeBtn.style.display = "none"
       
      

 })
  
    btn$.addEventListener("click", function() {
      
      // ul.style.display = 'block'
      uiIl.classList.toggle('active')
      // alert("workinng")
      

    })
  
