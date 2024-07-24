import { useEffect, useState } from "react";
import { Button, Image, Drawer, List, Avatar, FloatButton } from "antd";
import { useCartStore } from "./useCartStore";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./styles.css";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons/lib";

function AppNew() {
  const [products, setProducts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [nombreFilter, setNombreFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);
  // const [categoryFilter, setCategoryFilter] = useState("");
  const isOpen = useCartStore((state) => state.isOpen);
  const cardProducts = useCartStore((state) => state.products);
  console.log(cardProducts);
  const actions = useCartStore((state) => state.actions);
  const navigate = useNavigate();

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
    } else {
      navigate("./buy");
    }
  };

  console.log(products);
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
            <List.Item Key={product.id}>
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
              Value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
          </label>

          {/*         <label>
          <div>Categoria:</div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="-">Todas</option>
            <option value="Tazas">Tazas</option>
            <option value="Platos">Platos</option>
            <option value="Cucharas">Cucharas</option>
          </select>
        </label> */}

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
          // .filter((product) =>
          //   categoryFilter === "-" ? true : product.category === categoryFilter
          // )
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
              <Button onClick={() => actions.addProduct(product)}>
                Agregar
              </Button>
            </div>
          ))}
      </div>
    </>
  );
}

export default AppNew;
