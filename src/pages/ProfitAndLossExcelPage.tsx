import MainContentWrapper from "../common/component/layout/MainContentWrapper";
import ProfitAndLossExcel from "../domains/finance/container/ProfitAndLossExcel";

const ProfitAndLossExcelPage = () => {
  console.log("ProfitAndLossExcel");
  return (
    <MainContentWrapper>
      <ProfitAndLossExcel />
    </MainContentWrapper>
  );
};

export default ProfitAndLossExcelPage;
