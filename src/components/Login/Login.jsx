import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./Login.css";
import { useState } from "react";


export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      //viene del cotexto
      await login(formData.email, formData.password);
      console.log("LOGIN EXITOSO");
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <form onSubmit={handelSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handelChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handelChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
