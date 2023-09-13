"use client";
import { Oswald, Inter, Advent_Pro } from "next/font/google";
import Image from "next/image";
import React, { useInsertionEffect } from "react";
import { Col, Row, Space, Typography, Card } from "antd";
import { Button } from "@mantine/core";

const oswald = Oswald({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const adventPro = Advent_Pro({ subsets: ["latin"] });

import { cn } from "@/lib/utils";
import BoxInfo from "@/app/(main)/@dashboard/components/BoxInfo";

const { Title, Text } = Typography;
export default function Home(): React.JSX.Element {
  return (
    <React.Fragment>
      <Row
        gutter={{
          xs: 30,
          sm: 30,
          md: 30,
          lg: 32,
        }}
        className="w-full py-10 mt-20 bg-purple-dark"
      >
        <Col
          span={24}
          order={2}
          md={{
            order: 1,
            span: 12,
          }}
          className="flex justify-center"
        >
          <Space direction="vertical" className="md:flex-col">
            <Text
              className={cn("text-white font-[450] text-3xl", oswald.className)}
            >
              JOIN NOW
            </Text>
            <Text className="lg:text-[48px] w-full bg-clip-text text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              Contest PRO
            </Text>
            <Text
              className={cn(
                "text-white text-base leading-5 text-center lg:text-left lg:text-xl lg:leading-6 mb-4",
                inter.className,
              )}
            >
              Giải thuật C++, thi đấu chuyên nghiệp
            </Text>
            <Space className="mt-10 flex flex-row gap-x-5">
              <BoxInfo title="Ngôn ngữ" content="C/C++" />
              <BoxInfo title="Thời gian" content="10:00 - 12:00" />
              <BoxInfo title="Người tham gia" content="100" />
            </Space>
            <Space direction="horizontal" align="center" className="w-full">
              <Button
                size={"large"}
                className={cn(
                  "mt-7 shadow_[0_0_10px_#f65900] hover:scale-110 ease-out duration-300 hover:bg-[#f64900] text-white font-bold px-5 shadow py-3 border border-[#ffc303] text-[20px] bg-[#f65900] grid place-items-center uppercase",
                  inter.className,
                )}
              >
                Join now
              </Button>
            </Space>
          </Space>
        </Col>
        <Col
          order={1}
          span={24}
          md={{
            order: 2,
            span: 12,
          }}
          className="flex justify-center"
        >
          <Image
            src="/assets/images/banner-right-side.webp"
            alt="Picture of the author"
            width={500}
            height={500}
            className="object-contain"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}
