import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function HomePage() {

    const images = [
        '/presentacioncelu.jpg', 
        '/fondocelu.jpg',         
        '/fotofondo.jpg',          
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div
                className="h-[900px] w-[100vw] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
                <div className="container mx-auto max-w-[1170px] flex flex-col h-full justify-center text-center text-white">
                    <h2 className="font-bold text-[100px] leading-[80px] uppercase sm:text-[80px] sm:leading-[60px] text-[#3044b5]">
                        Venta 
                    </h2>
                    <h2 className="font-bold text-[100px] leading-[80px] uppercase sm:text-[80px] sm:leading-[60px] text-[#631717]">
                        celulares
                    </h2>

                    <Link to="/products" className="mt-8 text-xl font-semibold bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                        Ver Productos
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-[1170px] my-[50px]">
                <ItemList />
            </div>
        </div>
    );
}
