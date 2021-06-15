import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://miro.medium.com/max/3675/0*ztjIIsNhZ4nFEwMK.jpg"
          alt=""
        ></img>
      </div>
      <div className="home__row">
        <Product
          title="BOTTLED ORANGE DRINK"
          price={7.98}
          rating={5}
          image="http://cdn.shopify.com/s/files/1/0066/2123/3203/products/wkd-original-blue-24x275ml-275ml-513_1024x1024.jpg?v=1596112655 "
          alt=""
        />
        <Product
          title="FRERSH ORANGE"
          price={4.99}
          rating={5}
          image="https://img.freepik.com/free-photo/sliced-whole-oranges_144627-3981.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617148800"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          title="OCTOPUNCH"
          price={20.0}
          rating={5}
          image="http://cdn.shopify.com/s/files/1/0066/2123/3203/products/wkd-original-blue-24x275ml-275ml-513_1024x1024.jpg?v=1596112655"
          alt=""
        />
        <Product
          title="BURNT ORANGE"
          price={10.98}
          rating={5}
          image="https://images.squarespace-cdn.com/content/v1/5a73cd23f9a61e705ec30941/1572748102004-4O81DAVR2WVUA4IXENFF/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Cold+Drink+Charlies+Orange+Juice-FA.jpg?format=2500w"
          alt=""
        />
        <Product
          title="FRESH WATER"
          price={5.0}
          rating={5}
          image="https://packagingeurope.com/downloads/4620/download/JUST2_210818.jpg?cb=24a40a636d11b24d02d9a96946f73cca&w=1200"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
