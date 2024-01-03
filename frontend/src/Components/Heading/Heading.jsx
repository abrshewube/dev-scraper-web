import "./Heading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
  function activation(event) {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => item.classList.remove("active"));
    event.target.classList.toggle("active");

    const activePage = document.querySelector(".active-page");
    activePage.classList.toggle("hidden");
    activePage.classList.toggle("active-page");
    const aboutPage = document.querySelector("#About");
    aboutPage.classList.toggle("hidden");
    aboutPage.classList.toggle("active-page");
  }

  function dropDown() {
    const navMenu = document.getElementsByClassName("nav-menu");
    Array.from(navMenu).forEach((element) => {
      element.classList.toggle("hidden");
      element.classList.toggle("flex");
    });
  }

  return (
    <>
      <header>
        <div className="flex justify-center items-center flex-col logo py-3">
          <img src="favicon.ico" alt="Logo" className="w-24" />
          <p className="text-gray-400 uppercase text-lg">Dev-scrape</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 containe items-center">
          <button className="md:justify-self-end md:order-last m-3">
            <img
              src="logo192.png"
              alt="dynamic image"
              className="border rounded-full size-14 md:size-16 hover:bg-sky-900 active:bg-slate-500 transition-colors duration-300 ease-in-out"
            />
          </button>

          <button
            className="mr-3 justify-self-end hover:bg-sky-900 active:bg-sky-900 transition-colors duration-300 ease-in-out md:hidden"
            onClick={dropDown}
          >
            <FontAwesomeIcon icon={faBars} className="px-2 size-6" />
          </button>

          <div className="flex-col md:flex-row md:col-start-2 justify-center items-center col-span-2 md:col-span-1 hidden md:flex nav-menu">
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white rounded-lg px-4 hover:bg-sky-900 active:bg-sky-900 transition-colors duration-300 ease-in-out"
              onClick={(event) => {
                activation(event);
              }}
            >
              About
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white rounded-lg px-4 md:ml-4 hover:bg-sky-900 active:bg-sky-900 transition-colors duration-300 ease-in-out"
              onClick={(event) => toggleHelp(event)}
            >
              Help
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white rounded-lg px-4 md:ml-4 hover:bg-sky-900 active:bg-sky-900 transition-colors duration-300 ease-in-out active"
              onClick={(event) => {
                activation(event);
              }}
            >
              Scrape
            </a>
            <a
              href="#"
              className="menu-item text-gray-300 hover:text-white rounded-lg px-4 md:ml-4 hover:bg-sky-900 active:bg-sky-900 transition-colors duration-300 ease-in-out"
              onClick={(event) => {
                activation(event);
              }}
            >
              Favorites
            </a>
          </div>
        </div>
      </header>
    </>
  );
}