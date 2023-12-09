
///////////////////////////Nav Bar\\\\\\\\\\\\\\\\\\\\\\\\\
const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");


searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  searchingSneakers.value="";
  filteredSneakers(sneakersInstance)
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


////////// currency display\\\\\\\

  const currencySelect = document.querySelector('.currencySelect');

  // Array of currencies to populate the dropdown
  const currency = ['CAD', 'USD', 'EURO'];

function currencySelection(){
  // Create options for each currency and add them to the dropdown
  currency.forEach(curr => {
    const option = document.createElement('option');
    option.value = curr;
    option.textContent = curr;
    currencySelect.appendChild(option);
  });

  }

  /////////////////////========= Currency Conversion
  currencySelect.addEventListener('change', currChange) 
  function currChange() {
    const selectedCurrency = this.value; 
    if (selectedCurrency == 'EURO'){
      sneakersInstance.forEach(function(sneaker){
       console.log (sneaker.convertedCurrency('EURO'))
        filteredSneakers (sneakersInstance)
      })
    }else if(selectedCurrency == 'USD'){
      sneakersInstance.forEach(function(sneaker){
        sneaker.convertedCurrency('USD') 
        filteredSneakers (sneakersInstance)
      })
    }else{
      sneakersInstance.forEach(function(sneaker){
        sneaker.convertedCurrency('CAD') 
        filteredSneakers (sneakersInstance)
      })
    }
};


currChange()
currencySelection()



/////////////////////////////// Digital Clock \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// =============3a Time
function clock(){
                
  let monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ]; 
  let dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  let today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
  today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

  
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let day = h<11 ? 'AM': 'PM';

  h = h<10? '0'+h: h;
  m = m<10? '0'+m: m;
  s = s<10? '0'+s: s;               

  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;

}let inter = setInterval(clock,400);







//////////////////////////////////////////// Section 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/////// categories
const categoriesImg = ['img/a1a.png', 'img/c1a.png', 'img/p1a.png', 'img/v1a.png', 'img/n1a.png' ]

categoriesImg.forEach( (imageUrl, index) =>{
  const imgElement = document.getElementById(`s1img${index + 1}`);
  if (imgElement) {
    imgElement.src = imageUrl;
  }
})

///////Advertisement
const displayedImage = document.getElementById('erasa');
const s1imageContainer = document.querySelector('.s1imgContainer');
const s1imagePath2 = ['img/n1a.png', 'img/n2a.png', 'img/n1a.png', 'img/p1a.png']

let i = 0

const btnPrev =  document.getElementById('left-btn')
const btnNext =  document.getElementById('right-btn')

btnNext.addEventListener('click', nextPic)
btnPrev.addEventListener('click', prevPic)

function changeImage() {
  const displayPic = s1imagePath2[i];
  displayedImage.src = displayPic;
  const scrollAmount = i * s1imageContainer.offsetWidth;
  s1imageContainer.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
  });
}

function nextPic() {
  if (i < s1imagePath2.length - 1) {
      i++;
  } else {
      i = 0;
  }
  changeImage();
}

function prevPic() {
  if (i > 0) {
      i--;
  } else {
      i = s1imagePath2.length - 1;
  }
  changeImage();
}

//////////////////////////////////////////// Section 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////////////Accordion Toggling\\\\\\\\\\\\\\\\\\\\\\\\\
const accordions = document.querySelectorAll('.heading')
const card2 = document.querySelector('.card2');


accordions.forEach( function(accordion){

accordion.addEventListener('click', activate)

function activate(){
	accordion.classList.toggle('active');
}


card2.addEventListener('click', deactivate)
function deactivate(event){
	event.stopPropagation();
}

})


//////////////////Price Range\\\\\\\\\\\\\\\\\\\\\\\\\
const priceInputs = document.querySelectorAll(".priceInput input");
const rangeInputs = document.querySelectorAll(".priceRangInput input");
const priceSlider = document.querySelector(".priceSlider .progress");

let priceGap = 1000;

priceInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInputs[0].value);
    let maxPrice = parseInt(priceInputs[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
      if (e.target.className === "min-input") {
        rangeInputs[0].value = minPrice;
        priceSlider.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
      } else {
        rangeInputs[1].value = maxPrice;
        priceSlider.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
      }
    }
  });
});

rangeInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInputs[0].value);
    let maxVal = parseInt(rangeInputs[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "min-range") {
        rangeInputs[0].value = maxVal - priceGap;
      } else {
        rangeInputs[1].value = minVal + priceGap;
      }
    } else {
      priceInputs[0].value = minVal;
      priceInputs[1].value = maxVal;
      priceSlider.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
      priceSlider.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
    }
  });
});







/////////////////////////////////////////////////FUNCTIONALITIES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


////////////filters
const filterDisplay = ['All', 'Adidas', 'Nike', 'Fila', 'Vans', 'Converse']
const filterListDisplay = document.getElementById('filterListDisplay');
let newFilteredArray = []

filterDisplay.forEach(function(item){
  
  const li = document.createElement('li');
  li.textContent=item;
  
  
  li.addEventListener('click', function () {
    const liContent = li.textContent
    newFilteredArray.length=0
        sneakersInstance.forEach(function(sneaker){
          if (liContent == sneaker.brand){
            newFilteredArray.push(sneaker)
            filteredSneakers(newFilteredArray)
          }else if(liContent == 'All'){
            filteredSneakers(sneakersInstance)
          }
        })
  });

  filterListDisplay.appendChild(li);
})


////////////filters
const filterDisplay2 = ['All', 'Male', 'Female']
const filterListDisplay2 = document.getElementById('filterListDisplay2');
let newFilteredArray2 = []

filterDisplay2.forEach(function(item){
  
  const li = document.createElement('li');
  li.textContent=item;
  
  
  li.addEventListener('click', function () {
    const liContent = li.textContent
    newFilteredArray2.length=0
        sneakersInstance.forEach(function(sneaker){
          if (liContent == sneaker.gender){
            newFilteredArray2.push(sneaker)
            filteredSneakers(newFilteredArray2)
          }else if(liContent == 'All'){
            filteredSneakers(sneakersInstance)
          }
        })
  });

  filterListDisplay2.appendChild(li);
})



////////////Price Range
const minInput = document.querySelector('.minInput');
const maxInput = document.querySelector('.maxInput')
const btnPriceRange= document.querySelector('.btnPriceRange')
const btnResetPriceRange= document.querySelector('.btnResetPriceRange')


btnPriceRange.addEventListener('click',priceRangeDisplay)

function priceRangeDisplay(){
  newFilteredArray.length=0
  sneakersInstance.forEach(function(item){
    if ( item.price >= minInput.value && item.price <= maxInput.value){
      newFilteredArray.push(item)
      filteredSneakers(newFilteredArray)
    }
  })
}

btnResetPriceRange.addEventListener('click',priceResetRange);

function priceResetRange(){
  minInput.value = 300
  maxInput.value =3500
  filteredSneakers(sneakersInstance)
}

////////////search box
const sneakerSearchBox = document.querySelector('.sneakerSearchBox');
const sneakerSearchIcon = document.querySelector('.search-icon')

sneakerSearchBox.addEventListener('keydown', searchingSneakers)

function searchingSneakers(){
  const typedSneaker = sneakerSearchBox.value

  if (event.key === 'Enter') {
  sneakersInstance.forEach(function(item){
    if (item.brand == typedSneaker || item.id == typedSneaker ){
      newFilteredArray.push(item)
      filteredSneakers(newFilteredArray)
    }else{
      failureNotification("Wrong in put check spelling (brand names are in Initcap) ")
    }
  })
  
}
}


/////====================================Product Details Page============\\\
const allHoverImages = document.querySelectorAll('.productHoverContainer div img');
const imgContainer = document.querySelector('.productImgContainer');



allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}



/////=============================slide in cart popupContainer ============\\\

const cartDetailsBtn = document.querySelector('.cartDetails');
const sideCloseBtn = document.querySelector('.sideCloseBtn');

const sidePopup = document.querySelector('.sidePopup');
//let sideMainPopup = document.querySelector('.sideMainPopup');
const sidePopupOverlay = document.querySelector('.productModalOverlay');

cartDetailsBtn.addEventListener('click', ()=>{
  
    sidePopup.style.display = 'flex';
    cartMathHome.style.display = 'block';
    sideMainPopup.style.cssText= 'animation:slide-in .5s ease; animation-fill-mode: forwards'
    sidePopupOverlay.classList.remove('productHidden')
    sideMainPopup.innerHTML=""
    sideMainPopup.appendChild(sideCloseBtn)
    sideMainPopup.appendChild(cartBox2)
    filteredCart (cartInstance)
    updateSubtotal()
})

sideCloseBtn.addEventListener('click', ()=>{
    
    sideMainPopup.style.cssText= 'animation:slide-out .5s ease; animation-fill-mode: forwards'
    
    const sOut = ()=> sidePopup.style.display= 'none';

    setTimeout(sOut, 500)
    sidePopupOverlay.classList.add('productHidden')
})





/////============================= Success Notification Slide in ============\\\

       const notificationBox = document.querySelector('.notificationBox')


            const doneClass = document.createElement('span');
            doneClass.classList.add('material-symbols-outlined');
            doneClass.classList.add('doneClass');
            doneClass.innerHTML= 'done'

            const notificationBoxText = document.createElement('div');
            
            notificationBoxText.classList.add('notificationBoxText');
            notificationBoxText.innerHTML=''

            
            const success = document.createElement('h3');
            

            const notificationMessage = document.createElement('p');
            
            const closeClass = document.createElement('closeClass');
            closeClass.classList.add('material-symbols-outlined');
            closeClass.classList.add('closeClass');
            closeClass.innerHTML= 'close'

            notificationBox.appendChild(doneClass);
            notificationBox.appendChild(notificationBoxText);
            notificationBox.appendChild(success);
            notificationBox.appendChild(notificationMessage);
            notificationBox.appendChild(closeClass);

            let action

            closeClass.addEventListener('click', endHappening);
            function endHappening(){
                notificationBox.classList.remove('notificationActive')
            }

            function succesNotification(successMessage){
              notificationBox.classList.add('notificationActive');
              action=setTimeout(function(){
              notificationBox.classList.remove('notificationActive')
              }, 3000 )
              
              success.textContent = ''
              notificationMessage.innerHTML= '';
              success.textContent = 'Success'
          notificationMessage.innerHTML= successMessage;
          }




          /////=============================Error Notification2 Slide in ============\\\

          const notificationBox2 = document.querySelector('.notificationBox2')


            const dangerClass = document.createElement('span');
            dangerClass.classList.add('material-symbols-outlined');
            dangerClass.classList.add('dangerClass');
            dangerClass.innerHTML= 'dangerous'

            const notificationBoxText2 = document.createElement('div');
            
            notificationBoxText2.classList.add('notificationBoxText2');
            notificationBoxText2.innerHTML=''

            
            const failure = document.createElement('h3');
            

            const notificationMessage2 = document.createElement('p');
            
            

            notificationBox2.appendChild(dangerClass);
            notificationBox2.appendChild(notificationBoxText);
            notificationBox2.appendChild(failure);
            notificationBox2.appendChild(notificationMessage2);

            

            closeClass.addEventListener('click', endHappening);
            function endHappening(){
                notificationBox.classList.remove('notificationActive')
            }

            function failureNotification(failureMessage){
              notificationBox2.classList.add('notificationActive');
              action=setTimeout(function(){
              notificationBox2.classList.remove('notificationActive')
              }, 3000 )
              
              failure.textContent = ''
              notificationMessage2.innerHTML= '';
              failure.textContent = 'Error'
          notificationMessage2.innerHTML= failureMessage;
          }