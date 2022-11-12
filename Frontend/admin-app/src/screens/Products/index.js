import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, addProduct, getProducts } from "../../redux/actions";
import Input from "../../components/UI/Input";

import ProductsList from "./ProductsList";
export default function Product() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    productPictures: [],
    price: "",
    // offer:"",
    description: "",
    category: "",
  });

  const handleClose = () => {
    setShow(false);
  };

  const handleSave = () => {
    const data = new FormData();
    data.append("name", product.name);
    data.append("quantity", product.quantity);
    data.append("price", product.price);
    data.append("description", product.description);
    data.append("category", product.category);

    for (let pic of product.productPictures) {
      data.append("productPictures", pic);
    }
    dispatch(addProduct(data));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.category.categories.categoryList
  );
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getProducts());

    return () => {};
  }, [dispatch]);

  // const renderCategories = (cats) => (
  //   <>
  //     {cats &&
  //       cats.map((c) => (
  //         <li key={c._id}>
  //           {c.name}
  //           {c.children.length > 0 && <ul>{renderCategories(c.children)}</ul>}
  //         </li>
  //       ))}
  //   </>
  // );

  const categoryOptions = (cats, options = []) => {
    for (let c of cats) {
      options.push({ name: c.name, value: c._id });

      if (c.children.length > 0) {
        categoryOptions(c.children, options);
      }
    }
    return options;
  };
  const handleProductImages = (e) => {
    let allProductPics = product.productPictures;
    allProductPics.push(e.target.files[0]);

    setProduct((prev) => ({ ...prev, productPictures: allProductPics }));
  };
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col>
              <h3>Products</h3>
            </Col>
            <Col>
              <button onClick={handleShow}> Add</button>
            </Col>
          </Row>

          <ProductsList products={products} />

          {/* {renderCategories(categories)} */}
          <Col md={12}></Col>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, name: e.target.value }));
              }}
              value={product.name}
              placeholder={"Product Name"}
              label="Name"
            />
            <Input
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, price: e.target.value }));
              }}
              value={product.price}
              placeholder={"Product Price"}
              label="Price"
            />
            <Input
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, quantity: e.target.value }));
              }}
              value={product.quantity}
              placeholder={"Product Quantity"}
              label="Quantity"
            />
            <Input
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
              value={product.description}
              placeholder={"Product Description"}
              label="Description"
            />
            <select
              className="form-control"
              onChange={(e) =>
                setProduct((prev) => ({ ...prev, category: e.target.value }))
              }
              value={product.parentId}
              style={{ marginBottom: 15 }}
            >
              <option>Select Category</option>

              {categories &&
                categoryOptions(categories).map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.name}
                  </option>
                ))}
            </select>
            {product.productPictures.length > 0 &&
              product.productPictures.map((pic, index) => (
                <div key={index}> {pic.name}</div>
              ))}
            <input
              label={"productImage"}
              type={"file"}
              name="productImage"
              onChange={handleProductImages}
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
