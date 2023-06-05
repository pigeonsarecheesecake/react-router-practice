import styles from './Product.module.css';
export default function Product({product}) {
    return(
        <div className={styles.productCard}>
            <img className={styles.productImage} src={product.img}>
           
            </img>
            <h2>{`${product.brand} ${product.edition}`}</h2>
            <p>{product.name}</p>
        </div>
    )
}