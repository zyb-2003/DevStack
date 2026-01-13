// src/stores/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';  // 类型导入
import type { RootState, AppDispatch } from './index';     // 类型导入

// 注意：useDispatch 和 useSelector 是运行时值，不是类型
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;