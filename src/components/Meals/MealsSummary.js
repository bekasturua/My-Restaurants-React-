import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Restaurants</h2>
      <p>Restaurants | Bars | Cafes | Lounges</p>
      <p>
        This is a list of restaurants, cafes, bars and lounges where I have been
        and rated the food, ambience and service.
      </p>
    </section>
  );
};

export default MealsSummary;
