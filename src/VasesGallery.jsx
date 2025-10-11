import React, { useState } from "react";
import stylesV from "./VasesGallery.module.css";
import vase1 from "./assets/Hom/vase.jpg";
import vase2 from "./assets/Hom/vase.jpg";
import vase3 from "./assets/Hom/vase.jpg";
import vase4 from "./assets/Hom/vase.jpg";
import vase5 from "./assets/Hom/vase.jpg";
import vase6 from "./assets/Hom/vase.jpg";
import vase7 from "./assets/Hom/vase.jpg";
import vase8 from "./assets/Hom/vase.jpg";
import vase9 from "./assets/Hom/vase.jpg";
import vase10 from "./assets/Hom/vase.jpg";
import vase11 from "./assets/Hom/vase.jpg";
import vase12 from "./assets/Hom/vase.jpg";
import vase13 from "./assets/Hom/vase.jpg";
import vase14 from "./assets/Hom/vase.jpg";
import vase15 from "./assets/Hom/vase.jpg";


function VasesGallery() {
const [filter, setFilter] = useState("All");
const vases = [
{ id: 1, name: "Ceramic Flower Vase", price: "$18.99", category: "Ceramic", image: vase1 },
{ id: 2, name: "Vintage Pottery Vase", price: "$22.50", category: "Vintage", image: vase2 },
{ id: 3, name: "Glass Table Vase", price: "$19.99", category: "Glass", image: vase3 },
{ id: 4, name: "Wooden Rustic Vase", price: "$21.00", category: "Wood", image: vase4 },
{ id: 5, name: "Decorative Vase", price: "$24.50", category: "Decorative", image: vase5 },
{ id: 6, name: "Metallic Tall Vase", price: "$20.99", category: "Metal", image: vase6 },
{ id: 7, name: "Classic White Vase", price: "$17.80", category: "Ceramic", image: vase7 },
{ id: 8, name: "Blue Art Vase", price: "$25.50", category: "Decorative", image: vase8 },
{ id: 9, name: "Transparent Vase", price: "$18.00", category: "Glass", image: vase9 },
{ id: 10, name: "Antique Brown Vase", price: "$23.99", category: "Vintage", image: vase10 },
{ id: 11, name: "Stylish Modern Vase", price: "$19.50", category: "Modern", image: vase11 },
{ id: 12, name: "Garden Pot Vase", price: "$21.40", category: "Clay", image: vase12 },
{ id: 13, name: "Elegant Long Vase", price: "$26.80", category: "Decorative", image: vase13 },
{ id: 14, name: "Golden Rim Vase", price: "$27.75", category: "Metal", image: vase14 },
{ id: 15, name: "Premium Table Vase", price: "$29.90", category: "Premium", image: vase15 }
];
const filteredVases = filter === "All" ? vases : vases.filter((v) => v.category === filter);
return (
<div className={stylesV.wrapper}>
<div className={stylesV.header}>
<h1 className={stylesV.heading}>🏺 Vases Gallery</h1>
<div className={stylesV.filterContainer}>
<label className={stylesV.filterLabel}>Filter:</label>
<select className={stylesV.filterSelect} value={filter} onChange={(e) => setFilter(e.target.value)}>
<option value="All">All</option>
<option value="Ceramic">Ceramic</option>
<option value="Vintage">Vintage</option>
<option value="Glass">Glass</option>
<option value="Wood">Wood</option>
<option value="Metal">Metal</option>
<option value="Decorative">Decorative</option>
<option value="Premium">Premium</option>
</select>
</div>
</div>
<div className={stylesV.container}>
{filteredVases.map((vase) => (
<div key={vase.id} className={stylesV.card}>
<img src={vase.image} alt={vase.name} className={stylesV.image} />
<div className={stylesV.info}>
<h3 className={stylesV.title}>{vase.name}</h3>
<p className={stylesV.price}>{vase.price}</p>
<button className={stylesV.button}>Add to Cart</button>
</div>
</div>
))}
</div>
</div>
);
}
export default VasesGallery;