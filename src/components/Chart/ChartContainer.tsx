import Box, { BoxProps } from "@mui/material/Box";
import { PropsWithChildren } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

type PositionType = "top" | "bottom" | "left" | "right";

const TOP_BOTTOM = ["top", "bottom"];

export const ChartDockPanel = ({
  children,
  position,
}: PropsWithChildren<{ position: PositionType }>) => {
  const left = position === "left" ? "0" : "";
  const right = TOP_BOTTOM.includes(position) ? "50%" : "";
  const transformOrigin = position === "left" ? "center" : "";
  const transform = TOP_BOTTOM.includes(position)
    ? "translateX(50%)"
    : "rotate(180deg) translateX(-50%)";
  const writingMode = position === "left" ? "vertical-lr" : "";
  const height = position === "left" ? "100%" : "unset";
  const width = position === "bottom" ? "100%" : "unset";
  const bottom = position === "bottom" ? "0" : "";
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      mt={-4}
      mr={!isSmall ? -3.5 : -2}
      width={width}
      bottom={bottom}
      height={height}
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      left={left}
      right={right}
      position={"absolute"}
      sx={{
        transform,
        writingMode,
        transformOrigin,
      }}
    >
      {children}
    </Box>
  );
};

const ChartContainer = ({
  children,
  height,
  ...rest
}: PropsWithChildren<BoxProps>) => (
  <Box
    position={"relative"}
    height={height ? height : "inherit"}
    padding={2.5}
    {...rest}
  >
    {children}
  </Box>
);

export default ChartContainer;
