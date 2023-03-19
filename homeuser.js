const storiesContainer = document.getElementById("stories-container");
const picturesContainer = document.getElementById("pictures-container");

// Function to display stories
function displayStories() {
  // Sample array of stories
  const stories = [
    {
      username: "user1",
      story: "This is a story.",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      username: "user2",
      story: "This is another story.",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      username: "user3",
      story: "This is a third story.",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];

  // Loop through stories array and create elements
  stories.forEach((story) => {
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("story");

    const storyImage = document.createElement("img");
    storyImage.src = story.imageUrl;
    storyImage.alt = story.username;

    const storyUsername = document.createElement("h3");
    storyUsername.textContent = story.username;

    const storyText = document.createElement("p");
    storyText.textContent = story.story;

    // Append elements to story div
    storyDiv.appendChild(storyImage);
    storyDiv.appendChild(storyUsername);
    storyDiv.appendChild(storyText);

    // Append story div to container
    storiesContainer.appendChild(storyDiv);
  });
}

// Function to display pictures
function displayPictures() {
  // Sample array of pictures
  const pictures = [
    {
      username: "user4",
      imageUrl: "https://picsum.photos/300/200",
    },
    {
      username: "user5",
      imageUrl: "https://picsum.photos/300/200",
    },
    {
      username: "user6",
      imageUrl: "https://picsum.photos/300/200",
    },
  ];

  // Loop through pictures array and create elements
  pictures.forEach((picture) => {
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("picture");

    const pictureImage = document.createElement("img");
    pictureImage.src = picture.imageUrl;
    pictureImage.alt = picture.username;

    const pictureUsername = document.createElement("h3");
    pictureUsername.textContent = picture.username;

    // Append elements to picture div
    pictureDiv.appendChild(pictureImage);
    pictureDiv.appendChild(pictureUsername);

    // Append picture div to container
    picturesContainer.appendChild(pictureDiv);
  });
}

// Call functions to display stories and pictures
displayStories();
displayPictures();
