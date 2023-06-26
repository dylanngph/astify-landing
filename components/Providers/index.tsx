"use client";

import React, { Fragment } from "react";
import { Chakra } from "./Chakra";
import LocalStorageProvider from "./LocalStorageProvider";
import QueryProvider from "./QueryProvider";
import Web3Provider from "./Web3Provider";
import { AuthProvider } from "./AuthProvider";
import { Box } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Web3Provider>
      <LocalStorageProvider>
        <QueryProvider>
          <Chakra>
            <AuthProvider>
              <Box
                bg="url('/images/fullpage-bg.svg')"
                bgRepeat="no-repeat"
                bgSize="cover"
                objectFit="cover"
              >
                {children}
              </Box>
            </AuthProvider>
          </Chakra>
        </QueryProvider>
      </LocalStorageProvider>
    </Web3Provider>
  );
};

export default Providers;
