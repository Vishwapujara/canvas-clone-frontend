import { createSlice } from "@reduxjs/toolkit";
import { modules as dbModules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: dbModules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }: any) => {
      const newModule: any = {
        id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
    },
    deleteModule: (state, { payload: moduleId }: any) => {
      state.modules = state.modules.filter((m: any) => m.id !== moduleId);
    },
    updateModule: (state, { payload: module }: any) => {
      state.modules = state.modules.map((m: any) => (m.id === module.id ? module : m)) as any;
    },
    editModule: (state, { payload: moduleId }: any) => {
      state.modules = state.modules.map((m: any) => (m.id === moduleId ? { ...m, editing: true } : m)) as any;
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
