import React from "react";
import Layout from "../Components/Layout/Layout";
import Pizza from "../assets/Pizza.png";
import Slider from "../Components/Slider";
import FoodCard from "../Components/FoodCard";
import Filter from "../Components/Filter";
import SliderFoodCard from "../Components/SliderFoodCard";

const Home = () => {
  return (
    <Layout>
      <div className="w-full flex items-center " style={{ height: "75vh" }}>
        <div className="w-6/12 max-sm:w-full max-sm:text-center pl-12 max-lg:pl-6 max-sm:pl-0">
          <h3 className="text-xl text-gray-400">Welcome To Zomato 2.0</h3>
          <h1 className=" text-6xl max-lg:text-4xl font-semibold leading-12">
            Discover the best food & drinks in Gorakhpur
          </h1>
          <h1 className="text-4xl font-semibold">Deliver in 30 minutes</h1>
        </div>

        <div className="w-6/12 grid place-items-center max-sm:hidden">
          <img src={Pizza} alt="" className="w-96 max-lg:w-80" />
        </div>
      </div>
      <Slider>
        <SliderFoodCard name={"Pizza"} />
        <SliderFoodCard name={"Burger"} />
      </Slider>

      <div className="w-4/5 my-4 max-xl:w-11/12  mx-auto">
        <h1 className="text-3xl max-sm:text-xl py-4">
          Delivery Restaurants in Gorakhpur
        </h1>
        {/* <Filter /> */}
        <div className="w-full flex  justify-center gap-7 flex-wrap">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
