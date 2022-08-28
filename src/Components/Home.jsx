import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Animal } from "./Animal";
import { Fruits } from "./Fruits";
import { AnimalPic } from "./AnimalPic";
import { Article } from "./Article";
export const Home = () => {
  const [val, setVal] = useState("animal");
  return (
    <div className="sub">
      <h1>Home</h1>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab label="Animal" value="animal" />
        <Tab label="Fruits" value="fruits" />
        <Tab label="Article" value="article" />
        <Tab label="Animal Gallary" value="animalpic" />
        <Tab label="Fruits Gallary" value="fruitspic" />
        <Tab label="Articles Gallary" value="artpic" />
      </Tabs>
      {val === "animal" && <Animal />}
      {val === "fruits" && <Fruits />}
      {val === "article" && <Article />}
      {val === "animalpic" && <AnimalPic />}
    </div>
  );
};
