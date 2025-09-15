import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAPI, {type LoginForm } from "../api/loginApi";
const Login =() =>{
  const [formData, setFormData] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        setLoading(true);
      const res = await LoginAPI.login(formData);
      console.log(res)

      if (res.data.token) {
        // Lưu token + user info vào localStorage
        
        localStorage.setItem("role", res.data.role || "");
        localStorage.setItem("username_bookstore", res.data.name || "test");

        // điều hướng về homepage
        navigate("/");
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Server error");
    }
    finally{
        setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
