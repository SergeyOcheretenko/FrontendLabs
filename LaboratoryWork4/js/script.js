const VARIANT = 53;
const CHILD_INDEX = (53 % 10) + 1;

// CHANGE COLOR TASK

const firstElement = document.getElementById(`id-${CHILD_INDEX}`);
firstElement.onclick = () => {
  if (firstElement.style['background-color'] == "white") {
    firstElement.style['background-color'] = "rgb(0, 87, 184)";
    firstElement.style['color'] = "rgb(255, 216, 0)";
    return;
  }
  firstElement.style['background-color'] = "white";
  firstElement.style['color'] = "black";
};

const elements = document.querySelectorAll(`li.class-${CHILD_INDEX + 1}`);
const secondElement = elements[0];

secondElement.onclick = () => {
  if (secondElement.style['background-color'] == "white") {
    secondElement.style['background-color'] = "rgb(255, 216, 0)";
    secondElement.style['color'] = "rgb(0, 87, 184)";
    return;
  }
  secondElement.style['background-color'] = "white";
  secondElement.style['color'] = "black";
};

// BUTTONS

// MAKE IMAGE BIGGER

const buttonBig = document.getElementById('button-big');
buttonBig.onclick = () => {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    const oldWidth = image.clientWidth;
    image.style.width = `${ oldWidth + 50 }px`;
  })
};

// MAKE IMAGE SMALLER

const buttonSmall = document.getElementById('button-small');
buttonSmall.onclick = () => {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    const oldWidth = image.clientWidth;
    image.style.width = `${ oldWidth - 50 }px`
  })
};

// DELETE BUTTON

const buttonDelete = document.getElementById('button-delete');
buttonDelete.onclick = () => {
  const images = document.querySelectorAll('img');
  const lastImage = images[images.length - 1];
  lastImage.remove();
}

// ADD NEW IMAGE BUTTON

const imageInput = document.getElementById('button-add');
imageInput.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    const uploadedImage = reader.result;
    const img = new Image();
    img.src = uploadedImage;
    buttonBig.before(img, document.createElement('br'));
  });
  reader.readAsDataURL(this.files[0]);
});
