const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

form.addEventListener('submit',function (reload) {
    reload.preventDefault();
})
const namee = input.value;
if(!namee) {
    alert('Please enter a guest name.');
    return;
}
if (guestList.children.length >= 10) {
    alert('Guest limit reached');
    return;
}
const li = document.createElement('li');
const nameSpam = document.createElement('span');
nameSpan.textContent = namee;

const rsvpBtn = document.createElement('button');
rsvpBtn.textContent = 'Attending';

rsvpBtn.addEventListener('click', () => {
    li.classList.toggle('attending');

    if (li.classList.contains('attending')) {
    rsvpBtn.textContent = 'Attending';
    } else {
    rsvpBtn.textContent = 'Not Attending';
    }
});
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', () => {
    li.remove();
})
    li.appendChild(nameSpan);
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn); 

    guestList.appendChild(li);

    input.value = '';
