import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const ViewDeatails = () => {
  const loaderData = useLoaderData();
  const detailsId = useParams();

  const findData = loaderData?.find(
        (data) => data.id == detailsId.detailsId
      ) || {}

  return (
    <div className="mt-20">
        <h1 className="text-4xl font-semibold text-center">Job Details</h1>
     <Details findData={findData}></Details>
    </div>
  );
};

export default ViewDeatails;
