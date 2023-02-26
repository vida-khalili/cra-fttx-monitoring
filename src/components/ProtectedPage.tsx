import {
  useAuthenticationQuery,
  useLazyGetBaseDataQuery,
} from "src/features/craApiSlice";
import { PropsWithChildren, useEffect } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { appSelector, useAppDispatch } from "src/app/hooks";
import {
  coveragesChanged,
  operatorsChanged,
  provincesChanged,
  technologiesChanged,
  tokenChanged,
} from "src/features/appSlice";
import IGetBaseResult, {
  IIndicatorPalette,
} from "src/interfaces/IGetBaseResult";
import { CoverageType } from "src/types/CoverageType";
import ITechnology from "src/interfaces/ITechnology";
import ICoverage from "src/interfaces/ICoverage";
import { useSelector } from "react-redux";

function getTechnologies(data: IGetBaseResult["ResultObject"]["Technologies"]) {
  const result: ITechnology[] = [];

  for (const item of data) {
    result.push({
      title: item.title,
      palettes: {
        light: item.Paletts[0],
        main: item.Paletts[1],
        dark: item.Paletts[2],
        neutral: item.Paletts[4],
      },
    });
  }

  return result;
}

function getCoverages({
  CoveragesPalette,
  ClientsPalette,
  PassivePalette,
}: IGetBaseResult["ResultObject"]) {
  const result: ICoverage[] = [];

  const data: Record<string, IIndicatorPalette> = {
    client: ClientsPalette,
    coverage: CoveragesPalette,
    "passive-port": PassivePalette,
  };

  for (const key in data) {
    result.push({
      type: key as CoverageType,
      title: data[key].Name,
      palettes: {
        light: data[key].Palette[0],
        main: data[key].Palette[1],
        dark: data[key].Palette[2],
        neutral: data[key].Palette[4],
      },
    });
  }

  return result;
}

const ProtectedPage = ({ children }: PropsWithChildren) => {
  const { data: authData, status: authStatus } = useAuthenticationQuery(null);
  const [triggerBaseData, baseDataResult] = useLazyGetBaseDataQuery();
  const { technologies, coverages } = useSelector(appSelector);
  const isFinished = [technologies.length, coverages.length].every((x) => x);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === QueryStatus.fulfilled) {
      triggerBaseData(authData!.token);
      dispatch(tokenChanged(authData!.token));
    }
  }, [authData, authStatus, dispatch, triggerBaseData]);

  useEffect(() => {
    if (baseDataResult.data) {
      const { ResultObject } = baseDataResult.data;
      const technologies = ResultObject.Technologies;
      dispatch(
        operatorsChanged(
          ResultObject.Operators.map((o) => ({
            title: o.OperatorName,
            id: o.Id,
          }))
        )
      );
      dispatch(
        provincesChanged(
          ResultObject.Provinces.map((p) => ({
            title: p.ProvinceName,
            id: p.Id,
          }))
        )
      );
      dispatch(coveragesChanged(getCoverages(ResultObject)));
      dispatch(technologiesChanged(getTechnologies(technologies)));
    }
  }, [baseDataResult.data, dispatch]);

  return isFinished ? <>{children}</> : <></>;
};

export default ProtectedPage;
