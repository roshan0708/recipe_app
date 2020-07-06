import React from "react";
import "./foodData.styles.css";

const FoodData = ({ foodData, loading }) => {
  if (loading) {
    return <h3 style={{ marginTop: "50px" }}>Loading...</h3>;
  }
  return (
    <div className="foodData-table-div">
      <h3>Food Database</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Energy</th>
            <th>Nutrients</th>
          </tr>
        </thead>
        <tbody>
          {foodData.map((food) => (
            <tr>
              <td data-column="Title">{food.food.label}</td>
              <td data-column="Image">
                <img src={food.food.image} alt="" class="food-image" />
              </td>
              <td data-column="Energy">
                {food.food.nutrients.ENERC_KCAL.toFixed(2)} kcal
              </td>
              <td data-column="Nutrients">
                <ul style={{ listStyle: "none" }}>
                  <li>Protien: {food.food.nutrients.PROCNT.toFixed(2)}g</li>
                  <li>Carbs: {food.food.nutrients.CHOCDF.toFixed(2)}g</li>
                  <li>Fats: {food.food.nutrients.FAT.toFixed(2)}g</li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodData;
