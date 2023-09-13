"use client";
import {
  Layout,
  Menu,
  theme,
  Space,
  Typography,
  MenuProps,
  Dropdown,
  Avatar,
} from "antd";
import * as React from "react";
import { Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import { DownOutlined, SmileOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Title, Text } = Typography;

const oswald = Oswald({ subsets: ["latin"] });

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

export default function NavigationBar(): React.JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <React.Fragment>
      <Header
        className={cn(
          "h-20 bg-[#171438] font-Oswald text-xl flex justify-between items-center border-b-[1px] border-[rgb(38,33,93)]",
          oswald.className,
          `bg-[${colorBgContainer}]`,
        )}
      >
        <Space className="flex flex-row">
          <svg
            viewBox="0 0 32 18"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2"
          >
            <g fill="#fff" fillRule="nonzero">
              <path
                d="M26.633 8.69l-3.424-3.431 1.711-3.43 5.563 5.575c.709.71.709 1.861 0 2.572l-6.847 6.86c-.709.711-1.858.711-2.567 0a1.821 1.821 0 010-2.571l5.564-5.575z"
                fillOpacity="0.64"
              ></path>
              <path d="M21.07.536a1.813 1.813 0 012.568 0l1.283 1.286L9.945 16.83c-.709.71-1.858.71-2.567 0l-1.284-1.287L21.071.536zm-6.418 4.717l-2.567 2.572-3.424-3.43-4.28 4.288 3.424 3.43-1.71 3.43L.531 9.97a1.821 1.821 0 010-2.572L7.378.537A1.813 1.813 0 019.945.535l4.707 4.717z"></path>
            </g>
          </svg>
          <span className="text-white text-xl">CODEMASTER</span>
        </Space>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className={cn(
            "text-[1.13rem] hidden md:flex w-full uppercase justify-center items-center h-full",
            oswald.className,
            `bg-[${colorBgContainer}]`,
          )}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item className="grow" key="2">
            Challenge
          </Menu.Item>
          <Menu.Item key="3">Codeking Arena</Menu.Item>
        </Menu>
        <Dropdown
          overlayStyle={{
            backgroundColor: "#171438",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="md:grow flex flex-row"
          menu={{ items }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space direction="horizontal">
              <Avatar size={40} icon={<UserOutlined />} />
              <Text
                className={cn(
                  "whitespace-nowrap grow text-[1rem] text-white w-full",
                  oswald.className,
                )}
              >
                Lương Tuấn Anh
              </Text>
              <DownOutlined color="#ffffff" size={15} className="text-white" />
            </Space>
          </a>
        </Dropdown>
      </Header>
    </React.Fragment>
  );
}
