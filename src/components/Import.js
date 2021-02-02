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
      <Button variant="contained" color="primary">
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
          {props.makes.map((makes) => (
            <TableRow key={makes.id}>
              <TableCell>{makes.MakeId}</TableCell>
              <TableCell>{makes.VehicleTypeId}</TableCell>
              <TableCell>{makes.VehicleTypeName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Import;
