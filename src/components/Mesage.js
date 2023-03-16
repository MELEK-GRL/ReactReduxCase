import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/mesaggeStore";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";

export default function MesageLogout() {
  const { username, email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHanle = (e) => {
    e.preventDefault();
    dispatch(
      logout({
        name: username,
        email: email,
        password: password,
        loggdIn: true,
      })
    );
  };

  return (
    <div className="flex font-semibold flex-col w-full gap-8 items-center justify-center ">
      <div className="gap-3 text-2xl flex w-full border-2 border-gray-900 p-4 rounded-md items-center justify-center">
        <h1>YOUR MESSAGE HAS BEEN SENT</h1>
        <BsCheckLg />
      </div>
      <div className="flex gap-2">
        <button onClick={submitHanle} className="hoverBtn">
          SEND MESSAGE
        </button>
        <button onClick={() => navigate("/")} className="hoverBtn">
          HOME PAGE
        </button>
      </div>
    </div>
  );
}