import { notFound } from "next/navigation";

export default function ReviewById({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  const { productId, reviewsId } = params;
  if (parseInt(reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewsId} for product {productId}
    </h1>
  );
}
