document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
      const rating = this.getAttribute('data-value');
  
      // Remove seleção anterior
      document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
  
      // Aplicar seleção às estrelas
      this.classList.add('selected');
      let previousSibling = this.previousElementSibling;
      while (previousSibling) {
        previousSibling.classList.add('selected');
        previousSibling = previousSibling.previousElementSibling;
      }
  
      // Atualizar valor da avaliação
      document.getElementById('rating-value').innerText = `Avaliação: ${rating} estrelas`;
    });
  });
  