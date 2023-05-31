/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Agregar clase show-menu a nav menu
       nav.classList.toggle('show-menu')
       // Agregar show-icon para mostrar y ocultar el icono del menú
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')

// 1. Selecionar cada dropdown item
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    // 2. Selecionar cada click del botón
    dropdownButton.addEventListener('click', () =>{
        // 7. Seleccionar la clase show-dropdown actual
        const showDropdown = document.querySelector('.show-dropdown')
        
        // 5. Llamar a la funcion toggleItem
        toggleItem(item)

        // 8. Remover la clase show-dropdown de otros items
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})

// 3. Crear una función para mostrar el dropdown
const toggleItem = (item) =>{
    // 3.1. Selecionar cada dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. Si el mismo item contiene la clase show-dropdown, remover
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        // 4. Agregar el height maximo al dropdown content y agregar la clase show-dropdown
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')

// Función para eliminar estilos desplegables en modo móvil cuando el navegador cambia de tamaño
const removeStyle = () =>{
    // Validar si la media query llega a 1118px
    if(mediaQuery.matches){
        // Removemos el estilo de height de dropdown container
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        // Removemos la clase show-dropdown de dropdown item
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)

/*=============== SLIDER ===============*/
(function() {
  var $slides = document.querySelectorAll('.slide');
  var $controls = document.querySelectorAll('.slider__control');
  var numOfSlides = $slides.length;
  var slidingAT = 1300; // sync this with scss variable
  var slidingBlocked = false;

  [].slice.call($slides).forEach(function($el, index) {
    var i = index + 1;
    $el.classList.add('slide-' + i);
    $el.dataset.slide = i;
  });

  [].slice.call($controls).forEach(function($el) {
    $el.addEventListener('click', controlClickHandler);
  });

  function controlClickHandler() {
    if (slidingBlocked) return;
    slidingBlocked = true;

    var $control = this;
    var isRight = $control.classList.contains('m--right');
    var $curActive = document.querySelector('.slide.s--active');
    var index = +$curActive.dataset.slide;
    (isRight) ? index++ : index--;
    if (index < 1) index = numOfSlides;
    if (index > numOfSlides) index = 1;
    var $newActive = document.querySelector('.slide-' + index);

    $control.classList.add('a--rotation');
    $curActive.classList.remove('s--active', 's--active-prev');
    document.querySelector('.slide.s--prev').classList.remove('s--prev');
    
    $newActive.classList.add('s--active');
    if (!isRight) $newActive.classList.add('s--active-prev');
    

    var prevIndex = index - 1;
    if (prevIndex < 1) prevIndex = numOfSlides;

    document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

    setTimeout(function() {
      $control.classList.remove('a--rotation');
      slidingBlocked = false;
    }, slidingAT*0.75);
  };
}());