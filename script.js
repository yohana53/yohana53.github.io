// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// ===== CURRENCY CONVERSION =====
const exchangeRate = 2600; // USD → Tanzanian Shilling

// Cache DOM query and format prices once on page load
const formatter = new Intl.NumberFormat('en-TZ', {
  style: 'currency',
  currency: 'TZS',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

document.querySelectorAll(".price").forEach(priceElement => {
  const usd = parseFloat(priceElement.getAttribute("data-price"));
  const tsh = Math.round(usd * exchangeRate);
  priceElement.textContent = formatter.format(tsh);
});
