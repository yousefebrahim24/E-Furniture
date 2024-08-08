let itemsObj = [
    {
        id:1,
        img:'img/product1.jpg',
        rate:'img/rating-5.png',
        name:'Grey Sofa',
        priceCent: (400)*100,
        offer:30,
        priceTotal: (400)*(30/100)
    },
    {
        id:2,
        img:'img/product2.jpg',
        rate:'img/rating-5.png',
        name:'Outdoor Lounge',
        priceCent:(299.95)*100,
        offer:20,
        priceTotal: (299.95)*(20/100)
    },
    {
        id:3,
        img:'img/product12.jpg',
        rate:'img/rating-5.png',
        name:'Black Bedside',
        priceCent:(200.00)*100,
        offer:10,
        priceTotal: (200/100)*(10/100)
    },
    {
        id:4,
        img:'img/product10.jpg',
        rate:'img/rating-5.png',
        name:'Outdoor Lounge',
        priceCent:(150.56)*100,
        offer:20,
    },
    {
        id:5,
        img:'img/product8.jpg',
        rate:'img/rating-5.png',
        name:'Chair',
        priceCent:(100.55)*100,
        offer:15,
    },
    {
        id:6,
        img:'img/product1.jpg',
        rate:'img/rating-5.png',
        name:'Grey Sofa',
        priceCent: (400)*100,
        offer:30,
    },
    {
        id:7,
        img:'img/product2.jpg',
        rate:'img/rating-5.png',
        name:'Outdoor Lounge',
        priceCent:(299.95)*100,
        offer:20,

    },
    {
        id:8,
        img:'img/product12.jpg',
        rate:'img/rating-5.png',
        name:'Black Bedside',
        priceCent:(200.00)*100,
        offer:10,
    }
];
console.log(itemsObj)

let mainItems = document.getElementById('mainItems');
let mainHtml = '';

function displayItems(){
    itemsObj.forEach(function(item){
        mainHtml+=`
        <div class="product">
            <img src="${item.img}" width="273px">
            <div class='info'>
                <p class="offer">${item.offer}%</p>
                <i class="fa fa-heart" aria-hidden="true"></i>
                <h5>${item.name}</h5>
                <p class="price">$  ${(item.priceCent / 100).toFixed(2)}</p>
                <img src="${item.rate}" width="110px" id="rate">
                <h6 class='addAlert'></h6>
            </div>
            <button type="button" class="btn btn-secondary">Add To Cart</button>
        </div>
        `;
    });

    if(mainItems){
        mainItems.innerHTML= mainHtml;
    }
}
displayItems();



let cartIcon = document.getElementById('cartIcon');
var addBtn = document.querySelectorAll('.product .btn');
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let cartHtml = '';
console.log(addBtn)
let container= document.getElementById('cartContent')
let itemsCount = document.getElementById('exampleModalLabel')
console.log(itemsCount)


// function to push items to array and save it in local storage
function addTo(){
    for(let i=0; i<addBtn.length; i++){
        addBtn[i].addEventListener('click' , function(){
            console.log('item added')
            // push data
            cartItems.push(
                {
                    id: itemsObj[i].id,
                    img: itemsObj[i].img,
                    offer: itemsObj[i].offer,
                    priceCent: itemsObj[i].priceCent,
                    name: itemsObj[i].name
                }
            );
            // local storage 
            localStorage.setItem('cart', JSON.stringify(cartItems));
            console.log(cartItems)
             // Update the cart immediately
            cartCheck();
        });
    }
}
console.log(cartItems);
addTo();



// Function to check if the cart is empty or not
function cartCheck() {
    if (cartItems.length === 0) {
        console.log('cart empty');
        cartHtml = `
            <h5>Your Cart Is Empty.</h5> <button type="button" class="btn btn-outline-secondary" id='btn'>Shopping Now</button>
        `;
        if (container) {
            container.innerHTML = cartHtml;
            itemsCount.innerHTML= `Cart Items: (${cartItems.length})`;
        }
        // function to go to shopping page
        document.querySelector('#btn').addEventListener('click', function(){
            location.href = '#mainItems';
            console.log('moved')
        });
    } else {
        location.href = '#cartContent';
        // if there are items stored in local storage
        cartHtml = ''; // Clear previous content
        for(let i=0; i<cartItems.length; i++){
            // calculate total price before and after
            cartHtml += `
            <div id="itemInCart">
                <img src="${cartItems[i].img}" width="100px">
                <p class='name'>${cartItems[i].name}</p>
                <p>${(cartItems[i].priceCent / 100).toFixed(2)}</p>
                <p>${((cartItems[i].priceCent / 100) * (cartItems[i].offer / 100)).toFixed(2)}</p>
                <button type="button" class="btn btn-danger">Remove</button>
            </div>
        `;
        }
        if (container) {
            container.innerHTML = cartHtml;
            itemsCount.innerHTML= `Cart Items: (${cartItems.length})`;
            removeItem();
        }
    }
}

function removeItem() {
    let removeBtn = document.querySelectorAll('#itemInCart .btn');
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener('click', function() {
            console.log('removed')
            cartItems.splice(i, 1);
            console.log(cartItems)
            localStorage.setItem('cart', JSON.stringify(cartItems));
            cartHtml = '';
            cartCheck();
        });
    }
}

cartCheck();



// add like to product
function addLike() {
    let icons = document.querySelectorAll('.product i');
    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            console.log('clicked')
            icon.classList.toggle('like');
        });
    });
}
addLike();



// add to cart text
function addText() {
    let addAlert = document.querySelectorAll('.addAlert')
    console.log(addAlert);
    for (let i = 0; i < addBtn.length; i++) {
        addBtn[i].addEventListener('click', function() {
            addAlert[i].innerHTML = 'Product Added To Cart';
        });
    }
}
addText();
