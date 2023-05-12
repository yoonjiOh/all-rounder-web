import { useLocation } from "react-router-dom";
import { useCustomNavigate } from "../hook/useCustomNavigate";

interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  const location = useLocation();
  const navigate = useCustomNavigate();
  return (
    <div className="h-full flex flex-col space-y-12 bg-blue pt-170 w-220 text-18 font-semibold text-center">
      <div
        id="space"
        className={`items-center w-full text-white cursor-pointer`}
        onClick={() => navigate("/profile-and-loss")}
      >
        손익계산서
      </div>
    </div>
  );
};

export default SideBar;
