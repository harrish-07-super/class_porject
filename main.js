Webcam.set({
    width: 300,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 300,
    constraints: {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach("camera");

function capture() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="' + datauri + '"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("MobileNet model is loaded!");
}

function identify() {
    img = document.getElementById("capture_img");
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);

document.getElementById("objec_name").innerHTML=results[0].label;

    }

}
