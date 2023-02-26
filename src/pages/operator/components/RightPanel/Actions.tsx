import React from "react";
import FeatureStack from "src/components/FeatureStack";
import { Button, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import IranMapIcon from "src/components/Icons/IranMapIcon";
import MouseOnGlobeIcon from "src/components/Icons/MouseOnGlobeIcon";

const ActionButton = ({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) => (
  <Button sx={{ p: 0, width: "100%" }}>
    <FeatureStack
      height={120}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack justifyContent={"center"} alignItems={"center"} direction={"row"}>
        {icon}
        <Typography fontSize={16} fontWeight={300}>
          {title}
        </Typography>
      </Stack>
    </FeatureStack>
  </Button>
);

const Actions = () => (
  <Grid container item spacing={2} mt={0.25}>
    <Grid item xs={6}>
      <ActionButton
        icon={<IranMapIcon sx={{ fontSize: 80 }} />}
        title={"نمایش نقشه پوشش استانی"}
      />
    </Grid>
    <Grid item xs={6}>
      <ActionButton
        icon={<MouseOnGlobeIcon />}
        title={"نمایش جزئیات در سامانه FTTX"}
      />
    </Grid>
  </Grid>
);

export default Actions;
