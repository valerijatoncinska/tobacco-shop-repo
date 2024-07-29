import { NavLink } from "react-router-dom"
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="vertical-navbar">

        <h4 className="text-center mt-4">Hello, Admin :)</h4>
        <ul className="nav flex-column mt-5">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/account">Account Admin</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/catalog-products">Catalog Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/order-details">Order Details</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/archivated-products">
              Archivated Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/view-orders">View Orders</NavLink>
          </li>
        </ul>
        <button className="button ms-3" >Sign out</button>
    </nav>
  )
}

export default Navigation
