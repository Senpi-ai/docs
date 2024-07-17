const Header = (props) => {
  const { apiName, dataSource, dataFetch } = props ?? {};
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
        For more details on the {apiName} API, check out the API references
        here.
      </p>
    </>
  );
};

export default Header;
