import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as dbEnrollments } from "../../Database";

type Enrollment = {
  _id?: string;
  user: string;
  course: string;
};

type EnrollmentsState = {
  enrollments: Enrollment[];
};

const initialState: EnrollmentsState = {
  enrollments: (dbEnrollments as any[]).map((e) => ({ _id: e._id ?? e._id ?? String(e._id ?? Math.random()), user: e.user, course: e.course })),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUser: (state, action: PayloadAction<{ user: string; course: string }>) => {
      const { user, course } = action.payload;
      const exists = state.enrollments.some((en) => en.user === user && en.course === course);
      if (!exists) {
        state.enrollments = [...state.enrollments, { _id: Date.now().toString(), user, course }];
      }
    },
    unenrollUser: (state, action: PayloadAction<{ user: string; course: string }>) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter((en) => !(en.user === user && en.course === course));
    },
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },
  },
});

export const { enrollUser, unenrollUser, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
