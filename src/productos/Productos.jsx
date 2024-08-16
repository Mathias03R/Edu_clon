import "./Productos.css";
import lupa from "../assets/lupa.png";
import ProductCard from './ProductCard';
import { useState } from 'react';
import producto1 from '../assets/producto_1.png';
import producto2 from '../assets/producto_2.png';
import producto3 from '../assets/producto_3.png';

function Productos() {
    const initialProducts = [
        { id: 1, imgSource: producto1, brandName: 'Marca 1', name: 'Product 1', description: 'Description 1', price: 24, category: 'Categoria 1' },
        { id: 2, imgSource: producto2, brandName: 'Marca 2', name: 'Product 2', description: 'Description 2', price: 24, category: 'Categoria 2' },
        { id: 3, imgSource: producto3, brandName: 'Marca 3', name: 'Product 3', description: 'Description 3', price: 37.5, category: 'Categoria 3' },
        { id: 4, imgSource: producto1, brandName: 'Marca 4', name: 'Product 1', description: 'Description 4', price: 20, category: 'Categoria 1' },
        { id: 5, imgSource: producto2, brandName: 'Marca 5', name: 'Product 5', description: 'Description 5', price: 45, category: 'Categoria 2' },
        { id: 6, imgSource: producto3, brandName: 'Marca 6', name: 'Product 6', description: 'Description 6', price: 30, category: 'Categoria 3' },
        { id: 7, imgSource: producto1, brandName: 'Marca 7', name: 'Product 7', description: 'Description 7', price: 50, category: 'Categoria 1' },
        { id: 8, imgSource: producto2, brandName: 'Marca 8', name: 'Product 8', description: 'Description 8', price: 28, category: 'Categoria 2' },
        { id: 9, imgSource: producto3, brandName: 'Marca 9', name: 'Product 9', description: 'Description 9', price: 35, category: 'Categoria 3' },
        { id: 10, imgSource: producto1, brandName: 'Marca 10', name: 'Product 10', description: 'Description 10', price: 22, category: 'Categoria 1' },
        { id: 11, imgSource: producto2, brandName: 'Marca 11', name: 'Product 11', description: 'Description 11', price: 40, category: 'Categoria 2' },
        { id: 12, imgSource: producto3, brandName: 'Marca 12', name: 'Product 12', description: 'Description 12', price: 33, category: 'Categoria 3' }
    ];

    const [productsMutable, setProducts] = useState(initialProducts.sort((a, b) => b.price - a.price));
    const [categoryFilter, setCategoryFilter] = useState('');
    const [nameToSearch, setNameToSearch] = useState('');
    const [priceBottom, setPriceBottom] = useState();
    const [priceTop, setPriceTop] = useState();
    const [priceOrder, setPriceOrder] = useState('Mayor precio');

    function filterProducts(categoryFilter, priceBottom, priceTop,priceOrder) {
        var filteredProducts = initialProducts.filter(product => 
            (categoryFilter ? product.category === categoryFilter : true) &&
            (priceBottom ? product.price >= priceBottom:true) && 
            (priceTop ? product.price <= priceTop:true) &&
            (nameToSearch ? product.name.toLowerCase().includes(nameToSearch.toLowerCase()) : true)
        );

        if (priceOrder === 'Menor precio') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(filteredProducts);
    }

    function searchProductByName() {
        setCategoryFilter('');
        setPriceBottom(0);
        setPriceTop(100);

        var filteredProducts = initialProducts.filter(product => 
            (nameToSearch ? product.name.toLowerCase().includes(nameToSearch.toLowerCase()) : true)
        );

        if (priceOrder === 'Menor precio') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }


        setProducts(filteredProducts);
    }

    function listByPriceBottom(event) {
        const priceBottomFilter = parseFloat(event.target.value);
        setPriceBottom(priceBottomFilter);
        filterProducts(categoryFilter, priceBottomFilter, priceTop,priceOrder);
    }

    function listByPriceTop(event) {
        const priceTopFilter = parseFloat(event.target.value);
        setPriceTop(priceTopFilter);
        filterProducts(categoryFilter, priceBottom, priceTopFilter,priceOrder);
    }

    function listByCategory(event) {
        const categorySelected = event.target.value;
        setCategoryFilter(categorySelected);
        filterProducts(categorySelected, priceBottom, priceTop,priceOrder);
    }

    function handlePriceOrderChange(event) {
        const priceOrderToPut = event.target.value;
        setPriceOrder(priceOrderToPut);
        filterProducts(categoryFilter, priceBottom, priceTop,priceOrderToPut);
    }

    const handleKeyDownSearcher = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchProductByName();
        }
    };

    return (
        <>
        <title>Productos</title>
        <div className="productos_container">
            <div className="searcher_container">
                <div className="search_bar_container">
                    <input
                        type="text"
                        value={nameToSearch}
                        onChange={(e) => setNameToSearch(e.target.value)}
                        onKeyDown={handleKeyDownSearcher}
                        placeholder="Buscar producto"
                    />
                    <img onClick={searchProductByName} src={lupa} alt="lupa de busqueda" />
                </div>
            </div>

            <div className="order_container">
                <h1>Elige lo mejor para tu negocio</h1>
                <div className="order_by_container">
                    <h1>Ordenar por: </h1>
                    <select value={priceOrder} onChange={handlePriceOrderChange}>
                        <option value="Mayor precio">Mayor precio</option>
                        <option value="Menor precio">Menor precio</option>
                    </select>
                </div>
            </div>

            <div className="list_container">
                <div className="filter_container">
                    <h2>Filtrar por:</h2>
                    <h3>PRECIO</h3>
                    <div className="filter_price_container">
                        Precio mínimo:
                        <input
                            type="number"
                            value={priceBottom}
                            onChange={listByPriceBottom}
                        />
                        Precio máximo:
                        <input
                            type="number"
                            value={priceTop}
                            onChange={listByPriceTop}
                        />
                    </div>
                    <h3>CARACTERÍSTICAS</h3>
                    <div className="filter_category_container">
                        <label>
                            Todos los productos
                            <input
                                type="radio"
                                value=""
                                checked={categoryFilter === ""}
                                onChange={listByCategory}
                            />
                        </label>
                        <label>
                            Caracteristica 1
                            <input
                                type="radio"
                                value="Categoria 1"
                                checked={categoryFilter === "Categoria 1"}
                                onChange={listByCategory}
                            />
                        </label>
                        <label>
                            Caracteristica 2
                            <input
                                type="radio"
                                value="Categoria 2"
                                checked={categoryFilter === "Categoria 2"}
                                onChange={listByCategory}
                            />
                        </label>
                        <label>
                            Caracteristica 3
                            <input
                                type="radio"
                                value="Categoria 3"
                                checked={categoryFilter === "Categoria 3"}
                                onChange={listByCategory}
                            />
                        </label>
                    </div>
                </div>

                <div className="products_list_container">
                    {productsMutable.map((product) => (
                        <ProductCard
                            key={product.id}
                            imgSource={product.imgSource}
                            brandName={product.brandName}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Productos;
