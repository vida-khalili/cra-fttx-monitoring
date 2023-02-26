import ITechnologyCount from "src/interfaces/ITechnologyCount";
import React, { useMemo } from "react";
import {
  Cell,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
} from "recharts";
import PersianNumber from "src/components/PersianNumber";
import { Stack, Typography } from "@mui/material";

// todo get these colors from webservice
const TECHNOLOGY_COLORS: Record<string, string> = {
  FTTH: "#ffc700",
  VDSL: "#7bc9d7",
};

interface IProps {
  mode: "passive-port" | "client";
  technologies: ITechnologyCount[];
}

const RADIAN = Math.PI / 180;

const getTitle = (mode: "passive-port" | "client") =>
  mode === "passive-port" ? "تعداد پورت منصوبه" : "تعداد سرویس‌گیرنده (کاربر)";

const PieChart = ({ mode, technologies }: IProps) => {
  const { data, total } = useMemo(() => {
    const data = technologies.map((technology) => ({
      name: technology.title,
      value:
        mode === "client"
          ? technology.totalClient
          : technology.totalPassivePort,
    }));
    const total = data.reduce((prev, cur) => prev + cur.value, 0);
    return { data, total };
  }, [mode, technologies]);

  return (
    <Stack height={"inherit"} width={"100%"}>
      <Typography color={"#ffffff"} textAlign={"center"}>
        {getTitle(mode)}
      </Typography>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart margin={{}}>
          <Pie
            cy="50%"
            cx="50%"
            paddingAngle={2.5}
            data={data}
            direction={"ltr"}
            cornerRadius={40}
            innerRadius={65}
            outerRadius={80}
            nameKey={"name"}
            dataKey="value"
            label={({ cx, cy, outerRadius, value, index, fill }) => {
              let cos: number;
              let sin: number;

              /**
               * To implement arrow with data label, there are two indexes, the first one is for
               * the up arrow and the second is for the down arrow.
               *
               * `cos` value is used for the x-axis
               * `sin` value is used for the y-axis
               *
               *
               */
              if (index === 0) {
                cos = Math.cos(RADIAN * 52);
                sin = Math.sin(RADIAN * -40);
              } else {
                cos = Math.cos(RADIAN * 52);
                sin = Math.sin(RADIAN * 40);
              }

              const sy = cy + (outerRadius + 10) * sin;
              const sx: number = cx + (outerRadius + 10) * cos;
              const mx: number = cx + (outerRadius + 50) * cos;
              const my = cy + (outerRadius + 40) * sin;
              const ex: number = mx + (cos >= 0 ? 1 : -1) * 60;

              return (
                <g>
                  <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${my}`}
                    stroke={fill}
                    fill="none"
                  />
                  {index === 0 && (
                    <text
                      x={cx}
                      y={cy}
                      dy={8}
                      textAnchor="middle"
                      fill={"#fff"}
                      fontWeight={"bold"}
                      fontSize={20}
                    >
                      <PersianNumber value={total}/>
                    </text>
                  )}
                  <text x={mx} y={my - 5} fill={fill} textAnchor={"end"}>
                    <PersianNumber value={value}/>
                  </text>
                </g>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                strokeWidth={0}
                key={`cell-${index}`}
                fill={TECHNOLOGY_COLORS[entry.name]}
              />
            ))}
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
    </Stack>
  );
};

export default PieChart;
