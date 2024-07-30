import { useDispatch, useSelector } from "react-redux";
import "./CatalogProductPage.css";
import { sortByPriceAsc, sortByPriceDesc } from "store/redux/tobaccoSlice";
import { RootState } from "store/store";
import ProductCardPage from "./ProductCardPage";

const CatalogProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const tobacco = useSelector((state: RootState) => state.tobacco.items);
  const status = useSelector((state: RootState) => state.tobacco.status);

  // const handleSearch = () => {

  // };

  const handleSortAsc = () => {
    dispatch(sortByPriceAsc());
  };

  const handleSortDesc = () => {
    dispatch(sortByPriceDesc());
  };

  return (
    <div className="container-catalog">
      <div className="search-container">
        <div className="search-input">
          <input type="text" name="name" placeholder="Search product by name" />
          <button>Search</button>
        </div>
      </div>
      <div className="sort-buttons">
        <button onClick={handleSortAsc}>Sort by Price Ascending</button>
        <button onClick={handleSortDesc}>Sort by Price Descending</button>
      </div>
      <h3 className="catalog-title">Product Catalog</h3>
      <div className="separator"></div>
      {status === "loading" && (
        <div className="text-center">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {status === "success" &&
        tobacco.map((item) => <ProductCardPage key={item.id} tobacco={item} />)}
      {status === "error" && <>Error!</>}
    </div>
  );
};

export default CatalogProductPage;