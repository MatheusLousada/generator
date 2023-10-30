import React, { useState } from "react";
import { components, styles } from "./styles";
import { FormRequestsProps } from "./interfaces/formRequests.interface";
import { FormLabel, TextareaAutosize, Input } from "@mui/material";
import { useGeneratorContext } from "../../../contexts/GeneratorContext";

const FormRequests: React.FC<FormRequestsProps> = ({ onInputChange }) => {
  const { Form, Paper } = components;
  const { formData, setFormData } = useGeneratorContext();
  const { request } = formData;
  const [baseURL, setBaseURL] = useState(request ? request.baseURL : "");
  const [accessToken, setAccessToken] = useState(
    request ? request.accessToken : ""
  );

  const sanitizeBaseUrl = (baseUrl: string) => {
    const sanitizedBaseUrl = baseUrl.replace(/[^a-zA-Z0-9\.\-_:/]/g, "");
    return sanitizedBaseUrl;
  };

  const handleBaseURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const baseUrl = sanitizeBaseUrl(event.target.value);
    setBaseURL(baseUrl);

    setFormData({
      ...formData,
      request: {
        ...request,
        baseURL: baseUrl,
      },
    });

    onInputChange(event);
  };

  const handleAccessTokenChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAccessToken(event.target.value);

    setFormData({
      ...formData,
      request: {
        ...request,
        accessToken: event.target.value,
      },
    });

    onInputChange(event);
  };

  return (
    <div style={styles.DivFormRequests}>
      <Paper variant="elevation" elevation={3}>
        <div style={styles.DivPaper} />
        <Form>
          <div style={styles.DivForm}>
            <div style={styles.DivBaseUrl}>
              <FormLabel
                htmlFor="baseURL"
                style={styles.FormLabelBaseUrl}
                focused={false}
              >
                BaseURL
              </FormLabel>
              <Input
                type="text"
                id="baseURL"
                name="baseURL"
                value={baseURL}
                onChange={handleBaseURLChange}
                style={styles.Text}
              />
            </div>

            <div
              style={{ display: "flex", width: " 100%", flexDirection: "row" }}
            >
              <FormLabel
                htmlFor="accessToken"
                style={styles.FormLabelAccessToken}
                focused={false}
              >
                Access token
              </FormLabel>
              <TextareaAutosize
                minRows={5}
                id="accessToken"
                name="accessToken"
                value={accessToken}
                onChange={handleAccessTokenChange}
                style={styles.Text}
              />
            </div>
          </div>
        </Form>
      </Paper>
    </div>
  );
};

export default FormRequests;
