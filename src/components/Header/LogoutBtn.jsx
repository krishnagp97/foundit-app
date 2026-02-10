import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";


function LogoutBtn() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        try {
          await authService.logout(); 
          dispatch(logout());        
          navigate("/login");         
        } catch (err) {
          console.error("Logout failed:", err);
        }
        {document.title = "Foundit"}
  };

  return (
    <>
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    </>
  )
}

export default LogoutBtn
