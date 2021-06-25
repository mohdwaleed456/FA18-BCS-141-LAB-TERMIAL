import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import recordService from "./../../services/RecordsService";
import Auth from "../auth/Auth";
const NewRecord = (props) => {

  console.log("new RECORDS props");
  console.log(props);
  const [city, setCity] = React.useState("");
  const [date, setDate] = React.useState("");
  const [teamA, setTeamA] = React.useState("");
  const [teamB, setTeamB] = React.useState("");
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Record</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="city"
            fullWidth
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          
          <TextField
            label="date"
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            label="teamB"
            fullWidth
            value={teamB}
            onChange={(e) => {
              setTeamB(e.target.value);
            }}
          />
          <TextField
            label="teamA"
            fullWidth
            value={teamA}
            onChange={(e) => {
              seTeamA(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .addRecord({ name, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/records");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewRecord;
