const Header = (props) => {
  const { useCase, apiName } = props ?? {};
  return (
    <>
      <p>
        In this tutorial, you will learn how to {useCase} by calling the{" "}
        {apiName} API.
      </p>
    </>
  );
};

export default Header;
