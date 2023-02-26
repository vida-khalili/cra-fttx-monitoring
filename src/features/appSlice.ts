import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICoverage from "src/interfaces/ICoverage";
import ITechnology from "src/interfaces/ITechnology";

interface IState {
  token: string;
  coverages: ICoverage[];
  technologies: ITechnology[];
  // todo make the interface for operators
  operators: { title: string; id: string }[];
  // todo make the interface for provinces
  provinces: { title: string; id: string }[];
}

const initialState: IState = {
  provinces: [],
  token: "",
  operators: [],
  coverages: [],
  technologies: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    tokenChanged(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    technologiesChanged(state, action: PayloadAction<ITechnology[]>) {
      state.technologies = action.payload;
    },
    coveragesChanged(state, action: PayloadAction<ICoverage[]>) {
      state.coverages = action.payload;
    },
    operatorsChanged(
      state,
      action: PayloadAction<{ title: string; id: string }[]>
    ) {
      state.operators = action.payload;
    },
    provincesChanged(
      state,
      action: PayloadAction<{ title: string; id: string }[]>
    ) {
      state.provinces = action.payload;
    },
  },
});

export const {
  tokenChanged,
  coveragesChanged,
  operatorsChanged,
  provincesChanged,
  technologiesChanged,
} = appSlice.actions;
export default appSlice.reducer;
