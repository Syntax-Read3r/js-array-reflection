
const src = 'https://picsum.photos/400';
const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const mainImage = document.querySelector('.mainImage');
const newImage = document.querySelector('#newImage');
const saveImage = document.querySelector('#saveImage');
const savedProfiles = document.querySelector('#savedProfiles');
const imageListContainer = document.querySelector(".imageListContainer");
const likedImagedDisplay = document.querySelector('.row');


document.addEventListener("DOMContentLoaded", function() { 
    fetchImage();
  });

let savedProfilesStorage = [];
let url;;
console.log(savedProfilesStorage);
let activeSelect = 0;


// Fetches image from API
const fetchImage = async () => {
  try {
    const response = await fetch(src);
    const data = await response.url;
    console.log(data);

    mainImage.src = data;
    url = data;
  } catch (error) {
    console.log(error);
  }
};

// Searches for email in temporary storage
function search(email) {
    for (var i = 0, len = savedProfilesStorage.length; i < len; i++) {
        if (savedProfilesStorage[i][0] === email) {
            return savedProfilesStorage[i];
        }
    }
}

// Saves image to temporary storage
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
    console.log('i am here')

}

// Displays image associated with email/profile
const displayImage = () => {
    if(savedProfiles.value == "default") {
        // clear the div
        likedImagedDisplay.innerHTML = "";
    } else if (savedProfiles.value) {
        // clear the div
        likedImagedDisplay.innerHTML = "";
        // get the index of the email
        savedLocation = savedProfiles.value;
     
        // get the array of urls associated with the email 
        savedUrls = savedProfilesStorage[savedLocation].slice(1);
        console.log(savedUrls);
        // loop through the array of urls and display them
        for (i = 0; i < savedUrls.length; i++) {
            var img = document.createElement("img");
            img.src = savedUrls[i];
            img.className = "likedImage";
            likedImagedDisplay.appendChild(img);
        }
    }

}



newImage.addEventListener('click', fetchImage);
mainImage.addEventListener('click', fetchImage);
saveImage.addEventListener('click', () => {
    validateEmail(email);
});
savedProfiles.addEventListener('change', displayImage);


