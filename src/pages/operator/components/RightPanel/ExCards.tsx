import {Grid, Stack, Typography} from "@mui/material";
import React from "react";
import PersianNumber from "src/components/PersianNumber";
import FeatureStack from "src/components/FeatureStack";

const EXCard = ({amount, group}: { amount: number; group: string }) => (
  <FeatureStack height={120}>
    <Typography
      textAlign={"left"}
      fontSize={14}
      fontWeight={300}
      sx={{
        color: "#7CCAD8",
      }}
    >
      {group}
    </Typography>
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant={"h1"} fontSize={40} fontWeight={"bold"}>
        <PersianNumber value={amount} />
      </Typography>
      <Typography mr={2} fontSize={14} fontWeight={300}>
        میلیارد ریال
      </Typography>
    </Stack>
  </FeatureStack>
);

const EXCards = () => (
  <Grid container item spacing={2}>
    <Grid item xs={6}>
      <EXCard amount={2000} group={"CpEX"}/>
    </Grid>
    <Grid item xs={6}>
      <EXCard amount={1200} group={"OpEX"}/>
    </Grid>
  </Grid>
);

export default EXCards;
