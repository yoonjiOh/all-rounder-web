import FileUpload from "../component/FileUpload";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMappingInfo } from "../types";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DraggableItem from "../component/DraggableItem";

const ProfitAndLossExcel: React.FC<{ id: string | undefined }> = ({ id }) => {
  const [rawLedgerId, setRawLedgerId] = useState(id);
  const [mappingInfo, setMappingInfo] = useState<IMappingInfo>({
    goodsSoldCost: [], // 상품 구매비용
    incomeTax: [], // 법인세비용
    managementCost: [], // 관리비 (임대료, 급여, 감가상각비, 이자비용)
    nonOperatingCost: [], // 영업외비용
    nonOperatingIncome: [], // 영업외수익
    producingCost: [], // 제품 제조비용
    revenue: [], // 매출액
    sellingCost: [], // 판매비 (판매수수료, 운반비, 판매관리비)
    specialCost: [], // 특별비용
    specialIncome: [], // 특별수익
  });

  useEffect(() => {
    /* rawLedgerId !== undefined 이면 rawLedgerId가 존재한다는 의미이다.
      rawLedgerId가 존재하면 server 에서 rawLedgerId에 해당하는 mappingInfo 를 가져와서 setMappingInfo 한다.
    */
    if (rawLedgerId !== undefined) {
      const fetchMappingInfo = async () => {
        const response = await axios.get(`/raw-ledger/${rawLedgerId}`);
        setMappingInfo(response.data.mappingInfo);
      };
      fetchMappingInfo();
    }
  }, []);

  const itemKrMap = {
    goodsSoldCost: "상품 구매비용",
    incomeTax: "법인세 비용",
    managementCost: "관리비 (임대료, 급여, 감가상각비, 이자비용)",
    nonOperatingCost: "영업외비용",
    nonOperatingIncome: "영업외수익",
    producingCost: "제품 제조비용",
    revenue: "매출액",
    sellingCost: "판매비 (판매수수료, 운반비, 판매관리비)",
    specialCost: "특별비용",
    specialIncome: "특별수익",
  };

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post("/raw-ledger", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setMappingInfo(response.data.mappingInfo);
    setRawLedgerId(response.data.id);
  };

  const handleEditRawLedger = async () => {
    console.log("handleEditRawLedger");
    const response = await axios.patch(
      `/raw-ledger/${rawLedgerId}`,
      mappingInfo
    );

    console.log({ response });
  };

  console.log({ mappingInfo });

  const onDragEndHandler = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    console.log("onDragEndHandler", destination, source);

    /* destination { droppableId: 'nonOperatingCost', index: number } 
       source { droppableId: 'nonOperatingCost', index: number }
    */

    const prevItems = mappingInfo
      ? mappingInfo[source.droppableId as keyof IMappingInfo]
      : [];

    if (source.droppableId === destination?.droppableId) return;

    const newMappingInfo = {
      ...mappingInfo,
      [source.droppableId]: prevItems.filter((item) => item !== draggableId),
      [destination?.droppableId as string]: [
        ...(mappingInfo[destination?.droppableId as keyof IMappingInfo] || []),
        draggableId,
      ],
    };

    setMappingInfo(newMappingInfo);
  };

  return (
    <div className="h-screen w-full overflow-y-scroll">
      <FileUpload handleFileUpload={handleFileUpload} />

      <DragDropContext onDragEnd={onDragEndHandler}>
        {/* 이 안에 드래그할 요소들과 드랍존을 넣는다.  */}
        <div className="grid grid-cols-1 w-full gap-6 mt-4 lg:grid-cols-3">
          {Object.keys(itemKrMap).map((itemKey: string) => (
            <Droppable droppableId={itemKey}>
              {(droppableProvided, droppableSnapshot) => (
                <div
                  className="bg-gray-400 px-5 py-3 rounded-md"
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  <span className="text-white text-2xl font-semibold">
                    {itemKrMap[itemKey as keyof IMappingInfo]}
                  </span>
                  {mappingInfo[itemKey as keyof IMappingInfo].map(
                    (item, index) => (
                      <DraggableItem item={item} index={index} />
                    )
                  )}
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <button
        className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleEditRawLedger}
      >
        손익계산서 필드값 변경 완료
      </button>
    </div>
  );
};

export default ProfitAndLossExcel;
