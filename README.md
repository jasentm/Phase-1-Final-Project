# Daily Inspiration
A board of inspirational images and quotes that changes daily to inspire you to journal and reflect.

## Wireframe
<img src="./assets/Wire Frame.png">

## User Story
As a user I will be able to:
- See randomly generated images of Art and Astronomical phenomena that change every day
- Read a randomly generated inspirational quote that changes every day
- Enter my mood for the day, a color associated with it, and write a daily journal entry
- View previous journal submissions

<img src="./assets/User Story.png">

## List of APIs / Data Examples
https://github.com/lukePeavey/quotable?tab=readme-ov-file#get-random-quotes

https://github.com/nasa/apod-api (NEEDS KEY)
*Hourly limit of 30 requests per IP Address.  Daily limit of 50 requests per IP Address*

https://metmuseum.github.io/

{
"date": "2024-03-02",
"explanation": "Methalox rocket engine firing, Odysseus' landing legs absorb first contact with the lunar surface in this wide-angle snapshot from a camera on board the robotic Intuitive Machines Nova-C moon lander. Following the landing on February 22, broken landing legs, visible in the image, ultimately left the lander at rest but tilted. Odysseus' gentle lean into a sloping lunar surface preserved the phone booth-sized lander's ability to operate, collect solar power, and return images and data to Earth. Its exact landing site in the Moon's far south polar region was imaged by NASA's Lunar Reconnaissance Orbiter. Donated by NASA, the American flag seen on the lander's central panel is 1970 Apollo program flight hardware.",
"hdurl": "https://apod.nasa.gov/apod/image/2403/IM_Odysseus_landing-2048x1118.png",
"media_type": "image",
"service_version": "v1",
"title": "Odysseus on the Moon",
"url": "https://apod.nasa.gov/apod/image/2403/IM_Odysseus_landing-1100x600.png"
}

{
  "journals": [
    {
      "id": "1",
      "date": "02-28-24",
      "moodColor": "#f7ec73",
      "mood": "Happy",
      "entry": "Today was great! I had a turkey sandwich for lunch."
    },
    {
      "id": "2",
      "date": "02-29-24",
      "moodColor": "#d53434", 
      "mood": "Angry",
      "entry": "Today was awful! Javascript is so hard!"
    },
    {
     "id": "3",
      "date": "03-01-24",
      "moodColor": "#f7ec73",
      "mood": "Happy",
      "entry": "Today was great! It's Friday!"
    },


## List of Event Listeners
- Click on Journal Board will display previous entry
- Submit form will save form data to db.json and render into Journal Board
- Mouseover/Mouseout will enlarge the images from APIs and display information about each image

## Iterator
- Iterate over journal entries to append to the DOM

## Stretch Goals
- Weather widget based on location
- Input field to inspire future self
- Append inspiration to DOM from past self
- mood tracker (color css based on mood) for previous entries
- mouseover event listener for previous entries

## Kanban Board
https://trello.com/b/bzdZPuOR/phase-1-final-project





