let modified = document.querySelector('#modified');
modified.textContent = document.lastModified;

const images = document.querySelectorAll('img[data-src]');

const options = { threshold: 0 };

function preloadImages(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }

    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                preloadImages(entry.target);
                io.unobserve(entry.target);
            }
        })
    },
    options
)

images.forEach(image => {
    io.observe(image);
})