const products = [{
    image: 'images/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars:4.5,
        count:87,
    },
    priceCents: 1090,
    
}, {
   image: 'images/intermediate-composite-basketball.jpg',
   name: 'Intermediate Size Basketball',
   rating: {
    stars:3,
    count:127,
   },
   priceCents: 2095,

}, {
    image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars:4,
        count:157,
    },
    priceCents:1225,
}, {
    image:'images/men-cozy-fleece-zip-up-hoodie-red.jpg',
    name: 'Men Cozy Fleece Zip-up Hoodie Red',
    rating: {
        stars:4,
        count:163,
    },
    priceCents:975,
}, {
    image:'images/backpack.jpg',
    name:'Backpack',
    rating: {
        stars:4,
        count:187,
    },
    priceCents:2025,
}, {
    image: 'images/black-2-slot-toaster.jpg',
    name: 'Black 2 Slot Toaster',
    rating: {
        stars:4.5,
        count:176,
    },
    priceCents:3525,
}, {
    image:'images/size-5-football.png',
    name:'Size-5 Football',
    rating: {
        stars:5.0,
        count:189,
    },
    priceCents:1242,
}, {
    image:'images/bathroom-rug.jpg',
    name: 'Bathroom Rug',
    rating: {
        stars:4.5,
        count:197,
    },
    priceCents:2147,
}, {
    image: 'images/coffeemaker-with-glass-carafe-black.jpg',
    name: 'Coffeemaker With Glass Carafe Black',
    rating: {
        stars:4.5,
        count:107,
    },
    priceCents:7999,
}, {
    image: 'images/men-chino-pants-beige.jpg',
    name: 'Men Chino Pants Beige',
    rating: {
        stars:4,
        count:167,
    },
    priceCents:6325,
}, {
    image: 'images/blackout-curtains-black.jpg',
    name: 'Blackout Curtains Black',
    rating: {
        stars:3.5,
        count: 133,
    },
    priceCents:5275,
}, {
    image: 'images/knit-athletic-sneakers-pink.webp',
    name: 'Knit Athletic Sneakers Pink',
    rating: {
        stars:3.5,
        count:149,
    },
    priceCents:4035,
}];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
<div class="product-image-container">
<img class="product-image" src="${product.image}">
</div>

<div class="product-name limit-text-2-lines">${product.name} </div>
<div class="product-rating-container">
    <img class="product-rating-stars" src="images/icons/ratings/rating-${product.rating.stars * 10 }.png "> 
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>
<div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

<div class="product-quantity-container">
<select>
<option selected value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option> 
</select>
</div>
<div class="product-spacer"></div>
<div class="added-to-cart"><img src="images/icons/checkmark.png">Added</div>
<button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${product.name}">Add to Cart</button>
</div>`;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', () => {
       const productName = button.dataset.productName;

      let matchingItem;

    cart.forEach((item) => {
        if (productName === item.productName) {
            matchingItem = item;
        }
    });

      if(matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
            productName: productName,
            quantity: 1
           });
      }
       
      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });
     
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});