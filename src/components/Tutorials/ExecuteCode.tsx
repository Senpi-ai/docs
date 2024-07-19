import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

const ExecuteCode = (props) => {
  const { response, dataFetched } = props ?? {};
  return (
    <>
      <p>
        Once you have your code ready, you can execute it by running the
        following command:
      </p>
      <Tabs>
        <TabItem value="ts" label="TypeScript">
          <CodeBlock language="sh">{"ts-node index.ts"}</CodeBlock>
        </TabItem>
        <TabItem value="js" label="JavaScript">
          <CodeBlock language="sh">{"node index.js"}</CodeBlock>
        </TabItem>
      </Tabs>
      <p>
        If it runs successfully, you should see the data returned in the
        terminal:
      </p>
      <CodeBlock language="json">{response}</CodeBlock>
      <p>Congrats! 🥳🎉 You've just fetched {dataFetched}!</p>
    </>
  );
};

export default ExecuteCode;
