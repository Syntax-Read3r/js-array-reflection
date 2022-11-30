const src = 'https://picsum.photos/400';
const regex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const mainImage = document.querySelector('.mainImage');
const newImage = document.querySelector('#newImage');

document.addEventListener("DOMContentLoaded", function() { 
    fetchImage();
  });

const savedProfiles = [];


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


