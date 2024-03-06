//Fetch response from NASA Daily Image
const fetchMe = () => {
let currentImg = {}
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res =>{
    if(res.ok){return res.json();}
    else {
      alert("No promise returned");
    }
    })
    .then(res => {renderSpace(res); return res})
    .then(res => currentImg = res)
    .then(res => console.log(res))
    .catch(error => console.log(error)) 
}

const imgSpace = document.getElementById("id-ph3");

//Render space photo 
const renderSpace = (response) => {
      
    imgSpace.src = response.url;
    imgSpace.alt = `Space photo`;
    imgSpace.title = `Title: ${response.title} \n Explanation: ${response.explanation}`
};

const hoverRender = (e) => {
  e.preventDefault()
  imgSpace.style.position = 'relative';
  imgSpace.style.transform = 'scale(2.5) translate(-30%, 30%)'; // Enlarge the image by 2 times and translate it into view
  imgSpace.style.transition = 'transform 0.3s'; // Add a smooth transition effect
  imgSpace.style.zIndex = '10';
  // imgSpace.classList.remove('detail-image2');
  // imgSpace.classList.add('img-enlarged');

  //const imgDiv = document.getElementById('id-3');
  //const para = document.createElement('p');

// para.id = "removable-para"
// para.textContent = `${explanation}`;
//imgDiv.appendChild(para);
    
};

const outRender = (e) => {
  e.preventDefault()

  //const para = document.getElementById("removable-para")
  imgSpace.style.position = 'relative';
  imgSpace.style.transform = 'scale(1)';
  imgSpace.style.transition = 'transform 0.2s';  // Reset the image size when mouse moves out
  imgSpace.style.zIndex = '3'
  // imgSpace.classList.remove('img-enlarged');
  // imgSpace.classList.add('detail-image2');

  //if (para) {para.remove();
  //}

  
}

imgSpace.addEventListener("mouseover", (e) => {
  hoverRender(e);
})

imgSpace.addEventListener("mouseout", (e) =>{
  outRender(e);
})
 

//Invokes functions
const main = () => {
    fetchMe()
  };

 main();