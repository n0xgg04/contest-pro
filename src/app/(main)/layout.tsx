"use client";

import * as React from "react";
import { Layout, Space, Typography } from "antd";
import NavigationBar from "@/components/global/NavigationBar";
import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";

type Props = {
  dashboard: React.ReactNode;
  contest: React.ReactNode;
  children: React.ReactNode;
};

const { Content } = Layout;

export default function MainLayout({
  dashboard,
  contest,
  children,
}: Props): React.JSX.Element {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <React.Fragment>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout className="w-screen h-screen fixed bg-[url('/assets/images/home-banner-bg.png')] bg-no-repeat bg-contain bg-top bg-[rgb(17,14,39)] pb-20">
          <NavigationBar />
          <Content className="flex flex-col items-center justify-center w-full overflow-y-auto">
            {dashboard}
            {children}
            {contest}
          </Content>
        </Layout>
      </MantineProvider>
    </React.Fragment>
  );
}
