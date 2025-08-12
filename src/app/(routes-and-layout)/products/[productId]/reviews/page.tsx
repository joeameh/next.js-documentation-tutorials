export default function Reviews({ params }: { params: { productId: string } }) {
  const { productId } = params;
  return (
    <div>
      <h1>All reviews for product {productId}</h1>
      <p>Review for product with id {productId}</p>
    </div>
  );
}
