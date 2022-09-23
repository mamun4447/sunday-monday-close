import React from "react";
import { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const AllGuns = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  //   console.log(guns);
  return (
    <div>
      <div className="container text-center my-4">
        <h1 className="text-4xl">Sunday Monday CLOSE</h1>
      </div>
      <div className="w-[90%] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-3">
        {guns.map((gun) => (
          <SingleGun guns={gun} countIncrease={countIncrease}></SingleGun>
        ))}
      </div>
    </div>
  );
};

export default AllGuns;
