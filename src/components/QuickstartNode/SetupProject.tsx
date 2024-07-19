import CodeBlock from "@theme/CodeBlock";
import Install from "../Install";

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
      <Install dependencies="graphql graphql-request" />
    </>
  );
};

export default SetupProject;
