import { useForm } from "react-hook-form";
import { logIn } from "../helpers/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertApp from "../components/AlertApp";
import BtnGoogleSigIn from "../components/BtnGoogleSigIn";
function LoginScreen() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  const {
    register,
    handleSubmit,
    isSubmitting,
    formState: { errors },
  } = useForm();

  const onSumbit = async (data) => {
    const response = await logIn(data.email, data.password);
    setResponse(response);
    if (response.ok) {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold my-3">Login</h1>
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="flex flex-col items-center justify-center"
        noValidate
      >
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 rounded-md p-2  w-100 mb-2"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500 mb-2">Email is required</span>
        )}

        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 rounded-md p-2  w-100"
          {...register("password", { required: true })}
        />
        {errors.password?.type === "required" && (
          <span className="text-red-500 my-2">Password is required</span>
        )}

        <div className="flex p-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 w-100 text-white p-2 rounded-md transition-opacity duration-200 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
          >
            {isSubmitting ? "Enviando..." : "Login"}
          </button>
        </div>
      </form>
      {!response?.ok && response && <AlertApp message={response?.message} />}
      <BtnGoogleSigIn />
    </div>
  );
}

export default LoginScreen;
