"use client";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import type { RootState, AppDispatch } from "../../../store";
import { useState, useMemo } from "react";
import { ListGroup, Button, Dropdown } from "react-bootstrap";
import ModuleEditor from "./ModuleEditor";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaTrash, FaPencilAlt, FaCheckCircle, FaEllipsisV } from "react-icons/fa";

export default function ModulesClient() {
  const { cid } = useParams() as { cid?: string };
  const dispatch = useDispatch<AppDispatch>(); // use typed dispatch

  const modules = useSelector((state: RootState) => (state as any).modulesReducer?.modules ?? []);
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const course = (courses ?? []).find((c: any) => c._id === cid); // course._id is correct here

  const [showModal, setShowModal] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null);

  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  // Helper accessors to unify id/_id differences
  const moduleId = (m: any) => m?.id ?? m?._id;
  const lessonId = (l: any) => l?.id ?? l?._id;

  // Filter modules for this course
  const courseModules = useMemo(
    () => (modules || []).filter((m: any) => m.course === cid),
    [modules, cid]
  );
  const displayedModules = courseModules;

  // Add Module (create both id & _id so reducer variants work)
  const handleAddModule = () => {
    if (!moduleName?.trim()) return;
    const idBase = `M${Date.now()}`;
    const payload = {
      id: idBase,
      _id: idBase,
      name: moduleName.trim(),
      course: cid,
      lessons: []
    };
    dispatch({ type: "modules/addModule", payload });
    setModuleName("");
  };

  const handleEditModule = (moduleIdValue: string) => {
    const mod = modules.find((m: any) => moduleId(m) === moduleIdValue);
    if (mod) {
      setModuleName(mod.name);
      setEditingModuleId(moduleIdValue);
      setShowModal(true);
    }
  };

  const handleUpdateModule = () => {
    if (!moduleName?.trim() || !editingModuleId) return;
    const mod = modules.find((m: any) => moduleId(m) === editingModuleId);
    if (mod) {
      dispatch({
        type: "modules/updateModule",
        payload: { ...mod, name: moduleName.trim(), id: moduleId(mod), _id: moduleId(mod) }
      });
    }
    setModuleName("");
    setEditingModuleId(null);
  };

  const toggleCollapse = (id: string) => setCollapsed(s => ({ ...s, [id]: !s[id] }));

  const collapseAll = () => {
    const anyExpanded = displayedModules.some((m: any) => !collapsed[moduleId(m)]);
    const next: Record<string, boolean> = {};
    displayedModules.forEach((m: any) => (next[moduleId(m)] = anyExpanded));
    setCollapsed(next);
  };

  return (
    <div>
      {/* Controls Bar */}
      <div className="d-flex justify-content-end align-items-center mb-3 gap-2">
        <Button variant="secondary" size="sm" onClick={collapseAll}>
          Collapse All
        </Button>
        <Button variant="secondary" size="sm">
          View Progress
        </Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" size="sm">
            <FaCheckCircle className="text-success me-1" />
            Publish All
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Publish all</Dropdown.Item>
            <Dropdown.Item>Unpublish all</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button 
          variant="danger" 
          size="sm"
          onClick={() => {
            setEditingModuleId(null);
            setModuleName("");
            setShowModal(true);
          }}
        >
          <FaPlus className="me-1" />
          Module
        </Button>
      </div>

      {/* Modules List */}
      <div className="d-flex flex-column gap-1">
        {/* Map over courseModules directly. All modules use 'id' */}
        {displayedModules.map((m: any) => {
          const mid = moduleId(m);
          const lessons = Array.isArray(m.lessons) ? m.lessons : [];
          const isCollapsed = !!collapsed[mid];

          return (
            <div key={mid} className="border rounded-0">
              {/* Module Header */}
              <div
                className="d-flex align-items-center justify-content-between p-3"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 text-muted" />
                  <strong>{m.name ?? "Untitled Module"}</strong>
                </div>
                
                <div className="d-flex align-items-center gap-2">
                  <FaPencilAlt
                    className="text-secondary cursor-pointer"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEditModule(mid)}
                    title="Edit module"
                  />
                  <FaTrash
                    className="text-danger cursor-pointer"
                    style={{ cursor: "pointer" }}
                    title="Delete module"
                    onClick={() => {
                      if (!confirm(`Delete module "${m.name}" and all its lessons?`)) return;
                      dispatch({ type: "modules/deleteModule", payload: mid });
                    }}
                  />
                  <FaCheckCircle className="text-success" title="Published" />
                  <FaPlus
                    className="text-secondary cursor-pointer"
                    style={{ cursor: "pointer" }}
                    title="Add item (implement later)"
                  />
                  <FaEllipsisV className="text-secondary" />
                  <button
                    className="btn btn-sm btn-link text-dark p-0"
                    onClick={() => toggleCollapse(mid)}
                    style={{ fontSize: "1.2rem", textDecoration: "none" }}
                  >
                    {isCollapsed ? "▶" : "▼"}
                  </button>
                </div>
              </div>

              {/* Module Items/Lessons */}
              {!isCollapsed && (
                <ListGroup variant="flush">
                  {lessons.length ? (
                    lessons.map((lesson: any, idx: number) => {
                      const lid = lessonId(lesson);
                      return (
                        <ListGroup.Item
                          key={lid ?? idx}
                          className="d-flex align-items-center justify-content-between"
                          style={{ borderLeft: "4px solid #28a745", paddingLeft: "1rem" }}
                        >
                          <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 text-muted" />
                            <span>{lesson.name ?? `Lesson ${idx + 1}`}</span>
                          </div>
                          
                          <div className="d-flex align-items-center gap-2">
                            <FaPencilAlt className="text-secondary" style={{ cursor: "pointer" }} />
                            <FaTrash
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                              title="Delete lesson"
                              onClick={() => {
                                if (!confirm(`Delete lesson "${lesson.name}"?`)) return;
                                // Preferred specific lesson delete action (if reducer supports it)
                                dispatch({
                                  type: "modules/deleteLesson",
                                  payload: { moduleId: mid, lessonId: lid }
                                });
                              }}
                            />
                            <FaCheckCircle className="text-success" />
                            <FaPlus className="text-secondary" style={{ cursor: "pointer" }} />
                            <FaEllipsisV className="text-secondary" />
                          </div>
                        </ListGroup.Item>
                      );
                    })
                  ) : (
                    <ListGroup.Item className="text-muted text-center">
                      No lessons in this module
                    </ListGroup.Item>
                  )}
                </ListGroup>
              )}
            </div>
          );
        })}
      </div>

      <ModuleEditor
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          setEditingModuleId(null);
          setModuleName("");
        }}
        dialogTitle={editingModuleId ? "Edit Module" : "Add Module"}
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          if (editingModuleId) {
            handleUpdateModule();
          } else {
            handleAddModule();
          }
          setShowModal(false);
        }}
      />
    </div>
  );
}