export default function Header() {
  return (
    <header class="shadow m-3 rounded-3xl p-6 lg:px-8 bg-cyan-100 flex">
      <ul className="flex max-w-7xl items-center justify-between max-w-[500px]">
        <li className="mx-3 first-letter:uppercase">
          <a href="/">home</a>
        </li>
        <li className="mx-3 first-letter:uppercase">
          <a href="./video">videos</a>
        </li>
        <li className="mx-3 first-letter:uppercase">
          <a href="./parties">parties</a>
        </li>
        <li className="mx-3 first-letter:uppercase">
          <a href="./settings">settings</a>
        </li>
      </ul>
      <div className="ml-auto flex items-center">
        <div className=" flex hidden">
          <a href="/login" className="mx-2 p-1 px-3 rounded-lg bg-red-500 text-white block">Login</a>
          <a href="/signin" className="mx-2 p-1 px-3 rounded-lg bg-green-400 text-white">signin</a>
        </div>
        <a href="/notification">
          <div className="notification bg-white shadow py-2 px-3.5 rounded-full text-xl mr-3.5">
            <i class="fa-regular fa-bell"></i>
          </div>
        </a>
        <div className="myaccount rounded-full overflow-hidden max-w-[50px] max-h-[50px] shadow">
          <a href="/settings">
            <img src="https://picsum.photos/50/50" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}
