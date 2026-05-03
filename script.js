// ── Product Tab Switching ──
function showProd(name, btn) {
  document.querySelectorAll('.prod-detail').forEach(d => d.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('prod-' + name).classList.add('active');
  btn.classList.add('active');
}

// ── Product Image Gallery ──
function setImg(id, url, thumb) {
  document.getElementById(id).src = url;
  thumb.closest('.thumb-row').querySelectorAll('.thumb').forEach(t => t.classList.remove('sel'));
  thumb.classList.add('sel');
}

// ── WhatsApp Enquiry ──
function sendWhatsApp() {
  const name    = document.getElementById('f_name').value.trim();
  const org     = document.getElementById('f_org').value.trim();
  const phone   = document.getElementById('f_phone').value.trim();
  const email   = document.getElementById('f_email').value.trim();
  const product = document.getElementById('f_product').value;
  const msg     = document.getElementById('f_msg').value.trim();

  if (!name)  { alert('Please enter your name.');         return; }
  if (!phone) { alert('Please enter your phone number.'); return; }

  let text = '🔴 *NEW ENQUIRY — GVE / Onlite Industries Website*\n\n';
  text += '👤 *Name:* '         + name    + '\n';
  if (org)     text += '🏢 *Organisation:* ' + org     + '\n';
  text += '📞 *Phone:* '        + phone   + '\n';
  if (email)   text += '📧 *Email:* '        + email   + '\n';
  if (product) text += '📦 *Product:* '      + product + '\n';
  if (msg)     text += '💬 *Message:* '      + msg     + '\n';
  text += '\n_Sent from GVE Website_';

  window.open('https://wa.me/919109089499?text=' + encodeURIComponent(text), '_blank');
}

// ── Scroll Reveal ──
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
