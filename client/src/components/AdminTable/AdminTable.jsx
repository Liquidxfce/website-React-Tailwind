import { Link } from "react-router";
import "./AdminTable.css";

const AdminTable = ({ products = [] }) => {
  
    return (
      <>
        <div className=" flex">
          <div className=" bg-gray-400 min-h-screen">
            <h2>Produkt</h2>
          </div>
          <div className=" m-5">
            <div className="">
              <Link to={`/admin/products/new`}>
                  <span>Ny produkt</span>
              </Link>
            </div>
            <div className=" w-screen overflow-x-auto">
              <table className=" min-w-full table-auto border-collapse border border-black">
                <thead className=" border-black bg-gray-400">
                  <tr>
                    <th>Namn</th>
                    <th>SKU</th>
                    <th>Pris</th>
                  </tr>
                </thead>
                <tbody className="border-2 border-solid border-black">
                  {products.map(( product ) => (
                      <tr key={product.id}>
                        <td>{product.productName}</td>
                        <td>{product.sku}</td>
                        <td>{product.price}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AdminTable;