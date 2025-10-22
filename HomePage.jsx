import Header from "../components/Header/Header";
import Categories from "../components/categories/categories";
import Products from "../components/products/Products";
import CartTotal from "../components/cart/CartTotal";

const HomePage = () => {
  return (
    <>
        <Header />

      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-20">
        <div className="categories overflow-auto max-h-[calc(85vh_-_10px)] md:pb-6">
          <Categories />
        </div>
        <div className="products flex-[8] pl-9 pr-8 max-h-[calc(85vh_-_10px)] overflow-y-auto pb-10">
          <Products />
        </div>
        <div className="card-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotal />
        </div>
      </div>
    </>
  )
}

export default HomePage