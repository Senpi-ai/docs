import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

const AddQuery = (props) => {
  const {
    query,
    // NOTE: add headers
    headers,
    variable,
    response,
    subgraphLink,
    useCase,
    customLogic,
  } = props ?? {};
  return (
    <>
      <p>To {useCase}, you can use the following query:</p>
      <Tabs>
        <TabItem value="query" label="Query">
          <CodeBlock language="graphql">{query}</CodeBlock>
        </TabItem>
        {variable && (
          <TabItem value="variable" label="Variable">
            <CodeBlock language="json">{variable}</CodeBlock>
          </TabItem>
        )}
        <TabItem value="response" label="Response">
          <CodeBlock language="json">{response}</CodeBlock>
        </TabItem>
      </Tabs>
      With this GraphQL query, you can add it to your source code and call the
      API with the <code>graphql-request</code> library:
      <Tabs>
        <TabItem value="ts" label="TypeScript">
          <CodeBlock language="tsx" title="index.ts">
            {`import { gql, GraphQLClient } from "graphql-request";
${
  headers
    ? `import { config } from "dotenv";

config();`
    : ""
}

const graphQLClient = new GraphQLClient(
  "${subgraphLink}"
);

const query = gql\`
${query}
\`;\n
${variable ? `const variable = ${variable}\n` : ""}
${headers ? `const headers = ${headers}\n` : ""}
try {
  const data = await graphQLClient.request(query${
    variable ? ", variable" : ""
  }${headers ? ", headers" : ""});
  ${customLogic ?? "console.log(data);"}
} catch (e) {
  throw new Error(e);
}`}
          </CodeBlock>
        </TabItem>
        <TabItem value="js" label="JavaScript">
          <CodeBlock language="jsx" title="index.js">
            {`const { gql, GraphQLClient } = require("graphql-request");
${
  headers
    ? `const { config } = require("dotenv");

config();`
    : ""
}

const graphQLClient = new GraphQLClient(
  "${subgraphLink}"
);

const query = gql\`
${query}
\`;\n
${variable ? `\nconst variable = ${variable}\n` : ""}
${headers ? `\nconst headers = ${headers}\n` : ""}
try {
  const data = await graphQLClient.request(query${
    variable ? ", variable" : ""
  }${headers ? ", headers" : ""});
  ${customLogic ?? "console.log(data);"}
} catch (e) {
  throw new Error(e);
}`}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
};

export default AddQuery;
