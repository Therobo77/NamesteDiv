import { useEffect, useState } from "react";
import Shinner from "../Pages/Shinner";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const [menuData, setmeuData] = useState(null);
  const { resId } = useParams();
  //   console.log("params", resId);

  useEffect(() => {
    fetchResMenuData();
  }, []);

  const fetchResMenuData = async () => {
    let data = await fetch(`https://dummyjson.com/products/${resId}`);
    let jsondata = await data.json();
    // console.log(jsondata);
    setmeuData(jsondata);
  };
  console.log(menuData);
  if (menuData === null) return <Shinner />;

  const { thumbnail, brand, rating, price, stock, description, title } =
    menuData;
  return (
    <div>
      <center>
        <img src={thumbnail} alt="" />
        <h3>
          {brand} -- {title}
        </h3>
        <h4>{rating} Rating</h4>
        <h4>Rs. {price}</h4>
        <h5>{stock} Available Stock</h5>

        <p>{description}</p>
      </center>
    </div>
  );
};
