
const src = 'https://picsum.photos/400';
const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const mainImage = document.querySelector('.mainImage');
const newImage = document.querySelector('#newImage');
const saveImage = document.querySelector('#saveImage');
const savedProfiles = document.querySelector('#savedProfiles');
const imageListContainer = document.querySelector(".imageListContainer");


document.addEventListener("DOMContentLoaded", function() { 
    fetchImage();
  });

let savedProfilesStorage = [];
let url = mainImage.src;
let activeSelect = 0;



const fetchImage = async () => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    mainImage.src = url;
  } catch (error) {
    console.log(error);
  }
};

function search(email) {
    for (var i = 0, len = savedProfilesStorage.length; i < len; i++) {
        if (savedProfilesStorage[i][0] === email) {
            return savedProfilesStorage[i];
        }
    }
}

// create a function that validates and email and if true, adds the email and url to the savedProfiles array
const validateEmail = () => {
    email = document.forms['emailCollection']['email'].value;
    console.log(email);

    if (regex.test(email) == false) {
        alert("Please enter a valid email.");
    }
    else if (!search(email)) {
        savedProfilesStorage.push([email, url]);
        console.log(savedProfilesStorage);

        var option = document.createElement("option");
        option.text = email;
        option.value = activeSelect;
        savedProfiles.appendChild(option);
        fetchImage();
        activeSelect++;
    } else if (search(email)) {
        savedLocation = savedProfilesStorage.findIndex(item => item.includes(email));
        savedProfilesStorage[savedLocation].push(url);
        fetchImage();
    }
    displayImage();
    console.log(savedProfiles.value)
    console.log('i am here')

}

// create a function that displays the image associated with the email 

const displayImage = () => {
    if(savedProfiles.value == "default") {
        // clear the div
        imageListContainer.innerHTML = "";
    } else if (savedProfiles.value) {
        // clear the div
        imageListContainer.innerHTML = "";
        // get the index of the email
        savedLocation = savedProfiles.value;
     
        // get the array of urls associated with the email
        savedUrls = savedProfilesStorage[savedLocation].slice(1);
        // loop through the array of urls and display them
        for (i = 0; i < savedUrls.length; i++) {
            var img = document.createElement("img");
            img.src = savedUrls[i];
            imageListContainer.appendChild(img);
        }
    }

}



newImage.addEventListener('click', fetchImage);
mainImage.addEventListener('click', fetchImage);
saveImage.addEventListener('click', () => {
    validateEmail(email);
});


