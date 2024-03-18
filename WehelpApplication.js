'use strict'
// hide msg when clicked on, restore when click again
document.addEventListener('click', function(event){
  const target = event.target;
  console.log(target)
  const parentElement = target.parentElement;
  if (parentElement.classList.contains('msg')){
      if (target.hasAttribute('data-original-text')){
        // Return to original state if the text was stored
        target.innerText = target.getAttribute('data-original-text');
        target.removeAttribute('data-original-text');
      } else {
        // Store the innerText and replace with ...
        target.dataset.originalText = target.innerText;
        target.innerText = '...';
      } //html: 'data-' prefix and all dash will be exclude and camel-case the rest in js.
  }
})