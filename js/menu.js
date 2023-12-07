const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.nav-link-container');
const links = document.querySelectorAll('.nav-link-container .nav-item');
const br = document.querySelectorAll('br');
let _switch = true;

//Event Listeners
EventListener();
function EventListener(){
   //Menu Responsive
   MenuResponsive();

}

//Menu responsive
function MenuResponsive(){
  
  //Btn Menú.
  btnMenu.addEventListener('click', () => {
     if(_switch){
       btnMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <line x1="18" y1="6" x2="6" y2="18" />
       <line x1="6" y1="6" x2="18" y2="18" />
       </svg>`;
       menu.style.display = "flex";
       _switch = false;
     }else{
       _switch = false;
       btnMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <line x1="4" y1="6" x2="20" y2="6" />
       <line x1="4" y1="12" x2="20" y2="12" />
       <line x1="4" y1="18" x2="20" y2="18" />
       </svg>`;
       menu.style.display = "none";
       _switch = true;
     }

  });

  //Link
  if(document.documentElement.scrollWidth <= 978){

    //Menu
    links.forEach(link => {
      link.addEventListener('click', event => {
        btnMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        </svg>`;
        menu.style.display = "none";
        _switch = true;
      });
    });
    
    //Saltos de línea
    br.forEach(lineBreak =>{
      lineBreak.remove();
    });


  }

}

