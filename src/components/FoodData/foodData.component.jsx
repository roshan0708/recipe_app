import React from "react";
import "./foodData.styles.css";
import UnavailableImg from "../../assets/img/unavailable.png";

const FoodData = ({ foodData, loading }) => {

  const foodDataFilter = () => {
    var input,
      filter,
      table,
      tr,
      td,
      i;
    input = document.getElementById("foodData-filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("foodData-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  if (loading) {
    return <h3 style={{ marginTop: "50px" }}>Loading...</h3>;
  }
  return (
    <div className="foodData-table-div">
      <h2>Food Database</h2>
      <select
        id="foodData-filter"
        onChange={foodDataFilter}
        className="select-form-control"
      >
        <option>High Protein</option>
        <option>Balanced</option>
        <option>High Carb</option>
        <option>Regular</option>
      </select>
      <table id="foodData-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Energy</th>
            <th>Nutrients</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((food) => {
            const protein = food.food.nutrients.PROCNT.toFixed(2);
            const carbs = food.food.nutrients.CHOCDF.toFixed(2);
            const fats = food.food.nutrients.FAT.toFixed(2);
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
              <tr key={food.food.foodId}>
                <td data-column="Title">{food.food.label}</td>
                <td data-column="Image">
                  <img
                    src={food.food.image ? food.food.image : UnavailableImg}
                    alt=""
                    className="food-image"
                  />
                </td>
                <td data-column="Energy">
                  {food.food.nutrients.ENERC_KCAL.toFixed(2)} kcal
                </td>
                <td data-column="Nutrients" style={{ width: "22%" }}>
                  <ul style={{ listStyle: "none", paddingLeft: "15px" }}>
                    <li>Protien: {protein}g</li>
                    <li>Carbs: {carbs}g</li>
                    <li>Fats: {fats}g</li>
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
};

export default FoodData;
