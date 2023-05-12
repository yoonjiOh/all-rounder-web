import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const customNavigate = (params: any) => {
    navigate(params);
    if (params !== -1) {
      window.scrollTo({
        top: 0,
      });
    }
  };

  return customNavigate;
};
