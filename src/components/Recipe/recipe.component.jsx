import React from 'react';
import "./recipe.styles.css";

const Recipe = ({recipes, loading}) => {
    if(loading){
        return <h3 style={{ marginTop: "50px" }}>Loading...</h3>;
    }
    return (
      <div className="recipe-table-div">
        <h3>Recipe Database</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Qty.</th>
              <th>Energy</th>
              <th>Nutrients</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr>
                <td data-column="Title">{recipe.recipe.label}</td>
                <td data-column="Image">
                  <img src={recipe.recipe.image} alt="" class="recipe-image" />
                </td>
                <td data-column="Qty.">{recipe.recipe.yield}</td>
                <td data-column="Energy">
                  {recipe.recipe.calories.toFixed(2)} kcal
                </td>
                <td data-column="Nutrients">
                  <ul style={{ listStyle: "none",paddingLeft:"15px" }}>
                    <li>
                      Protien:{" "}
                      {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}g
                    </li>
                    <li>
                      Carbs:{" "}
                      {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}g
                    </li>
                    <li>
                      Fats:{" "}
                      {recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}g
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Recipe;
