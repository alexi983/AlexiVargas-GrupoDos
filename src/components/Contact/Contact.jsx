export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-[1170px] p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Aquí te puedes comunicar con nosotros</h1>
      
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
