// Minimal JS: nav toggle, year injection, and contact form handling
document.addEventListener('DOMContentLoaded',function(){
  // year
  var y = new Date().getFullYear();
  var yearEls = document.querySelectorAll('#year');
  yearEls.forEach(function(el){el.textContent = y});

  // nav toggle
  var btn = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      var isHidden = nav.style.display === 'none' || getComputedStyle(nav).display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
    });
  }

  // contact form
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var status = document.getElementById('form-status');
      var data = new FormData(form);
      var name = data.get('name')||'';
      var email = data.get('email')||'';
      var message = data.get('message')||'';
      if(!name || !email || !message){
        status.textContent = 'Please complete all fields.';
        return;
      }
      // For GitHub Pages without a backend, instruct user how to wire a form endpoint.
      status.textContent = 'Message ready to send. To enable form submissions, connect a form service (Formspree, Netlify Forms) or provide a server endpoint.';
      form.reset();
    });
  }
});
