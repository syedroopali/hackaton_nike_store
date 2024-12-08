import Image from "next/image";
import Link from "next/link";

interface IProductCard {
  img: string;
  title: string;
  tag: string;
  price: string;
  color: string;
  id: string;
}
const ProductCard = ({ i, product }: { i: number; product: IProductCard }) => {
  return (
    <Link
      href={`/product/${product.id} `}
      key={i}
      className="mb-4 rounded-md bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="group mb-2">
        <Image
          src={product.img}
          width={348}
          height={348}
          alt="product img"
          className="h-auto w-full rounded-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div>
        <p className="mb-1 text-[14px] text-[#9E3500] md:text-[15px]">
          Just In
        </p>
        <p className="font-helvetica-medium text-[14px] text-[#111111] group-hover:text-[#9E3500] md:text-[15px]">
          {product.title}
        </p>
        <p className="text-[14px] text-[#757575] md:text-[15px]">
          {product.tag}
        </p>
        <p className="mb-2 text-[14px] text-[#757575] md:text-[15px]">
          {product.color}
        </p>
        <p className="font-helvetica-medium text-[14px] text-[#111111] md:text-[15px]">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
