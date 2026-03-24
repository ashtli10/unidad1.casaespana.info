import React from 'react';
import { Home, Trees, Droplet, Bed, Bath, MapPin, TrendingUp, Building2, Briefcase, Users } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  const propertyFeatures = [
    { icon: Home, label: '6 Habitaciones', description: 'Espaciosas y luminosas' },
    { icon: Bath, label: '4.5 Baños', description: '4 completos + 1 medio baño' },
    { icon: Trees, label: 'Árboles Frutales', description: 'Aguacate, granada, higo, mango y guayabo' },
    { icon: Droplet, label: 'Pozo de Agua', description: '10 metros de profundidad' }
  ];

  const neighborhoodAmenities = [
    { title: 'Ubicación Céntrica', description: 'Acceso rápido a Niños Héroes, Circunvalación Agustín Yañez y Av. La Paz' },
    { title: 'Servicios Cercanos', description: 'Restaurantes, cafés, tiendas, escuelas, hospitales y notarías a pocos minutos' },
    { title: 'Transporte Público', description: 'Excelente conectividad con autobuses y estaciones de tren ligero' },
    { title: 'Zonas Culturales', description: 'Cerca de Glorieta de los Niños Héroes y Avenida Chapultepec' },
    { title: 'Seguridad', description: 'Zona tranquila y segura, ideal para familias' }
  ];

  const usePossibilities = [
    {
      icon: Home,
      title: 'Para Vivir',
      description: 'Hogar ideal para familias grandes con 6 habitaciones, amplio jardín con árboles frutales y pozo de agua. Conexión única con la naturaleza en zona urbana.'
    },
    {
      icon: Briefcase,
      title: 'Para Oficinas',
      description: 'Ubicación céntrica perfecta para consultorios médicos, notarías o negocios. Espacios adaptables para áreas de trabajo, salas de juntas y recepciones.'
    },
    {
      icon: Building2,
      title: 'Para Construir',
      description: 'Terreno con potencial para edificio de departamentos o desarrollo comercial. Permisos para hasta 4 pisos. Oportunidad atractiva para inversionistas.'
    }
  ];

  return (
    <section id="property-details" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Casa en Venta en la Colonia Moderna
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una joya inmobiliaria que combina espacio, comodidad y un entorno natural envidiable en la prestigiosa Colonia Moderna de Guadalajara, Jalisco
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta impresionante propiedad ubicada en la prestigiosa Colonia Moderna de Guadalajara, Jalisco, es una joya inmobiliaria que combina espacio, comodidad y un entorno natural envidiable. Con una distribución ideal para familias grandes o para aquellos que buscan un inmueble con múltiples posibilidades de uso, esta propiedad destaca por sus amplias dimensiones y su potencial de inversión.
          </p>
        </div>

        {/* Property Characteristics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Características de la Casa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {propertyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.label}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-purple-600" />
                  Habitaciones y Baños
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La casa cuenta con <strong>seis habitaciones espaciosas</strong>, perfectas para alojar a una familia numerosa o para destinar espacios adicionales a áreas de trabajo, estudio o recreación. Además, ofrece <strong>cuatro baños completos y un medio baño</strong>, garantizando comodidad y privacidad para todos los residentes y visitantes.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Trees className="w-5 h-5 mr-2 text-green-600" />
                  Jardín Amplio con Árboles Frutales
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Uno de los mayores atractivos de esta propiedad es su <strong>amplio jardín</strong>, que alberga una variedad de árboles frutales, incluyendo <strong>aguacate, granada, higo, mango y guayabo</strong>. Este espacio verde no solo proporciona un ambiente tranquilo y natural, sino que también ofrece la posibilidad de disfrutar de frutas frescas directamente del jardín. Es ideal para reuniones al aire libre, actividades recreativas o simplemente para relajarse en un entorno sereno.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Droplet className="w-5 h-5 mr-2 text-blue-600" />
                  Pozo de Agua
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La propiedad incluye un <strong>pozo con agua a 10 metros de profundidad</strong>, una característica valiosa que puede ser utilizada para el riego del jardín, llenado de piscinas (si se desea construir una) o como fuente de agua adicional, lo que representa un ahorro significativo en costos de servicios.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-purple-600" />
                  Espacio y Distribución
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Con una construcción bien planificada, la casa ofrece amplios espacios interiores que permiten una distribución cómoda y funcional. Las seis habitaciones y los múltiples baños aseguran que cada miembro de la familia tenga su propio espacio, mientras que las áreas comunes son ideales para el disfrute en conjunto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhood Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Amenidades del Barrio: Comodidad y Ubicación Céntrica
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            La Colonia Moderna es uno de los barrios más emblemáticos y céntricos de Guadalajara, conocida por su combinación de estilo arquitectónico clásico y moderno, así como por su alta plusvalía.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoodAmenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{amenity.title}</h4>
                    <p className="text-sm text-gray-600">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value and Appreciation */}
        <div className="mb-16 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-lg p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Valor y Plusvalía
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Alta Plusvalía</h4>
              <p className="text-sm text-gray-600">Crecimiento constante en el valor de propiedades por ubicación estratégica y alta demanda</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexibilidad de Uso</h4>
              <p className="text-sm text-gray-600">Gran potencial para residencia familiar, oficinas, consultorios o futuras construcciones</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Potencial de Inversión</h4>
              <p className="text-sm text-gray-600">Ideal para renta o desarrollo de proyectos aprovechando ubicación privilegiada</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Invertir en una propiedad en la Colonia Moderna es una decisión inteligente debido a su alta plusvalía y potencial de crecimiento. La zona ha experimentado un crecimiento constante en el valor de las propiedades debido a su ubicación estratégica y la creciente demanda de viviendas en áreas céntricas. Esto asegura que la inversión en esta casa no solo mantendrá su valor, sino que probablemente aumentará con el tiempo.
            </p>
          </div>
        </div>

        {/* Potential Uses */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Potencial de la Propiedad
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Esta casa no solo es un lugar ideal para vivir, sino que también ofrece múltiples posibilidades de uso y desarrollo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usePossibilities.map((use, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <use.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{use.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{use.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-purple-600 to-yellow-500 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Una Oportunidad Única
          </h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Esta casa en la Colonia Moderna de Guadalajara es una propiedad única que combina espacio, comodidad y un entorno natural, todo en una ubicación céntrica y de alta plusvalía. Ya sea para vivir, establecer un negocio o invertir en futuras construcciones, esta casa ofrece un potencial ilimitado. <strong>¡No pierdas la oportunidad de adquirir una propiedad con tanto valor y versatilidad en una de las mejores zonas de la ciudad!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
