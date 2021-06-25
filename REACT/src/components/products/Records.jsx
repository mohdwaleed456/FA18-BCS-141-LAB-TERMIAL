import React from "react";
import SingleRecord from "./SingleRecord";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import recordService from "../../services/RecordsService";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Records = (props) => {
  const [records, setRecords] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    recordService
      .getRecords(page, perPage)
      .then((data) => {
        setRecords(data.records);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  // console.log("Inside Rrecords Component");
  const handleNeRecordsClick = () => {
    console.log(props);
    props.history.push("/records/new");
  };
  return (
    <div>
      <h1>Products</h1>
      Records Per Page:{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewRecordClick}
        >
          <AddIcon />
        </Fab>
      )}
      {records.length == 0 ? (
        <p>There are no records</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((record, index) => (
            <SingleRecord key={index} record={record} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/records/" + value);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + records.length}
      </Grid>
    </div>
  );
};

export default Records;
