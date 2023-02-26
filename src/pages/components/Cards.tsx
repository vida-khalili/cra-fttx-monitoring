import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ConstructionWorkerIcon from "src/components/Icons/ConstructionWorkerIcon";
import HouseholdFamilyIcon from "src/components/Icons/HouseholdFamilyIcon";
import MoneyIntegralIcon from "src/components/Icons/MoneyIntegralIcon";
import SunIcon from "src/components/Icons/SunIcon";
import UsbIcon from "src/components/Icons/UsbIcon";
import PersianNumber from "src/components/PersianNumber";
import { SvgIconProps } from "@mui/material/SvgIcon";

type IconType =
  | "household-family"
  | "construction-worker"
  | "usb"
  | "money-integral"
  | "sun";

interface ICardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  amount: JSX.Element;
}

const Icon = ({ value, ...rest }: { value: IconType } & SvgIconProps) => {
  switch (value) {
    case "construction-worker":
      return <ConstructionWorkerIcon {...rest} />;
    case "household-family":
      return <HouseholdFamilyIcon {...rest} />;
    case "money-integral":
      return <MoneyIntegralIcon {...rest} />;
    case "sun":
      return <SunIcon {...rest} />;
    case "usb":
      return <UsbIcon {...rest} />;
    default:
      return <></>;
  }
};

const Card = ({ title, subtitle, amount, icon }: ICardProps) => (
  <Box
    sx={{
      p: 3,
      height: 150,
      width: 250,
      borderRadius: 5,
      color: "#ffffff",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      background:
        "linear-gradient(180deg, #2D346C 0%, rgba(0, 73, 181, 0.7) 100%)",
      textAlign: "center",
    }}
  >
    <Typography variant={"h3"} sx={{ height: 43 }}>
      {title}
    </Typography>
    <Stack direction={"row"} justifyContent={"center"}>
      <Typography fontSize={30} fontWeight={"bold"}>
        {amount}
      </Typography>
      <Icon value={icon} sx={{ mr: 1 }} />
    </Stack>
    <Typography fontSize={12}>{subtitle}</Typography>
  </Box>
);

const Cards = () => (
  <Grid container spacing={1}>
    <Grid item xl>
      <Card
        amount={<PersianNumber value={203168} />}
        subtitle={"خانوار"}
        icon={"household-family"}
        title={"تعداد خانوار تحت پوشش"}
      />
    </Grid>
    <Grid item xl>
      <Card
        amount={<PersianNumber value={50}/>}
        subtitle={"کیلومتر"}
        icon={"construction-worker"}
        title={"حجم عملیات حفاری و داکت‌گذاری"}
      />
    </Grid>
    <Grid item xl>
      <Card
        amount={<PersianNumber value={20}/>}
        subtitle={"کیلومتر"}
        icon={"usb"}
        title={"حجم عملیات فیبرکشی"}
      />
    </Grid>
    <Grid item xl>
      <Card
        amount={<PersianNumber value={20}/>}
        subtitle={"روز"}
        icon={"sun"}
        title={"روزشمار پروژه"}
      />
    </Grid>
    <Grid item xl>
      <Card
        amount={<PersianNumber value={20}/>}
        subtitle={"میلیارد ریال"}
        icon={"money-integral"}
        title={"پیش‌بینی حجم حمایت مالی"}
      />
    </Grid>
  </Grid>
);

export default Cards;
