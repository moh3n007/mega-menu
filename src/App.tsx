import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./provider/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
