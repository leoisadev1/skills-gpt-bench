import { RouteNav } from "../components/RouteNav";
import { ProductConfigurator } from "../components/ProductConfigurator";

export default function ProductPage() {
  return (
    <main className="product-page">
      <RouteNav active="/product" />
      <ProductConfigurator />
    </main>
  );
}
