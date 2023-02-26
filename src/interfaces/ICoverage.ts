import { CoverageType } from "../types/CoverageType";

export default interface ICoverage {
  type: CoverageType;
  title: string;
  palettes: {
    light: string;
    main: string;
    dark: string;
    neutral: string;
  };
}
