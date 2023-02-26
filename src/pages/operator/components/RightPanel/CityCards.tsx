import Typography from "@mui/material/Typography";
import FeatureStack from "src/components/FeatureStack";
import React from "react";
import { Grid } from "@mui/material";
import PersianNumber from "src/components/PersianNumber";

const CityCard = ({ count }: { count: number }) => (
  <FeatureStack height={120} justifyContent={"center"} textAlign={"center"}>
    <Typography variant={"h1"} fontSize={50} fontWeight={"bold"}>
      <PersianNumber value={count
      }/>
    </Typography>
    <Typography color={"#7CCAD8"} fontWeight={300}>
      تعداد شهرهای دارای تأخیر
    </Typography>
  </FeatureStack>
);

const CityCards = () => (
  <Grid container item mt={2} spacing={2}>
    <Grid xs={4} item>
      <CityCard count={30} />
    </Grid>
    <Grid xs={4} item>
      <CityCard count={30} />
    </Grid>
    <Grid xs={4} item>
      <CityCard count={30} />
    </Grid>
  </Grid>
);
export default CityCards;
