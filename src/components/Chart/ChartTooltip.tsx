import { TooltipProps } from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import { Payload } from "recharts/types/component/DefaultTooltipContent";
import { getPersianNumber } from "src/lib/utilities/persianNumber";

interface IProps extends TooltipProps<number, string> {
  labelPrefix?: string;
  nameIsRequired?: boolean;
  labelFormatter?: (label: string) => string;
  valueIsPercentage?: boolean;
}

const ChartTooltip = ({
  payload,
  label,
  labelPrefix,
  nameIsRequired = true,
  valueIsPercentage,
  labelFormatter,
}: IProps) => {
  if (!payload?.length) return null;

  const getText = (item: Payload<number, string>) => {
    const prefix = nameIsRequired ? `${item.name}:` : "";
    const suffix = valueIsPercentage ? "%" : "";
    return `${prefix}${getPersianNumber(item.value!)}${suffix}`;
  };

  return (
    <Paper sx={{ p: 1 }}>
      <Typography variant={"subtitle1"}>
        {labelFormatter
          ? labelFormatter(label)
          : (labelPrefix ? labelPrefix + " " : "") + label}
      </Typography>
      {payload.map((item, key) => (
        <Typography
          key={key}
          dir={"auto"}
          className={"label"}
          sx={{ color: item.color, p: 0.25, fontSize: 13 }}
        >
          {getText(item)}
        </Typography>
      ))}
    </Paper>
  );
};

export default ChartTooltip;
