export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-[1170px] p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Bienvenido a nuestra tienda de celulares</h1>

      <section className="space-y-6">
        <p className="text-lg text-gray-700">
          En nuestra tienda ofrecemos una amplia variedad de celulares de las marcas más prestigiosas del mercado: Xiaomi, iPhone y Samsung. Todos nuestros productos están seleccionados para ofrecerte calidad, innovación y el mejor rendimiento.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">Marcas que Ofrecemos</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Xiaomi</h3>
            <p className="text-lg text-gray-700">
              Xiaomi es conocida por sus dispositivos de alta calidad a precios accesibles. Sus smartphones ofrecen un excelente rendimiento, cámaras de alta resolución y baterías duraderas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">iPhone</h3>
            <p className="text-lg text-gray-700">
              Los iPhones de Apple son sinónimo de innovación, diseño premium y una experiencia de usuario única. Con cámaras avanzadas, un sistema operativo optimizado y un ecosistema robusto, los iPhones son ideales para quienes buscan lo mejor.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Samsung</h3>
            <p className="text-lg text-gray-700">
              Samsung ofrece una amplia gama de smartphones, desde dispositivos de gama alta como los Galaxy S y Note, hasta opciones más accesibles. Con pantallas AMOLED, cámaras potentes y tecnología de carga rápida, Samsung es una marca confiable.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">Nuestra Misión</h2>
        <p className="text-lg text-gray-700">
          Nos esforzamos por ofrecer a nuestros clientes los mejores dispositivos móviles del mercado, brindando una experiencia de compra fácil y segura, con el respaldo de marcas de renombre.
        </p>
      </section>
    </div>
  );
}


  