let bigImg = document.querySelector('.big-img img');
let thumbnails = document.querySelectorAll('.thumbnails img');

bigImg.src = thumbnails[0].src;
thumbnails[0].classList.add('active');

thumbnails.forEach(img => {
    img.addEventListener('click', function() {
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        let bigImgContainer = document.querySelector('.big-img');
        bigImgContainer.classList.add('fade');
        setTimeout(() => {
            bigImg.src = this.src;
            bigImgContainer.classList.remove('fade');
        }, 200);
    });
});

let header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let features = document.querySelectorAll('.feature-item');
let observer = new IntersectionObserver(entries => {
    entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show', `delay-${idx % 4}`);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

features.forEach(item => {
    observer.observe(item);
});
