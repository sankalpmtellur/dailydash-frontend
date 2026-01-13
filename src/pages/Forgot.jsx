import React, { useState } from "react";
import { ArrowLeft, Mail, KeyRound, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col justify-center py-12 px-6">
      <button
        onClick={() => navigate("/login")}
        className="fixed top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-medium group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Login
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-8 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <KeyRound size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Forgot password?
                </h3>
                <p className="text-slate-500 mt-2 font-medium">
                  No worries, we'll send you reset instructions.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      required
                      type="email"
                      placeholder="name@gmail.com"
                      className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98]"
                >
                  Reset Password
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                Check your email
              </h3>
              <p className="text-slate-500 font-medium mb-8">
                We've sent a password reset link to your email address.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all"
              >
                Return to Login
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Didn't receive the email? Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;