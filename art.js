//fetch list of departments: May be necessary to choose a department later if the page load time is too large

// const getDepartments = () => {
//      fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
//      .then(res => res.json())
//      .then(data => console.log(data)) 
//***** DISREGARD ABOVE CODE *********    

// The following code gets the possible images for display from the API
//it also assigns objectIDs
//It is possible to run this code through a single department and not the whole database
//Please reference the first const response' that is //'d out if that is desired
//However the department must be identified (see disregarded code above for Dept list)

let viewableArt = [];
const getArt = async () => {
  try {
  //const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=departmentId=21')
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)

  const data = await response.json();
      viewableArt = data.objectIDs;
      console.log(viewableArt); // Logging the image IDs inside the function
      return viewableArt;
  }
  catch(error) {
      console.error('Error fetching image IDs:', error);
      return []; // Return an empty array or handle the error as needed
  };
}


//selects a random piece of artwork from the returned fetch

const selectArtwork = () => {
  if (!viewableArt || viewableArt.length === 0) {
    console.error('Image IDs not available. Call getImageIds first.');
    return;
  }

//template to select random id# from array of artwork
//returns the selected artwork  
  const randomIndex = Math.floor(Math.random() * viewableArt.length);
  const selectedArtwork = viewableArt[randomIndex];

  console.log('Selected Artwork:', selectedArtwork);
  return selectedArtwork;
}

//fetches the selected artwork based off the ID generated from the function 'selectedArtwork'
//renders if it meets the ability to display the image, title, url and artist
//otherwise it returns a function 'selectAndFetchArtwork' that loops back to 'selectArtwork' until
//conditions are met.

const fetchAndLogArtDetails = (selectedArtwork) => {
fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${selectedArtwork}`)
.then(res => {
  if (res.ok){
      return res.json()
  }else {
      console.error("Something went wrong...")
  }
})

.then((response) => {
  if (response.artistDisplayName !== "" && response.objectDate !== "" && response.primaryImage !== "") {
  console.log(response);
  renderArtwork(response); // Pass the response to renderArtwork
} else {
  // Handle the case where the response is not valid
  return Promise.reject("Invalid response");
}
})
.catch((error) => {
console.error(error);
// Retry by selecting new artwork
selectAndFetchArtwork();
});
};

const selectAndFetchArtwork = () => {
const selectedArtwork = selectArtwork();
fetchAndLogArtDetails(selectedArtwork);

}
  

//renders the image to the page 


const renderArtwork = (response) => {
  const img = document.getElementById('id-ph1')

  img.src = response.primaryImage;
  img.alt = 'Artwork';
  img.title = `Artist:${response.artistDisplayName} \n Date:${response.objectDate} \n Title: ${response.title} \n URL:${response.objectURL}`;
  // img.artist = response.artistDisplayName;
  // img.date = response.objectDate;
  // img.url = response.objectURL;


//Event Listeners
/*
img.addEventListener('mouseover', () => {
  img.style.transform = 'scale(1.5)'; // Enlarge the image by 1.5 times
  img.style.transition = 'transform 0.3s'; // Add a smooth transition effect
});
img.addEventListener('mouseout', () => {
  img.style.transform = 'scale(1)';
  img.style.transition = 'transform 0.2s';  // Reset the image size when mouse moves out
});
*/

// getArt().then(() => {
//   console.log('getImageIds called successfully.');
//   // After fetching image IDs, call selectArtwork
//   const selectedArtwork = selectArtwork();
//   fetchAndLogArtDetails(selectedArtwork);


// });
// }
///////////////////////////////////////////////////////////////////////////////////





    // Add mouseover event listener that displays artwork info
    
    img.addEventListener('mouseover', () => {
      enlargeImage(img);
    //  displayImageInfo(response);
    });
  
//     // Add mouseout event listener to reset the image size and hide info
    img.addEventListener('mouseout', () => {
      resetImageSize(img);
    //  hideImageInfo();
    });
  
  
//   // Function to enlarge the image on mouseover

  const enlargeImage = (img) => {
    img.style.position = 'relative'
    img.style.transform = 'scale(2.5) translate(30%, 30%)'; // Enlarge the image by 1.5 times
    img.style.transition = 'transform 0.3s'; // Add a smooth transition effect
    img.style.zIndex = '10';
    
};


};

  // Function to reset the image size on mouseout
  const resetImageSize = (img) => {
    img.style.position = 'relative'
    img.style.transform = 'scale(1)';
    img.style.transition = 'transform 0.2s';  // Reset the image size when mouse moves out.
    img.style.zIndex = '3'
};
  
/* 
// Function to create HTML content for image information
const createImageInfoHTML = (img) => `
  <p>Title: ${img.title}</p>
  <p>Artist: ${img.artistDisplayName}</p>
  <p>Date: ${img.objectDate}</p>
  <p>URL: ${img.objectURL}</p>
`;

// Function to display image information at the bottom
const displayImageInfo = (img) => {
  const infoContainer = document.getElementById('id-ph1');
  infoContainer.innerHTML = createImageInfoHTML(img);
};

// Function to hide image information
const hideImageInfo = () => {
  const infoContainer = document.getElementById('id-ph1');
  infoContainer.innerHTML = ''; // Clear the information
};
*/
//calls the functions in the necessary order

getArt().then(() => {
  console.log('getImageIds called successfully.');
  // After fetching image IDs, call selectArtwork
  const selectedArtwork = selectArtwork();
  fetchAndLogArtDetails(selectedArtwork);
});
