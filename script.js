// Colore en accent chaque cellule dont le texte est exactement "Yes"
document.querySelectorAll('.comparaison td').forEach(cell => {
  if (cell.textContent.trim() === '✓') {
    cell.classList.add('oui');
  }
});