import * as React from "react";
import { cn } from "@/lib/utils";
import { Space, Typography } from "antd";
import { Advent_Pro, Inter, Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const adventPro = Advent_Pro({ subsets: ["latin"] });

const { Text } = Typography;
type Props = {
  title: string;
  content: string;
};

export default function BoxInfo({ title, content }: Props) {
  return (
    <Space className="px-5 py-2 bg-transparent border border-[#888693] rounded-[6px] flex flex-col items-start">
      <Text
        className={cn(
          "leading-normal whitespace-nowrap text-sm font-bold text-[#888693]",
          adventPro.className,
        )}
      >
        {title}
      </Text>
      <Text
        className={cn(
          "text-white whitespace-nowrap leading-normal text-lg font-bold uppercase mb-4",
          inter.className,
        )}
      >
        {content}
      </Text>
    </Space>
  );
}
