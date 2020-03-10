var pics = [
    "waterfall.jpg",
    "river.jpg",
    "autumn.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
    if(counter === 4){
        counter = 0;
    }
    img.src = pics[counter]
    counter += counter;
});