// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< see password >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let eyes = document.querySelectorAll(".modal-form__eyes")
let pass = document.querySelectorAll("#pass")

for (let index = 0; index < pass.length; index++) {
  const password = pass[index];
  const eye = eyes[index];
  eye.addEventListener("click", function () {
    eye.classList.toggle("see")
    if (eye.classList.contains("see")) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  })
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< clear input >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let inputs1 = document.querySelectorAll("#dropdown1 * input")
let inputs2 = document.querySelectorAll("#dropdown2 * input")
let clearButton1 = document.querySelector("#clear-btn1")
let clearButton2 = document.querySelector("#clear-btn2")

function clearInput (inputs, clearBtn) {
  if (inputs1.length) {
    clearBtn.addEventListener("click", function () {
      for (let index = 0; index < inputs.length; index++) {
        const input = inputs[index];
        if (input.checked || input.value) {
          input.checked = false;
          input.value = "";
        }
      }
    })
  }

}
clearInput(inputs1, clearButton1)
clearInput(inputs2, clearButton2)
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< slider count >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if (document.querySelectorAll(".card__slide").length) {
  let cardSliders = document.querySelectorAll(".card__slide")
  for (let index = 0; index < cardSliders.length; index++) {
    const cardSlider = cardSliders[index];
    cardSlider.children[1].setAttribute("data-bs-target", `#carouselExampleControls${index}`)
    cardSlider.children[2].setAttribute("data-bs-target", `#carouselExampleControls${index}`)
    cardSlider.id = `carouselExampleControls${index}`;
  }
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< carousel interval >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const carousels = document.querySelectorAll(".carousel")
for (let index = 0; index < carousels.length; index++) {
  const carousel = carousels[index];
  const Mycarousel = new bootstrap.Carousel(carousel, { interval: 10000 })

}

if (document.body.className == "modal-open") {
  console.log(1);
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< modal paging header >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function getScrollbarWidth () {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}
const exampleModals = document.querySelectorAll(".modal")

const header = document.querySelector(".header")

for (var i = 0; i < exampleModals.length; i++) {
  const exampleModal = exampleModals[i]
  exampleModal.addEventListener('show.bs.modal', event => {
    header.style.paddingRight = getScrollbarWidth() + "px"

  })
  exampleModal.addEventListener('hidden.bs.modal', event => {
    header.style.paddingRight = ""
  })

}




