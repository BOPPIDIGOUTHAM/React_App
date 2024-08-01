import {  Route, Routes } from 'react-router-dom';
import RecipeData from './recipesData';
import RecipeIngredient from './recipesIngredients';


const Routing = () => {
  return (
   
      <Routes>
        <Route path="/" element={<RecipeData />} />
        <Route path="/recipe/:id" element={<RecipeIngredient />} />
      </Routes>
    
  );
};

export default Routing;
