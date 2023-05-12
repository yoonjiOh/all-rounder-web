import MainContentWrapper from "../common/component/layout/MainContentWrapper";
import ProfitAndLossInputSheet from "../domains/finance/container/ProfitAndLoss";

const ProfitAndLoss = () => {
  console.log("ProfitAndLoss");
  return (
    <MainContentWrapper>
      <ProfitAndLossInputSheet />
    </MainContentWrapper>
  );
};

export default ProfitAndLoss;
