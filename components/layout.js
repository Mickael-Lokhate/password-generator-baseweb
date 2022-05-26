import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { useState, useEffect } from "react";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export default function Layout({ children }) {
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    setEngine(new Styletron());
  }, []);
  return engine ? (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>{children}</Centered>
      </BaseProvider>
    </StyletronProvider>
  ) : (
    false
  );
}
