import ProfitAndLossInputForm from "../component/ProfitAndLossDirectForm";

const ProfitAndLossInputSheet: React.FC = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll">
      {/* 직접 입력 모드 / 자동 연동에 따라 구분한다. */}
      <ProfitAndLossInputForm />
    </div>
  );
};

export default ProfitAndLossInputSheet;
