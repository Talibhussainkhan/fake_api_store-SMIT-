let productDiv = document.querySelector('#productDiv');
let userDiv = document.querySelector('#userDiv');
let cartItem = JSON.parse(localStorage.getItem('cart')) ||  [];
let cartDiv = document.querySelector('#cart');

fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {

        const finalData = data.slice(0, 10);
        finalData.map((item, index) => {
            
            productDiv.innerHTML += `<div class='mt-2 md:mt-0 p-2  border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer'>
        
        <img src=${item.image} class='h-50 w-full rounded mb-3    ' />
        <p class='ml-2 font-bold text-gray-700'>$${item.price}</p>
        <p class='ml-2 font-bold text-gray-700'>${item.title.split(' ')[0]} ${item.title.split(' ')[1]}</p>
        <p class='ml-2 font-bold text-gray-700'>${item.category}</p>
        <button onclick='addToCart(${index})' class='ml-2 border border-gray-200 bg-[#34EB9E] px-6 py-1.5 mt-1 text-white rounded cursor-pointer hover:animate-pulse '>Add to cart</button>
        </div>
        `
        })
    })
    .catch((error) => console.log(error))


fetch('https://api.escuelajs.co/api/v1/users')
    .then((res) => res.json())
    .then((data) => {
        let finalData = data.slice(0, 3);
        finalData.map((item) => {
            userDiv.innerHTML += `<div class='p-4 w-full border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer'>
        <p> name : <span class='font-bold'>${item.name}</span></p>
        <p> email : <span class='font-bold'>${item.email}</span></p>
        <p> role : <span class='font-bold'>${item.role}</span></p>
        </div>`
        })
    })

function addToCart(index){
        fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
    let item = data[index];
    let existItem = cartItem.find((items)=> items.id === item.id)
    if(existItem){
        alert('Item Already in carts')
        return
    }else{
        let cartObj = {
            name : `${item.title.split(' ')[0]} ${item.title.split(' ')[1]}`,
            quantity : 1,
            price : item.price,
            image : item.image,
            id : item.id
        }
        cartItem.push(cartObj)
        localStorage.setItem('cart', JSON.stringify(cartItem))  
    }
    })       
}

const renderingCartItems = () =>{
  cartItem.map((item)=>{
    cartDiv.innerHTML += `<div class="border-b border-gray-400 p-3 mt-2 bg-gray-200 flex  gap-3">
    <img class="h-20 w-20"  src=${item.image} alt="">
      <div class="flex flex-col justify-center">
        <h1 class="font-bold">Name : ${item.name}</h1>
        <h1 class="text-gray-700">quantity : ${item.quantity}</h1>
        <h1 class="text-gray-700">price : ${item.price}</h1>
      </div>`
  })
}

renderingCartItems()


    