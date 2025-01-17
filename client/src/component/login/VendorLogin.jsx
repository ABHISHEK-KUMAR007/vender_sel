// import React, { useState } from "react";

// const VendorLogin = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(isLogin ? "Vendor Login Submitted" : "Vendor Register Submitted");
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-96 max-w-sm"
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           {isLogin ? "Vendor Login" : "Vendor Register"}
//         </h2>
        
//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* Register-specific field */}
//         {!isLogin && (
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Confirm your password"
//             />
//           </div>
//         )}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>

//         {/* Toggle between login and register */}
//         <div className="mt-4 text-center">
//           <p className="text-sm text-gray-600">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <span
//               onClick={toggleForm}
//               className="text-blue-600 cursor-pointer ml-1"
//             >
//               {isLogin ? "Register" : "Login"}
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VendorLogin;






import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        ${process.env.REACT_APP_API}/api/v1/auth/login,
        { email, password }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.response || error.message);
      toast.error("Error during login, please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96 max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Vendor Login" : "Vendor Register"}
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password Field (Register only) */}
        {!isLogin && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md w-full"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        {/* Toggle between login and register */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={toggleForm}
              className="text-blue-600 cursor-pointer ml-1"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VendorLogin;
