export default function Header() {
  return (
    <header class="shadow m-3 rounded-3xl bg-cyan-100 firstletter:uppercase">
      <ul className="flex first-letter:uppercase max-w-7xl items-center justify-between p-6 lg:px-8 max-w-[500px]">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="./video">videos</a>
        </li>
        <li>
          <a href="./parties">parties</a>
        </li>
        <li>
          <a href="./settings">settings</a>
        </li>
      </ul>
      <div className="ml-auto">
        
      </div>
    </header>
  );
}
