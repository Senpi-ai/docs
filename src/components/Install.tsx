import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

const Install = (props) => {
  const { dependencies } = props ?? {};
  return (
    <>
      <Tabs>
        <TabItem value="npm" label="npm">
          <CodeBlock language="sh">npm install {dependencies}</CodeBlock>
        </TabItem>
        <TabItem value="yarn" label="yarn">
          <CodeBlock language="sh">yarn add {dependencies}</CodeBlock>
        </TabItem>
        <TabItem value="pnpm" label="pnpm">
          <CodeBlock language="sh">pnpm add {dependencies}</CodeBlock>
        </TabItem>
        <TabItem value="bun" label="bun">
          <CodeBlock language="sh">
            bun install graphql {dependencies}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
};

export default Install;
