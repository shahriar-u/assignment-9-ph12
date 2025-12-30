import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContextAPI } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const { handelRegisterUser, handelUpdate, handelSingInWithGoogle } = useContext(AuthContextAPI);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // States
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setPasswordError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

  
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must have at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    handelRegisterUser(email, password)
      .then((userCredential) => {
        handelUpdate(name, photo)
          .then(() => {
            setLoading(false);
            Swal.fire({
              icon: "success",
              title: "Congratulations!",
              text: "Successfully signed up!",
              showConfirmButton: false,
              timer: 1500
            });
            toast.success('Registration Successful!');
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
          });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  // Google Login Handler
  const handleGoogleLogin = () => {
    setLoading(true);
    handelSingInWithGoogle()
      .then(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Signed in with Google",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F5F7] px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-[#2d3a5e]">
            Sign Up<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">Create your pet care account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#2d3a5e] ml-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#2d3a5e] ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              required
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300"
            />
          </div>

          {/* Photo */}
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#2d3a5e] ml-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://image-link.com"
              className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300"
            />
          </div>

          {/* Password with Eye Icon */}
          <div className="space-y-1 relative">
            <label className="text-sm font-bold text-[#2d3a5e] ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-pink-500"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Errors */}
          <div className="min-h-[20px]">
            {passwordError && <p className="text-xs text-red-500 font-bold italic">{passwordError}</p>}
            {error && <p className="text-xs text-red-500 font-bold italic">{error}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#2d3a5e] text-white py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-pink-500 transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Register Now"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 font-bold text-xs uppercase">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-100 py-4 rounded-2xl font-bold text-[#2d3a5e] hover:bg-gray-50 hover:border-pink-200 transition-all duration-300 shadow-sm active:scale-95 disabled:opacity-50"
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Footer Link */}
        <p className="text-sm text-center mt-8 text-gray-500 font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 font-black hover:underline ml-1">
            Login Here
          </Link>
        </p>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Signup;