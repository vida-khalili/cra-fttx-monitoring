import ProtectedPage from "src/components/ProtectedPage";
import React from "react";
import Layout from "src/components/Layout";
import { autocompleteClasses, Grid, useMediaQuery } from "@mui/material";
import RightPanel from "src/pages/operator/components/RightPanel/RightPanel";
import MainPanel from "src/pages/operator/components/MainPanel/MainPanel";
import PassivePortChart from "src/pages/operator/components/PassivePortChart";
import LeftCharts from "src/pages/operator/components/LeftCharts";
import { Theme } from "@mui/system";
import OperatorAutocomplete from "src/components/Autocompelets/OperatorAutocomplete";
import { useSelector } from "react-redux";
import { RootState } from "src/app/store";

function Content() {
  const { operators } = useSelector((state: RootState) => state.app);
  const onlyMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Layout mode={"light"} scrollable={onlyMediumScreen}>
      <Grid container spacing={4}>
        <Grid xl={6} md={12} item>
          <Grid container item spacing={2}>
            <Grid item xs={8}>
              <Grid container item mb={2}>
                <Grid item xs={12}>
                  <OperatorAutocomplete
                    sx={{
                      [`.${autocompleteClasses.root}`]: {
                        border: "2px solid",
                      },
                    }}
                    options={operators}
                  />
                </Grid>
              </Grid>
              <RightPanel />
            </Grid>
            <Grid item xs={4}>
              <MainPanel />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item xs={12}>
              <PassivePortChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid xl={6} md={12} item>
          <LeftCharts />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default function Operator() {
  return (
    <ProtectedPage>
      <Content />
    </ProtectedPage>
  );
}
