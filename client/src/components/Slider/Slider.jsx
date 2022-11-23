import React from "react";

let photos = Array.from({ length: 10 }, () => ({
	src: `https://picsum.photos/id/${Math.ceil(Math.random() * 999)}/${
		Math.floor(Math.random() * 4) + 2
	}/${Math.floor(Math.random() * 4) + 2}`,
}));

console.log(photos);

function Slider() {
	return <div>Slider</div>;
}

export default Slider;
