import { useParams } from "react-router-dom";
import axios from "../config/axios.js";
import { useState } from "react";
import AlertMessageSuccess from "../components/alerts/AlertMessageSuccess.jsx";
const baseURL = import.meta.env.VITE_BASE_URL;

function ChangePassword() {
  const [success, setSuccess] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { token } = useParams();

  // reset-update password

  const resetPassword = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const reType = e.target.retype.value;

    try {
      if (reType !== password) {
        setPasswordsMatch(false);
        setTimeout(() => {
          setPasswordsMatch(true);
        }, 2000);
      }

      const body = {
        password: password,
      };
      const response = await axios.put(
        baseURL + `/users/updatepassword/${token}`,
        body
      );

      if (response.data.success) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      } else {
        console.log("Password update failed:", response.data.message);
        setSuccess(false);
      }

      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-40 z-40"></div>
      {success && <AlertMessageSuccess text="Password updated" />}

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-center justify-center w-[430px] h-[430px] rounded-xl p-6 bg-slate-100 border-black transition-transform duration-800">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Reset your password{" "}
          </h2>
          <p className="text-sm text-center mb-6">
            Enter your password address below.
          </p>
          <form onSubmit={resetPassword} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                New password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="p-2 w-full border rounded-md"
                placeholder="New password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="retype"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Re-type password
              </label>
              <input
                type="password"
                id="retype"
                name="retype"
                className="p-2 w-full border rounded-md"
                placeholder="Re-type password"
                required
              />
              {/* Display message if passwords do not match */}
              {!passwordsMatch && (
                <div className="text-red-500 text-sm mt-1">
                  Passwords do not match
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
