const answers_no = {
    english: [
        "I love you!",
        "You're my SUNSHINEEEEEEE",
        "YEOBOOOOOOO!! Chu <3",
        "May you live a long long happy happy life!",
        "Happy happy pushing 30 ~~",
        "You're my greatest gift!",
        "Bubbubbbbbbb I love you!",
        "Do you like raisins? How do you feel about a DATEEEEE?",
        "If I could rearrange the alphabet, I would put U and I together WINKKKKK",
        "Are you a parking ticket? Because you've got FINEEEEEE written all over you <3",
        "Baby if you were words on a page you'd be FINE PRINT <3",
        "Know what's on the menu? MEEEEE and YOUUUUUU",
        "I was feeling a little off but you TURNED ME ON AGAINNNN",
        "Anyone who says Disneyland is the happiest place on Earth has clearly never stood next to you",
        "I'd say God bless you but seems like he already has :D"
    ],
};


let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const message_field = document.getElementById('message-field');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    // yes_button.style.height = `${size}px`;
    // yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        message_field.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        message_field.innerHTML = answers_no[language][0];
        size = 50;
    }
});


function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

