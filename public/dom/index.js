// Este evento se activa cuando el DOM ha sido completamente cargado y analizado
document.addEventListener('DOMContentLoaded', async () => {
  // Obtener el elemento <ul> con el id 'elementos-list' del DOM
  const elementosList = document.getElementById('elementos-list');

  try {
    // Realizar una solicitud HTTP GET para obtener los datos de la API
    const response = await fetch('https://66174e99ed6b8fa434825ed4.mockapi.io/api/datos/elementos');
    // Extraer los datos de la respuesta en formato JSON
    const data = await response.json();
    // Iterar sobre cada elemento en los datos obtenidos
    data.forEach(elemento => {
      // Crear un elemento <li> para cada elemento en los datos
      const liElemento = document.createElement('li');
      // Asignar el texto del elemento <li> con el nombre del elemento
      liElemento.textContent = elemento.Elemento;
      // Agregar el elemento <li> al elemento <ul> en el DOM
      elementosList.appendChild(liElemento);
    });
  } catch (error) {
    // Si ocurre un error durante el proceso, imprimir el mensaje de error en la consola
    console.error('Error al obtener los datos del servidor:', error);
  }
});
