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
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.testimonial__video');
  if (!box) return;
  const video = box.querySelector('.video__media');
  const playBtn = box.querySelector('.play');
  const shade = box.querySelector('.video__shade');

  function sync() {
    const playing = !!(video.currentTime > 0 && !video.paused && !video.ended);
    if (playBtn) playBtn.style.display = playing ? 'none' : 'block';
    if (shade) shade.style.opacity = playing ? '0' : '1';
  }

  playBtn?.addEventListener('click', () => {
    video.muted = false;
    video.play();
    sync();
  });

  video.addEventListener('play',  sync);
  video.addEventListener('pause', sync);
  video.addEventListener('ended', sync);
});