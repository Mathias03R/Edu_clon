import "./ProductCard.css"

function ProductCard ({ imgSource,brandName,name,description, price }) {
    return(
        <div className="product_card_container">
            <div className="img_container">
                <img src={imgSource} alt="Imagen del producto" />
            </div>

            <div className="product_info_container">
                <div className="card_information_container">
                    <h2>{brandName}</h2>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <span>s/.{price}</span>
                </div>
            </div>

            <div className="see_product_container">
                <button>Ver producto</button>
            </div>

        </div>
    )
}

export default ProductCard