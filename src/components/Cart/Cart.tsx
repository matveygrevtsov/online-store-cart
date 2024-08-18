import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, List } from "antd";
import { ProductCounter } from "../../remoteComponents/ProductCounter/ProductCounter";

interface Product {
  id: number;
  description: string;
  price: number;
  image: string;
}

interface IProps {
  products: Product[];
}

const Cart: FC<IProps> = ({ products }) => {
  return (
    <>
      <Link to="/">Вернуться</Link>
      <List
        style={{ maxWidth: "600px", width: "100%" }}
        itemLayout="horizontal"
        dataSource={products}
        renderItem={(product) => (
          <List.Item actions={[<ProductCounter productId={product.id} />]}>
            <List.Item.Meta
              avatar={<Avatar src={product.image} />}
              description={product.description}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Cart;
