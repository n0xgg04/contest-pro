import * as React from "react";
import { Space, Typography } from "antd";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  content: string;
  bg: string;
};

const { Text } = Typography;

export default function Tag({ content, bg }: Props): React.JSX.Element {
  return (
    <Text
      className={cn(
        inter.className,
        bg,
        "px-3 py-1 text-red-500 font-bold text-[0.7rem] rounded-full",
      )}
    >
      {content}
    </Text>
  );
}
