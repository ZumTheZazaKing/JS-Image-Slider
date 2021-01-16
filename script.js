let imageContainer = document.getElementById('image');

let images = [

    'space mist.jpeg',
    'blue sky.jpeg',
    'nuclear star.jpeg'

]

let imagePicker = 0;

function previous(){


    if (imagePicker == 0){

        imagePicker = images.length-1;

        imageContainer.src = images[imagePicker];

    } else {

        imagePicker--;

        imageContainer.src = images[imagePicker];

    }


}

function nextPic(){

    if (imagePicker == images.length-1){

        imagePicker = 0;

        imageContainer.src = images[imagePicker];

    } else {

        imagePicker++;

        imageContainer.src = images[imagePicker];

    }

}