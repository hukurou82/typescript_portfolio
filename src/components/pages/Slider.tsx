import React from "react";
import Slider from "react-slick"
import img1 from '../img/test1.jpg';
import img2 from '../img/test2.jpg';
import img3 from '../img/test3.jpg';
import img4 from '../img/test4.jpg';
import img5 from '../img/test5.jpg';

 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const createImg = (
  id: number,
  img: string,
) => {
  return {id,img}
};

// mapでの回し方。画像のインポート（読み込み）が不明でパス
// const imgs =[
//   createImg(1,"../img/test.jpg"),
//   createImg(2, "../img/test2.jpg")
// ];
 
const TopSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
    };
    const style = {
        margin: "auto",
        height: 400,
        color: "#fff",
        background: "#3ab60b",
    };
    return (
      <Slider {...settings}>
        {/* mapでの回し方。画像のインポートが不明でパス
        {imgs.map((img) =>(
          <div key={img.id}>
              <img src={img.img} style={style}></img>
          </div>
        ))} */}
        <div>
          <img src={img1} style={style}></img>
        </div>
        <div>
          <img src={img2} style={style}></img>
        </div>
        <div>
          <img src={img3} style={style}></img>
        </div>
        <div>
          <img src={img4} style={style}></img>
        </div>
        <div>
          <img src={img5} style={style}></img>
        </div>        
      </Slider>
    );
  }
 
  export default TopSlider;