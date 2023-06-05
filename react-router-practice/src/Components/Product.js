export default function Product({product}) {
    return(
        <div className="product-card">
            <img>
            </img>
            <h2>{`${product.brand} ${product.edition}`}</h2>
            <p>{product.name}</p>
        </div>
    )
}