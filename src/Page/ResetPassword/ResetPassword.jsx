import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { AuthContextAPI } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ForgotPassword = () => {
  const { handelResetPassword } = useContext(AuthContextAPI);
  const location = useLocation(); 
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();
    setLoading(true);

    handelResetPassword(email)
      .then(() => {
        toast.success("Reset link sent!");
        setLoading(false);

        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1500);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F5F7] px-4">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#2d3a5e]">
            Reset Password<span className="text-pink-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">
            We'll send a recovery link to your email
          </p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm font-bold text-[#2d3a5e] ml-1 uppercase opacity-70">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="example@mail.com"
              required
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d3a5e] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-pink-500 transition-all duration-300 shadow-lg active:scale-95 disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="text-sm font-bold text-pink-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default ForgotPassword;
