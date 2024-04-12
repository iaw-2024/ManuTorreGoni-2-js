document.addEventListener('DOMContentLoaded', async () => {
  try {
      const response = await fetch('http://localhost:5000/api/elementos');
      const data = await response.json();
      
      const elementosContainer = document.getElementById('elementos-list');

      data.forEach(elemento => {
          const elementoDiv = document.createElement('div');
          elementoDiv.textContent = elemento.Elemento;
          elementosContainer.appendChild(elementoDiv);
      });
  } catch (error) {
      console.error('Error fetching data:', error);
  }
});
