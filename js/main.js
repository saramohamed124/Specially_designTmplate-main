// Check if there is local storage color option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );
  //Remove Active Class From All colors List Item
  document.querySelectorAll(".colors_list li").forEach((element) => {
    element.classList.remove("active");
    // Add Active Class on element With Data Color === Local Storage
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
  // console.log(document.documentElement);
}

// Random Backgrond OPtion
let backgroundOption = true;

// Variable to constrol the interval
let backgroundInterval;

// Check if There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("back_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  console.log(backgroundLocalItem);
  console.log(typeof backgroundLocalItem);

  if (backgroundLocalItem === true) {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-back span").forEach((ele) => {
    ele.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".yes").classList.add("active");
  }
}
// Toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin for rotation on self
  this.classList.toggle("fa-spin");
  //   Toggle class open for rotation on self
  document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// loop on every list
colorsLi.forEach((li) => {
  // Click oon every list
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // Set Color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active class ON Self
    e.target.classList.add("active");
  });
});
// Switch Random Background OPtion
const randomBackEl = document.querySelectorAll(".random-back span");

// loop on every span
randomBackEl.forEach((span) => {
  // Click oon every span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active class ON Self
    e.target.classList.add("active");
    if (e.target.dataset.back === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("back_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("back_option", false);
    }
  });
});

// Select Landing page element
let landingPage = document.querySelector(".landing");

// Get Array of Imgs
let imgsArray = [
  "landing-1.jpg",
  "landing-2.jpg",
  "landing-3.jpg",
  "landing-4.jpg",
];

function randomizeImgs() {
  if (backgroundOption === true) {
    // es6 arrow function
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image Url
      //   landingPage.style.backgroundImage = `url(../images/${imgsArray[randomNumber]})`;
      landingPage.style.backgroundImage =
        "url(images/" + imgsArray[randomNumber] + ")";
    }, 1000);
  } else {
    clearInterval(backgroundInterval);
  }
}
randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Ourter Height
  // Offset Height => Height includes padding and border and margin
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  this.console.log(skillsOffsetTop + skillsOuterHeight - windowHeight);
  if (windowScrollTop > skillsOffsetTop - windowHeight) {
    this.console.log("Skills Section Reached");
    // console.log(allSkills);
    let allSkills = document.querySelectorAll(".progress span");

    allSkills.forEach((skill) => {
      let data = `${skill.dataset.progress}%`;
      skill.style.width = data;
      console.log(data);
    });
  }
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".images-box img")

ourGallery.forEach((img)=>{
  img.addEventListener('click',(e)=>{
    // Create Overlay Element
    let overlay = document.createElement("div")

    // Add Class To Overlay
    overlay.className='popup-overlay'

    // Append Overlay to the body 
    document.body.appendChild(overlay)

    // Create pop up 
    let popupBox = document.createElement('div')

    // Add Class To The Popus Box
    popupBox.classList='popup-box'

    if(img.alt!==null){
      // Create Heading
      let imgHeading = document.createElement('h3');

      // Create Text for heading
      let imgText = document.createTextNode(img.alt)

      // Append the text to the heading
      imgHeading.appendChild(imgText)

      // Append heading to the popup Box
      popupBox.appendChild(imgHeading)
    }

    // Create The IMage
    let popupImage = document.createElement("img")

    console.log(img.src)

    // Set Image Source
    popupImage.src = img.src

    // Add Image To Popup Box
    popupBox.appendChild(popupImage)

    // Append Popup to the body
    document.body.appendChild(popupBox)

    // Create The Close Span
    let closeButton = document.createElement('span')

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X")

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText)

    // Add Class To Close Button
    closeButton.className='close-button btn btn-danger  fw-bold'

    // Add Close Button to  The popup box
  popupBox.appendChild(closeButton)
  
  })
})

// Close Popup
document.addEventListener("click",function(e){
  if(e.target.classList.contains('close-button')){

    // Remove The current popup
    e.target.parentNode.remove();
console.log(e.target.parentNode)
    // Remove Overlay
document.querySelector(".popup-overlay").remove()
  }
})
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet=>{
  bullet.addEventListener('click', (e)=>{
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: 'smooth'
    })
  })
})