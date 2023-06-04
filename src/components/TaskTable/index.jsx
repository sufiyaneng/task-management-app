import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import "./taskTable.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/features/taskSlice";
import TaskDrawer from "../TaskDrawer";
import Toolbar from "../Toolbar";
import {
  covertFormat,
  covertToDisplayFormat,
  getStatusByTime,
} from "../../utils.js";

const TaskTable = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const [query, setQuery] = useState("");

  const memoizedTasks = useMemo(
    () =>
      tasks.filter((task, index) => {
        if (!query || task.taskName.includes(query)) return true;
        return false;
      }),
    [query, tasks]
  );

  return (
    <>
      <div className="task_table">
        <Toolbar query={query} setQuery={setQuery} />
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {memoizedTasks.map((task, index) => {
              return (
                <>
                  <tr key={task.index}>
                    <td>{task.taskName}</td>
                    <td>{task.description}</td>
                    <td>{covertToDisplayFormat(task.startTime)}</td>
                    <td>{covertToDisplayFormat(task.endTime)}</td>
                    <td>
                      {getStatusByTime(
                        new Date(task.startTime),
                        new Date(task.endTime)
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger me-3"
                        onClick={() => dispatch(deleteTask(task.id))}
                      >
                        Delete
                      </button>
                      <TaskDrawer edit task={task} />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TaskTable;
