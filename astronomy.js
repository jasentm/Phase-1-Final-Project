    
const fetchMe = () => {

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res =>{
    if(res.ok){return res.json();}
    else {
      alert("No promise returned");
    }
    })
    .then(res => renderSpace(res))
    .then(res => console.log(res))
    .then(res => renderSpace(res))
    .catch(error => console.log(error)) 
}

const renderSpace = (response) => {
    
    const imgSpace = document.getElementById("id-ph3");
  
    imgSpace.src = response.url;
    imgSpace.alt = `Space photo`;
    imgSpace.title = response.title
};
  
  //Invokes functions
  const main = () => {
    fetchMe()
  };

 main();