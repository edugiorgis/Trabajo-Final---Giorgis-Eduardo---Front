import { useEffect, useState } from "react";
import { Button, Image, Drawer, List, Avatar, FloatButton } from "antd";
import { useCartStore } from "./useCartStore";
import { useUserStore } from "./useUserStore";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons/lib";

function AppNew() {
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [nombreFilter, setNombreFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);
  const isOpen = useCartStore((state) => state.isOpen);
  const cardProducts = useCartStore((state) => state.products);
  const actions = useCartStore((state) => state.actions);
  const navigate = useNavigate();
  const { token } = useUserStore();
  const { userName } = useUserStore();

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <p> Loading...</p>;
  }

  const handleBuyClick = () => {
    if (cardProducts.length === 0) {
      alert("Debes elegir algún producto");
    } else if (token) {
      navigate("/Succesful");
    } else {
      navigate("/Login");
    }
  };

  const handleEmptyCart = () => {
    actions.emptyCart();
  };

  return (
    <>
      <Drawer
        onClose={() => actions.closeCart()}
        open={isOpen}
        title={
          <p>
            Precio Total: ${" "}
            {cardProducts
              .map((product) => product.price)
              .reduce((a, b) => a + b, 0)}
          </p>
        }
      >
        <List>
          {cardProducts.map((product) => (
            <List.Item key={product.id}>
              <List.Item.Meta
                avatar={
                  <Avatar src={`http://localhost:8080${product.imagePath}`} />
                }
                title={product.title}
                description={product.description}
              />
              <p>Precio : ${product.price}</p>
              <Button
                type="text"
                danger
                onClick={() => actions.removeProduct(product)}
              >
                x
              </Button>
            </List.Item>
          ))}
        </List>
        <Button onClick={handleBuyClick}>Comprar</Button>
        <Button onClick={handleEmptyCart}>Vaciar Carrito</Button>
      </Drawer>
      <div className="search-box">
        <div className="order">
          <label>
            <div>Nombre:</div>
            <input
              title="nombre"
              type="text"
              value={nombreFilter}
              onChange={(e) => setNombreFilter(e.target.value.toLowerCase())}
            />
          </label>

          <label>
            <div>Precio Minimo:</div>
            <input
              title="nombre"
              type="number"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </label>

          <label>
            Ordenar por precio
            <input
              checked={isSorted}
              title="nombre"
              type="checkbox"
              onChange={(e) => setIsSorted(e.target.checked)}
            />
          </label>
          <FloatButton
            type="primary"
            icon={<ShoppingCartOutlined />}
            style={{
              backgroundColor: "#e8ccbf",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => actions.openCart()}
          >
            Carrito de Compra
          </FloatButton>
        </div>
      </div>
      <div className="cards-container">
        {products
          .slice()
          .filter((product) =>
            product.title.toLowerCase().includes(nombreFilter.toLowerCase())
          )
          .filter((product) => product.price > priceFilter)
          .sort((a, b) => (isSorted ? a.price - b.price : 0))
          .map((product) => (
            <div className="card-container" key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <Image
                src={`http://localhost:8080${product.imagePath}`}
                alt={product.title}
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                }}
              ></Image>
              <p>Precio: ${product.price}</p>
              <div className="Buttoninitiallogin">
                <button
                  style={{
                    backgroundColor: "#e8ccbf",
                    border: "none",
                    cursor: "pointer",
                    width: "100px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                  }}
                  onClick={() => actions.addProduct(product)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default AppNew;
