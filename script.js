document.querySelectorAll('.card').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(btn.textContent + ' 선택됨');
  });
});