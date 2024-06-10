import React, { useEffect, useState ,useContext} from "react";
import "./ToggleTheme.css";
import { counterContext } from "../../context/context";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("good");
  const value = useContext(counterContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "darkTheme") {
      setTheme("lightTheme");
    } else {
      setTheme("darkTheme");
    }
  };

  return (
    <>
      <div className="mx-10 flex justify-end">
        <button
          className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 "
          onClick={() => {
            toggleTheme();
          }}
        >
          Toggle Mode
        </button>
      </div>
      <button
        className="border border-slate-800 rounded  bg-slate-300 py-2 px-4 "
        onClick={() => value.changeInnerText()}
      >
        this buttton functionality is passed through useContext
      </button>
      <hr className="border-2 border-gray-200 my-10" />
    </>
  );
};

export default ToggleTheme;
