import { useParams } from "react-router-dom";
import MainContentWrapper from "../common/component/layout/MainContentWrapper";
import ProfitAndLossExcel from "../domains/finance/container/ProfitAndLossExcel";

const ProfitAndLossExcelPage = () => {
  console.log("ProfitAndLossExcel");

  // get params from url
  const { id } = useParams();

  return (
    <MainContentWrapper>
      <ProfitAndLossExcel id={id} />
    </MainContentWrapper>
  );
};

export default ProfitAndLossExcelPage;
