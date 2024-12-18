import { Link } from "react-router-dom";

export default function Item({ id, name, price, img }) {
    return (
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link 
                to={`/products/${id}`}
                className="w-[200px] h-[200px] overflow-hidden flex items-center justify-center"
            >
                <img 
                    src={img} 
                    alt="Imagen Productos" 
                    className="w-100 h-100 object-cover"
                />
            </Link>
            
            <Link 
                to={`/products/${id}`} 
                className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,21,48)]"
            >
                {name}
            </Link>
            
            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}</h4>
        </div>
    );
}
  
