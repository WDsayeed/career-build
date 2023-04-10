import { getShoppingCart } from "../utils/fakeDb";

const getJobDetails = async () => {
  const loadedData = await fetch("/Featured.json");
  const jobsDetailsData = await loadedData.json();
// console.log(jobsDetailsData)
  const getDetailsData = getShoppingCart();
//   console.log(getShoppingCart)
  const savedData = []
  for (const id in getDetailsData) {
        // console.log(id)
    const addedDetailsData = jobsDetailsData.find((data) => data.id == id);
//     console.log(addedDetailsData)
    if(addedDetailsData){
        const quantity = getDetailsData[id]
        addedDetailsData.quantity = quantity
        savedData.push(addedDetailsData)
    }
  }

  return savedData;
};

export default getJobDetails;
