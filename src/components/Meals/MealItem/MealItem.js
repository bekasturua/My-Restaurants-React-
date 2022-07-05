import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rate: ${props.price}`;
  const address = `Address: ${props.address}`;
  const environment = `Environment: ${props.environment}/10`;
  const description = `Foods: ${props.description}`;
  const service = `Service: ${props.service}/10`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      img: props.img,
      amount: amount,
      price: props.price,
      address: props.address,
    });
  };

  console.log(props.img);
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <img className={classes.img} src={props.img} alt="" />
        <div className={classes.address}>{address}</div>
        <div className={classes.environment}>{environment}</div>
        <div className={classes.service}>{service}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
