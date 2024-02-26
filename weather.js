//May have to just type in elements as the navigator function needs to be on 
//an actual website.   

const latLong = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
  
      // Call another function or perform operations with lat and long here
      processCoordinates(889999.5, 5600745.45);
    });
  }
  
  const processCoordinates = (lat, long) => {
    // Perform operations with lat and long here
    console.log('Latitude:', lat);
    console.log('Longitude:', long);
  }
  
  latLong();
