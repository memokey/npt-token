import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div className="jumbotron">
      <h1>
        {store.isAuthenticated
          ? `Hello ${store.authData.result.name}`
          : "Hello"}
      </h1>
    </div>
  );
};

export default Home;
