document.getElementById('income').addEventListener('input', function() {
    document.getElementById('income-value').textContent = this.value + 'K';
  });