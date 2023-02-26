import { Stack, StackProps } from "@mui/material";

const GroupStack = (props: StackProps) => (
  <Stack
    pt={1}
    fontFamily={'Vazirmatn FD'}
    direction={"row"}
    alignItems={"center"}
    justifyContent={"space-between"}
    {...props}
  />
);

export default GroupStack;
