////////////////////////// Get the container where you want to append the watch products
const section2 = document.getElementById('section-2')


function filteredSneakers (snikarray){
  const boxContainer = document.querySelector('.boxContainer');
  boxContainer.innerHTML = '';


snikarray.forEach(function(sneaker, index){

//===============Product top section============\\ 

//class="box"
const box= document.createElement('div');
box.classList.add('box');

//class="boxImage"
const boxImage= document.createElement('div');
boxImage.classList.add('boxImage');

//class="imgBoxImage"
const imgBoxImage= document.createElement('img');
imgBoxImage.src = sneaker.image1;
imgBoxImage.alt = sneaker.name;
imgBoxImage.classList.add('imgBoxImage');

boxImage.appendChild(imgBoxImage)

//===============Product middle============\\ 
//class="productInfo"
const productInfo= document.createElement('div');
productInfo.classList.add('productInfo')

//class="titleHeading"
const titleHeading= document.createElement('div');
titleHeading.classList.add('titleHeading');

// class="productInfo"\\
const productBrand = document.createElement('h3');
productBrand.classList.add('productBrand');
productBrand.textContent = sneaker.brand;

const productID = document.createElement('h3');
productID.classList.add('productBrand');
productID.textContent = sneaker.id;


//class="title"
const title= document.createElement('h3');
title.classList.add('title')
title.textContent = sneaker.name;

//class="title"
const subInfo= document.createElement('div');
subInfo.classList.add('subInfo')

//class="price"
const price= document.createElement('div');
price.classList.add('price')
price.textContent = ` ${sneaker.symbol} ${sneaker.price}`;

//class="star"
const stars= document.createElement('div');
stars.classList.add('stars')

for (let i = 0; i < sneaker.stars; i++) {
  const starIcon = document.createElement('i');
  starIcon.classList.add('fas', 'fa-star');
  stars.appendChild(starIcon);
}

subInfo.appendChild(price);
subInfo.appendChild(stars);
productInfo.appendChild(titleHeading);
productInfo.appendChild(subInfo);
titleHeading.appendChild(productBrand);
titleHeading.appendChild(title);
titleHeading.appendChild(productID);




//===============Product buttom============\\ 

// class="productOverlay"\\
const productOverlay = document.createElement('div');
productOverlay.classList.add('productOverlay');

//class="fas fa-shopping-cart"
const shoppingCart = document.createElement('a');
  shoppingCart.href = '#'; 
  shoppingCart.classList.add('fas', 'fa-shopping-cart');
  shoppingCart.style.setProperty('--i', 1);


/////////fas fa-heart\\\\\\\\
const heart = document.createElement('a');
heart.href = '#'; // Set appropriate href
heart.classList.add('fas', 'fa-heart');
heart.style.setProperty('--i', 2);


 /////////fas fa-search\\\\\\\\
const search = document.createElement('a');
search.href = '#'; // Set appropriate href
search.classList.add('fa-solid', 'fa-eye');
search.style.setProperty('--i', 3);


/////=============add to cart
shoppingCart.addEventListener('click', AddToCart)

function AddToCart(){
  cartInstance.push(sneaker)
succesNotification("Added to Cart")
//populateCartArray()
}


// arranging the icons \\
productOverlay.appendChild(shoppingCart);
productOverlay.appendChild(heart);
productOverlay.appendChild(search);

// Assemble elements
box.appendChild(boxImage);
box.appendChild(productInfo);
box.appendChild(productOverlay);


boxContainer.appendChild(box);
///////////================= PRODUCT MODAL============\\\\\\\\\\\\
//////////////product Modal
const productMainWrapper = document.querySelector('.productMainWrapper')
const productContainer = document.querySelector('.productContainer')
const productModalOverlay = document.querySelector('.productModalOverlay')
const btnCloseProductContainer = document.querySelector('.closeProductContainer')
const productName = document.querySelector('.productName')
const productPrice = document.querySelector('.productPrice')
const productDescription = document.querySelector('.productDescription')
//const productHoverContainer = document.querySelector('.productHoverContainer')
//const productImgContainer = document.querySelector('.productImgContainer')
// Clear previous images before displaying new ones

heart.addEventListener('click', function(){
  succesNotification('Added to your Wish-List')
}
)


////============= product modal
search.addEventListener('click',showProductModal)
function showProductModal(){

  const img0 = document.querySelector('.img0');
  const img1 = document.querySelector('.img1');
  const img2 = document.querySelector('.img2');
  const img3 = document.querySelector('.img3');
  const img4 = document.querySelector('.img4');
  const img5 = document.querySelector('.img5');
  img0.src= sneaker.image1
  img1.src= sneaker.image1
  img2.src= sneaker.image2
  img3.src= sneaker.image3
  img4.src= sneaker.image4
  img5.src= sneaker.image5

  //// modal info
productName.textContent= sneaker.name;
productPrice.innerHTML= sneaker.price;
productDescription.innerHTML = sneaker.getProductDetails()

  productMainWrapper.classList.remove('productHidden');
  productContainer.classList.remove('productHidden');
  productModalOverlay.classList.remove('productHidden');
}


btnCloseProductContainer.addEventListener('click', closeProductModal)
function closeProductModal(){
  productMainWrapper.classList.add('productHidden');
  productContainer.classList.add('productHidden');
  productModalOverlay.classList.add('productHidden');
}

})

}


filteredSneakers (sneakersInstance)






///==================================display cart


const sidePopupContent =document.querySelector('.sidePopupContent')
const sideMainPopup =document.querySelector('.sideMainPopup')
//sideMainPopup.innerHTML=""
let cartGrandTotal = 0 
let cartSubTotal = 0
let cartTaxAmount = 0


function filteredCart (cartsArray){
  
cartsArray.forEach(function(cartItm, index){
    
    //class="cartBox"
const cartBox= document.createElement('div');
cartBox.classList.add('cartBox');

 //class="cartimg"
 const cartimg= document.createElement('div');
 cartimg.classList.add('cartimg');
 const cartimgIMG= document.createElement('img');
 cartimgIMG.classList.add('cartimgIMG')
 cartimgIMG.src= cartItm.image1
 cartimg.appendChild(cartimgIMG)


//class="cartProductDetail"
const cartProductDetail= document.createElement('div');
cartProductDetail.classList.add('cartProductDetail');
const PcartProductDetail= document.createElement('p');
PcartProductDetail.innerHTML= cartItm.brand
cartProductDetail.appendChild(PcartProductDetail);


//class="cartPrice"
const cartPrice= document.createElement('div');
cartPrice.classList.add('cartPrice')
const PcartPrice= document.createElement('p');
const totalPcartPrice= document.createElement('p');
PcartPrice.innerHTML = ` Unit Price: ${cartItm.symbol} ${cartItm.price}`
cartPrice.appendChild(PcartPrice)
cartPrice.appendChild(totalPcartPrice)

//class="cartSpinner"
const cartSpinner = document.createElement('div');
cartSpinner.classList.add('cartSpinner');
const cartIncrement = document.createElement('span');
cartIncrement.classList.add('cartIncrement');
cartIncrement.textContent = '+';

const cartDecrement = document.createElement('span');
cartDecrement.classList.add('cartDecrement');
cartDecrement.textContent = '-';

const spinnerBox = document.createElement('div');
spinnerBox.id = 'spinnerBox';

const spanSpinner = document.createElement('span');
spanSpinner.textContent= 1;
spinnerBox.appendChild(spanSpinner)

cartSpinner.appendChild(cartIncrement);
cartSpinner.appendChild(cartDecrement);
cartSpinner.appendChild(spinnerBox);



////////////////spinner 
              let maxNum = 50;
              let calC;
              cartItm.cartQuantity = 1;
              let originalPrice = cartItm.price; // Store the original price
              

              cartIncrement.addEventListener('click', () => {
                if (spanSpinner.textContent < maxNum) {
                  cartItm.cartQuantity += 1;
                  spanSpinner.textContent = cartItm.cartQuantity;
                  calC = originalPrice * cartItm.cartQuantity; // Update price based on the quantity
                  totalPcartPrice.innerHTML = ` Total Price: $${calC}` // Update the displayed price
                  
                  updateSubtotal()
                }
              });
              
              cartDecrement.addEventListener('click', () => {
                if (spanSpinner.textContent > 1) {
                  cartItm.cartQuantity -= 1;
                  spanSpinner.textContent = cartItm.cartQuantity;
                  calC = originalPrice * cartItm.cartQuantity; // Update price based on the quantity
                  totalPcartPrice.innerHTML = ` Total Price: $${calC}`// Update the displayed price
                 
                  updateSubtotal()
                }
              });

          

//class="cartDecision"
const cartDecision = document.createElement('div');
cartDecision.classList.add('cartDecision');

const submitCart = document.createElement('span');
submitCart.classList.add('material-symbols-outlined');
submitCart.textContent = 'check_circle';


const deleteCart = document.createElement('span');
deleteCart.classList.add('material-symbols-outlined');
deleteCart.textContent = 'delete';



cartDecision.appendChild(submitCart)
cartDecision.appendChild(deleteCart)



cartBox.appendChild(cartimg)
cartBox.appendChild(cartProductDetail)
cartBox.appendChild(cartPrice)
cartBox.appendChild(cartSpinner)
cartBox.appendChild(cartDecision)
sideMainPopup.appendChild(cartBox);




//==========deleting from cart
deleteCart.addEventListener('click', cartDelete)
function cartDelete(){
  cartInstance.splice(index,1)

    cartDecision.removeChild(submitCart)
    cartDecision.removeChild(deleteCart)
    cartBox.removeChild(cartimg)
    cartBox.removeChild(cartProductDetail)
    cartBox.removeChild(cartPrice)
    cartBox.removeChild(cartSpinner)
    cartBox.removeChild(cartDecision)
    sideMainPopup.removeChild(cartBox);
    spinnerBox.removeChild(spanSpinner)
    cartSpinner.removeChild(cartIncrement);
    cartSpinner.removeChild(cartDecrement);
    cartSpinner.removeChild(spinnerBox);
    cartPrice.removeChild(PcartPrice)
    cartPrice.removeChild(totalPcartPrice)
    cartProductDetail.removeChild(PcartProductDetail);
    cartimg.removeChild(cartimgIMG)
    updateSubtotal()
    succesNotification("Deleted From Cart")

}

//========================Make purchase
submitCart.addEventListener('click', makePurchase)

function makePurchase(){
  orderInstance.push(cartItm)

  cartDecision.removeChild(submitCart)
  cartDecision.removeChild(deleteCart)
  cartBox.removeChild(cartimg)
  cartBox.removeChild(cartProductDetail)
  cartBox.removeChild(cartPrice)
  cartBox.removeChild(cartSpinner)
  cartBox.removeChild(cartDecision)
  sideMainPopup.removeChild(cartBox);
  spinnerBox.removeChild(spanSpinner)
  cartSpinner.removeChild(cartIncrement);
  cartSpinner.removeChild(cartDecrement);
  cartSpinner.removeChild(spinnerBox);
  cartPrice.removeChild(PcartPrice)
  cartPrice.removeChild(totalPcartPrice)
  cartProductDetail.removeChild(PcartProductDetail);
  cartimg.removeChild(cartimgIMG)

  updateSubtotal()
succesNotification(`Your Order was successfull`)
console.log(orderInstance)
}


})


}


//////////////////////////////ORDER CALCULATION BOX
const currencySelect2 = document.createElement('select');
currencySelect2.classList.add('currencySelect');
const currencies = ['CAD', 'USD', 'EURO'];

function currencySelection2(){
  // Create options for each currency and add them to the dropdown
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    currencySelect2.appendChild(option);
});
}
currencySelection2()


currencySelect2.addEventListener('change', currChange2) 

function currChange2() {
  const selectedCurrency = this.value; 
  if (selectedCurrency == 'EURO'){
    cartInstance.forEach(function(cartItm){
     cartItm.convertedCurrency('EURO')
     sideMainPopup.innerHTML=""
    sideMainPopup.appendChild(sideCloseBtn)
    sideMainPopup.appendChild(cartBox2)
      filteredCart(cartInstance)
      console.log(cartInstance)
    })
  }else if(selectedCurrency == 'USD'){
    cartInstance.forEach(function(cartItm){
      cartItm.convertedCurrency('USD') 
      sideMainPopup.innerHTML=""
    sideMainPopup.appendChild(sideCloseBtn)
    sideMainPopup.appendChild(cartBox2)
      filteredCart (cartInstance)
    })
  }else{
    cartInstance.forEach(function(cartItm){
      sideMainPopup.innerHTML=""
    sideMainPopup.appendChild(sideCloseBtn)
    sideMainPopup.appendChild(cartBox2)
      cartItm.convertedCurrency('CAD') 
      filteredCart (cartInstance)
    })
  }
};

const cartMathHome = document.querySelector('.cartMathHome');
const cartBox2 = document.createElement('div')
cartBox2.classList.add('cartBox2')
const CBh2 = document.createElement('h3')
const CBh3 = document.createElement('h3')
const CBh1 = document.createElement('h3')
cartBox2.appendChild(currencySelect2)
cartBox2.appendChild(CBh2)
cartBox2.appendChild(CBh1)
cartBox2.appendChild(CBh3)

cartMathHome.appendChild(cartBox2)

/////////////////Add SubTOTAL\\\\\\\\\\\\\\\\\\

function updateSubtotal() {

cartSubTotal = 0

  if (cartInstance.length < 1){
    failureNotification(`Your cart is empty`)
  }else{
  cartInstance.forEach(function (cartItem) {
    
    cartItem.getTotalPrice() 
    cartSubTotal = cartSubTotal + cartItem.cartingPrice;
  });

  cartTaxAmount = cartSubTotal * 0.13
  cartGrandTotal = cartTaxAmount + cartSubTotal
  CBh2.innerHTML = `Total: ${cartSubTotal}`
  CBh3.innerHTML = `Grand Total: ${cartGrandTotal}`
  CBh1.innerHTML = `Tax: 13% (${cartTaxAmount})`

  
} 
}
updateSubtotal()






