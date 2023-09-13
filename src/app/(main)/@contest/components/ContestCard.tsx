import * as React from "react";
import { Card } from "antd";
import { YoutubeOutlined } from "@ant-design/icons";
import Tag from "@/app/(main)/@contest/components/Tag";

const { Meta } = Card;

type Props = {};
export default function ContestCard(props: Props) {
  return (
    <Card
      style={{ width: 300 }}
      className="bg-[#1c1a31]"
      cover={
        <img
          alt="example"
          src="https://static.cookiearena.org/public/673/Thumbnail-of-Arena.webp"
        />
      }
    >
      <Tag content="Giải thuật" bg="bg-[#313044]" />
    </Card>
  );
}
