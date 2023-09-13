"use client";

import * as React from "react";
import { Layout, Space, Typography } from "antd";
import NavigationBar from "@/components/global/NavigationBar";
import { MantineProvider } from "@mantine/core";
import { useEffect, useState } from "react";
import Loading from "@/layouts/Loading";
import { cn } from "@/lib/utils";

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
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const handleLoaded = React.useCallback((e: any) => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (document) {
      document.addEventListener("load", handleLoaded);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      if (document) {
        document.removeEventListener("load", handleLoaded);
      }

      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Loading show={isLoading} />
        <Layout
          className={cn(
            "w-screen h-[100vh] bg-[url('/assets/images/home-banner-bg.png')] duration-300 ease-out bg-no-repeat bg-contain bg-top bg-[rgb(17,14,39)]",
            isLoading ? "opacity-0" : "opacity-100",
          )}
        >
          <NavigationBar />
          <Content className="w-full overflow-y-auto">
            {dashboard}
            {children}
            {contest}
          </Content>
        </Layout>
      </MantineProvider>
    </React.Fragment>
  );
}
