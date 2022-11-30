const src = 'https://picsum.photos/300';
const regex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const mainImage = document.querySelector('.mainImage');
const newImage = document.querySelector('#newImage');

document.addEventListener("DOMContentLoaded", function() { 
    fetchImage();
  });

const savedProfiles = [];
let email = '';
let url = '';
let x = 0;
let y = 0;
let z = 0;

// fetch an image from src and set to mainImage. Make sure to test for errors
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

newImage.addEventListener('click', fetchImage);


