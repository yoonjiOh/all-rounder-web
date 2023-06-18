import MainContentWrapper from "../common/component/layout/MainContentWrapper";
import ProfitAndLossInputSheet from "../domains/finance/container/ProfitAndLossInputSheet";

const ProfitAndLossDirect = () => {
  console.log("ProfitAndLossDirect");
  return (
    <MainContentWrapper>
      <ProfitAndLossInputSheet />
    </MainContentWrapper>
  );
};

export default ProfitAndLossDirect;
