import { useBreakpointValue } from "@chakra-ui/react";

export const useDevice = () => {
  const isDesktop = useBreakpointValue({ sm: false, md: true, lg: true });
  const isMobile = useBreakpointValue({ sm: true, md: false, lg: false });
  const isTablet = useBreakpointValue({ sm: false, md: true });
  return { isDesktop, isMobile, isTablet };
};
