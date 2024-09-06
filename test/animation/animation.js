const infoBlock = document.querySelector('.info-block');

infoBlock.addEventListener('mouseover', () => {
  infoBlock.classList.add('show');
});

infoBlock.addEventListener('mouseout', () => {
  infoBlock.classList.remove('show');
});