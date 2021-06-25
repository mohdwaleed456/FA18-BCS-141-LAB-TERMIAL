import React from "react";
import { Grid, Button } from "@material-ui/core";
import recordService from "../../services/RecordsService";
import { withRouter } from "react-router";

const SingleRecord = (props) => {
  const { record, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2>
        <div style={{margin:"20px", color:"red"}}>Team 1:{product.teamA}   </div>
        <div  style={{marginLeft:"20px"}}>VS</div>
        <div style={{margin:"20px", color:"blue"}}>Team 2:{product.teamB}</div>  
        <div style={{margin:"20px",}}>city:{product.city}</div>    
        <div style={{margin:"20px",}}>date:{product.date}</div> 

       
      </h2>
     
      <hr />
    </Grid>
  );
};

export default withRouter(SingleRecord)