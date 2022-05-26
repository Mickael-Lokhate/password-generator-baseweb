import Layout from "../components/layout";
import { StatefulInput } from "baseui/input";
import { Card, StyledAction, StyledBody } from "baseui/card";
import { Button, KIND, SHAPE } from "baseui/button";
import { Input } from "baseui/input";
import { Accordion, Panel } from "baseui/accordion";
import { Slider } from "baseui/slider";
import { Checkbox } from "baseui/checkbox";
import { useState, useEffect } from "react";
import { Block } from "baseui/block";
import { FormControl } from "baseui/form-control";
import { generate } from "generate-password";
import zxcvbn from "zxcvbn";
import { useStyletron } from "baseui";
import copy from "copy-to-clipboard";

function Home() {
  const [values, setValues] = useState({
    slider: [32],
    checkCaps: true,
    checkNumbers: true,
    checkSpecials: true,
  });
  const [strength, setStrength] = useState(null);
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState("");
  const [useCss, theme] = useStyletron();

  const setNewPassword = (p) => {
    const newPassword = p
      ? p
      : generate({
          length: values.slider,
          numbers: values.checkNumbers,
          uppercase: values.checkCaps,
          symbols: values.checkSpecials,
        });
    const { score } = zxcvbn(newPassword);
    setStrength(score);
    setCopied(false);
    setPassword(newPassword);
  };

  const getStrengthColor = (s) => {
    switch (s) {
      case 0:
        return "negative400";
      case 1:
        return "warning400";
      case 2:
        return "warning200";
      case 3:
        return "positive200";
      case 4:
        return "positive400";
      default:
        return "primary50";
    }
  };

  const handleChange = (e, name) => {
    if (name === "slider") setValues({ ...values, [name]: [e.value] });
    if (name.includes("check"))
      setValues({ ...values, [name]: e.target.checked });
    setNewPassword();
  };

  const copyToClipboard = () => {
    copy(password);
    setCopied(true);
  };

  useEffect(() => {
    if (!password) setNewPassword();
  }, [password]);

  return (
    <Layout>
      <Card
        overrides={{
          Root: {
            style: {
              left: "50%",
              maxWidth: "420px",
              position: "absolute",
              top: "20px",
              transform: "translate(-50%, 0)",
              width: "95vw",
            },
          },
        }}
      >
        <StyledBody>
          <Input
            value={password}
            onChange={(e) => setNewPassword(e.target.value)}
            overrides={{
              InputContainer: {
                style: ({ $theme }) => ({
                  borderColor: $theme.colors[getStrengthColor(strength)],
                  borderWidth: $theme.sizing.scale100,
                }),
              },
              After: () => (
                <Button
                  kind={KIND.tertiary}
                  shape={SHAPE.square}
                  onClick={() => setNewPassword()}
                >
                  <svg
                    className={useCss({
                      height: theme.sizing.scale800,
                      width: theme.sizing.scale800,
                    })}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#aaaaaa"
                      d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                    />
                  </svg>
                </Button>
              ),
            }}
          />
        </StyledBody>
        <StyledAction>
          <Button
            onClick={copyToClipboard}
            overrides={{
              BaseButton: {
                style: () => ({
                  width: "100%",
                }),
              },
            }}
          >
            {copied ? "Copied" : "Copy"}
          </Button>
          <Accordion>
            <Panel title="Options">
              <Block marginBottom="scale800">
                <FormControl label="Length">
                  <Slider
                    min={4}
                    max={64}
                    value={values.slider}
                    onChange={(e) => handleChange(e, "slider")}
                  />
                </FormControl>
              </Block>
              <Block>
                <FormControl label="Characters">
                  <div>
                    <Checkbox
                      checked={values.checkCaps}
                      onChange={(e) => handleChange(e, "checkCaps")}
                    >
                      A-Z
                    </Checkbox>
                    <Checkbox
                      checked={values.checkNumbers}
                      onChange={(e) => handleChange(e, "checkNumbers")}
                    >
                      0-9
                    </Checkbox>
                    <Checkbox
                      checked={values.checkSpecials}
                      onChange={(e) => handleChange(e, "checkSpecials")}
                    >
                      %@#
                    </Checkbox>
                  </div>
                </FormControl>
              </Block>
            </Panel>
          </Accordion>
        </StyledAction>
      </Card>
    </Layout>
  );
}

export default Home;
