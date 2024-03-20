import DisplayProduct from "./components/DisplayProduct";

const ProductDetail = ({ productId }: { productId: any }) => {
  return (
    <div>
      <DisplayProduct productId={productId} />
    </div>
  );
};

export default ProductDetail;
