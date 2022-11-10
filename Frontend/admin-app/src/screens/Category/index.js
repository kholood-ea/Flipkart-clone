import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, addCategory } from "../../redux/actions";
import Input from "../../components/UI/Input";
export default function Category() {
  const [show, setShow] = useState(false);
  const [category, setCatrgory] = useState({
    name: "",
    parentId: "",
    categoryImage: "",
  });
  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    const data = new FormData();
    data.append("name", category.name);
    data.append("parentId", category.parentId);
    data.append("categoryImage", category.categoryImage);

    dispatch(addCategory(data));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.category.categories.categoryList
  );
  useEffect(() => {
    dispatch(getAllCategory());

    return () => {};
  }, [dispatch]);
  const renderCategories = (cats) => (
    <>
      {cats &&
        cats.map((c) => (
          <li key={c._id}>
            {c.name}
            {c.children.length > 0 && <ul>{renderCategories(c.children)}</ul>}
          </li>
        ))}
    </>
  );

  const categoryOptions = (cats, options = []) => {
    for (let c of cats) {
      options.push({ name: c.name, value: c._id });

      if (c.children.length > 0) {
        categoryOptions(c.children, options);
      }
    }
    return options;
  };
  const handleCategoryImage = (e) => {
    setCatrgory((prev) => ({ ...prev, categoryImage: e.target.files[0] }));
  };
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <ul>
                  <h3>Categories</h3>
                  {renderCategories(categories)}
                </ul>
              </div>
              <button onClick={handleShow}> Add</button>
            </Col>
          </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              onChange={(e) => {
                setCatrgory((prev) => ({ ...prev, name: e.target.value }));
              }}
              value={category.name}
              placeholder={"Category Name"}
            />
            <select
              className="form-control"
              onChange={(e) =>
                setCatrgory((prev) => ({ ...prev, parentId: e.target.value }))
              }
              value={category.parentId}
            >
              <option>Select Category</option>

              {categories &&
                categoryOptions(categories).map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.name}
                  </option>
                ))}
            </select>
            <input
              type={"file"}
              name="categoryImage"
              onChange={handleCategoryImage}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Sidebar />
      </Layout>
    </>
  );
}
