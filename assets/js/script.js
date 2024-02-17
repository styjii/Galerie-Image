function changementImage() {
    // Initialization from i to 1
    let i = 1;
    document.querySelector(".next").addEventListener("click", () => {
        // Incrementing the i when clicking on next
        i++;
        // If i exceeds the imagen number, i will stop at its number
        i = (i > 6)? 6 : i;
        document.querySelector(".card > img").src = "image/img_" + i + ".jpg";
        // next()
    })
    document.querySelector(".prev").addEventListener("click", () => {
        // decrementing the i when clicking on prev
        i--;
        // If i arrives at the minimum number of the image, i will stop
        i = (i < 1)? 1 : i;
        document.querySelector(".card > img").src = "image/img_" + i + ".jpg";
        // previous()
    })
}
changementImage();