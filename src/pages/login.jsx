import { React ,useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSubmit = data => console.log(data);
  const handleSubmi = async (event) => {
    // event.preventDefault();
    try {
      const response = await fetch("https://testinga.free.mockoapp.net/m7d", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
      if (response.ok) {
        console.log(response);
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  handleSubmi();
  return (
    <div className="main min-h-[100vh] flex flex-col justify-center">
      <div className="container p-7 shadow-lg max-w-[500px] mx-auto rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="form-control flex flex-col py-4">
            <label htmlFor="user">user name</label>
            <input
              {...register("username", { required:true })}
              className="border text-lg p-2"
            />
          </div>
            <div className="text-red-800">
              { errors.username && <span>Username is required</span> }
            </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="pass">password</label>
            <input
              {...register("password", { required:true })}

              onChange={setFormData.password}
              className="border text-lg p-2"
            />
          </div>
          <div className="text-red-800">
          {errors.password && <span>Password is required</span>}
          </div>
          <input
            type="submit"
            value="login"
            className="text-2xl bg-cyan-700 text-white py-3 mt-6 rounded-xl"
          />
        </form>
      </div>
    </div>
  );
}
