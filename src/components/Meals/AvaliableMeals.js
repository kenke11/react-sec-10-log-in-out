import classes from './AvaliableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";


const AvaliableMeals = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://react-food-http-c4a6f-default-rtdb.firebaseio.com/meals.json')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setMeals(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                }
            )
    }, [])

    const loadedMeals = [];

    for (const key in meals) {
        loadedMeals.push({
            id: key,
            description: meals[key].description,
            name: meals[key].name,
            price: meals[key].price
        })
    }

    let mealsList;

    if (error) {
        mealsList = <p className="font-bold">Not fount</p>
    } else if (!isLoaded) {
        mealsList = <p>Loading...</p>
    } else {
        mealsList = loadedMeals.map(meal => (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        ))
    }


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvaliableMeals;