import './style.css'

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
const navLinks = document.querySelector('#navLinks');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Reveal Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-text, .reveal-text-delay, .reveal-fade-up, .reveal-fade-up-delay, .product-card').forEach(el => {
  observer.observe(el);
});

// ==========================================
// Product Gallery Logic
// ==========================================
// Needs to be globally accessible for HTML onclick events
(window as any).changeImage = (productId: string, src: string) => {
  // Update Main Image
  const mainImg = document.getElementById(`img-${productId}-main`) as HTMLImageElement;
  if (mainImg) {
    mainImg.style.opacity = '0.5'; // Fade out effect
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 200);
  }

  // Update Active Thumb Class
  // Find the clicked thumb by matching src (simplest way without passing element refs)
  const productCard = document.getElementById(`product-${productId}`);
  if (productCard) {
    const thumbs = productCard.querySelectorAll('.gallery-thumb');
    thumbs.forEach((thumb: any) => {
      if (thumb.src === src) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }
};

// ==========================================
// Video Modal Logic
// ==========================================
(window as any).openVideo = (videoId: string) => {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('youtubeFrame') as HTMLIFrameElement;
  if (modal && iframe) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add('active');
  }
};

(window as any).closeVideo = () => {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('youtubeFrame') as HTMLIFrameElement;
  if (modal && iframe) {
    modal.classList.remove('active');
    iframe.src = ''; // Stop video
  }
};
