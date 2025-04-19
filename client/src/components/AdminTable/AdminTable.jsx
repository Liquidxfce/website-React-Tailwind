import { Link } from "react-router";
import "./AdminTable.css";

const AdminTable = ({ products }) => {
    return (
      <>
        <div className="">
          <Link to={`admin/products/new`}>
              <span>Ny produkt</span>
          </Link>
        </div>
        <div>
          <table>
            <thead className="">
              <tr>
                <th>Namn</th>
                <th>SKU</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              {products.map(( product ) => (
                  <tr>
                    <td>{product.productName}</td>
                    <td>{product.sku}</td>
                    <td>{product.price}</td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
  
  export default AdminTable;