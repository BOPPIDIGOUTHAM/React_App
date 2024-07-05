import Table from 'react-bootstrap/Table';

function RecipeTable(props) {
    // console.log(props.recipedata,"hiii")
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Recipe Name</th>
          <th>Recipe pic</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
       
            {props.recipedata.map((recipeitem)=>{
                return <tr>
                    <td>{recipeitem.id}</td>
                    <td>{recipeitem.name}</td>
                    <td><img src={recipeitem.image} width={100} height={100} alt="img"/></td>
                    <td>{recipeitem.ingredients}</td>
                    <td>{recipeitem.instructions}</td>
                </tr>
            })}
          
        
       
        
      </tbody>
    </Table>
  );
}

export default RecipeTable;