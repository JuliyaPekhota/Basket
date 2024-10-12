const container = document.querySelector(".container");
const wine = document.querySelector("#wine");
const milk = document.querySelector("#milk");
const jam = document.querySelector("#jam");
const cheese = document.querySelector("#cheese");
const meat = document.querySelector("#meat");
const meat_leg = document.querySelector("#meat_leg");
const sauce = document.querySelector("#sauce");
const pineapple = document.querySelector("#pineapple");
const bananas = document.querySelector("#bananas");
const apple = document.querySelector("#apple");
const green = document.querySelector("#green");

let currentDroppable = null;
let theTarget = null;
let numberProductsInBasket = 0;
let shiftX, shiftY;

  function onWineDown(event) {
    event.preventDefault();
    theTarget = event.target;

    shiftX = event.clientX - theTarget.getBoundingClientRect().left;
    shiftY = event.clientY - theTarget.getBoundingClientRect().top;

    theTarget.setPointerCapture(event.pointerId);

    theTarget.onpointermove = onWineMove;

    theTarget.onpointerup = () => {
      theTarget.onpointermove = null;
      theTarget.onpointerup = null;
    }
  };

  function onWineMove(event) {
    let newLeft = event.clientX - shiftX - container.getBoundingClientRect().left;
    let newTop = event.clientY - shiftY - container.getBoundingClientRect().top;

    if (newLeft < 0) {
      newLeft = 0;
    }

    if (newTop < 0) {
        newTop = 0;
    }
    
    let bottomEdge = container.offsetHeight - theTarget.offsetHeight;
    if (newTop > bottomEdge) {
        newTop = bottomEdge;
    }

    let rightEdge = container.offsetWidth - theTarget.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    theTarget.style.left = newLeft + 'px';
    theTarget.style.top = newTop + 'px';

    theTarget.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    theTarget.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.shopping_cart');
 
    if (currentDroppable != droppableBelow) {
      currentDroppable = droppableBelow;
      if (currentDroppable) {
        insideDragElement();

      }
    }
  };

  function addBuyButton() {
    let a = document.createElement('a');
    const linkText = document.createTextNode("Оплатить корзину");
    a.appendChild(linkText);
    a.href = "https://lavka.yandex.ru/";
    a.classList.add("buttonBuy");
    container.appendChild(a);
  }

  function insideDragElement() {
    theTarget.hidden = true;
    theTarget.onpointermove = null;
    theTarget.onpointerup = null;
    theTarget.style.transform = "scale(1.4)";

    if (theTarget.id === "wine") {
        theTarget.style.left = '90px';
        theTarget.style.top = '406px';
    }
    if (theTarget.id === "milk") {
        theTarget.style.left = '124px';
        theTarget.style.top = '445px';
    }
    if (theTarget.id === "jam") {
      theTarget.style.left = '140px';
      theTarget.style.top = '500px';
    }
    if (theTarget.id === "cheese") {
      theTarget.style.left = '210px';
      theTarget.style.top = '515px';
    }
    if (theTarget.id === "meat") {
      theTarget.style.left = '90px';
      theTarget.style.top = '495px';
    }
    if (theTarget.id === "meat_leg") {
      theTarget.style.left = '140px';
      theTarget.style.top = '495px';
    }
    if (theTarget.id === "sauce") {
      theTarget.style.left = '170px';
      theTarget.style.top = '495px';
    }
    if (theTarget.id === "pineapple") {
      theTarget.style.left = '90px';
      theTarget.style.top = '465px';
    }
    if (theTarget.id === "bananas") {
      theTarget.style.left = '140px';
      theTarget.style.top = '500px';
    }
    if (theTarget.id === "apple") {
      theTarget.style.left = '170px';
      theTarget.style.top = '510px';
    }
    if (theTarget.id === "green") {
      theTarget.style.left = '220px';
      theTarget.style.top = '490px';
    }

    theTarget.hidden = false;
    numberProductsInBasket ++;

    if (numberProductsInBasket === 3) {
      addBuyButton();
    }
  }

wine.onpointerdown = onWineDown;
wine.ondragstart = () => false;
milk.onpointerdown = onWineDown;
milk.ondragstart = () => false;
jam.onpointerdown = onWineDown;
jam.ondragstart = () => false;
cheese.onpointerdown = onWineDown;
cheese.ondragstart = () => false;
meat.onpointerdown = onWineDown;
meat.ondragstart = () => false;
meat_leg.onpointerdown = onWineDown;
meat_leg.ondragstart = () => false;
sauce.onpointerdown = onWineDown;
sauce.ondragstart = () => false;
pineapple.onpointerdown = onWineDown;
pineapple.ondragstart = () => false;
bananas.onpointerdown = onWineDown;
bananas.ondragstart = () => false;
apple.onpointerdown = onWineDown;
apple.ondragstart = () => false;
green.onpointerdown = onWineDown;
green.ondragstart = () => false;