const carousel = document.getElementsByClassName("carouselContainer");//location for paralax-carousel
const carouselImg = [ //img's to use for parallax carousel.
    "images/carousel/001.png",
    "images/carousel/002.png",
    "images/carousel/003.png",
]

let slideIndex = 0;//set variable for each time images change.
function slide() {//set function to change images.
    carousel[0].style.backgroundImage = "url(" + carouselImg[slideIndex] + ")";//change the blue background-image into the images.
    slideIndex += 1;//each time picture changes slideIndex add 1.
    if (slideIndex >= carouselImg.length) {//if slideIndex at the end of images it restarts at 0.
        slideIndex = 0;
    }
}

setInterval(slide, 2000);//images will change every 2 seconds.

carousel[0].style.backgroundAttachment = "fixed";//fix background for parallax-effect.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const vegetable = [
    {
        name: "tomat",
        url: "images/collage/tomat.jpg",
        info: "Tomatoes are a significant source of umami flavor. ... It is consumed in diverse ways: raw or cooked, and in many dishes, sauces, salads, and drinks. .",
    },
    {
        
        name: "Zucchini",
        url: "images/collage/Zucchini.jpg",
        info: "A sweet soft red fruit with a seed-studded surface",
    },
    {
        name: "eggplant",
        url: "images/collage/eggplant.jpg",
        info: "Eggplant has antioxidants like vitamins A and C, which help protect your cells against damage. It's also high in natural plant chemicals called polyphenols, which may help cells do a better job of processing sugar if you have diabetes.",
    },
    {
        name: "cauliflower",
        url: "images/collage/cauliflower.jpg",
        info: "Cauliflower is actually a flower that has not fully developed yet. The leaves of cauliflower are edible but have a stronger taste than the florets. China is the world's leading producer of cauliflower. Green cauliflower is produced when you cross cauliflower with broccoli.",
    },
    {
        name: "brassica oleracea",
        url: "images/collage/brassica oleracea.jpg",
        info: "Brassica oleracea is a plant species that includes many common cultivars, such as cabbage, broccoli, cauliflower, kale, Brussels sprouts, collard greens",
    },
    {
        name: "Mushrooms",
        url: "images/collage/Mushrooms.jpg",
        info: "Although considered a vegetable, mushrooms are neither a plant nor animal food. They are a type of fungus that contains a substance called ergosterol, similar in structure to cholesterol in animals.",
    },
    {
        name: "Patates",
        url: "images/collage/Patates.jpg",
        info: "The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice.",
    },
    {
        name: "ginger",
        url: "images/collage/ginger.jpg",
        info: "Ginger is loaded with antioxidants, compounds that prevent stress and damage to your body's DNA.",
    },
    {
        name: "Garlic",
        url: "images/collage/Garlic.jpg",
        info: "Garlic (Allium sativum) is an herb related to onion, leeks, and chives. It is commonly used for conditions related to the heart and blood system.",
    },
    {
        name: "Onion",
        url: "images/collage/Onion.jpg",
        info: "The onion is a vegetable that is the most widely cultivated species of the genus Allium",
    },
    {
        name: "green-peas",
        url: "images/collage/green-peas.jpg",
        info: "Green peas, or “garden peas,” are the small, spherical seeds that come from pods produced by the Pisum sativum plant.",
    },
    {
        name: "Asparagus",
        url: "images/collage/Asparagus.jpg",
        info: " Asparagus plants are perennial vegetables that produce tasty, tender spears year after year.",
    },
    {
        name: "Spinachi",
        url: "images/collage/Spinachi.jpg",
        info: "Spinach also contains several other vitamins and minerals, including potassium, magnesium, and vitamins B6, B9, and E",
    },
    {
        name: "Carrot",
        url: "images/collage/Carrot.jpg",
        info: "A medium-size carrot has 25 calories, 6 grams of carbs, and 2 grams of fiber. The veggie is an excellent source of vitamin A",
    },
    {
        name: "Brussels-Sprouts",
        url: "images/collage/Brussels-Sprouts.jpg",
        info: "Brussels sprouts are a member of the Brassicaceae family of vegetables and closely related to kale, cauliflower, and mustard greens.",
    },
    {
        name: "Avocado",
        url: "images/collage/Avocado.jpg",
        info: "Avocados contain an abundance of nutrients that are essential for optimal health, and regularly consuming avocados could help improve overall diet quality.",
    },
]
let tiles = document.querySelectorAll(".image");

function toCollage() {//function to add images to the collage.
    for (let i = 0; i < vegetable.length; i++) {
        tiles[i].style.backgroundImage = "url(" + vegetable[i].url + ")";
    }
}

toCollage()//call the function
let click = 0;
tiles.forEach((tile, i) => { // set function for each tile per index-number
    tile.addEventListener("click", function infoEnlarge() {
        click += 1;
        if (click === 1) { //if image clicked once, show popup.
            tile.style.transform = "scale(1.5)";
            tile.innerText = (vegetable[i].info);
        } else { //otherwise reset the image.
            click = 0;
            tile.style.transform = "scale(1)";
            tile.innerText = "";
        }
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const pokemon = document.querySelectorAll(".poke");
pokemon.forEach((poke, i) => {
    poke.onmouseover = function popup() {
        poke.querySelector("img").style.display = "block";
    }
    poke.onmouseout = function hide() {
        poke.querySelector("img").style.display = "none";
    }
})
document.getElementById("chaserBox").addEventListener("mousemove", (e) => {
    let x = e.clientX; //read-only property of mouseEvent to get positions
    let y = e.clientY; //
    // let position = "X: " + x + " Y: " + y;
    //document.getElementById("position").innerHTML = position;//write positions to screen

    let chaser = document.getElementById("chaser");
    chaser.style.top = y + "px";
    chaser.style.left = x + "px";
})