import React, { useState } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Fruits = () => {
  const [fruits, setFruit] = useState("Apple");
  return (
    <div className="ssub">
      <h1>Fruits Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent className="txt">{fruits}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => setFruit("ORANGE")}
            variant="contained"
            fullWidth
            color="warning"
          >
            Orange
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
          onClick={() => setFruit("MANGO")}
          variant="contained" fullWidth color="warning">
            Mango
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
          onClick={() => setFruit("GRAPES")}
          variant="contained" fullWidth color="warning">
            Grapes
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("KIWI")}
          variant="contained" fullWidth color="success">
            Kiwi
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("BANANA")}
          variant="contained" fullWidth color="success">
            Banana
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("WATERMELON")}
          variant="contained" fullWidth color="success">
            Watermelon
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("CHEEKU")}
          variant="contained" fullWidth color="success">
            Cheeku
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("MOSAMBI")}
          variant="contained" fullWidth color="success">
            Mosambi
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
          onClick={() => setFruit("STRAWBERRY")}
          variant="contained" fullWidth color="success">
            Strawberry
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
