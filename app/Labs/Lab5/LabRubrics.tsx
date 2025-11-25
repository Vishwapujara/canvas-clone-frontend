"use client";
import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { FaTrash, FaPlusCircle, FaPen } from "react-icons/fa";
import * as client from "./client";

export default function LabRubrics() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const todos = await client.fetchTodos();
            setTodos(todos);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage("Failed to fetch todos");
        }
    };

    // RUBRIC 1: POST - Post Todo button creates a new todo
    const postNewTodo = async () => {
        try {
            const newTodo = await client.postNewTodo({
                title: "New Todo from POST",
                completed: false,
            });
            setTodos([...todos, newTodo]);
            setSuccessMessage("✅ POST: New todo created successfully!");
            setTimeout(() => setSuccessMessage(null), 3000);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage("Failed to create todo");
        }
    };

    // RUBRIC 2: DELETE - Delete button removes todo item
    const deleteTodo = async (todo: any) => {
        try {
            await client.deleteTodo(todo);
            const newTodos = todos.filter((t) => t.id !== todo.id);
            setTodos(newTodos);
            setSuccessMessage(`✅ DELETE: Todo ID ${todo.id} removed successfully!`);
            setTimeout(() => setSuccessMessage(null), 3000);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(
                error.response?.data?.message || `Failed to delete todo ID ${todo.id}`
            );
        }
    };

    // RUBRIC 3: PUT - Update Todo button updates the todo fields
    const updateTodo = async (todo: any) => {
        try {
            await client.updateTodo(todo);
            const updatedTodos = todos.map((t) =>
                t.id === todo.id ? { ...todo, editing: false } : t
            );
            setTodos(updatedTodos);
            setSuccessMessage(`✅ PUT: Todo ID ${todo.id} updated successfully!`);
            setTimeout(() => setSuccessMessage(null), 3000);
            setErrorMessage(null);
        } catch (error: any) {
            setErrorMessage(`Failed to update todo ID ${todo.id}`);
        }
    };

    const editTodo = (todo: any) => {
        const updatedTodos = todos.map((t) =>
            t.id === todo.id ? { ...t, editing: true } : t
        );
        setTodos(updatedTodos);
    };

    const handleTitleChange = (todo: any, newTitle: string) => {
        const updatedTodos = todos.map((t) =>
            t.id === todo.id ? { ...t, title: newTitle } : t
        );
        setTodos(updatedTodos);
    };

    const handleCompletedChange = (todo: any, completed: boolean) => {
        updateTodo({ ...todo, completed, editing: false });
    };

    const handleEditKeyPress = (e: React.KeyboardEvent, todo: any) => {
        if (e.key === "Enter") {
            updateTodo({ ...todo, editing: false });
        }
    };

    return (
        <div id="wd-lab-rubrics">
            <h2 className="mb-4">Lab 5 - Grading Rubrics Testing</h2>

            {/* Success Message */}
            {successMessage && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {successMessage}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccessMessage(null)}
                    ></button>
                </div>
            )}

            {/* RUBRIC 4: ERROR - Display error messages */}
            {errorMessage && (
                <div
                    id="wd-todo-error-message"
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <strong>❌ Error:</strong> {errorMessage}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setErrorMessage(null)}
                    ></button>
                </div>
            )}

            {/* RUBRIC 1: POST - Post Todo Button */}
            <section className="mb-4 p-3 border rounded bg-light">
                <h4 className="text-primary mb-3">
                    📤 RUBRIC 1: POST - Post Todo Button Creates a New Todo (3 pts)
                </h4>
                <p className="text-muted">
                    Click this button to create a new todo using POST method
                </p>
                <button
                    className="btn btn-success me-2"
                    onClick={postNewTodo}
                    id="wd-post-todo-rubric"
                >
                    <FaPlusCircle className="me-2" />
                    POST: Create New Todo
                </button>
                <small className="text-muted">
                    Expected: New todo appears in the list below
                </small>
            </section>

            {/* RUBRIC 2: DELETE - Delete Button */}
            <section className="mb-4 p-3 border rounded bg-light">
                <h4 className="text-danger mb-3">
                    🗑️ RUBRIC 2: DELETE - Delete Button Removes Todo Item (3 pts)
                </h4>
                <p className="text-muted">
                    Click the red trash icon on any todo to DELETE it
                </p>
                <small className="text-muted">
                    Expected: Todo is removed from list, success message appears
                </small>
            </section>

            {/* RUBRIC 3: PUT - Update Todo Button */}
            <section className="mb-4 p-3 border rounded bg-light">
                <h4 className="text-info mb-3">
                    ✏️ RUBRIC 3: PUT - Update Todo Button Updates Todo Fields (3 pts)
                </h4>
                <p className="text-muted">
                    1. Click the blue pencil icon to edit a todo
                    <br />
                    2. Change the title and press Enter or click away
                    <br />
                    3. Check the checkbox to mark as completed
                </p>
                <small className="text-muted">
                    Expected: Todo is updated on server, success message appears
                </small>
            </section>

            {/* RUBRIC 4: ERROR - Error Handling */}
            <section className="mb-4 p-3 border rounded bg-light">
                <h4 className="text-warning mb-3">
                    ⚠️ RUBRIC 4: ERROR - Display Error Message (3 pts)
                </h4>
                <p className="text-muted">
                    Try to delete an invalid ID to trigger error handling
                </p>
                <small className="text-muted">
                    Expected: Error message shows "Unable to delete Todo with ID: xxxx"
                </small>
            </section>

            {/* Todos List */}
            <h4 className="mt-5 mb-3">📋 All Todos</h4>
            <ListGroup>
                {todos.length === 0 ? (
                    <ListGroupItem>No todos yet. Click POST button to create one!</ListGroupItem>
                ) : (
                    todos.map((todo) => (
                        <ListGroupItem key={todo.id} className="d-flex align-items-center gap-2">
                            {/* Checkbox - Part of PUT/UPDATE */}
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={todo.completed || false}
                                onChange={(e) => handleCompletedChange(todo, e.target.checked)}
                                style={{ cursor: "pointer" }}
                                title="Check to mark completed (PUT)"
                            />

                            {/* Title or Edit Input - Part of PUT/UPDATE */}
                            {!todo.editing ? (
                                <span
                                    style={{
                                        textDecoration: todo.completed ? "line-through" : "none",
                                        flex: 1,
                                    }}
                                >
                                    {todo.title}
                                </span>
                            ) : (
                                <FormControl
                                    type="text"
                                    value={todo.title}
                                    onChange={(e) => handleTitleChange(todo, e.target.value)}
                                    onKeyDown={(e) => handleEditKeyPress(e as any, todo)}
                                    onBlur={() => updateTodo({ ...todo, editing: false })}
                                    autoFocus
                                    className="flex-grow-1"
                                    placeholder="Edit title (press Enter to save)"
                                />
                            )}

                            {/* Edit Button - Activates PUT */}
                            <FaPen
                                onClick={() => editTodo(todo)}
                                className="text-primary cursor-pointer"
                                style={{ cursor: "pointer" }}
                                id="wd-edit-todo"
                                title="Edit todo (activates PUT)"
                            />

                            {/* Delete Button - Triggers DELETE */}
                            <FaTrash
                                onClick={() => deleteTodo(todo)}
                                className="text-danger cursor-pointer"
                                id="wd-delete-todo"
                                style={{ cursor: "pointer" }}
                                title="Delete todo (DELETE method)"
                            />

                            {/* ID Badge */}
                            <span className="badge bg-secondary">{todo.id}</span>
                        </ListGroupItem>
                    ))
                )}
            </ListGroup>
            <hr />
        </div>
    );
}