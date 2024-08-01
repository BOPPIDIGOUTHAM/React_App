import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const RecipeIngredient = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]); 

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log(response.data, "response");
      setRecipe(response.data);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center", backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/373/952/839/wooden-spoon-condiments-background-wallpaper-preview.jpg")' }}>
      
      <div
        style={{
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "600px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >

<Link to="/"><button class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Back To Home </button></Link>     
        <img
          src={recipe.image}
          height={150}
          width={150}
          alt={recipe.name}
          style={{ borderRadius: "50%", marginBottom: "10px" }}
        />
        <h2>{recipe.name}</h2>
        <div style={{ textAlign: "left", marginTop: "20px" }}>
          <h3>Ingredients:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                &#8226; {ingredient}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol style={{ padding: 0 }}>
            {recipe.instructions.map((instruction, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeIngredient;
