


// const titles = document.querySelectorAll('.card-title');

// function removeSpace(str){
//     return str.replaceAll(' ',''.toLowerCase())

// }



// for(let title of titles   ){
//     console.log(title)
//     // title.innerText = title.innerText.toLowerCase();
//     // title.innerText = "HOMe COoker";
    
//     // title.innerHTML =  ` <span class='text-pink-500'>${removeSpace(title.innerText)} <span>`
//     // title.style.backgroundColor = "red";
//     // title.style.border = " 1px solid red"
//     // title.classList.add('hidden')
//     // title.classList.remove('card-title')
// }


// const images = document.getElementsByTagName('img')

// console.log(images)
// for (let img of images ){
//      img.addEventListener("mouseenter", function (){
//         img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Atkinson_Rowan_crop.jpg/250px-Atkinson_Rowan_crop.jpg"
//      })
// }

function getElement(id){
    const element = document.getElementById(id);
    return element
}



// traditional way of adding event listener
// document.getElementById('cart-btn-1').addEventListener('click',function (){
//         const title = getElement('card-title-1').innerText
//         const price = getElement('card-price-1').innerText
//         console.log( title,price ,'clicked')
        
//         // total price 
//            const totalPrice = getElement('total-price').innerText;

//         // calculate total price
//        const  currentPrice =  Number(price)+ Number( totalPrice);
//         console.log(currentPrice)


//         // price update 
//         getElement("total-price").innerText = currentPrice.toFixed(2);

//         // Take Cart-container

//         const cartContainer = getElement('cart-container')

//         // we will make a div or creating a div 

//         const newCart = document.createElement('div');
//         newCart.innerHTML = `
//             <div class="m-5 bg-gray-200 rounded-xl flex justify-between  p-4">
//                    <img src="./assets/kitchen-1.png" alt="" class="w-10">
//                 <div class="">
//                    <h2 class="font-bold"> ${title} </h2>
//                    <h2 class="font-bold"> ${price}TK </h2>
//                 </div>
//             </div>`


//          //   now we have to add this div in cart-container   
//          cartContainer.append(newCart);    
        

     
// })

// traverse technique
const cartButtons = document.getElementsByClassName('cart-btn');
console.log(cartButtons);

for(let cartButton of cartButtons){
    cartButton.addEventListener('click',function(){
        const productImg = cartButton.parentNode.parentNode.children[0].children[0].src
        const productTitle = cartButton.parentNode.parentNode.children[1].children[0].innerText;
        const productPrice = cartButton.parentNode.parentNode.children[1].children[2].children[0].innerText ;
        console.log(productPrice)


    })
}
