import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const selectSelf = (state: RootState) => state;

export const appSelector = createSelector(selectSelf, (state) => state.app);

// export const comparisonSelector = createSelector(
//   selectSelf,
//   (state) => state.comparison
// );
//
// export const mapViewSelector = createSelector(
//   selectSelf,
//   (state) => state.mapView
// );
//
// export const dashboardSelector = createSelector(
//   selectSelf,
//   (state) => state.dashboard
// );
//
// export const coverageSelector = createSelector(
//   selectSelf,
//   (state) => state.coverage
// );
//
// export const trendsSelector = createSelector(
//   selectSelf,
//   (state) => state.trends
// );
//
