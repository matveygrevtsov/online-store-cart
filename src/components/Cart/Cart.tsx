import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface Product {
  id: string;
  description: string;
  price: number;
  image: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    id: "0",
    description: "description",
    price: 300,
    image:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

export const Cart = () => {
  return (
    <>
      <Link to="/">Вернуться</Link>
      <List
        style={{ maxWidth: "600px", width: "100%" }}
        itemLayout="horizontal"
        dataSource={MOCK_PRODUCTS}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button icon={<DeleteOutlined />} />,
              // Если идёт загрузка, отображать <Spin size="small" />
            ]}
          >
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
