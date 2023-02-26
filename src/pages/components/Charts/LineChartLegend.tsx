import {
  Box,
  Checkbox,
  checkboxClasses,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import ITechnology from "src/interfaces/ITechnology";
import { ChartDockPanel } from "src/components/Chart/ChartContainer";

interface IProps {
  onChange: (values: string[]) => void;
  technologies: ITechnology[];
}

const LineChartLegend = ({ onChange, technologies }: IProps) => {
  const values = technologies.map((x) => x.title);
  const [activeValues, setActiveValues] = useState<string[]>(values);

  useEffect(() => {
    onChange(activeValues);
  }, [onChange, activeValues]);

  const handleChange = (value: string) => (_: any, checked: boolean) => {
    let updatedValues: string[];
    if (checked) updatedValues = [...activeValues, value];
    else updatedValues = activeValues.filter((it) => it !== value);
    if (updatedValues.length) setActiveValues(updatedValues);
  };

  return (
    <ChartDockPanel position={"bottom"}>
      {technologies.map((technology, key) => (
        <Box display={"flex"} alignItems={"center"} key={key} mr={1}>
          <FormControlLabel
            label={
              <Typography
                sx={{ fontWeight: "bold", fontSize: 12 }}
                color={technology.palettes.dark}
              >
                {technology.title}
              </Typography>
            }
            labelPlacement={"start"}
            control={
              <Checkbox
                size={"small"}
                disabled={
                  activeValues.includes(technology.title) &&
                  activeValues.length === 1
                }
                checked={activeValues.includes(technology.title)}
                onChange={handleChange(technology.title)}
                sx={{
                  [`&.${checkboxClasses.colorPrimary}`]: {
                    p: 0,
                    pl: 0.25,
                    color: technology.palettes.dark,
                  },
                }}
              />
            }
          />
        </Box>
      ))}
    </ChartDockPanel>
  );
};
export default LineChartLegend;
