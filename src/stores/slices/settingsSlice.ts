// src/stores/slices/settingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';  // 类型导入

interface SettingsState {
  theme: 'light' | 'dark' | 'system';
  language: string;
  fontSize: number;
  tabSize: number;
  autoSave: boolean;
}

const initialState: SettingsState = {
  theme: 'system',
  language: 'zh-CN',
  fontSize: 14,
  tabSize: 2,
  autoSave: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setTabSize: (state, action: PayloadAction<number>) => {
      state.tabSize = action.payload;
    },
    toggleAutoSave: (state) => {
      state.autoSave = !state.autoSave;
    },
  },
});

export const {
  setTheme,
  setLanguage,
  setFontSize,
  setTabSize,
  toggleAutoSave,
} = settingsSlice.actions;

export default settingsSlice.reducer;