"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { setCurrentUser } from "../Account/reducer";
import { enrollUser, unenrollUser } from "../Courses/Enrollments/reducer";
import { useRouter } from "next/navigation";
import type { RootState } from "../store";
import KambazNavigation from "../Navigation";

export default function DashboardClient() {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showAll, setShowAll] = useState<boolean>(false);

  // Only access Redux after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted on client
  if (!isMounted) {
    return (
      <div className="container-fluid p-4">
        <h1>Loading Dashboard...</h1>
      </div>
    );
  }

  // Now it's safe to use Redux hooks
  return <DashboardContent showAll={showAll} setShowAll={setShowAll} />;
}

// Separate component that uses Redux hooks
function DashboardContent({ 
  showAll, 
  setShowAll 
}: { 
  showAll: boolean; 
  setShowAll: (value: boolean | ((prev: boolean) => boolean)) => void;
}) {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => (state as any).enrollmentsReducer || { enrollments: [] });
  const dispatch = useDispatch();
  const router = useRouter();

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const editCourse = (event: any, c: any) => {
    event.preventDefault();
    setCourse(c);
  };

  const role = (currentUser?.role || "").toUpperCase();
  const canEdit = !!currentUser && ["ADMIN", "FACULTY", "INSTRUCTOR"].includes(role);

  return (
    <div id="wd-dashboard" className="container-fluid p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      {currentUser && (
        <div className="mb-2 d-flex align-items-center gap-2">
          <small className="text-muted">
            Signed in as <strong>{currentUser.firstName} {currentUser.lastName}</strong>
          </small>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => { dispatch(setCurrentUser(null)); router.push('/Account/Signin'); }}
            id="wd-signout-btn"
          >
            Sign out
          </button>
          <Button id="wd-enrollments-toggle" variant="primary" size="sm" className="ms-2" onClick={() => setShowAll((s) => !s)}>
            Enrollments {showAll ? "(All)" : "(Mine)"}
          </Button>
        </div>
      )}
      <hr />

      <div className="d-flex justify-content-end mb-2">
        <Button id="wd-enrollments-toggle" variant="primary" onClick={() => setShowAll((s) => !s)}>
          Enrollments {showAll ? "(All)" : "(Mine)"}
        </Button>
      </div>

      {canEdit && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                const newCourse = {
                  ...course,
                  _id: course._id && course._id !== "0" ? course._id : `C${Date.now()}`,
                  createdBy: currentUser?._id ?? "system",
                };
                dispatch(addNewCourse(newCourse));
                if (currentUser && currentUser._id) {
                  const enrollment = { _id: `E${Date.now()}`, user: currentUser._id, course: newCourse._id };
                  dispatch(enrollUser(enrollment));
                }
                setCourse({
                  _id: "0",
                  name: "New Course",
                  number: "New Number",
                  startDate: "2023-09-10",
                  endDate: "2023-12-15",
                  image: "/images/reactjs.jpg",
                  description: "New Description",
                });
              }}
            >
              Add
            </button>
            <button className="btn btn-warning float-end me-2" id="wd-update-course-click" onClick={() => dispatch(updateCourse(course))}>
              Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </>
      )}
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({(() => {
        if (!currentUser) return 0;
        const role = (currentUser.role || "").toUpperCase();
        if (role === "ADMIN" || role === "USER") return courses?.length ?? 0;
        if (showAll) return courses?.length ?? 0;
        const filtered = courses?.filter((course: any) => {
          return enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id);
        }) ?? [];
        return filtered.length;
      })()})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="mb-5">
        <div className="row g-4">
          {(() => {
            if (!currentUser) return null;
            const role = (currentUser.role || "").toUpperCase();
            let displayed: any[] = [];
            if (role === "ADMIN" || role === "USER" || showAll) {
              displayed = courses ?? [];
            } else {
              displayed = (courses ?? []).filter((course: any) =>
                enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id)
              );
            }
            return displayed.map((c: any) => (
              // render as requested: div with class "wd-dashboard-course col"
              <div key={c._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                {/* ...reuse existing card content ... */}
                <div className="card h-100">
                  <img src={c.image ?? "/images/reactjs.jpg"} className="card-img-top" alt={c.name} style={{ height: 160, objectFit: "cover" }} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title text-nowrap overflow-hidden">{c.name}</h5>
                    <p className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>{c.description}</p>
                    <button className="btn btn-primary" onClick={(e) => {
                      e.preventDefault();
                      const enrolled = enrollments.some((en: any) => en.user === currentUser._id && en.course === c._id);
                      if (enrolled) {
                        router.push(`/Courses/${c._id}/Home`);
                      } else {
                        alert('You are not enrolled in this course.');
                      }
                    }}>Go</button>
                  </div>
                  <div className="card-footer d-flex justify-content-end gap-2">
                    {currentUser && (() => {
                      const enrolled = enrollments.some((en: any) => en.user === currentUser._id && en.course === c._id);
                      if (enrolled) {
                        return <button className="btn btn-outline-danger btn-sm" onClick={(ev) => { ev.preventDefault(); dispatch(unenrollUser({ user: currentUser._id, course: c._id })); }} id={`wd-unenroll-${c._id}`}>Unenroll</button>;
                      }
                      return <button className="btn btn-success btn-sm" onClick={(ev) => { ev.preventDefault(); dispatch(enrollUser({ user: currentUser._id, course: c._id })); }} id={`wd-enroll-${c._id}`}>Enroll</button>;
                    })()}
                    {canEdit && (
                      <>
                        <button className="btn btn-warning btn-sm me-2" onClick={(e) => editCourse(e, c)} id="wd-edit-course-click">Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={(event) => { event.preventDefault(); dispatch(deleteCourse(c._id)); }} id="wd-delete-course-click">Delete</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </div>
  );
}