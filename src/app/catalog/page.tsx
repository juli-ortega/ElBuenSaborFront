import BannerProduct from "@/components/BannerProduct";
import Category from "@/components/Category";
import SearchProduct from "@/components/SearchProduct";

export default function page() {
  return (
    <div>
      <section>
        <SearchProduct/>
      </section>
      <section>
        <BannerProduct/>
      </section>
      <main>
        <Category/>
      </main>
    </div>
  )
}
