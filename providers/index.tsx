"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { theme } from "@/config/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { HydrationProvider, Client } from "react-hydration-provider";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <HydrationProvider>
      <I18nextProvider i18n={i18n}>
        <ChakraBaseProvider theme={theme}>
          <NextThemesProvider {...props}>
            <Client>{children}</Client>
          </NextThemesProvider>
        </ChakraBaseProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
