import { Collapse, Button } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import NumberInput from "../../../common/component/input/Input";
import Input from "../../../common/component/input/Input";

const { Panel } = Collapse;

interface IFormInput {
  revenue: number; // 매출액
  costOfSales: number; // 매출원가 (제품 제조비용 + 상품 구매비용)
  producingCost: number; // 제품 제조비용
  goodsSoldCost: number; // 상품 구매비용
  grossProfit: number; // 매출총이익 (매출액 - 매출원가)
  operatingExpenses: number; // 영업비용 (판매비와 관리비)
  sellingCost: number; // 판매비 (판매수수료, 운반비, 판매관리비)
  managementCost: number; // 관리비 (임대료, 급여, 감가상각비, 이자비용)
  operatingIncome: number; // 영업이익 = 매출총이익 - 영업비용
  nonOperatingIncome: number; // 영업외수익
  nonOperatingCost: number; // 영업외비용
  otherOperatingIncome: number; // 기타영업수익 = 영업외수익 - 영업외비용
  preTaxNetIncome: number; // 법인세차감전순이익 = 영업이익 + 기타영업수익
  specialIncome: number; // 특별이익
  specialCost: number; // 특별비용
  incomeTax: number; // 법인세비용
  netIncome: number; // 당기순이익 = 법인세차감전순이익 - 법인세비용
}

const ProfitAndLossInputForm: React.FC = () => {
  const { register, getValues, watch } = useForm<IFormInput>();

  const saveData = () => {
    const data = getValues();
    console.log(data);
  };

  const grossProfit =
    watch("revenue") - watch("producingCost") - watch("goodsSoldCost");
  const operatingIncome =
    grossProfit - watch("sellingCost") - watch("managementCost");
  const preTaxNetIncome = operatingIncome + watch("otherOperatingIncome");
  const netIncome = preTaxNetIncome - watch("incomeTax");

  return (
    <div className="h-screen w-full overflow-y-scroll">
      <div
        className="flex w-full h-50 bg-sky-600 items-center justify-center cursor-pointer"
        onClick={() => saveData()}
      >
        <p>손익계산서 결과보고서 보기</p>
      </div>
      <form>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header={`매출액`} key="1">
            <div>
              <NumberInput
                placeholder="제품, 상품, 서비스의 판매액을 입력해 주세요."
                register={register}
                name="revenue"
              />
            </div>
          </Panel>
          <Panel header="매출 원가" key="2">
            <div className="space-y-10">
              <NumberInput
                placeholder="제품의 제조비용을 입력해 주세요."
                register={register}
                name="producingCost"
              />
              <NumberInput
                placeholder="상품의 구매비용을 입력해 주세요."
                register={register}
                name="goodsSoldCost"
              />
            </div>
          </Panel>
          <div className="bg-sky-500/30 h-46 flex items-center px-16 font-semibold">
            <p>매출 총이익 {grossProfit}</p>
          </div>
          <Panel header="판매비 * 일반 관리비" key="3">
            <div className="space-y-10">
              <NumberInput
                placeholder="판매수수료, 운반비, 판매관리비 등의 총합을 입력해 주세요."
                register={register}
                name="sellingCost"
              />
              <NumberInput
                placeholder="임대료, 급여, 감가상각비, 이자비용 등의 총합을 입력해 주세요."
                register={register}
                name="managementCost"
              />
            </div>
          </Panel>
          <div className="bg-sky-500/30 h-46 flex items-center px-16 font-semibold">
            <p>영업 이익 {operatingIncome}</p>
          </div>
          <Panel header="영업외 수익" key="4">
            <NumberInput
              placeholder="영업 활동 이외 수익을 입력해 주세요."
              register={register}
              name="nonOperatingIncome"
            />
          </Panel>

          <Panel header="영업외 비용" key="5">
            <NumberInput
              placeholder="영업 활동 이외 비용을 입력해 주세요."
              register={register}
              name="nonOperatingCost"
            />
          </Panel>

          <Panel header="기타 영업외 이익" key="6">
            <NumberInput
              placeholder="일상적인 영업 활동이나 재무 활동을 통해 발생한 이익을 입력해 주세요."
              register={register}
              name="otherOperatingIncome"
            />
          </Panel>

          <Panel header="특별 이익" key="7">
            <NumberInput
              placeholder="특별한 요인에 의해 발생한 이익을 입력해 주세요."
              register={register}
              name="specialIncome"
            />
          </Panel>

          <Panel header="특별 손실" key="8">
            <NumberInput
              placeholder="특별한 요인에 의해 발생한 손실을 입력해 주세요."
              register={register}
              name="specialCost"
            />
          </Panel>

          <div className="bg-sky-500/30 h-46 flex items-center px-16 font-semibold">
            <p>세전 당기순이익 {preTaxNetIncome}</p>
          </div>

          <Panel header="법인세" key="9">
            <NumberInput
              placeholder="당기 소득에 대해 세법에 근거하여 계산된 세금을 입력해 주세요."
              register={register}
              name="incomeTax"
            />
          </Panel>

          <div className="bg-sky-500/30 h-46 flex items-center px-16 font-semibold">
            <p>당기순이익 {netIncome}</p>
          </div>
        </Collapse>
      </form>
    </div>
  );
};

export default ProfitAndLossInputForm;
