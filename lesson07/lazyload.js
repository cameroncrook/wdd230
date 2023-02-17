const images = document.querySelectorAll('[data-src]');

// change to 0 after peer review
const options = { threshold: .5 };

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
            console.log(entries);
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