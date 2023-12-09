



///////////////////////////class (Objects)\\\\\\\\\\\\\\\\\\\\\\\\\
class StoreItem {
    constructor(id, name, price, brand, gender, stars, quantity, image1, image2, image3, image4, image5, shipping) {
      this.id = id
      this.name = name;
      this.originalPrice = price;
      this.price = price;
      this.symbol = '';
      this.brand = brand;
      this.gender = gender;
      this.stars = stars;
      this.quantity = quantity;
      this.image1 = image1;
      this.image2 = image2;
      this.image3 = image3;
      this.image4 = image4;
      this.image5 = image5;
      this.shipping = shipping
      
    }

    convertedCurrency(rate){
      
      switch(rate){
        case 'USD' :
          this.price = Math.floor(this.originalPrice * 0.74);
          this.symbol = '$';
          break;
        case 'EURO':
          this.price = Math.floor(this.originalPrice * 0.68);
          this.symbol = '€';
          break;
        case 'CAD':
          this.price = this.originalPrice;
          this.symbol = 'CAD';
          break;
    }
    }
  
   getProductDetails() {
        return `${this.name}- ${this.gender} sneakers- from ${this.brand} - $${this.price} - ⭐${this.stars}`;
      }
  
    }

    
class CartItem{
    constructor(id, name, originalPrice, brand, quantity, image1, shipping, cartQuantity) {
      this.id = id;
      this.name = name;
      this.originalPrice = originalPrice;
      this.price = originalPrice;
      this.symbol = '';
      this.brand = brand;
      this.quantity = quantity;
      this.image1 = image1;
      this.shipping = shipping;
      this.cartQuantity= cartQuantity;
      this.cartingPrice= 0;
    
    }


    convertedCurrency(rate){
      
      switch(rate){
        case 'USD' :
          this.price = Math.floor(this.originalPrice * 0.74);
          this.symbol = '$';
          break;
        case 'EURO':
          this.price = Math.floor(this.originalPrice * 0.68);
          this.symbol = '€';
          break;
        case 'CAD':
          this.price = this.originalPrice;
          this.symbol = 'CAD';
          break;
    }
    }

    getTotalPrice() {
      this.cartingPrice= this.price * this.cartQuantity; // Update calC based on the quantity
    }
  
    }
  
  
class ReviewItem{
    constructor(review, rating) {
    this.review = review;
    this.rating = rating;
    }

  }


////========================================= Question 2 a & b
  const sneakersInstance= [];
  const cartInstance= [];
  const orderInstance= [];

  const adidas1 = new StoreItem(202301001, 'Powerlift 5 Weightlifting', 600,'Adidas', 'Male', 4, 20, 'img/a1a.png', 'img/a1b.png','img/a1c.png','img/a1d.png','img/a1e.png', 10);
  const adidas2 = new StoreItem(202301002, 'Ultraboost 23', 1200,'Adidas', 'Female', 2, 10, 'img/a2a.png','img/a2b.png','img/a2c.png','img/a2d.png','img/a2e.png', 30);
  const converse1 = new StoreItem(202301003, 'Chuck Taylor All Star', 900,'Converse', 'Male', 1, 10,'img/c1a.png', 'img/c1b.png','img/c1c.png','img/c1d.png','img/c1e.png', 700);
  const converse2 = new StoreItem(202301004, 'Chuck 70 Vintage Canvas', 5000,'Converse', 'Female', 5, 10, 'img/c2a.png','img/c2b.png','img/c2c.png','img/c2d.png','img/c2e.png', 20);
  const fila1 = new StoreItem(202301005, 'Grant Hill 2', 1200,'Fila', 'Male', 4, 10, 'img/f1a.png', 'img/f1b.png','img/f1c.png','img/f1d.png','img/f1e.png', 50);
  const fila2 = new StoreItem(202301006, 'Oakmont Tr Mid', 900,'Fila', 'Female', 5, 10, 'img/f2a.png','img/f2b.png','img/f2c.png','img/f2d.png','img/f2e.png', 4);
  const nike1 = new StoreItem(202301007, 'Air Force', 1500,'Nike', 'Male', 2, 10, 'img/n1a.png', 'img/n1b.png','img/n1c.png','img/n1d.png','img/n1e.png', 9);
  const nike2 = new StoreItem(202301008, 'Air Max', 1200,'Nike', 'Female', 3, 10, 'img/n2a.png','img/n2b.png','img/n2c.png','img/n2d.png','img/n2e.png', 3);
  const puma1 = new StoreItem(202301009,'Blazers', 700,'Nike', 'Male', 3, 10, 'img/p1a.png', 'img/p1b.png','img/p1c.png','img/p1d.png','img/p1e.png', 7);
  const puma2 = new StoreItem(202301010, 'Suede', 700,'Puma', 'Male', 3, 10, 'img/p2a.png','img/p2b.png','img/p2c.png','img/p2d.png','img/p2e.png', 11);
  const vans1 = new StoreItem(202301011,'Vans Old Skool Trainers', 9700,'Vans', 'Male', 5, 10, 'img/v1a.png', 'img/v1b.png','img/v1c.png','img/v1d.png','img/v1e.png', 12);
  const vans2 = new StoreItem(202301012, 'Vans Authentic Canvas', 900,'Vans', 'Female', 5, 10, 'img/v2a.png','img/v2b.png','img/v2c.png','img/v2d.png','img/v2e.png', 9);
  const nb1 = new StoreItem(202301013, '550', 900,'New balance', 'Female', 5, 10, 'img/nb1a.png','img/nb1b.png','img/nb1c.png','img/nb1d.png','img/nb1e.png', 9);
  const nb2 = new StoreItem(202301014, '574', 7900,'Vans', 'Male', 5, 10, 'img/nb2a.png','img/nb2b.png','img/nb2c.png','img/nb2d.png','img/nb2e.png', 9);
  const nb3 = new StoreItem(202301014, '990v3', 4500,'Vans', 'Male', 5, 10, 'img/nb3a.png','img/nb3b.png','img/nb3c.png','img/nb3d.png','img/nb3e.png', 9);
////=================================Question 3b Populate the store items
  function populateSneakerArray() {
  // Push all objects into sneakerArray
  sneakersInstance.push(adidas1, adidas2, converse1, converse2, fila1, fila2, nike1, nike2, puma1, puma2, vans1, vans2, nb1, nb2, nb3)
  return sneakersInstance
  }


  const cart1 = new CartItem('AB012023', converse2.name, converse2.originalPrice, converse2.brand, converse2.quantity, converse2.image1, converse2.shipping, 1, converse2.symbol)
  const cart2 = new CartItem('AB012024', puma1.name, puma1.originalPrice, puma1.brand, puma1.quantity, puma1.image1, puma1.shipping, 1, puma1.symbol)
  const cart3 = new CartItem('AB012025', vans2.name, vans2.originalPrice, vans2.brand, vans2.quantity, vans2.image1, vans2.shipping, 1, vans2.symbol)
  cartInstance.push(cart1, cart2, cart3)
  
///=================================question 3d  display the cart items array
  function populateCartArray(){
  return cartInstance
}  
  ////=================================Question 3b Populate the store items
  populateSneakerArray()
  






