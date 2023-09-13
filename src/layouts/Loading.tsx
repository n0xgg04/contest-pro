import * as React from "react";
import { Space } from "antd";
import { CircleLoader } from "react-spinners";
import { cn } from "@/lib/utils";

type Props = {
  show: boolean;
};

export default function Loading(props: Props): React.JSX.Element {
  return (
    <Space
      className={cn(
        "w-screen bg-black h-screen flex justify-center items-center duration-300 ease-out z-10 fixed top-0 right-0 left-0 bottom-0",
        props.show ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <CircleLoader className="flex justify-center" color="#8400de" />
    </Space>
  );
}
