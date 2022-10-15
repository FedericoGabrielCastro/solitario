import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()               // useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector   // useSelector