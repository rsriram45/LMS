import React from "react";


function Cards() {
  
  const lit=[{
    
    id:1,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },{
    
    id:2,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
   
  },
  {
    
    id:3,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },
  {
    
    id:4,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },
  {
    
    id:4,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  }
]
  const filterdata = lit.filter((data) => data.category === "free");

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={filterdata.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {filterdata.name}
              <div className="badge badge-secondary">{filterdata.category}</div>
            </h2>
            <p>{filterdata.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${filterdata.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
