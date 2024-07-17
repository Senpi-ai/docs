import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

const SetupProject = (props) => {
  const { framework, apiName } = props ?? {};
  return (
    <>
      <p>
        First, create a new Node.js project by running the following command:
      </p>
      <CodeBlock language="sh">npm init -y</CodeBlock>
      <p>
        Then, install the <code>graphql</code> and <code>graphql-request</code>{" "}
        packages into your project:
      </p>
      <Tabs>
        <TabItem value="npm" label="npm">
          <CodeBlock language="sh">
            npm install graphql graphql-request
          </CodeBlock>
        </TabItem>
        <TabItem value="yarn" label="yarn">
          <CodeBlock language="sh">yarn add graphql graphql-request</CodeBlock>
        </TabItem>
        <TabItem value="pnpm" label="pnpm">
          <CodeBlock language="sh">pnpm add graphql graphql-request</CodeBlock>
        </TabItem>
        <TabItem value="bun" label="bun">
          <CodeBlock language="sh">
            bun install graphql graphql-request
          </CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
};

export default SetupProject;
