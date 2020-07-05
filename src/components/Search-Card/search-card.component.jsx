import React,{ useState, useEffect } from "react";
import "./search-card.styles.css";
import axios from "axios";

const Recipe = ({title, calories, img}) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{calories}</p>
            <img src={img} alt="" />
        </div>
    )
}

const SearchCard = () => {

    const recipe_app_id = "aeac802a";
    const recipe_app_key = "bad9a6e0eaed49f24e44e1582cb2cef6";
    const food_app_id = "94e02b3f";
    const food_app_key = "1ece35194048f6f22f5d30db37b69a40";
    const [recipes, setRecipes] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const recipeUrl = `https://api.edamam.com/search?q=${query}&app_id=${recipe_app_id}&app_key=${recipe_app_key}`;
    const foodDataUrl =`https://api.edamam.com/api/food-database/v2/parser?ingr=${query}&app_id=${food_app_id}&app_key=${food_app_key}`;
    useEffect(() => {
    
        // getRecipes();
        // getFoodData();
    },[]);

    const getRecipes = async () => {
        const response = await axios.get(recipeUrl);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
        const getFoodData = async () => {
          const response = await axios.get(foodDataUrl);
          const data = await response.json();
          console.log(data.hints);
          setFoodData(data.hints);
        };
        getFoodData();
    };

    

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

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
          { !recipes.length ? (
            <h2 style={{ color: "rgb(74, 172, 18)",marginTop:"70px"}}>
              No contents selected yet.....
            </h2>
          ) : (
            recipes.map((recipe) => (
              <Recipe
                title={recipe.recipe.label}
                key={recipe.recipe.label}
                calories={recipe.recipe.calories}
                img={recipe.recipe.image}
              />
            ))
          )}
      </div>
    );
}

export default SearchCard;