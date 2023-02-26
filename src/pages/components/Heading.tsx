import Box from "@mui/material/Box";
import sweetTaste from "../../assets/tam_shirin_logo.svg";
import sweetTasteLight from "../../assets/tam_shirin_logo_light.svg";
import { StackProps, Typography, TypographyProps } from "@mui/material";
import GroupStack from "src/components/GroupStack";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { ThemeModeType } from "src/types/ThemeModeType";
import { useLocation } from "react-router-dom";

const getLogoSrc = (mode: ThemeModeType) =>
  mode === "dark" ? sweetTaste : sweetTasteLight;

function getFaPageTitle(pageTitle?: string) {
  switch (pageTitle) {
    case "operator":
      return "اپراتوری";
    case "province":
      return "استانی";
    case "operator-province":
      return "اپراتوری/شهری";
    default:
      return "مدیـریـتی";
  }
}

const getPageTitleColor = (theme: ThemeModeType) =>
  theme === "dark" ? "#F7941D" : "#293470";

const HeadingTypography = ({
  children,
  ...rest
}: PropsWithChildren<TypographyProps>) => (
  <Typography variant={"h5"} textAlign={"center"} {...rest}>
    {children}
  </Typography>
);

const Heading = ({ mode, ...rest }: { mode: ThemeModeType } & StackProps) => {
  const {pathname} = useLocation();
  const [pageTitle, setPageTitle] = useState<string>();

  useEffect(() => {
    const pageTitle = pathname?.split("/").slice(-1)[0];
    setPageTitle(getFaPageTitle(pageTitle));
  }, [pathname]);

  return (
    <GroupStack {...rest}>
      <Box  width={130} component={"img"} src={getLogoSrc(mode)} />
      <Box m={"auto"} display={"flex"}>
        <HeadingTypography color="#F7941D">داشـبـورد</HeadingTypography>
        <HeadingTypography color={getPageTitleColor(mode)} pr={1} pl={1}>
          {pageTitle}
        </HeadingTypography>
        <HeadingTypography  color={"#F7941D"}>
          طرح مـلی فیبـر نـوری منازل و کسب و کارها
        </HeadingTypography>
      </Box>
      <Box width={130} />
    </GroupStack>
  );
};

export default Heading;
