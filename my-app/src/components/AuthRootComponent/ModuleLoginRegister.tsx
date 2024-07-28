import { useAppDispatch } from "app/hooks"
import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { login } from "store/redux/userSlice"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"

const ModuleLoginRegister = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (location.pathname === "/auth/login") {
      try {
        const userData = {
          email,
          password,
        }
        const user = await axios.post(
          "http://localhost:8080/author/login",
          userData,
        )
        await dispatch(login(user.data))
        navigate("/")
        console.log(user.data)
      } catch (error) {
        return error
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            email,
            password,
          }
          const newUser = await axios.post(
            "http:localhost:8080/author/reg",
            userData,
          )
          await dispatch(login(newUser.data))
          navigate("/")
          console.log(newUser.data)
        } catch (error) {
          return error
        }
      } else {
        throw new Error("Your passwords do not match")
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {location.pathname === "/auth/login" ? (
          <LoginPage setEmail={setEmail} setPassword={setPassword} />
        ) : location.pathname === "/auth/register" ? (
          <RegisterPage
            setEmail={setEmail}
            setPassword={setPassword}
            setRepeatPassword={setRepeatPassword}
          />
        ) : null}
      </form>
    </div>
  )
}

export default ModuleLoginRegister
