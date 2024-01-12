// import { useForm, FormProvider } from "react-hook-form";
// import { useState } from "react";

// export default function Login() {
//   // const methods = useForm();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formData.name && formData.email && formData.password) {
//       console.log("Form data is valid:", formData);
//     } else {
//       console.log("Form data is invalid:", formData);
//     }
//   };
//   return (
//     <div className="main min-h-[100vh] flex flex-col justify-center">
//       <div className="container p-7 shadow-lg max-w-[500px] mx-auto rounded-lg">
//         <form onSubmit={handleSubmit} noValidate className="flex flex-col">
//           <div className="form-control flex flex-col py-4">
//             <label htmlFor="user">user name</label>
//             <input
//               type="text"
//               name="user"
//               id="user"
//               value={formData.name}
//               className="border text-lg p-2"
//             />
//           </div>
//           <div className="form-control flex flex-col py-4">
//             <label htmlFor="pass">password</label>
//             <input
//               type="password"
//               name="pass"
//               id="pass"
//               value={formData.password}
//               onChange={setFormData.password}
//               className="border text-lg p-2"
//             />
//           </div>
//           <input
//             type="submit"
//             value="login"
//             className="text-2xl bg-cyan-700 text-white py-3 mt-6 rounded-xl"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }
import { useForm, FormProvider } from "react-hook-form";
