import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContextAPI } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { handelSingInWithEmail, handelSingInWithGoogle } = useContext(AuthContextAPI);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(null);
    const password = e.target.password.value;

    handelSingInWithEmail(email, password)
      .then(() => {
        showSuccessAlert();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.code === "auth/invalid-credential" ? "Invalid email or password." : err.message);
      });
  };

  const handleGoogleLogin = () => {
    handelSingInWithGoogle()
      .then(() => {
        showSuccessAlert();
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Welcome Back!",
      text: "Successfully signed in",
      showConfirmButton: false,
      timer: 1500,
      background: "#fff",
      color: "#2d3a5e"
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F5F7] px-4">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#2d3a5e]">Login Now<span className="text-pink-500">.</span></h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">Welcome back to CarePress</p>
        </div>

        <form className="space-y-5" onSubmit={handleSignIn}>
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#2d3a5e] ml-2 uppercase tracking-wide opacity-70">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all font-medium"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="text-xs font-bold text-[#2d3a5e] ml-2 uppercase tracking-wide opacity-70">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-[38px] text-gray-400 font-black text-[10px] hover:text-pink-500 transition-colors"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          <div className="flex justify-between items-center px-1">
            {error ? <p className="text-[10px] text-red-500 font-bold italic">{error}</p> : <span></span>}
            <Link to="/reset-password" state={{ email }} className="text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="w-full bg-[#2d3a5e] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-pink-500 transition-all duration-300 shadow-lg active:scale-95">
            SIGN IN
          </button>
        </form>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink mx-4 text-gray-300 font-bold text-[10px] uppercase">OR</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-4 rounded-2xl font-bold text-[#2d3a5e] hover:bg-gray-50 hover:border-pink-200 transition-all duration-300 shadow-sm active:scale-95">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-8 text-gray-500 font-medium">
          Don't have an account? <Link to="/signup" className="text-pink-500 font-bold hover:underline ml-1">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;