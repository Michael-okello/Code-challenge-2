const guestForm = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

let guests = [];
const maxGuests = 10;

guestForm.addEventListener('submit', function(reload){
    reload.preventDefault();

    const guestName = guestNameInput.value.trim();

    if(guestName === ''){
        alert('Please enter a guest name');
        return;
    }

    if(guests.length >= maxGuests) {
        alert(`Sorry, maximum amount of guests is ${maxGuests}`);
        return;
    }

    guests.push(guestName);

    const listItem = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${guestName} (Not Attending)`;

    const actionDiv = document.createElement('div');
    actionDiv.className = 'actions';

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle RSVP';
    toggleBtn.addEventListener('click', () => {
        if(nameSpan.textContent.includes('Not Attending')) {
            nameSpan.textContent = `${guestName} (Attending)`;
        } else {
            nameSpan.textContent = `${guestName} (Not Attending)`;
        }
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        guestList.removeChild(listItem);
    });

    actionDiv.appendChild(toggleBtn);
    actionDiv.appendChild(removeBtn);
    listItem.appendChild(nameSpan);
    listItem.appendChild(actionDiv);
    guestList.appendChild(listItem);

    guestNameInput.value = '';
});

