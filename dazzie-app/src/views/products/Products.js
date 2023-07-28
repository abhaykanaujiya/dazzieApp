import React from "react";
import Layout from "../../components/layout";
import "./product.css";

const Products = () => {
  return (
    <Layout>
      <h2>Edit Products</h2>
      <div className="productForm">
        <div className="inputContainer">
          <h4>ID</h4>
          <div className="inputTextField">
            <input className="inputText" type="text" />
          </div>
        </div>
        <div className="selectProductPicture">
          <div className="selectedProductImage"></div>
          <div className="selectedProductImageChild">
            <span className="browseTitle">Select your product picture</span>
            <div className="browseButton">Browse</div>
          </div>
        </div>
        <div className="inputContainer">
          <h4>Product Name</h4>
          <div className="inputTextField">
            <input className="inputText" type="text" />
          </div>
        </div>
        <div className="inputContainer">
          <h4>Category</h4>
          <div className="inputTextField">
            <input className="inputText" type="text" />
          </div>
        </div>
        <div className="inputContainer">
          <h4>Price</h4>
          <div className="inputTextField">
            <input className="inputText" type="text" />
          </div>
        </div>
        <div className="inputContainer">
          <h4>Description</h4>
          <div className="descriptionInputTextField">
            <textarea className="descriptionInputText" />
          </div>
        </div>
      </div>
      <div className="submitContainer">
        <div className="saveButton" s>
          Save
        </div>
        <div className="cancelButton">Cancel</div>
      </div>
    </Layout>
  );
};

export default Products;
