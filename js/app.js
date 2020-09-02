let imageUrl = [];
let imageName = [];
const imageContainer = document.querySelector(".imageContainer");
const navUl = document.querySelector("#navUl");
const navLi = document.querySelectorAll("li");
const mainBody = document.querySelector("#main-body");
let message = document.querySelector(".notification");

// Searching for photos from unsplash
const searchPhotos = () => {
	// imageContainer.innerHTML = "";
	const input = document.querySelector("#search");
	let searchTerm = input.value;
	let newSection = `<section id="${searchTerm}" class="imageContainer">
					 	<h3 class="section-heading">${searchTerm}</h3>
					 `;
	mainBody.innerHTML += newSection;
	let createdSection = document.querySelector(`#${searchTerm}`);
	let clientId = "88i7qHkpW1-r-T3rR0tk7OEwVE4KGDCJD04P_ZLyGYs";
	let url = `http://api.unsplash.com/search/photos/?client_id=${clientId}&query=${searchTerm}`;

	fetch(url)
		.then((response) => response.json())
		.then((datas) =>
			// {
			// 	datas.results.forEach((data) => {
			// 		//creating image hrf and alt description from unsplash returned data
			// 		//the appending the image (<img />) tage to the DIV

			// 		let image = `<img class = 'responsive' src=${data.urls.regular} alt='${data.alt_description}' />`;
			// 		imageContainer.innerHTML += image;
			// 	});
			{
				let imageArray = datas.results;
				for (let i = 0; i < 4; i++) {
					let imageDiv = `<div class="card">
									<img
										class = 'responsive'
										src=${imageArray[i].urls.regular}
										alt='${imageArray[i].alt_description}'
										/>
										<h3 class="card-text">${imageArray[i].alt_description}</h3>
									</div>
								`;
					// let image = `<img class = 'responsive' src=${imageArray[i].urls.regular} alt='${imageArray[i].alt_description}' />`;

					createdSection.innerHTML += imageDiv;
				}
			}
		);
		showMessage(searchTerm);
		addNavigation(searchTerm);
};

function isInViewport(elem) {
	var bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
}

// window.addEventListener("scroll", function(){
// 	let fetchedImages = document.querySelectorAll('.responsive')
// 	fetchedImages.forEach((image)=> {
// 		let imageName = image.getAttribute('alt');
// 		if(isInViewport(image)) {
// 			let imageLi = `<li>${imageName}</li>`;
// 			navUl.innerHTML += imageLi;
// 		}
// 	})
// })

function createSection() {
	let newSection = `<section class="imageContainer">
					 	<h3 class="section-heading">New Section</h3>
					 `;
	mainBody.innerHTML += newSection;
	console.log("New Section has been added");
}


function showMessage(term) {
		message.innerHTML = `Images of ${term} has been added!!`;
		setTimeout(function () {
			message.innerHTML = "";
				}, 2000);
		}


function addNavigation(term) {
	let newLi = `<li><a href="${term}">${term}</a></li>`
	navUl.innerHTML += newLi;
}