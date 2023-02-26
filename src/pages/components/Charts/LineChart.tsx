import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import ITechnologyTrend from "src/interfaces/ITechnologyTrend";
import { CoverageType } from "src/types/CoverageType";
import { DateRangeType } from "src/types/DateRangeType";
import ChartTooltip from "src/components/Chart/ChartTooltip";
import ChartContainer, {
  ChartDockPanel,
} from "src/components/Chart/ChartContainer";
import ITechnology from "src/interfaces/ITechnology";
import ICoverage from "src/interfaces/ICoverage";
import LineChartLegend from "src/pages/components/Charts/LineChartLegend";
import {persianDateLabelFormatter, persianDateTickFormatter} from "../../../lib/utilities/persianDateFormatters";

interface IChartItem {
  year: number;
  date: string;
  month: number;

  [p: string]: number | string;
}

const extractChartData = (
  trends: ITechnologyTrend[],
  type: CoverageType,
  technologies: string[]
) => {
  let chartData = [] as IChartItem[];

  for (const trend of trends) {
    const technologyName = trend.technologyName;
    const trendDate = `${trend.month}-${trend.year}`;
    if (!technologies.includes(technologyName)) continue;

    let itemIndex = chartData.findIndex((it) => it.date === trendDate);

    if (itemIndex === -1) {
      const length = chartData.push({
        date: trendDate,
        year: trend.year,
        month: trend.month,
      });
      itemIndex = length - 1;
    }

    const chartItem = chartData[itemIndex];
    const value =
      type === "client" ? trend.clientCount : trend.passivePortCount;

    if (chartItem[technologyName])
      chartItem[technologyName] = (chartItem[technologyName] as number) + value;
    else chartItem[technologyName] = value;
  }

  return chartData.sort((cur, prev) =>
    cur.year > prev.year && cur.month > prev.month ? -1 : 1
  );
};

interface IProps {
  data: ITechnologyTrend[];
  type: CoverageType;
  coverages: ICoverage[];
  theme: "dark" | "light";
  technologies: ITechnology[];
  dateRangeType: DateRangeType;
}

const LineChart = ({
  type,
  theme,
  data,
  coverages,
  technologies,
  dateRangeType,
}: IProps) => {
  const fill = theme === "light" ? "#ffffff" : "#333333";
  const dateRangeTitle = dateRangeType === DateRangeType.YEARLY ? "سال" : "ماه";
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>([]);

  const getChartData = useCallback(
    () => extractChartData(data, type, activeTechnologies),
    [activeTechnologies, data, type]
  );

  function handleTechnologies(values: string[]) {
    setActiveTechnologies(values);
  }

  return (
    <ChartContainer width={"inherit"}>
      <ChartDockPanel position={"left"}>
        <Typography color={fill} variant={"subtitle2"} mt={0.5} fontSize={10.5}>
          {`تعداد ${coverages.find((x) => x.type === type)!.title}`}
        </Typography>
        <Typography color={fill} fontWeight={"light"} fontSize={10}>
          (بر حسب هزار واحد)
        </Typography>
      </ChartDockPanel>
      <LineChartLegend
        technologies={technologies}
        onChange={handleTechnologies}
      />
      <ResponsiveContainer width={"100%"}>
        <RechartsLineChart
          data={getChartData()}
          margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
        >
          <YAxis
            fontSize={14}
            tick={{ fill: fill }}
            axisLine={{ stroke: fill, strokeWidth: 2 }}
            tickLine={{ stroke: fill, strokeWidth: 2 }}
            tickFormatter={(value) => String(value / 1000)}
            direction={"ltr"}
          />
          <XAxis
            interval={0}
            fontSize={8.9}
            dataKey={"date"}
            angle={dateRangeType === DateRangeType.YEARLY ? 0 : -50}
            height={50}
            textAnchor="start"
            tick={{ fill }}
            tickFormatter={persianDateTickFormatter}
            tickLine={{ stroke: fill, strokeWidth: 2 }}
            axisLine={{ stroke: fill, strokeWidth: 2 }}
            label={{
              value:
                dateRangeType === DateRangeType.YEARLY ? dateRangeTitle : "",
              fill: fill,
              fontSize: 10.5,
            }}
          />
          <Tooltip
            content={
              <ChartTooltip labelFormatter={persianDateLabelFormatter} />
            }
          />
          {technologies.map((technology, key) => (
            <Line
              key={key}
              type="linear"
              strokeWidth={3}
              name={technology.title}
              dataKey={technology.title}
              stroke={technology.palettes.dark}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default LineChart;
