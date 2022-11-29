let tab = ["img carrousel/1.jpg", "img carrousel/2.jpg", "img carrousel/3.jpg", "img carrousel/4.jpg", "img carrousel/5.jpg"];
let n = 0;

prev = document.getElementById("previous");
next = document.getElementById("next");
image = document.querySelector("img");

prev.addEventListener("click",changePrev);
next.addEventListener("click",changeNext);
console.log(n);

function changeNext() { 
    if (n < 4){
        n++;
        console.log(n);
        image.src = tab[n];;
    }else {
        console.log(n);
        n = 0;
        image.src = tab[n];
    }
};

function changePrev() {
    if (n <= 0) {
        image.src = tab[0];
    }else if (n <= 4) {
        n--;
        image.src = tab[n];
    }
};