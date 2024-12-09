import { Link } from 'react-router-dom';

export default function FooterComponent() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow"></div>

            <footer className="bg-[#171e27] py-4 w-full">
                <div className="container mx-auto flex flex-col items-center justify-center text-center">
                    <p className="text-[#ffffff] mb-4">Venta Celulares</p>
                    <div className="mb-4">
                        <Link to="/about" className="text-[#ffffff] hover:text-[#cccccc] mx-2" aria-label="Acerca de nuestra empresa">Acerca de</Link>
                        <Link to="/contact" className="text-[#ffffff] hover:text-[#cccccc] mx-2" aria-label="Ir a la página de contacto">Contacto</Link>
                    </div>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#cccccc]" aria-label="Síguenos en Facebook">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#cccccc]" aria-label="Síguenos en Twitter">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#ffffff] hover:text-[#cccccc]" aria-label="Síguenos en Instagram">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}



