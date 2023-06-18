import { useLocation } from "react-router-dom";
import { useCustomNavigate } from "../hook/useCustomNavigate";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const location = useLocation();
  const navigate = useCustomNavigate();
  return (
    <div className="h-full flex flex-col space-y-12 bg-slate-900 pt-170 w-300 text-18 font-semibold text-center">
      <div
        id="space"
        className={`items-center w-full text-white cursor-pointer`}
        onClick={() => navigate("/profile-and-loss/excel")}
      >
        손익계산서 (엑셀)
      </div>
    </div>
  );
};

export default SideBar;
