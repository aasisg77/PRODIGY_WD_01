const navbar = document.getElementById('navbar');

window.addEventListener('scroll',()=>{
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');

  } else{
    navbar.classList.remove('scrolled');
  }
});

const menuLinks= document.querySelectorAll('#navbar ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click',function(){
    menuLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');
  });
});