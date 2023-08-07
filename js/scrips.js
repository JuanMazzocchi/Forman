document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let cambioAservicios=document.getElementById('servicios');
let cambioAsomos=document.getElementById('somos');
let cambioAforman=document.getElementById('forman');
let cambioAporque=document.getElementById('por');
let cambioAcontacto=document.getElementById('contact');


cambioAservicios?.addEventListener('click',()=> cambioDePagina('/servicios.html') );

cambioAsomos?.addEventListener('click',()=>cambioDePagina('/somos.html'));

cambioAforman?.addEventListener('click',()=>cambioDePagina('/index.html'));
 
cambioAporque?.addEventListener('click',()=>cambioDePagina('/index.html#porque'))

cambioAcontacto?.addEventListener('click',()=>cambioDePagina('index.html#formContacto'));

function cambioDePagina(id){
     
    let elemento =document.getElementById('bodyServicios') 
    elemento.style.transition='opacity 1s';
    elemento.style.opacity='0.1';
    setTimeout(() => {
        window.location.href = id;
      }, 900);
};