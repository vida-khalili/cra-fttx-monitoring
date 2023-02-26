import networkPatternImage1 from "src/assets/networkPattern-01.svg";
import networkPatternImage from "src/assets/networkPattern-01.svg";
import RightNavigationBar from "src/components/RightNavigationBar/RightNavigationBar";
import React, { PropsWithChildren } from "react";
import { ThemeModeType } from "src/types/ThemeModeType";
import {Box, Container, Stack} from "@mui/material";
import Heading from "../pages/components/Heading";

const getBackground = (mode: ThemeModeType) =>
  mode !== "light"
    ? `url(${networkPatternImage1}) center/cover #151348`
    : "#ffffff";

const getMobileBackground = (mode: ThemeModeType) =>
  mode !== "light"
    ? `url(${networkPatternImage}) center/cover #151348`
    : "#ffffff";

const Layout = ({
  children,
  mode,
  scrollable = false,
}: PropsWithChildren<{ mode: ThemeModeType; scrollable?: boolean }>) => (
  <><RightNavigationBar/>
    <Box
      display="flex"
      flexDirection="row"
      height={"100%"}
      overflow={scrollable ? "auto" : "none"}
    >
      <Stack
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          background: getBackground(mode),
          [theme.breakpoints.down("sm")]: {
            background: getMobileBackground(mode),
          },
        })}
      >
      <Container maxWidth={"xl"} sx={{ml:12, width:"unset"}} >
        <Heading mode={mode} mb={5} />
        {children}
      </Container>
    </Stack>
  </Box></>
);

export default Layout;
