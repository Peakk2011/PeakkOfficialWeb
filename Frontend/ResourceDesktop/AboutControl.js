const Contact = document.getElementById('Email');

function rippleSuggess() {

  Contact.classList.add('expand');
  
}

function CloseRipple() {

  document.querySelector('.email').classList.remove('expand');
  event.stopPropagation();

}
