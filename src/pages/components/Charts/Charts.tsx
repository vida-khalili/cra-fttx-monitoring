import ITechnologyCount from "src/interfaces/ITechnologyCount";
import PieChart from "src/pages/components/Charts/PieChart";
import GroupStack from "src/components/GroupStack";
import LineChart from "./LineChart";
import { DateRangeType } from "src/types/DateRangeType";
import { useGetTrendQuery } from "src/features/craApiSlice";
import { useEffect, useState } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { appSelector } from "src/app/hooks";
import { useSelector } from "react-redux";
import ITechnologyTrend from "src/interfaces/ITechnologyTrend";
import { Grid } from "@mui/material";

// todo get real data from webservice
const TECHNOLOGIES: ITechnologyCount[] = [
  {
    id: 1,
    title: "FTTH",
    totalClient: 199606,
    totalPassivePort: 1449057,
  },
  {
    id: 2,
    title: "VDSL",
    totalClient: 167077,
    totalPassivePort: 353846,
  },
];

function Charts() {
  const { token, coverages, technologies } = useSelector(appSelector);
  const [trends, setTrends] = useState<ITechnologyTrend[]>([]);
  const { status, data } = useGetTrendQuery(token);

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      setTrends(data!.ResultObject);
    }
  }, [data, status]);

  return (
    <>
      <GroupStack height={300}>
        <PieChart mode={"client"} technologies={TECHNOLOGIES} />
        <PieChart mode={"passive-port"} technologies={TECHNOLOGIES} />
      </GroupStack>
      <Grid container height={200} fontFamily={'Vazirmatn FD'}>
        <Grid item xs={6} height={"inherit"}>
          <LineChart
            data={trends}
            theme={"light"}
            type={"passive-port"}
            coverages={coverages}
            technologies={technologies}
            dateRangeType={DateRangeType.YEARLY}
          />
        </Grid>
        <Grid item xs={6} height={"inherit"}>
          <LineChart
            data={trends}
            theme={"light"}
            type={"client"}
            coverages={coverages}
            technologies={technologies}
            dateRangeType={DateRangeType.YEARLY}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Charts;
