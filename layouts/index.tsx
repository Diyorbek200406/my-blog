"use client";

import { FunctionComponent, ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      <Box mt={"11vh"} minH={"90vh"} transition={"all .5s ease"}>
        <Container maxW={"container.xl"}>{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;

export const WithLayout = <T extends Record<any, any>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
