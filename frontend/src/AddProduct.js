import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    store: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    // Later you will send this data to your backend
    alert("Product added successfully! 🎉");
    setProduct({ name: "", price: "", store: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product 📦</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="store"
          placeholder="Store Name"
          value={product.store}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px" }}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
