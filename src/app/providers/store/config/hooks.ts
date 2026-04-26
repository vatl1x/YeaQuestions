import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./appStore";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
