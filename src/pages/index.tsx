import Cards from "src/pages/components/Cards";
import Charts from "src/pages/components/Charts/Charts";
import React from "react";
import ProtectedPage from "src/components/ProtectedPage";
import Layout from "src/components/Layout";
import {Grid} from "@mui/material";

function Content() {
  return (
    <Layout mode={"dark"}>
      <Cards/>
      <Grid container>
        <Grid item lg={6}><Charts/></Grid>
        <Grid  item lg={6}/>
      </Grid>
    </Layout>
  );
}

export default function Home() {
  return (
    <ProtectedPage>
      <Content/>
    </ProtectedPage>
  );
}
