import React from "react";
import { Box, styled, Theme } from "@mui/system";

const Root = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));

const TestBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
}));

const Layout: React.FC = () => {
  return (
    <Root>
      <TestBox>
        <span>hello world</span>
      </TestBox>
    </Root>
  );
};

export default Layout;
