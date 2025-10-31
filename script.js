// Simple accordion
document.querySelectorAll('.accordion__toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const panel = btn.parentElement.querySelector('.accordion__panel');
    const open = panel.style.display === 'block';
    document.querySelectorAll('.accordion__panel').forEach(p=>p.style.display='none');
    if(!open){ panel.style.display='block'; }
  });
});
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('footer-subscribe');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = form.querySelector('input[name="email"]').value.trim();
      if(!email){ return; }
      alert('Thanks! We will reach out at ' + email);
      form.reset();
    });
  });