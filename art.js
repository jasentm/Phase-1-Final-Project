//fetch list of departments
// const getDepartments = () => {
//      fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
//      .then(res => res.json())
//      .then(data => console.log(data)) 
     

// 

// The following code get the imageIds by Department : Modern Art from the api

let imageIdsByDept = [];
const getImageIds = async () => {
  try {
  const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=departmentId=21')
  const data = await response.json();
      imageIdsByDept = data.objectIDs;
      console.log(imageIdsByDept); // Logging the image IDs inside the function
      return imageIdsByDept;
  }
  catch(error) {
      console.error('Error fetching image IDs:', error);
      return []; // Return an empty array or handle the error as needed
  };
}


//selects a random piece of artwork from the array of imageIds 

const selectArtwork = () => {
  if (!imageIdsByDept || imageIdsByDept.length === 0) {
    console.error('Image IDs not available. Call getImageIds first.');
    return;
  }

  const randomIndex = Math.floor(Math.random() * imageIdsByDept.length);
  const selectedArtwork = imageIdsByDept[randomIndex];

  console.log('Selected Artwork:', selectedArtwork);
}

//calls the functions and sets hierarchy

getImageIds().then(() => {
  console.log('getImageIds called successfully.');
  // After fetching image IDs, call selectArtwork
  selectArtwork();

});

//need to render the 'selectedArtwork' to display on the page
