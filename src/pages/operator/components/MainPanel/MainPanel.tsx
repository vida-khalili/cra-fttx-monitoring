import FeatureStack from "src/components/FeatureStack";
import PersianNumber from "src/components/PersianNumber";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemProps, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

const list1 = [
  "تهران",
  "قم",
  "قزوین",
  "مشهد",
  "ساوه",
  "شیراز",
  "اراک",
  "شهرقدس",
  "کرج",
  "رشت",
];

const list2 = [
  "ساری",
  "نیشابور",
  "بندرعباس",
  "ارومیه",
  "تبریز",
  "سقز",
  "بانه",
  "رامسر",
  "فومن",
  "بروجرد",
];

const list3 = ["لاهیجان", "کرمان", "سنندج", "کرمانشاه", "محلات"];
const list4 = ["کاشان", "گرگان", "یزد", "یاسوج", "بیرجند"];

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

const MainPanel = () => (
  <FeatureStack sx={{ p: 2, height: "100%" }}>
    <div>
      <Typography color={"#98F0BB"} fontWeight={"bold"}>
        <PersianNumber value={20}/> شهر برتر تحت پوشش اپراتور
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <List>
          {list1.map((item, key) => (
            <MainPanelListItem key={key} index={key + 1} item={item} />
          ))}
        </List>
        <List>
          {list2.map((item, key) => (
            <MainPanelListItem key={key} index={key + 11} item={item} />
          ))}
        </List>
      </Stack>
    </div>
    <div>
      <Typography color="#DE56C0" fontWeight={"bold"}>
        <PersianNumber value={10}/> شهر برتر دارای تعهد اپراتور
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <List>
          {list3.map((item, key) => (
            <MainPanelListItem key={key} index={key + 1} item={item} />
          ))}
        </List>
        <List>
          {list4.map((item, key) => (
            <MainPanelListItem key={key} index={key + 11} item={item} />
          ))}
        </List>
      </Stack>
    </div>
  </FeatureStack>
);

export default MainPanel;
