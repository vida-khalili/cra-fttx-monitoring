import ProtectedPage from "src/components/ProtectedPage";
import React, {PropsWithChildren} from "react";
import Layout from "src/components/Layout";
import {
  Box,
  Button,
  ButtonProps,
  Grid,
  ListItem,
  ListItemProps,
  Stack,
  useMediaQuery,
} from "@mui/material";
import {Theme} from "@mui/system";
import {useSelector} from "react-redux";
import {RootState} from "src/app/store";
import FeatureStack from "src/components/FeatureStack";
import Typography from "@mui/material/Typography";
import PersianNumber from "src/components/PersianNumber";
import Actions from "src/pages/operator/components/RightPanel/Actions";
import DownloadIcon from "@mui/icons-material/Download";
import ProvinceAutocomplete from "src/components/Autocompelets/ProvinceAutocomplete";
import chartImage from "../../../public/operator-province.png";
import OperatorAutocomplete from "src/components/Autocompelets/OperatorAutocomplete";

const ProvinceCard = ({
                        amount,
                        subtitle,
                      }: {
  amount: JSX.Element;
  subtitle: string;
}) => (
  <FeatureStack height={120} justifyContent={"center"} textAlign={"center"}>
    <Typography variant={"h1"} fontSize={50} fontWeight={"bold"}>
      {amount}
    </Typography>
    <Typography color={"#7CCAD8"} fontWeight={300}>
      {subtitle}
    </Typography>
  </FeatureStack>
);

const MainPanelListItem = ({
                             item,
                             index,
                             ...rest
                           }: PropsWithChildren<ListItemProps & { item: string; index: number }>) => {
  return (
    <ListItem {...rest} disablePadding>
      <PersianNumber value={index}/>.{item}
    </ListItem>
  );
};

const ActionButton1 = ({title, ...rest}: { title: string } & ButtonProps) => (
  <Button sx={{p: 0, width: "100%"}} {...rest}>
    <FeatureStack
      height={40}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack justifyContent={"center"} alignItems={"center"} direction={"row"}>
        {<DownloadIcon/>}
        <Typography fontSize={16} fontWeight={300}>
          {title}
        </Typography>
      </Stack>
    </FeatureStack>
  </Button>
);

function Content() {
  const {provinces, operators} = useSelector((state: RootState) => state.app);
  const onlyMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Layout mode={"light"} scrollable={onlyMediumScreen}>
      <Grid container spacing={4}>
        <Grid item xs={12} xl={4}>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <OperatorAutocomplete options={operators} />
                <ProvinceAutocomplete options={provinces} />
              </Stack>
            </Grid>
          </Grid>
          <Grid item container spacing={2} mt={0.25}>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber value={1200}/>}
                subtitle="تعداد خانوار تحت پوشش"
              />
            </Grid>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber value={0.45} options={{ style: "percent" }}/>}
                subtitle="درصد پوشش خانوار"
              />
            </Grid>
          </Grid>{" "}
          <Grid item container spacing={2} mt={0.25}>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber value={1200}/>}
                subtitle="تعداد خانوار تحت تعهد"
              />
            </Grid>
            <Grid item xs={6}>
              <ProvinceCard
                amount={<PersianNumber value={50}/>}
                subtitle="حجم حمایت مالی (میلیارد ریال)"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} mt={2}>
              <Actions />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} xl={8}>
          <Box component={"img"} src={chartImage} width={"100%"} />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default function Operator() {
  return (
    <ProtectedPage>
      <Content/>
    </ProtectedPage>
  );
}
