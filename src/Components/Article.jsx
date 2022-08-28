import React, { useState } from "react";
import { Grid, Card, Button, CardContent } from "@mui/material";

export const Article = () => {
  const [article, setArticle] = useState("Table");

  return (
    <div className="ssub">
      <h1>Article Home</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent className="txt">{article}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setArticle("Fan")}
            fullWidth
            color="warning"
          >
            Fan
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setArticle("AC")}
            fullWidth
            color="warning"
          >
            AC
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            onClick={() => setArticle("TV")}
            fullWidth
            color="warning"
          >
            TV
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setArticle("Fridge")}
            fullWidth
            color="error"
          >
            Fridge
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setArticle("Washing Machine")}
            fullWidth
            color="error"
          >
            Washing Machine
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setArticle("Cooler")}
            fullWidth
            color="error"
          >
            Cooler
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            onClick={() => setArticle("Table")}
            fullWidth
            color="error"
          >
            Table
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
