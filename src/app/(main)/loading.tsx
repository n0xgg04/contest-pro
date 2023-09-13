"use client";

import * as React from "react";
import { Space, Typography } from "antd";
import { useEffect } from "react";

type Props = {};
const { Text } = Typography;
export default function Loading(props: Props): React.JSX.Element {
  return (
    <Space className="w-full h-full fixed grid place-items-center">
      <Text className="text-2xl text-white">Loading...</Text>
    </Space>
  );
}
