import React,{useState} from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const AnimalPic = () => {
    const [animal, setAnimal]=useState("Elephant")
  return (
    <div className="ssub">
      <h1>Animal Gallary</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent className="txt2">{animal}</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
            <Card>
                <CardContent className="txt"><img src={`Images/${animal}.jpg`}className="img" width={300} height={200} alt="" /></CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" 
            onClick={()=>setAnimal("Cat")}
            color="success" fullWidth>Cat</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" 
            onClick={()=>setAnimal("Cheetah")}
            color="success" fullWidth>Cheetah</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained"
            onClick={()=>setAnimal("Tiger")}
            color="success" fullWidth>Tiger</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant ="contained" 
            onClick={()=>setAnimal ("Elephant")}
            fullWidth color="primary">Elephant</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant ="contained" 
            onClick={()=>setAnimal ("Zebra")}
            fullWidth color="primary">Zebra</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant ="contained" 
            onClick={()=>setAnimal ("Cub")}
            fullWidth color="primary">Cub</Button>
        </Grid>
      </Grid>
    </div>
  );
};
