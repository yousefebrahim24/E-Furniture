let sofaCards= document.getElementById('sofaCards');
let cardHtml = '';

let sofaObj = [
    {
        id :1,
        img : 'img/sofa-2.png'
    },
    {
        id :2,
        img : 'img/sofa-1.png'
    }
];
//console.log(sofaObj);

function displayCards(){
    sofaObj.forEach(function(card){
        cardHtml+=`
           <div class="sofaCard">
            <div>
                <p>30% offer</p>
                <h5>Free Shipping</h5>
                <h6>Attractive Natural Furniture</h6>
                <button type="button" class="btn btn-danger">Shop Now</button>
            </div>
            <img src="${card.img}" width="180px">
        </div>
        `;
    });

    if(sofaCards){
        sofaCards.innerHTML = cardHtml;
    }
}
displayCards();


let shopCards= document.getElementById('shoppingCards')
let shoppingHtml = '';

let shoppingObj = [
    {
        id:1,
        img:'img/category-1.jpg',
        text:'BEDROOM'
    },
    {
        id:2,
        img:'img/category-2.jpg',
        text:'MATTRESSES'
    },
    {
        id:3,
        img:'img/category-3.jpg',
        text:'OFFICE'
    },
    {
        id:4,
        img:'img/category-4.jpg',
        text:'OUTDOOR'
    },
    {
        id:5,
        img:'img/category-5.jpg',
        text:'LOUNGES & SOFAS'
    },
    {
        id:6,
        img:'img/category-6.jpg',
        text:'LIVING & DINING'
    }
];

function displayCategory(){
    shoppingObj.forEach(function(card){
        shoppingHtml+=`
        <div class="shopCard">
            <img src="${card.img}" width="330px">
            <div class='overlay'>
             <p>${card.text}</p>
            </div>
        </div>
    `;
    });

    if(shopCards){
        shopCards.innerHTML= shoppingHtml;
    }
}


displayCategory();



let topItems = document.getElementById('topItems');
let topHtml = '';

let topObj= [
    {
        id:1,
        img:'img/item4.jpg',
        text:'BEST SELLING'
    },
    {
        id:2,
        img:'img/item2.jpg',
        text:'BEST SELLING'
    },
    {
        id:3,
        img:'img/item3.jpg',
        text:'BEST SELLING'
    },
    {
        id:4,
        img:'img/item4.jpg',
        text:'BEST SELLING'
    }
];

function displayTopItems(){
    topObj.forEach(function(item){
        topHtml+=`
            <div class="topItem">
                <img src="${item.img}" width="200px">
                <p>${item.text}</p>
            </div>
        `;
    });

    if(topItems){
        topItems.innerHTML=topHtml;
    }
}
displayTopItems();
