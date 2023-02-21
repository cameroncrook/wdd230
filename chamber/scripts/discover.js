const images = document.querySelectorAll('img[data-src]');

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



// Gets the number of days since last visited
const daysDiffDiv = document.querySelector('#diff');
const daysHeader = document.querySelector('#days');

let today = new Date();

if (! localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', today);
    daysHeader.textContent = "Welcome!";
} else {
    let lastVisit = new Date(localStorage.getItem('lastVisit'))

    const diffDays = get_difference_days(lastVisit, today);

    if (diffDays >= 1) {
        daysDiffDiv.textContent = `${diffDays} days!`;
    } else {
        const diff = get_difference_hours(lastVisit, today);

        const diffHour = diff.diffHour;
        const diffMinutes = diff.diffMinutes;

        daysDiffDiv.textContent = `${diffHour} hours, ${diffMinutes} minutes`;
    }

    localStorage.setItem('lastVisit', today);
}

function get_difference_days(lastVisit, today) {
    let difference = Math.abs(today - lastVisit);
    const rawDiffDays = difference / (1000 * 60 * 60 * 24);
    let diffDays = 0;

    if (rawDiffDays >= 1) {
        diffDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
    } else {
        diffDays = rawDiffDays;
    }
    

    return diffDays;
}

function get_difference_hours(lastVisit, today) {
    let difference = Math.abs(today - lastVisit);

    let diffMinutes = Math.ceil(difference / 60000);
    let diffHour = 0;

    if ((diffMinutes / 60) >= 1) {
        diffHour = Math.floor(diffMinutes / 60);
        diffMinutes = diffMinutes - (diffHour * 60);
    } else {
        diffHour = 0;
    }
    

    return {
        'diffHour': diffHour,
        'diffMinutes': diffMinutes
    };
}