import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useState } from "react";
import axios from "axios";
import RegisterPage from "./RegisterPage";
import { useAppDispatch } from "../../app/hook";
import { login } from "../../store/redux/userSlice";

const ModuleLR: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const locationLR = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (location.pathname === "/auth/login") {
      try {
        const userData = {
            email,
            password,
          };
          const user = await axios.post("http://localhost:8080/author/login", userData);
          await dispatch(login(user.data))
          navigate('/')
          console.log(user.data)

      } catch (error) {
        return error // описание ошибки
      }
    } else {
      if(password === repeatPassword) {
        try {
            const userData = {
                email,
                password
              }
              const newUser = await axios.post("http:localhost:8080/author/reg", userData)
              await dispatch(login(newUser.data))
              navigate('/')
              console.log(newUser.data)
        } catch (error) {
            return error
            
        }
      } else {
        throw new Error('Your passwords do not match')
      }
    }
  };


  return (
    <div>
      <div onSubmit={handleSubmit}>
        {locationLR.pathname === "/auth/login" ? (
          <LoginPage setEmail={setEmail} setPassword={setPassword} />
        ) : locationLR.pathname === "/auth/register" ? (
          <RegisterPage
            setEmail={setEmail}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ModuleLR;
