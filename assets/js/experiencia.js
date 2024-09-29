document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll('.timeline-item'); // Selecciona todos los años
  const timelineContent = document.querySelector('.timeline-content'); // Selecciona el contenedor de la línea de tiempo
  let activeYear = null; // Almacena el año activo actualmente
  
  // Función para manejar la selección del año basado en la posición del scroll
  const handleScroll = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 2; // Calcula la posición de scroll centrada

      // Recorremos cada item del timeline para determinar cuál está visible
      timelineItems.forEach((item) => {
          const itemTop = item.offsetTop;
          const itemHeight = item.offsetHeight;
          
          // Si el centro de la pantalla está dentro del rango del año, lo seleccionamos
          if (scrollPosition >= itemTop && scrollPosition < itemTop + itemHeight) {
              setActiveYear(item.getAttribute('data-year'));
          }
      });
  };

  // Función para cambiar el año activo
  const setActiveYear = (year) => {
      if (activeYear !== year) {
          activeYear = year;
          
          // Remueve la clase 'seleccionado' de todos los años
          timelineItems.forEach(item => {
              item.classList.remove('seleccionado');
          });
          
          // Añade la clase 'seleccionado' al año correspondiente
          const activeItem = document.querySelector(`.timeline-item[data-year="${year}"]`);
          if (activeItem) {
              activeItem.classList.add('seleccionado');
          }
      }
  };

  // Función para manejar el clic en un año
  timelineItems.forEach(item => {
      item.addEventListener('click', (e) => {
          e.preventDefault();
          const year = item.getAttribute('data-year');
          setActiveYear(year);

          // Hace scroll suave hasta el año correspondiente
          window.scrollTo({
              top: item.offsetTop - window.innerHeight / 2 + item.offsetHeight / 2,
              behavior: 'smooth'
          });
      });
  });

  // Maneja el scroll del documento
  window.addEventListener('scroll', handleScroll);

  // Inicializa la primera selección basada en la posición inicial del scroll
  handleScroll();
});
