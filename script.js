function calculateSize() {
    const gender = document.getElementById('gender').value;
    const bust = parseInt(document.getElementById('bust').value);
    const waist = parseInt(document.getElementById('waist').value);
    const hips = parseInt(document.getElementById('hips').value);
    
    let size = '';
    
    if (gender === 'female') {
        if (bust >= 34 && waist >= 24 && hips >= 32) {
            size = 'Medium';
        } else {
            size = 'Small';
        }
    } else if (gender === 'male') {
        if (bust >= 36 && waist >= 30 && hips >= 34) {
            size = 'Medium';
        } else {
            size = 'Small';
        }
    }

    document.getElementById('result').innerHTML = `Recommended size: ${size}`;
}

var images = [
    "Page 1.jpeg",
    "Untitled image (1).jpeg",
    "Untitled image (2).jpeg",
    "Untitled image (3).jpeg",
    "Page 2.jpeg"
];

var index = 0;
var slideshowElement = document.getElementById("slideshow");


function changeImage() {
    slideshowElement.src = images[index];
    index = (index + 1) % images.length; 
}


changeImage();


var intervalId = setInterval(changeImage, 3000);


document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        clearInterval(intervalId);
    } else {
        intervalId = setInterval(changeImage, 3000);
    }
});



