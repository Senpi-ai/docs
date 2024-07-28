import Install from "../Install";

const Prerequisites = (props) => {
  const { additionalDependencies } = props ?? {};
  return (
    <>
      Install dependencies <code>graphql</code> and <code>graphql-request</code>{" "}
      to your project :
      <Install
        dependencies={`graphql graphql-request ${additionalDependencies ?? ""}`}
      />
    </>
  );
};

export default Prerequisites;
