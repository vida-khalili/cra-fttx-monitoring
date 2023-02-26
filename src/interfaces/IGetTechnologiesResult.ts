import IApiStatus from "./IApiStatus";

interface ITechnology {
  id: number;
  title: string;
  totalClient: number;
}

interface IOverallPassivePort {
  id: number;
  title: string;
  totalPassivePort: number;
}

// noinspection SpellCheckingInspection
interface IOverallCount {
  overallcount: number;
  Name: string;
}

interface IResultObject {
  overallClient: IOverallCount;
  overallCoverage: IOverallCount;
  clientTechnology: ITechnology[];
  overallPassivePort: IOverallCount;
  PassivePortTechnology: IOverallPassivePort[];
}

interface IGetTechnologiesResult extends IApiStatus<IResultObject> {}

export default IGetTechnologiesResult;
