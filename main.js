
var silderArry = ["./images/img-1.png",
"./images/img-2.png",
"./images/img-1.png",
"./images/img-1.png",
"./images/img-1.png"];
index = 0;
imageDuration = 5000;

function imageSlider() {
    document.getElementById("slideImages").src = sliderArray[index];
    index++;
    if(index == sliderArray.length) {
        index = 0;
    }
    setTimeout("imageSlider()", imageDuration);
  }
  imageSlider();