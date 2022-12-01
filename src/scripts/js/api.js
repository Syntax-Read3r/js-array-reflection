
const src = 'https://picsum.photos/400';
const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const mainImage = document.querySelector('.mainImage');
const newImage = document.querySelector('#newImage');
const saveImage = document.querySelector('#saveImage');
const savedProfiles = document.querySelector('#savedProfiles');


document.addEventListener("DOMContentLoaded", function() { 
    fetchImage();
  });

let savedProfilesStorage = [];
let url = mainImage.src;
let a = 0;



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
        option.value = a;
        savedProfiles.appendChild(option);
        fetchImage();
        a++;
    } else if (search(email)) {
        savedLocation = savedProfilesStorage.findIndex(item => item.includes(email));
        savedProfilesStorage[savedLocation].push(url);
        fetchImage();
    }
}



newImage.addEventListener('click', fetchImage);
mainImage.addEventListener('click', fetchImage);
saveImage.addEventListener('click', () => {
    validateEmail(email);
});


