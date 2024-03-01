window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    const filledHeight = (scrollProgress / 100) * progressBar.height;
    progressBar.style.filter = `grayscale(${100 - scrollProgress}%)`;
    progressBar.style.clipPath = `inset(${100 - scrollProgress}% 0 0 0)`;
  });