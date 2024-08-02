import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const RecipeData = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    setData(response.data.recipes);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <button style={{marginLeft:"450px"}} ><h1 style={{color:"green",}}>RECIPES MENU</h1></button>
      <input 
        type="text" 
        placeholder="Search recipes..." 
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginBottom: '20px', 
          padding: '10px', 
          fontSize: '16px', 
          width: '100%', 
          maxWidth: '400px',
          borderRadius:"50px",
          marginLeft:"400px"
      
        }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      
        {filteredData.map((e, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img 
              variant="top" 
              src={`https://cdn.dummyjson.com/recipe-images/${e.id}.webp`} 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Link to={`/recipe/${e.id}`}>
                <button>Click</button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipeData;
