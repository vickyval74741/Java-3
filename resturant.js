const menu =[
    {
    id: 1,
    img: './images/images/image1.jpg',
    name: 'indian meal',
    desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
    category: 'food',
    price: '$10',
    
    },
    {
      id: 2,
      img: './images/images/images2.jpg',
      name: 'indian meal',
      desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
      category: 'food',
      price: '$10',
      },
     {
     id: 3,
     img: './images/images/image3.jpg',
     name: 'indian meal',
     desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
     category: 'food',
     price: '$10',
     },
     {
     id: 4,
     img: './images/images/image4.jpg',
     name: 'indian meal',
     desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
     category: 'food',
     price: '$11',
    
     },
     {
     id: 5,
     img: './images/images/image5.webp',
     name: 'indian meal',
     desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
     category: 'food',
     price: '$7',
    
     },
     {
     id: 6,
     img: './images/images/images6.jpg',
     name: 'indian meal',
     desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
     category: 'food',
     price: '$12',
     },
     {
     id: 7,
     img: './images/images/images7.jpg',
     name: 'indian meal',
     desc: 'one of the most popular meal in india and its continent.the people of india believes this meal cures diabetics and other illness.',
     category: 'food',
     price: '$9',
     },
     {
     id: 8,
     img: './images/images/images-amala1.jpg',
     name: 'nigerian meal',
     desc: 'amala is the best meal in western part of Nigeria, this is popularly known as the best best meal among the yorubas,most especially ibandan,oyo,iseyin and lagos people.',
     category: 'Local',
     price: '$10',
     },
     {
     id: 9,
     img: './images/images/images-amala2.jpg',
     name: 'nigerian meal',
     desc: 'amala is the best meal in western part of Nigeria, this is popularly known as the best best meal among the yorubas,most especially ibandan,oyo,iseyin and lagos people.',
     category: 'Local',
     price: '$8',
     },
     {
     id: 10,
     img: './images/images/images-amala3.jpg',
     name: 'nigerian meal',
     desc: 'amala is the best meal in western part of Nigeria, this is popularly known as the best best meal among the yorubas,most especially ibandan,oyo,iseyin and lagos people.',
     category: 'Local',
     price: '$10',
     },
     {
     id: 11,
     img: './images/images/images-amala4.jpg',
     name: 'nigerian meal',
     desc: 'amala is the best meal in western part of Nigeria, this is popularly known as the best best meal among the yorubas,most especially ibandan,oyo,iseyin and lagos people.',
     category: 'Local',
     price: '$13',
     },
     {
     id: 12,
     img: './images/images/image-snacks1.jpg',
     name: 'nigerian meal',
     desc: ' snacks Provides a boost of energy if several hours pass between meals and blood glucose levels drop,90% of the world populaton enjoys eating snacks.',
     category: 'snacks',
     price: '$11',
     },
     {
     id: 13,
     img: './images/images/image-snacks2.avif',
     name: 'nigerian meal',
     desc: ' snacks Provides a boost of energy if several hours pass between meals and blood glucose levels drop,90% of the world populaton enjoys eating snacks.',
     category: 'snacks',
     price: '$12',
     },
     {
     id: 14,
     img: './images/images/image-snacks3.jpeg',
     name: 'nigerian meal',
     desc: ' snacks Provides a boost of energy if several hours pass between meals and blood glucose levels drop,90% of the world populaton enjoys eating snacks.',
     category: 'snacks',
     price: '$8',
     },
     {
     id: 12,
     img: './images/images/image-snack4.jpg',
     name: 'nigerian meal',
     desc: ' snacks Provides a boost of energy if several hours pass between meals and blood glucose levels drop,90% of the world populaton enjoys eating snacks.',
     category: 'snacks',
     price: '$10',
     },
    
    ];
    
    
     const listDiv = document.getElementById('menu-items');
     const uniqueBtn =document.getElementById('unique-btn');
     
     
     const displayList = menu.map((item)=>{
    return `<div class="card mb-3 p-0 g-3" style="max-width: 540px; margin-right:20px">
    <div class="row g-0">
      <div class="col-md-4">
        <img src= ${item.img} class="img-fluid rounded-start h-100 " alt="..." style="padding-left:-3px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title ps-5 d-flex gap-5">${item.name} <span style="margin-right:-40px; color: red;"> ${item.price}</span></h5>
          <p class="card-text">${item.desc}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    </div>`
    })
    .join('');
    
    listDiv.innerHTML = displayList;
    
    
    
    
    
    // filter buttons
     function uniqueDisplay () {
      const listMenu = menu.map(items => {
        return  `<button class="filter-btn" type="button" data-id = ${items.category}> ${items.category}</button>`
       }).join(' ');
      menu.reduce((total, accr) => {
        if (!total.category === total) {
         total.push(total.category) 
        }
        console.log(total);
      return total
      },['All'])
      
     } 
      uniqueDisplay()
      
    
    //   const getCategories = menu.map((category)=>{
    //  category.category
    //   })
    
    //   const uniqueCategory = [...new (getCategories)]
    //   console.log(uniqueCategory);
    
      
    
    
    
      
    
    
    
    
    
    
    
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // window.addEventListener('DOMContentLoaded', function() {
      
    //   displayList = menu.map((item) =>{
    //     return ` <div class="card " style="width:16rem;">
    //      <img src=${item.img} class="card-img-top" alt="...">
    //      <div class="card-body">
    //        <h5 class="card-title">${item.name}</h5>
    //       <p class="card-text">${item.desc}</p>
    //     </div>
    //     </div>`
    //     })
    //   })
    //   displayList = displayList.join('')
    //   listDiv.innerHTML = displayList
    
     
    
     
    
    
    
    
    
    
    