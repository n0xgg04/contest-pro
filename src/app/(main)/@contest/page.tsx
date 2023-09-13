"use client";

import * as React from "react";
import { Space, Typography } from "antd";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import ContestCard from "@/app/(main)/@contest/components/ContestCard";

const oswald = Oswald({ subsets: ["latin"] });

type Props = {};
const { Text } = Typography;

export default function Page(props: Props): React.JSX.Element {
  return (
    <Space className="w-full bg-black flex flex-col items-center py-20">
      <Space align="center" direction="vertical">
        <Text
          className={cn(oswald.className, "uppercase text-md text-red-600")}
        >
          Cuộc thi
        </Text>
        <Text
          className={cn(
            oswald.className,
            "uppercase font-bold text-4xl text-white",
          )}
        >
          Contest PRO
        </Text>
      </Space>
      <Space direction="horizontal">
        <ContestCard />
      </Space>
    </Space>
  );
}
