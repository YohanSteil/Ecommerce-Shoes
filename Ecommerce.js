const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')
const sliderItems = document.querySelectorAll('.sliderItem')

const products = [
    {
        id: 1, 
        title: "Air Force",
        price: 119,
        colors: [ 
          {code: "black", img: "/img/air.png"},
          {code: "darkBlue", img: "/img/air2.png"},
                ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {code: "lightgrey", img: "/img/jordan.png"},
            {code: "green", img: "/img/jordan2.png"},
                 ],
    },
    {
        id: 3,
        title: "Blazers",
        price: 109 , 
        colors: [
            {code: "lightgrey", img: "/img/blazer.png"},
            {code: "green", img: "/img/blazer2.png"},
                ] ,  
    },
    {
        id:4,
        title: "Crater",
        price: 129,
        colors: [
            {code: "black", img: "/img/crater.png"},
            {code: "lightgrey", img: "/img/crater2.png"}
                ] , 
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {code:"grey", img: "/img/hippie.png"},
            {code: "black", img: "/img/hippie2.png"}
            ],
    },
] ; 

let choixProduit = products[0] ;

const currentProductImg = document.querySelector(".productImg") ; 
const currentProductTitle = document.querySelector(".productTitle") ; 
const currentProductPrice = document.querySelector(".productPrice") ; 
const currentProductDescription = document.querySelector(".productDescription") ; 
const currentProductColors = document.querySelectorAll(".color") ; 
const currentProductSizes = document.querySelectorAll(".size") ; 


menuItems.forEach((item, index)=>{
    item.addEventListener('click' , () => {
        wrapper.style.transform = `translateX(${-20 * index}%)` ; // decale de 20% la page web / 100%
        
        choixProduit = products[index]; // change le produit choisi au clic 

        currentProductTitle.textContent = choixProduit.title ;  //change texte du titre et du prix du produit choisi
        currentProductPrice.textContent = choixProduit.price + " € " ;
        currentProductImg.src = choixProduit.colors[0].img ; // change limage du produit choisi

        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choixProduit.colors[index].code ; //code dans le array au dessus : assigne nouvelle couleur par chaussure 
        })
    }) ;
}) ;

        currentProductColors.forEach((color,index)=>{
            color.addEventListener('click', ()=>{
                currentProductImg.src = choixProduit.colors[index].img ; 
            })
        })

        currentProductSizes.forEach((size,index)=>{
            size.addEventListener('click', ()=>{
            currentProductSizes.forEach((size)=>{
                size.style.backgroundColor = 'white';
                size.style.color = 'black' ; 
            })
                size.style.backgroundColor = "black" ;
                size.style.color = "white" ;
            })
        })

const productButton =  document.querySelector(".productButton")
const payment = document.querySelector(".payment") 
const close = document.querySelector('.close')

productButton.addEventListener('click',() =>{
    payment.style.display = "flex" ; 
}) ; 

close.addEventListener('click', ()=>{
    payment.style.display = "none" ; 
})