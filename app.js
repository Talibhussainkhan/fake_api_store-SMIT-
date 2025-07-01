let productDiv = document.querySelector('#productDiv');
let userDiv = document.querySelector('#userDiv');

fetch('https://fakestoreapi.com/products')
.then((res)=> res.json())
.then((data)=>{
    
    const finalData = data.slice(0, 10);
    finalData.map((item)=>{
        productDiv.innerHTML += `<div class='mt-2 md:mt-0 p-2  border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer'>
        
        <img src=${item.image} class='h-50 w-50 rounded mb-3    ' />
        <p class='ml-2 font-bold text-gray-700'>$${item.price}</p>
        <p class='ml-2 font-bold text-gray-700'>${item.title.split(' ')[0]} ${item.title.split(' ')[1]}</p>
        <p class='ml-2 font-bold text-gray-700'>${item.category}</p>
        </div>
        `
    })
})


fetch('https://api.escuelajs.co/api/v1/users')
.then((res)=> res.json())
.then((data)=> {
    let finalData = data.slice(0, 3);
    console.log(finalData)
    finalData.map((item)=>{
        userDiv.innerHTML += `<div class='p-4 w-full border border-gray-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer'>
        <p> name : <span class='font-bold'>${item.name}</span></p>
        <p> email : <span class='font-bold'>${item.email}</span></p>
        <p> role : <span class='font-bold'>${item.role}</span></p>
        
        </div>`
    })
})