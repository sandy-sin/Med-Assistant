import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen container pl-0 pr-0">
      <div className="relative">
        <img className="object-cover w-full h-full" src="/home.gif" alt="" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-6">
          <div className="left mb-4">
            <h1 className="text-5xl font-bold">
              Welcome to <span className="text-accent">Disease</span>{" "}
              Prediction System
            </h1>
          </div>
          <div className="right">
            <p className="text-xl text-center max-w-2xl">
              Analyze your symptoms using machine learning to get instant disease predictions along with tailored diet, workout, and medication recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
