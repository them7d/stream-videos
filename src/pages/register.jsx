export default function Login() {
  return (
    <div className="main min-h-[100vh] flex flex-col justify-center">
      <div className="container p-7 shadow-lg max-w-[500px] mx-auto rounded-lg">
        <form action="" method="post" className="flex flex-col">
          <div className="form-control flex flex-col py-4">
            <label htmlFor="user">user name</label>
            <input
              type="text"
              name="user"
              id="user"
              className="border text-lg p-2"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="pass">password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="border text-lg p-2"
            />
          </div>
          <div className="form-control flex flex-col py-4">
            <label htmlFor="pass">Confirm Password</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="border text-lg p-2"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="text-2xl bg-cyan-700 text-white py-3 mt-6 rounded-xl"
          />
        </form>
      </div>
    </div>
  );
}
