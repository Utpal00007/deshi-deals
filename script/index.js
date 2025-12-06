


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
document.getElementById('cart-btn-1').addEventListener('click',function (){
        const title = getElement('card-title-1').innerText
        const price = getElement('card-price-1').innerText
        console.log( title,price ,'clicked')
        
        // total price 
           const totalPrice = getElement('total-price').innerText;

        // calculate total price
       const  currentPrice =  Number(price)+ Number( totalPrice);
        console.log(currentPrice)


        // price update 
        getElement("total-price").innerText = currentPrice.toFixed(2);

        // Take Cart-container

        const cartContainer = getElement('cart-container')

        // we will make a div or creating a div 
        

     
})