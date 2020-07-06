import React,{ useState, useEffect } from "react";
import "./search-card.styles.css";
import Recipe from "../Recipe/recipe.component";
import FoodData from "../FoodData/foodData.component";

const SearchCard = () => {

    const recipe_app_id = "aeac802a";
    const recipe_app_key = "bad9a6e0eaed49f24e44e1582cb2cef6";
    const food_app_id = "94e02b3f";
    const food_app_key = "1ece35194048f6f22f5d30db37b69a40";

    const [recipes, setRecipes] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [currentRecipeItems,setCurrentRecipeItems] = useState([]);
    const [currentFoodDataItems, setCurrentFoodDataItems] = useState([]);

    const recipeUrl = `https://api.edamam.com/search?q=${query}&app_id=${recipe_app_id}&app_key=${recipe_app_key}`;
    const foodDataUrl =`https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${food_app_id}&app_key=${food_app_key}`;
    useEffect(() => {
        getFoodData();
    },[query]);

    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes = async () => {
        setLoading(true);
        const response = await fetch(recipeUrl);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
        setLoading(false);
    };

    const getFoodData = async () => {
      setLoading(true);
      const response = await fetch(foodDataUrl);
      const data = await response.json();
      console.log(data.hints);
      setFoodData(data.hints);
      setLoading(false);
    };

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // if (typeof foodData!=="undefined"){
    //     setCurrentFoodDataItems(foodData.slice(indexOfFirstItem, indexOfLastItem));
    // }
    // if (typeof recipes!== "undefined") {
    //   setCurrentRecipeItems(recipes.slice(indexOfFirstItem, indexOfLastItem));
    // }
    

    return (
      <div id="search-card">
        <h3 className="search-card-title">
          Food Cravings? Can't Decide What to Cook?
        </h3>
        <p className="search-card-text">
          Well You're just one search away from a wide range of collection of food recipes as per your choice!!
          <span role="img" aria-label="emoji">
            {" "}
            😋
          </span>
        </p>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-bar"
            placeholder="Type food name"
            required
            value={search}
            onChange={handleChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
            { 
              !recipes.length ? (
                <h2 style={{ color: "rgb(74, 172, 18)",marginTop:"70px"}}>
                No contents selected yet.....
                </h2>
                ) : (
                <div>
                    <Recipe recipes={recipes} loading={loading}/>
                    <FoodData foodData={foodData} loading={loading} />
                </div>
                )
            }
      </div>
    );
}

export default SearchCard;