import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";

const ViewDeatails = () => {
  const loaderData = useLoaderData();
  const detailsId = useParams();

  const filterData = loaderData.find(
        (data) => data.id == detailsId.detailsId
      );

  return (
    <div>
        <h1 className="">Job Details</h1>
     <Details filterData={filterData}></Details>
    </div>
  );
};

export default ViewDeatails;
