import Link from "@docusaurus/Link";

const Header = (props) => {
  const { apiName, dataSource, dataFetch, subgraphStudioLink } = props ?? {};
  return (
    <>
      <p>
        In this tutorial, you will learn how to use the {apiName} API to fetch
        data from {dataSource} in Node.js.
      </p>
      <p>
        Here, you will be shown an example to fetch {dataFetch} data, but you
        can use other APIs to fetch other data available on the {apiName} API.
      </p>
      <p>
        For more details on the {apiName} API, check out the Subgraph Studio{" "}
        <Link to={`${subgraphStudioLink}/graphql`}>here</Link>.
      </p>
    </>
  );
};

export default Header;
