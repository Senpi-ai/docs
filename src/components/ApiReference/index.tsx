import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  Component,
} from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import ReactMarkdown from "react-markdown";
import { Formik, Form } from "formik";
import CodeBlock from "@theme/CodeBlock";
import Head from "@docusaurus/Head";
import qs from "qs";
import styles from "./styles.module.css";
import ApiResponseField, {
  ApiResponse,
  buildResponse,
} from "./ApiResponseField";
import ApiParamField, { ApiParam, apiParamInitialValue } from "./ApiParamField";
import ApiParamButton from "./ApiParamButton";
import ApiExamples, { stringifyJSON, filterOutEmpty } from "./ApiExamples";
import { ApiReferenceTokenContext } from "./ApiReferenceToken";
import makeMetaDescription from "@site/src/utils/makeMetaDescription";
import LoadingCircle from "@site/src/components/LoadingCircle";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Path } from "path-parser";

export interface CodeSample {
  language: "node" | "csharp" | "python";
  code: string;
  name?: string;
}

export interface ApiReferenceProps {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description?: string;
  pathParams?: ApiParam[];
  queryParams?: ApiParam[];
  bodyParam?: ApiParam;
  responses: ApiResponse[];
  apiHost: string;
  codeSamples?: CodeSample[];
  children?: Component;
  disabled?: boolean;
}

export interface FormValues {
  path: object;
  query: object;
  body: object;
}

const deepCompact = (value: unknown) => {
  if (Array.isArray(value)) {
    const array = value.map(deepCompact).filter((x) => x != null);

    return array.length === 0 ? undefined : array;
  }

  if (typeof value === "object" && value !== null) {
    const object = Object.fromEntries(
      Object.entries(value)
        .map(([key, value]) => [key, deepCompact(value)])
        .filter(([, value]) => value != null)
    );

    return Object.keys(object).length === 0 ? undefined : object;
  }

  return value;
};

function isValidJsonString(s) {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
}

const queryParamsToObject = (search) => {
  return search
    ? search
        .substring(1)
        .split("&")
        .reduce((acc, item) => {
          const [key, value] = item.split("=");
          if (isValidJsonString(value)) {
            acc[key] = JSON.parse(value);
          } else {
            const decodedValue = decodeURIComponent(value);
            if (isValidJsonString(decodedValue)) {
              acc[key] = JSON.parse(decodedValue);
            } else {
              acc[key] = decodedValue;
            }
          }
          return acc;
        }, {})
    : {};
};

const ApiReference = ({
  description,
  method,
  path,
  pathParams,
  queryParams,
  bodyParam,
  responses,
  apiHost,
  codeSamples,
  children,
}: ApiReferenceProps) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);
  const { token, setToken } = useContext(ApiReferenceTokenContext);
  const location = useLocation();
  const initialQueryValues = queryParamsToObject(location.search);

  const handleResponseSelect = useCallback((event) => {
    setResponseIndex(+event.currentTarget.value);
  }, []);

  const execCallback = useCallback(
    async (values) => {
      setLoading(true);
      try {
        let pathReplace = path;

        for (const pathValue in values.path) {
          pathReplace = pathReplace.replace(
            `:${pathValue}`,
            values.path[pathValue]
          );
        }

        const response = await fetch(
          [
            apiHost,
            new Path(path).build(
              {
                ...pathParams,
              },
              {
                urlParamsEncoding: "uriComponent",
              }
            ),
            qs.stringify(values.query || {}, {
              addQueryPrefix: true,
            }),
          ].join(""),
          {
            method,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const fetchBody =
          path === "/nft/:address/sync" && response.status === 201
            ? response.text()
            : await response.json();

        const body = { status: response.status, body: fetchBody };

        setResponse(body);
        setResponseIndex(-1);
      } catch (error) {
        setResponse(null);
        setResponseIndex(-1);
      } finally {
        setLoading(false);
      }
    },
    [path, method, token]
  );

  const initialValues = useMemo(() => {
    if (Object.keys(initialQueryValues).length === 0) {
      const pathParam: ApiParam = pathParams && {
        type: "object",
        fields: pathParams,
      };
      const queryParam: ApiParam = queryParams && {
        type: "object",
        fields: queryParams,
      };

      return {
        path: pathParam && apiParamInitialValue(pathParam),
        query: queryParam && apiParamInitialValue(queryParam),
        body: bodyParam && apiParamInitialValue(bodyParam),
      };
    } else {
      const path = {};
      const query = {};
      const body = {};
      // return {};
      for (const key in initialQueryValues) {
        if (pathParams.some((item) => item?.name === key)) {
          path[key] = initialQueryValues[key];
        } else if (queryParams.some((item) => item?.name === key)) {
          query[key] = initialQueryValues[key];
        } else {
          body[key] = initialQueryValues[key];
        }
      }

      return {
        path,
        query,
        body,
      };
    }
  }, [bodyParam, pathParams, queryParams]);

  const onChangeToken = useCallback(
    (event) => setToken(event.currentTarget.value),
    [setToken]
  );

  return (
    <>
      <Head>
        <meta
          name="description"
          content={makeMetaDescription({
            description: description,
            path: path,
          })}
        />
      </Head>
      <Formik<FormValues> initialValues={initialValues} onSubmit={execCallback}>
        <Form autoComplete="off" className={styles.form}>
          <div className="row row--no-gutters">
            <div className="col col--5">
              <div className={styles.url}>
                <span className={styles.method}>{method}</span>
                {apiHost}
                {path}
              </div>

              {description && (
                <div className={styles.section}>
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
              )}
              <div className={styles.section}>{children}</div>
              {pathParams && pathParams.length > 0 && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>PATH PARAMS</div>

                  <div className={styles.group}>
                    <ApiParamField
                      param={{ type: "object", fields: pathParams }}
                      prefix="path"
                    />
                  </div>
                </div>
              )}

              {queryParams && queryParams.length > 0 && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>QUERY PARAMS</div>

                  <div className={styles.group}>
                    <ApiParamField
                      param={{ type: "object", fields: queryParams }}
                      prefix="query"
                    />
                  </div>
                </div>
              )}

              {bodyParam && (
                <div className={styles.section}>
                  <div className={styles.sectionTitle}>BODY PARAM</div>

                  <div className={styles.group}>
                    <ApiParamField param={bodyParam} prefix="body" />
                  </div>
                </div>
              )}

              <div className={styles.section}>
                <div className={styles.sectionTitle}>Responses</div>

                {responses?.map((response, index) => (
                  <div key={index} className={styles.section}>
                    <div className={styles.group}>
                      <ApiResponseField
                        collapsible
                        field={{
                          type: "object",
                          name: `${response.status} ${response.description}`,
                          ...response.body,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col col--7">
              <div className={styles.runner}>
                <div className={styles.inlineForm}>
                  <ApiParamButton type="submit">
                    {loading ? <LoadingCircle /> : "Try It"}
                  </ApiParamButton>
                </div>
                <ApiExamples
                  method={method}
                  apiHost={apiHost}
                  path={path}
                  codeSamples={codeSamples}
                />

                <div className={styles.section}>
                  <div className={styles.inlineForm}>
                    <div className={styles.sectionTitle}>
                      Response {responseIndex !== -1 && "Example"}
                    </div>
                    <select
                      value={responseIndex}
                      className={styles.input}
                      onChange={handleResponseSelect}
                    >
                      {responseIndex === -1 && (
                        <option disabled value={-1}>
                          {response?.status} Test Request
                        </option>
                      )}

                      {responses.map((response, index) => (
                        <option key={index} value={index}>
                          {response.status} {response.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  <CodeBlock className="language-json">
                    {responseIndex === -1
                      ? response
                        ? JSON.stringify(response.body, null, 2)
                        : "Fetch response error"
                      : responses[responseIndex].body
                      ? stringifyJSON(
                          deepCompact(
                            buildResponse(responses[responseIndex].body)
                          ),
                          true
                        )
                      : "Empty"}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ApiReference;
