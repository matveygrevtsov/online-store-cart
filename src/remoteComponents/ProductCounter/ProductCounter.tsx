import React, { Suspense } from "react";
import { Typography } from "antd";
import { FC, lazy } from "react";

interface IProps {
  productId: number;
}

const RemoteProductCounter = lazy<FC<IProps>>(() =>
  // @ts-ignore
  import("main/ProductCounter").catch((error) => ({
    default: () => (
      <Typography.Text type="danger">
        {`Не удалось загрузить ProductCounter (${JSON.stringify(error)})`}
      </Typography.Text>
    ),
  }))
);

export const ProductCounter: FC<IProps> = (props) => {
  return (
    <Suspense>
      <RemoteProductCounter {...props} />
    </Suspense>
  );
};
