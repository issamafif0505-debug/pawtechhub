import './style.css';

// ==========================================
// PawTechHub — Main JavaScript
// ==========================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href')!);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('active');
    }
  });
});

// Ebook form handler
const ebookForm = document.getElementById('ebookForm') as HTMLFormElement;
ebookForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = (ebookForm.querySelector('input[type="email"]') as HTMLInputElement)?.value;
  if (email) {
    alert(`🎉 Thank you! Your free guide will be sent to ${email}. Check your inbox!`);
    ebookForm.reset();
  }
});

// FAQ accordion (for ebook landing page)
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item?.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
    if (!isActive) {
      item?.classList.add('active');
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.product-card, .article-card, .feature-card, .review-card').forEach(el => {
  el.classList.add('animate-on-scroll');
  observer.observe(el);
});

// Add animate-on-scroll CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
