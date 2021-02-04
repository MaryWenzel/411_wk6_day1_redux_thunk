import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@material-ui/core";

const Import = (props) => {
  // fill out this component

  return (
    <Container>
      <p>Import Component</p>
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
      <Table aria-label="makes-table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={make.MakeName + index}>
              <TableCell>{make.MakeId}</TableCell>
              <TableCell>{make.MakeName}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
