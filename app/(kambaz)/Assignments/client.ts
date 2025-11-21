// import axios from "axios";
// const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
// const COURSES_API = `${HTTP_SERVER}/api/courses`;
// const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// export const findAssignmentsForCourse = async (courseId: string) => {
//   const res = await axios.get(`${COURSES_API}/${courseId}/assignments`);
//   return res.data;
// };

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//   const res = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
//   return res.data;
// };

// export const updateAssignment = async (assignment: any) => {
//   const res = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
//   return res.data;
// };

// export const deleteAssignment = async (assignmentId: string) => {
//   const res = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return res.data;
// };


import axios from "axios";

// Create axios instance with credentials
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// FIX: Use axiosWithCredentials for all requests
export const findAssignmentsForCourse = async (courseId: string) => {
  const res = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return res.data;
};

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const res = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return res.data;
};

export const updateAssignment = async (assignment: any) => {
  const res = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return res.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const res = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return res.data;
};