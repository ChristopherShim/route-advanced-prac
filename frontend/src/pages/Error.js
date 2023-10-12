import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.message)
  let title = "An error occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
    <MainNavigation/>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
