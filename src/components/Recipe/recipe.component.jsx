import React from 'react';
import "./recipe.styles.css";
import UnavailableImg from "../../assets/img/unavailable.png";

const Recipe = ({recipes, loading}) => {

    const recipeFilter = () => {
      var input, filter, table, tr, td, i;
      input = document.getElementById("recipe-filter");
      filter = input.value.toUpperCase();
      table = document.getElementById("recipe-table");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

    if(loading){
        return <h3 style={{ marginTop: "50px" }}>Loading...</h3>;
    }
    return (
      <div className="recipe-table-div">
        <h2>Recipe Database</h2>
        <select id="recipe-filter" onChange={recipeFilter} className="select-form-control">
          <option>High Protein</option>
          <option>Balanced</option>
          <option>High Carb</option>
          <option>Regular</option>
        </select>
        <table id="recipe-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Qty.</th>
              <th>Energy</th>
              <th>Nutrients</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => {
              const protein = recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(
                2
              );
              const carbs = recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(
                2
              );
              const fats = recipe.recipe.totalNutrients.FAT.quantity.toFixed(2);
              const total = protein + fats + carbs;
              let label = "";
              if (protein / total > 15) {
                label = "High Protein";
              } else if (protein / total >= 12 && protein / total <= 15) {
                label = "Balanced";
              } else if ((carbs + fats) / total > 50) {
                label = "High Carb";
              } else {
                label = "Regular";
              }
              return (
                <tr key={recipe.recipe.url}>
                  <td data-column="Title">{recipe.recipe.label}</td>
                  <td data-column="Image">
                    <img
                      src={
                        recipe.recipe.image
                          ? recipe.recipe.image
                          : UnavailableImg
                      }
                      alt=""
                      className="recipe-image"
                    />
                  </td>
                  <td data-column="Qty.">{recipe.recipe.yield}</td>
                  <td data-column="Energy">
                    {recipe.recipe.calories.toFixed(2)} kcal
                  </td>
                  <td data-column="Nutrients" style={{ width: "22%" }}>
                    <ul style={{ listStyle: "none", paddingLeft: "15px" }}>
                      <li>
                        Protien:{" "}
                        {recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(
                          2
                        )}
                        g
                      </li>
                      <li>
                        Carbs:{" "}
                        {recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(
                          2
                        )}
                        g
                      </li>
                      <li>
                        Fats:{" "}
                        {recipe.recipe.totalNutrients.FAT.quantity.toFixed(2)}g
                      </li>
                    </ul>
                  </td>
                  <td>{label}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default Recipe;
