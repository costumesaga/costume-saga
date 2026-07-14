import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import MeasurementSelector from "@/components/MeasurementSelector";
import MeasurementGuide from "@/components/MeasurementGuide";
import MeasurementUpload from "@/components/MeasurementUpload";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-12">

        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={700}
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h1 className="text-5xl font-bold text-[var(--color-text)]">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-[var(--color-primary)] mt-6">
            ₹{product.price}
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            {product.description}
          </p>

          <MeasurementSelector />
          <MeasurementGuide />
          <MeasurementUpload />

<AddToCartButton
  id={product.id}
  name={product.name}
  price={product.price}
  image={product.image}
/>


        </div>

      </div>

    </div>
  );
}