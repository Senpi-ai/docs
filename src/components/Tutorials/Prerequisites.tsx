import Details from "@theme/Details";
import Install from "../Install";

const Prerequisites = (props) => {
  const { apiName } = props ?? {};
  return (
    <>
      <p>
        Finished <a href="/api/protocol/quickstart">Quickstart</a> to setup and
        integrate your project with {apiName}.
      </p>
      <p>
        If you have not, you can follow the <b>Quick Recap</b> below before
        start following the tutorial.
      </p>
      <Details summary="Quick Recap">
        For Node.js, install <code>graphql</code> and{" "}
        <code>graphql-request</code>:
        <Install dependencies="graphql graphql-request" />
      </Details>
    </>
  );
};

export default Prerequisites;
