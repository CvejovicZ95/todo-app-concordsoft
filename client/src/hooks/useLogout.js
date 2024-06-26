import { useAuthContext } from "../context/authContext";
import { toast } from "react-toastify";
import { logoutUser } from "../api/usersApi";

export const useLogout = () => {
  const { logout } = useAuthContext();

  const logoutHandler = async () => {
    try {
      await logoutUser();
      logout();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { logoutHandler };
};
