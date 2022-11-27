function getRandomUser() {
  return fetch('https://randomuser.me/api').then(data => data.json());
}

function createUserDiv() {
  const user = document.createElement('div');
  user.className = 'user';
  user.width = '200px';
  user.style.border = '1px solid gray';
  user.style.padding = '10px';
  user.style.margin = '1px';
  return user;
}

function createUserBlock() {
  return getRandomUser().then(data => {
    const userData = data.results[0];
    const user = createUserDiv();

    const img = new Image(400, 400);
    img.src = userData.picture.large;

    const phoneText = document.createElement('p');
    phoneText.innerText = `Phone: ${ userData.phone }`;

    const countryText = document.createElement('p');
    countryText.innerText = `Country: ${ userData.location.country }`;

    const coordinatesText = document.createElement('p');
    coordinatesText.innerText = `Coordinates: \n[ latitude: ${ userData.location.coordinates.latitude }, longitude: ${ userData.location.coordinates.longitude }]`;

    const postcodeText = document.createElement('p');
    postcodeText.innerText = `Postcode: ${ userData.location.postcode }`;

    user.appendChild(img);
    user.appendChild(phoneText);
    user.appendChild(countryText);
    user.appendChild(coordinatesText);
    user.appendChild(postcodeText);

    return user;
  });
}

function createUsersSection() {
  const body = document.querySelector('body');

  const usersBlock = document.createElement('div');
  usersBlock.style.display = 'flex';
  usersBlock.style['flex-direction'] = 'row';
  usersBlock.style['justifyContent'] = 'center';

  body.appendChild(usersBlock);

  return usersBlock;
}

window.onload = () => {
  const usersBlock = createUsersSection();
  for (let i = 1; i <= 5; i++) {
    createUserBlock().then(user => {
      usersBlock.appendChild(user);
    }).catch(err => {
      console.error(err);
    });
  }

  const addButton = document.createElement('button');
  addButton.onclick = () => {
    createUserBlock().then(user => {
      usersBlock.appendChild(user);
    }).catch(err => {
      console.error(err);
    });

  };
  addButton.innerText = 'Add user';
  const body = document.querySelector('body');
  body.appendChild(addButton);

  const deleteButton = document.createElement('button');
  deleteButton.onclick = () => {
    const users = document.querySelectorAll('.user');
    const lastUser = users[users.length - 1];
    lastUser.remove();
  };
  deleteButton.innerText = 'Delete user';
  body.appendChild(deleteButton);
};