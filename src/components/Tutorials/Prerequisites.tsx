import Details from "@theme/Details";
import Install from "../Install";
import { useLocation } from "@docusaurus/router";

const Prerequisites = (props) => {
  const { apiName } = props ?? {};
  const { pathname } = useLocation();
  return (
    <>
      <ol>
        <li>
          <p>
            Finished{" "}
            <a href={`/api/${pathname?.split("/")?.[2]}/quickstart`}>
              Quickstart
            </a>{" "}
            to setup and integrate your project with {apiName}.
          </p>
          <p>
            If you have not, you can follow the <b>Quick Recap</b> below before
            start following the tutorial.
          </p>
          <Details summary="⚡ Quick Recap">
            For Node.js, install <code>graphql</code> and{" "}
            <code>graphql-request</code>:
            <Install dependencies="graphql graphql-request" />
          </Details>
        </li>
        <li>Read the Whitepaper</li>
      </ol>
    </>
  );
};

export default Prerequisites;
