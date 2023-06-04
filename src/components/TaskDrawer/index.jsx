import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/features/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskDrawer = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(
    props.task || {
      taskName: "",
      description: "",
      startTime: "",
      endTime: "",
      id: uuidv4(),
    }
  );
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!props.edit) {
      dispatch(addTask({ ...data }));
    } else {
      dispatch(updateTask({ ...data }));
    }

    setData({
      taskName: "",
      description: "",
      startTime: "",
      endTime: "",
      id: "",
    });
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.edit ? "Edit Task" : "Create Task"}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {props.edit ? "Edit Task" : "Create Task"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Col}
              md="4 mt-4"
              controlId="validationCustom01"
              className="w-100"
            >
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                required
                name="taskName"
                value={data.taskName}
                type="text"
                placeholder="Task Name"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="4 mt-4"
              controlId="validationCustom01"
              className="w-100"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                name="description"
                value={data.description}
                type="text"
                as={"textarea"}
                placeholder="description"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4 mt-4"
              controlId="validationCustom01"
              className="w-100"
            >
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                required
                name="startTime"
                value={data.startTime}
                type="datetime-local"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              md="4 mt-4"
              controlId="validationCustom01"
              className="w-100"
            >
              <Form.Label>End Time</Form.Label>
              <Form.Control
                required
                name="endTime"
                value={data.endTime}
                type="datetime-local"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              {props.edit ? "Edit" : "Create"}
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TaskDrawer;
