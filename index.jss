const guestForm = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
const MAX_GUESTS = 10;

guestForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = guestNameInput.value.trim();
  if (!guestName) return;

  if (guestList.children.length >= MAX_GUESTS) {
    alert('Guest list is full (maximum 10 people).');
    return;
  }

  const listItem = document.createElement('li');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = `${name} (Not Attending)`;

  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'actions';

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle RSVP';
  toggleBtn.addEventListener('click', () => {
    if (nameSpan.textContent.includes('Not Attending')) {
      nameSpan.textContent = `${name} (Attending)`;
    } else {
      nameSpan.textContent = `${name} (Not Attending)`;
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    guestList.removeChild(listItem);
  });

  actionsDiv.append(toggleBtn, removeBtn);
  listItem.append(nameSpan, actionsDiv);
  guestList.appendChild(listItem);

  guestNameInput.value = '';
});
