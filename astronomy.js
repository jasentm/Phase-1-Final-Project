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
    .catch(error => console.log(error)) 
}

const imgSpace = document.getElementById("id-ph3");

//Render space photo 
const renderSpace = (response) => {
      
    imgSpace.src = response.url;
    imgSpace.alt = `Space photo`;
    imgSpace.title = response.title

};

const hoverRender = (e) => {
  e.preventDefault()

  imgSpace.classList.remove('detail-image2');
  imgSpace.classList.add('img-enlarged');
  
  
};

const outRender = (e) => {
  e.preventDefault()

  imgSpace.classList.remove('img-enlarged');
  imgSpace.classList.add('detail-image2');
  
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