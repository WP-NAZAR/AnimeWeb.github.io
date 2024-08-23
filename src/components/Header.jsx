import { useState } from "react";
import iconSearch from "../assets/icon/icon_Search.png";
import iconMenu from "../assets/icon/icon_Menu.png";

export default function Header() {
  const [click, setClick] = useState(false);
  const genre = [
    "OnGoing",
    "Adventure",
    "School",
    "Romance",
    "Horror",
    "Comedy",
    "Game",
    "Magic",
    "Harem",
  ];

  const toggleGenre = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="w-full h-[50px] bg-gray-900 flex justify-between items-center px-[20px] relative">
        <div className="w-[20%] h-auto">
          <h1 className="text-white text-[15px]">Hp / Wa : 085825536460</h1>
        </div>
        <div className="w-[60%] h-auto flex items-center justify-end space-x-4">
          <button className="bg-white w-[60px] rounded-full">D / L</button>

          {/* Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={toggleGenre} className="bg-white text-black w-[80px] rounded-[5px] px-2 py-1 flex items-center justify-between">
              {click ? "Genre ▲" : "Genre ▼"}
            </button>

            {/* Dropdown Menu */}
            {click && (
              <ul className="absolute top-full mt-1 bg-white rounded-[5px] shadow-lg w-[150px] z-10">
                {genre.map((item, index) => (
                  <li
                    key={index}
                    className="text-black hover:bg-gray-950 hover:text-white px-4 py-2"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <img
            src={iconSearch}
            alt="Icon Search"
            className="w-[33px] ml-[10px]"
          />
          <img src={iconMenu} alt="Icon Menu" className="w-[33px] ml-[10px]" />
        </div>
      </div>
    </>
  );
}
