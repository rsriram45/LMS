import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";
import axios from "axios";

function Freecourse() {
 
  const lit=[{
    
    id:1,
    name:"HTML",
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
    
    id:5,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },
  {
    
    id:6,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },
  {
    
    id:7,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  },
  {
    
    id:8,
    name:"html",
    title:"lorem ipsum in the diioeyd",
    price:0,
    category:"free",
    image:"C:/Users/Admin/Desktop/MERN Project/eduford/src/images/banner.png"
  }
]
  const filterdata = lit.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p> 
        </div>
        {/* <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div> */}
  



        <div>
          { <Slider {...settings}>
            {filterdata.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider> }
          
        </div>
      </div>
    </>
  );
}
export default Freecourse;
