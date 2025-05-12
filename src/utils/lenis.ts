import Lenis from '@studio-freight/lenis';

export function initializeLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1.2,
    touchMultiplier: 2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Manejo de las cards con Lenis
  const cards = document.querySelectorAll('.hover-reveal-card');
  
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      lenis.stop();
    });

    card.addEventListener('mouseleave', () => {
      lenis.start();
    });
  });

  return lenis;
}