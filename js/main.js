// main.js - simple helpers for header/footer and year
document.addEventListener('DOMContentLoaded', function(){
  var years = document.querySelectorAll('#year,#year2,#year3,#year4,#year5');
  var y = new Date().getFullYear();
  years.forEach(function(el){ if(el) el.textContent = y; });
});
function openModal(){document.getElementById('flightModal').classList.remove('hidden')}
function closeModal(){document.getElementById('flightModal').classList.add('hidden')}
