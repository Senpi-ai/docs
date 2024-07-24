import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

const AddQuery = (props) => {
  const { query, headers, subgraphLink, apiName } = props ?? {};
  return (
    <>
      <p>
        You can then create a new file and import <code>graphql-request</code>{" "}
        to make a query call to the {apiName} API:
      </p>
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
${headers ? `const headers = ${headers}\n` : ""}
try {
  const data = await graphQLClient.request(query${headers ? ", headers" : ""});
  console.log(data);
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
${headers ? `const headers = ${headers}\n` : ""}
try {
  const data = await graphQLClient.request(query${headers ? ", headers" : ""});
  console.log(data);
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
