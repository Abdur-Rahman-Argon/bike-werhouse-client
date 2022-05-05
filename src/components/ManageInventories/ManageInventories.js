import React from "react";
import { Link } from "react-router-dom";
import CustomiseInventory from "../Share/CustomiseInventory/CustomiseInventory";
import useProducts from "../utilites/useProducts";

const ManageInventories = () => {
  const [items, setItems] = useProducts([]);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-green-600">
          {" "}
          Customise Your Inventories:
        </h1>
      </div>
      <div className="border-2 my-5 w-5/12 mx-auto">
        <table className="">
          <thead>
            <tr>
              <td className="border-2 px-3 font-semibold text-lg">Si</td>
              <td className="border-2 px-3 font-semibold text-lg">Image</td>
              <td className="border-2 px-3 font-semibold text-lg">
                Product Name
              </td>

              <td className="border-2 px-3 font-semibold text-lg">Price</td>
              <td className="border-2 px-3 font-semibold text-lg">
                supplier Name
              </td>
              <td className="border-2 px-3 font-semibold text-lg">Stock</td>
              <td className="border-2 px-3 font-semibold text-lg">Customise</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <CustomiseInventory item={item}></CustomiseInventory>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-8">
        <Link
          to="/addnewitem"
          className="border-2 bg-lime-800 text-white py-4 px-16 mt-10 rounded-md"
        >
          Go Add new Inventorise &#8594;
        </Link>
      </div>
    </div>
  );
};

export default ManageInventories;
