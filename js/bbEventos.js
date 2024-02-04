// Función para generar coordenadas aleatorias en una ciudad específica
function generateRandomLocation(city) {
    const cityCoordinates = {
        'Madrid': { lat: 40.4168, lon: -3.7038 },
        'Barcelona': { lat: 41.3851, lon: 2.1734 },
        'Valencia': { lat: 39.4699, lon: -0.3763 },
        'Sevilla': { lat: 37.3886, lon: -5.9822 }
        // Agrega más ciudades según sea necesario
    };

    // Obtener coordenadas de la ciudad
    const cityCoords = cityCoordinates[city];

    // Generar coordenadas aleatorias dentro de la ciudad
    const randomLat = cityCoords.lat + (Math.random() - 0.5) * 0.2;
    const randomLon = cityCoords.lon + (Math.random() - 0.5) * 0.2;

    return { lat: randomLat, lon: randomLon };
}

var BB = [
    {
        event: "Concierto Estrella de la Noche",
        creator: "MúsicaEspaña",
        official: true,
        description: "Un espectacular concierto con artistas locales e internacionales. ¡No te pierdas esta increíble experiencia musical llena de emociones y ritmo vibrante!",
        image: "concierto.jpg",
        labels: ["música", "entretenimiento"],
        price: 20,
        city: "Madrid",
        location: generateRandomLocation("Madrid")
    },
    {
        event: "Festival de Arte Iberia",
        creator: "ArteVivo España",
        official: true,
        description: "Explorando el arte en las calles de la península ibérica. Únete a nosotros para celebrar la diversidad artística con instalaciones sorprendentes y performances en vivo.",
        image: "arte_urbano.png",
        labels: ["arte", "cultura"],
        price: 15,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona")
    },
    {
        event: "Cine en Casa con Tapas",
        creator: "CineGastronómico",
        official: false,
        description: "Disfruta de un maratón de películas en casa con auténticas tapas españolas. Una noche de cine acogedora con sabores deliciosos para todos los amantes del cine.",
        image: "maraton_peliculas.jpg",
        labels: ["cine", "gastronomía"],
        price: 5,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona")
    },
    {
        event: "KFC Fiesta de Pollo",
        creator: "KFC España",
        official: true,
        description: "¡Únete a la fiesta del pollo más grande en la ciudad! KFC España te invita a disfrutar de una noche llena de delicioso pollo frito, música en vivo, y sorpresas. ¡No te pierdas esta experiencia única!",
        image: "kfc_fiesta_pollo.jpg",
        labels: ["comida", "evento"],
        price: 15,
        city: "Madrid",
        location: generateRandomLocation("Madrid")
    },
    {
        event: "Gran Fiesta de Cumpleaños Sorpresa",
        creator: "CelebracionesEspaña",
        official: false,
        description: "¡Celebra un cumpleaños inolvidable en nuestra Gran Fiesta de Cumpleaños Sorpresa! Un evento lleno de alegría, música, decoraciones festivas y, por supuesto, ¡una sorpresa especial para el cumpleañero! No te lo pierdas, será una noche llena de diversión y emociones.",
        image: "fiesta_cumpleanos_sorpresa.jpg",
        labels: ["celebración", "sorpresa"],
        price: 10,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona")
    },
    {
        event: "Aventura Outdoor con Decathlon",
        creator: "Decathlon España",
        official: true,
        description: "Explora la naturaleza y descubre nuevas aventuras con Decathlon. Únete a nosotros para una jornada llena de deportes al aire libre, demostraciones de equipos y consejos de expertos. ¡No te pierdas esta experiencia emocionante!",
        image: "decathlon_aventura.jpg",
        labels: ["deporte", "aventura"],
        price: 15,
        city: "Valencia",
        location: generateRandomLocation("Valencia")
    },
    {
        event: "Partido de Exhibición Betis vs. Invitados",
        creator: "Real Betis",
        official: true,
        description: "Únete a nosotros para un emocionante partido de exhibición donde jugadores del Real Betis se enfrentarán a invitados sorpresa. ¡Una experiencia futbolística única para los amantes del fútbol!",
        image: "betis_partido.jpg",
        labels: ["deporte", "fútbol"],
        price: 25,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla")
    },
    {
        event: "Partido de Exhibición Betis vs. Invitados",
        creator: "Real Betis",
        official: true,
        description: "Únete a nosotros para un emocionante partido de exhibición donde jugadores del Real Betis se enfrentarán a invitados sorpresa. ¡Una experiencia futbolística única para los amantes del fútbol!",
        image: "betis_partido.jpg",
        labels: ["deporte", "fútbol"],
        price: 25,
        city: "Sevilla",
        location: generateRandomLocation("Sevilla")
    },
    {
        event: "Picnic en el Parque",
        creator: "Amigos del Aire Libre",
        official: false,
        description: "Disfruta de un día relajado en la naturaleza con nuestro evento de picnic. Trae tu cesta de picnic, relájate con amigos y disfruta de la tranquilidad del parque.",
        image: "picnic.jpg",
        labels: ["ocio", "plan"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid")
    },
    {
        event: "Carrefour Fitness Challenge",
        creator: "Carrefour",
        official: true,
        description: "¡Ponte en forma con el Carrefour Fitness Challenge! Únete a nuestras clases de entrenamiento, recibe asesoramiento nutricional y participa para ganar emocionantes premios. ¡Una experiencia saludable para todos!",
        image: "carrefour_fitness.jpg",
        labels: ["deporte", "salud"],
        price: 5,
        city: "Barcelona",
        location: generateRandomLocation("Barcelona")
    },
    {
        event: "Encuentro Ciudadano del PP Madrid",
        creator: "TotallyNotAyuso",
        official: true,
        description: "Participa en nuestro Encuentro Ciudadano del Partido Popular de Madrid. Un espacio para dialogar sobre temas importantes para la ciudad y conocer de cerca nuestras propuestas. ¡Tu participación es clave para construir un futuro mejor!",
        image: "pp_encuentro_ciudadano.jpg",
        labels: ["política", "participación"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid")
    },

    {
        event: "Encuentro en el Parque",
        creator: "Amigos del Aire Libre",
        official: false,
        description: "¡Únete a nosotros para un día de diversión al aire libre! Trae tu manta, alimentos y amigos. Disfrutaremos de juegos, música relajante y buenas conversaciones en el hermoso entorno del parque. ¡Todos son bienvenidos!(en realidad es para fumar porros pero el chat no me deja pornerlo)",
        image: "quedada_parque.jpg",
        labels: ["ocio", "reunión"],
        price: 0,
        city: "Madrid",
        location: generateRandomLocation("Madrid")
    },
    {
    event: "Calistenia en el Parque",
    creator: "FitLovers",
    official: false,
    description: "¡Únete a nosotros para una sesión de calistenia en el parque! No importa tu nivel de experiencia, todos son bienvenidos. Disfrutaremos de un entrenamiento al aire libre, compartiremos técnicas y nos motivaremos mutuamente. ¡Vamos a ponernos en forma juntos!",
    image: "calistenia_evento.jpg",
    labels: ["deporte", "entrenamiento"],
    price: 0,
    city: "Barcelona",
    location: generateRandomLocation("Barcelona")
},

{
    event: "Nadando en el Guadalquivir",
    creator: "Aventuras Acuáticas",
    official: false,
    description: "¡Sumérgete en una experiencia refrescante! Únete a nosotros para nadar en las aguas del río Guadalquivir. Disfrutaremos de un día soleado, exploraremos las orillas del río y nos sumergiremos en sus aguas. ¡Una manera única de disfrutar del verano!",
    image: "nadar_guadalquivir.jpg",
    labels: ["deporte", "aventura", "natación"],
    price: 0,
    city: "Sevilla",
    location: generateRandomLocation("Sevilla")
},

{
    event: "Ruta de Tapas por Sevilla",
    creator: "TapasExplorers",
    official: false,
    description: "Embárcate en una emocionante Ruta de Tapas por los encantadores bares de Sevilla. Descubre los sabores auténticos de la ciudad, prueba las mejores tapas y disfruta de la compañía de otros amantes de la gastronomía. ¡Una experiencia culinaria que no te puedes perder!",
    image: "ruta_tapas_sevilla.jpg",
    labels: ["gastronomía", "ocio"],
    price: 10,
    city: "Sevilla",
    location: generateRandomLocation("Sevilla")
},
{
    event: "Baile en la Plaza",
    creator: "DanceLover" + Math.floor(Math.random() * 1000),
    official: false,
    description: "Ven y únete a nosotros para una tarde llena de ritmo y baile en la hermosa plaza de Valencia. Todos son bienvenidos, ¡no importa tu nivel de baile! Disfrutaremos de diferentes estilos musicales, buena compañía y momentos divertidos. ¡No te lo pierdas!",
    image: "baile_plaza_valencia.jpg",
    labels: ["baile", "entretenimiento"],
    price: 0,
    city: "Valencia",
    location: generateRandomLocation("Valencia")
},
{
    event: "Desfile de Moda Uniqlo",
    creator: "Uniqlo España",
    official: true,
    description: "Descubre las últimas tendencias de moda en nuestro exclusivo Desfile de Moda Uniqlo. Presentaremos las colecciones más elegantes y cómodas para esta temporada. ¡Únete a nosotros para una experiencia de moda única!",
    image: "uniqlo_desfile_moda.jpg",
    labels: ["moda", "tendencias"],
    price: 10,
    city: "Madrid",
    location: generateRandomLocation("Madrid")
},
{
    event: "Festival de Ofertas Aliexpress",
    creator: "Aliexpress España",
    official: true,
    description: "¡Únete a nosotros en el emocionante Festival de Ofertas de Aliexpress! Descubre increíbles descuentos, promociones exclusivas y productos de alta calidad a precios imbatibles. No te pierdas esta oportunidad de ahorro y diversión de compras en línea.",
    image: "aliexpress_ofertas_festival.jpg",
    labels: ["compras", "ofertas", "tecnología"],
    price: 0,
    city: "Barcelona",
    location: generateRandomLocation("Barcelona")
},
{
    event: "Quedada de Ajedrez en el Parque",
    creator: "ChessEnthusiast" + Math.floor(Math.random() * 1000),
    official: false,
    description: "¡Únete a nuestra quedada de ajedrez en el parque! Todos los niveles son bienvenidos. Trae tu tablero y desafía a nuevos oponentes, comparte estrategias y disfruta de una tarde al aire libre con amantes del ajedrez.",
    image: "quedada_ajedrez.jpg",
    labels: ["ajedrez", "entretenimiento"],
    price: 0,
    city: "Madrid",
    location: generateRandomLocation("Madrid")
},
{
    event: "Asamblea Abierta del PSOE",
    creator: "perritoMcGuau",
    official: true,
    description: "Participa en nuestra Asamblea Abierta del PSOE. Ven y comparte tus ideas, preocupaciones y propuestas para construir juntos un futuro mejor. ¡Tu voz es importante para nosotros!",
    image: "psoe_asamblea.jpg",
    labels: ["política", "participación"],
    price: 0,
    city: "Madrid",
    location: generateRandomLocation("Madrid")
},
{
    event: "Picnic de Pan en Plaza España",
    creator: "BreadLover" + Math.floor(Math.random() * 1000),
    official: false,
    description: "¡Únete a nosotros para un picnic de pan en Plaza España! Trae tu pan favorito, comparte recetas, y disfruta de una tarde de conversación y sabores deliciosos en uno de los lugares más emblemáticos de Madrid.",
    image: "picnic_pan_plaza_espana.jpg",
    labels: ["picnic", "gastronomía"],
    price: 0,
    city: "Madrid",
    location: generateRandomLocation("Madrid")
},












];



function returnAll() {
    return BB;
}
function returnNumber(total) {
    var result = [];
    for (let i = 0; i < total - 1; i++) {
        result.push = BB[i];
    }
    return result;
}