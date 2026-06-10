
  function setDot(index) {
    document.querySelectorAll('[id^="dot-"]').forEach((d, i) => {
      if (i === index) {
        d.style.background = '#66bb6a';
        d.style.width = '28px';
      } else {
        d.style.background = '#d1d5db';
        d.style.width = '10px';
      }
    });
  }
  function clearDot() { setDot(0); }



  function toggleFaq(el) {
  const item = el.parentElement;
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.faq-icon');
  const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

  
  document.querySelectorAll('.faq-item').forEach(i => {
    i.querySelector('.faq-answer').style.maxHeight = '0px';
    i.querySelector('.faq-icon').style.background = '#e8f5e9';
    i.querySelector('.faq-icon span').style.color = '#66bb6a';
    i.style.borderColor = '#e5e7eb';
    i.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
  });

  
  if (!isOpen) {
    answer.style.maxHeight = '200px';
    icon.style.background = '#66bb6a';
    icon.querySelector('span').style.color = '#ffffff';
    item.style.borderColor = '#66bb6a';
    icon.style.transform = 'rotate(45deg)';
  }
}

document.getElementById('menu-btn').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});
  