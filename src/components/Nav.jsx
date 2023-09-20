import logo from "../assets/logo.svg";

function Nav() {
  return (
    <>
      <div className=" grid grid-cols-1 m-10 place-items-center  bg-purple-800">
        <div className="navbar outline outline-slate-200 rounded-md p-5 max-w-4xl  m-5   bg-purple-800">
          <div className="flex-1">
            <img src={logo} />
          </div>
          <div className="flex-none">
            <div className="flex flex-col text-center ">
              <h3>SCORE</h3>
              <h1>32</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
