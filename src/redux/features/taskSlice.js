import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    {
      taskName: "first Task",
      description: "description here",
      startTime: new Date().toString(),
      endTime: new Date().toString(),
      status: "Running",
    },
  ],
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (state, action) => {
      let index;
      for (let i = 0; i < state.tasks.length; i++) {
        if (state.tasks[i].id === action.payload.id) {
          index = i;
        }
      }
      state.tasks.splice(index, 1, action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((f) => f.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
