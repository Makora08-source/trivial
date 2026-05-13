// --- BANCO DE PREGUNTAS ---
// Bro, aquí pega todas las listas de 80 que te pasé antes
const bancoPreguntas = {
"Geografía": [
    {"q": "¿Cuál es el país más grande del mundo?", "o": ["Canadá", "China", "Rusia", "EE.UU."], "a": 2},
    {"q": "¿Cuál es la capital de Australia?", "o": ["Sídney", "Melbourne", "Canberra", "Perth"], "a": 2},
    {"q": "¿Qué río atraviesa la ciudad de Londres?", "o": ["Sena", "Danubio", "Támesis", "Rin"], "a": 2},
    {"q": "¿En qué continente se encuentra el desierto del Sahara?", "o": ["Asia", "América", "África", "Oceanía"], "a": 2},
    {"q": "¿Cuál es el país más poblado de la Tierra?", "o": ["China", "India", "EE.UU.", "Indonesia"], "a": 1},
    {"q": "¿Qué océano se encuentra entre América y Europa?", "o": ["Pacífico", "Índico", "Atlántico", "Ártico"], "a": 2},
    {"q": "¿Cuál es la capital de Canadá?", "o": ["Toronto", "Vancouver", "Ottawa", "Montreal"], "a": 2},
    {"q": "¿En qué país se encuentra la ciudad de Estambul?", "o": ["Grecia", "Turquía", "Egipto", "Irán"], "a": 1},
    {"q": "¿Cuál es el monte más alto del mundo?", "o": ["K2", "Everest", "Aconcagua", "Kilimanjaro"], "a": 1},
    {"q": "¿Qué país tiene forma de bota?", "o": ["España", "Grecia", "Italia", "Portugal"], "a": 2},
    {"q": "¿Cuál es el río más largo del mundo?", "o": ["Nilo", "Amazonas", "Misisipi", "Yangtsé"], "a": 1},
    {"q": "¿En qué país está el Machu Picchu?", "o": ["Chile", "Bolivia", "Perú", "Colombia"], "a": 2},
    {"q": "¿Cuál es la capital de Brasil?", "o": ["Río de Janeiro", "San Pablo", "Brasilia", "Salvador"], "a": 2},
    {"q": "¿Qué país es conocido como el 'País del Sol Naciente'?", "o": ["China", "Corea del Sur", "Japón", "Tailandia"], "a": 2},
    {"q": "¿En qué continente está Suiza?", "o": ["Europa", "Asia", "América", "África"], "a": 0},
    {"q": "¿Cuál es el desierto más seco del mundo?", "o": ["Sahara", "Gobi", "Atacama", "Kalahari"], "a": 2},
    {"q": "¿Cuál es la capital de Portugal?", "o": ["Oporto", "Lisboa", "Madrid", "Faro"], "a": 1},
    {"q": "¿Qué cordillera separa Europa de Asia?", "o": ["Alpes", "Himalaya", "Urales", "Andes"], "a": 2},
    {"q": "¿Cuál es el país más pequeño del mundo?", "o": ["Mónaco", "San Marino", "Vaticano", "Andorra"], "a": 2},
    {"q": "¿Qué mar baña las costas de Cuba?", "o": ["Mar Muerto", "Mar Mediterráneo", "Mar Caribe", "Mar Negro"], "a": 2},
    {"q": "¿Cuál es la capital de Islandia?", "o": ["Oslo", "Helsinki", "Reikiavik", "Estocolmo"], "a": 2},
    {"q": "¿En qué país se encuentran las pirámides de Giza?", "o": ["Etiopía", "Egipto", "Marruecos", "Jordania"], "a": 1},
    {"q": "¿Cuál es la moneda oficial de Japón?", "o": ["Yuan", "Won", "Yen", "Dólar"], "a": 2},
    {"q": "¿Qué estrecho separa España de Marruecos?", "o": ["Bering", "Magallanes", "Gibraltar", "Bósforo"], "a": 2},
    {"q": "¿Cuál es la capital de Argentina?", "o": ["Santiago", "Montevideo", "Buenos Aires", "Lima"], "a": 2},
    {"q": "¿Qué país tiene más islas en el mundo?", "o": ["Indonesia", "Filipinas", "Suecia", "Canadá"], "a": 2},
    {"q": "¿Cuál es el lago más profundo del mundo?", "o": ["Victoria", "Superior", "Baikal", "Titicaca"], "a": 2},
    {"q": "¿En qué ciudad está la Torre Eiffel?", "o": ["Londres", "Berlín", "París", "Roma"], "a": 2},
    {"q": "¿Cuál es la capital de Egipto?", "o": ["Alejandría", "Luxor", "El Cairo", "Giza"], "a": 2},
    {"q": "¿Qué país tiene la mayor superficie de selva amazónica?", "o": ["Colombia", "Perú", "Brasil", "Venezuela"], "a": 2},
    {"q": "¿Cuál es la capital de Alemania?", "o": ["Múnich", "Frankfurt", "Berlín", "Hamburgo"], "a": 2},
    {"q": "¿En qué continente está Tailandia?", "o": ["África", "Oceanía", "Asia", "Europa"], "a": 2},
    {"q": "¿Qué país es famoso por sus canales en la ciudad de Venecia?", "o": ["Francia", "Italia", "España", "Holanda"], "a": 1},
    {"q": "¿Cuál es el punto más bajo de la tierra firme?", "o": ["Valle de la Muerte", "Mar Muerto", "Depresión de Afar", "Lago Eyre"], "a": 1},
    {"q": "¿Cuál es la capital de Rusia?", "o": ["San Petersburgo", "Kiev", "Moscú", "Minsk"], "a": 2},
    {"q": "¿Qué isla es la más grande del mundo?", "o": ["Australia", "Groenlandia", "Madagascar", "Nueva Guinea"], "a": 1},
    {"q": "¿Cuál es la capital de Italia?", "o": ["Milán", "Florencia", "Roma", "Nápoles"], "a": 2},
    {"q": "¿En qué país nació el río Amazonas?", "o": ["Brasil", "Ecuador", "Perú", "Bolivia"], "a": 2},
    {"q": "¿Cuál es la capital de Noruega?", "o": ["Copenhague", "Helsinki", "Oslo", "Estocolmo"], "a": 2},
    {"q": "¿Qué país es una isla al sur de la India?", "o": ["Maldivas", "Sri Lanka", "Madagascar", "Bali"], "a": 1},
    {"q": "¿Cuál es la capital de Colombia?", "o": ["Medellín", "Cali", "Bogotá", "Cartagena"], "a": 2},
    {"q": "¿Qué mar separa Europa de África?", "o": ["Mar Rojo", "Mar Caspio", "Mar Mediterráneo", "Mar del Norte"], "a": 2},
    {"q": "¿Cuál es el país más grande de África?", "o": ["Nigeria", "Egipto", "Argelia", "Sudán"], "a": 2},
    {"q": "¿Cuál es la capital de Turquía?", "o": ["Estambul", "Esmirna", "Ankara", "Antalya"], "a": 2},
    {"q": "¿En qué país está el Gran Cañón?", "o": ["Canadá", "México", "EE.UU.", "Australia"], "a": 2},
    {"q": "¿Cuál es la capital de Kenia?", "o": ["Mombasa", "Nairobi", "Dakar", "Lagos"], "a": 1},
    {"q": "¿Qué país europeo tiene más volcanes activos?", "o": ["Italia", "Grecia", "Islandia", "España"], "a": 2},
    {"q": "¿Cuál es la capital de Chile?", "o": ["Valparaíso", "Concepción", "Santiago", "La Paz"], "a": 2},
    {"q": "¿Qué ciudad es la capital de China?", "o": ["Shanghái", "Cantón", "Pekín", "Hong Kong"], "a": 2},
    {"q": "¿En qué país se encuentra el Delta del Okavango?", "o": ["Kenia", "Botsuana", "Namibia", "Sudáfrica"], "a": 1},
    {"q": "¿Cuál es la capital de México?", "o": ["Guadalajara", "Monterrey", "Ciudad de México", "Cancún"], "a": 2},
    {"q": "¿Qué cordillera atraviesa todo el oeste de Sudamérica?", "o": ["Rocosas", "Alpes", "Andes", "Atlas"], "a": 2},
    {"q": "¿Cuál es la capital de Grecia?", "o": ["Esparta", "Heraclión", "Atenas", "Tesalónica"], "a": 2},
    {"q": "¿Qué país tiene el mayor número de husos horarios?", "o": ["Rusia", "EE.UU.", "Francia", "China"], "a": 2},
    {"q": "¿Cuál es la capital de Nueva Zelanda?", "o": ["Auckland", "Christchurch", "Wellington", "Queenstown"], "a": 2},
    {"q": "¿En qué país se encuentra la Selva Negra?", "o": ["Austria", "Suiza", "Alemania", "Polonia"], "a": 2},
    {"q": "¿Cuál es la capital de Austria?", "o": ["Zúrich", "Viena", "Salzburgo", "Ginebra"], "a": 1},
    {"q": "¿Qué río pasa por Budapest y Viena?", "o": ["Rin", "Sena", "Danubio", "Volga"], "a": 2},
    {"q": "¿Cuál es la capital de Marruecos?", "o": ["Casablanca", "Marrakech", "Rabat", "Fez"], "a": 2},
    {"q": "¿Qué país se encuentra en los Montes Pirineos entre España y Francia?", "o": ["Liechtenstein", "Mónaco", "Andorra", "Luxemburgo"], "a": 2},
    {"q": "¿Cuál es la capital de Países Bajos?", "o": ["Rotterdam", "La Haya", "Ámsterdam", "Utrecht"], "a": 2},
    {"q": "¿En qué océano se encuentra la isla de Madagascar?", "o": ["Atlántico", "Pacífico", "Índico", "Antártico"], "a": 2},
    {"q": "¿Cuál es la capital de Corea del Sur?", "o": ["Busan", "Pionyang", "Seúl", "Incheon"], "a": 2},
    {"q": "¿Qué país tiene la cascada más alta del mundo (Salto Ángel)?", "o": ["Brasil", "Guyana", "Venezuela", "Angola"], "a": 2},
    {"q": "¿Cuál es la capital de Perú?", "o": ["Arequipa", "Cusco", "Lima", "Trujillo"], "a": 2},
    {"q": "¿En qué país están los Montes Cárpatos?", "o": ["Rumanía", "Francia", "Reino Unido", "Noruega"], "a": 0},
    {"q": "¿Cuál es la capital de Arabia Saudita?", "o": ["Yeda", "Meca", "Riad", "Dammam"], "a": 2},
    {"q": "¿Qué país es el más grande de Oceanía?", "o": ["Fiyi", "Nueva Zelanda", "Australia", "Papúa Nueva Guinea"], "a": 2},
    {"q": "¿Cuál es la capital de Croacia?", "o": ["Split", "Dubrovnik", "Zagreb", "Zadar"], "a": 2},
    {"q": "¿Qué país limita con España al oeste?", "o": ["Francia", "Andorra", "Portugal", "Marruecos"], "a": 2},
    {"q": "¿Cuál es la capital de Suecia?", "o": ["Oslo", "Copenhague", "Estocolmo", "Gotemburgo"], "a": 2},
    {"q": "¿Qué río es el más largo de Europa?", "o": ["Danubio", "Rin", "Volga", "Elba"], "a": 2},
    {"q": "¿Cuál es la capital de Tailandia?", "o": ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"], "a": 2},
    {"q": "¿En qué país se encuentra el Monte Fuji?", "o": ["China", "Japón", "Corea", "Vietnam"], "a": 1},
    {"q": "¿Cuál es la capital de Sudáfrica?", "o": ["Johannesburgo", "Ciudad del Cabo", "Pretoria", "Durban"], "a": 2},
    {"q": "¿Qué país tiene un canal que une el Atlántico y el Pacífico?", "o": ["Colombia", "Nicaragua", "Panamá", "Costa Rica"], "a": 2},
    {"q": "¿Cuál es la capital de Irlanda?", "o": ["Belfast", "Cork", "Dublín", "Galway"], "a": 2},
    {"q": "¿En qué país se encuentra la bahía de Ha-Long?", "o": ["Tailandia", "Camboya", "Vietnam", "Laos"], "a": 2},
    {"q": "¿Cuál es la capital de Finlandia?", "o": ["Estocolmo", "Oslo", "Helsinki", "Tallin"], "a": 2},
    {"q": "¿Qué país tiene una bandera con una hoja de arce?", "o": ["EE.UU.", "Canadá", "Líbano", "Chipre"], "a": 1}
],
"Entretenimiento": [
    {"q": "¿Quién dirigió la película 'Pulp Fiction'?", "o": ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], "a": 2},
    {"q": "¿Cómo se llama el vocalista de la banda Queen?", "o": ["Mick Jagger", "Freddie Mercury", "David Bowie", "Bono"], "a": 1},
    {"q": "¿Qué actor interpreta a Iron Man en el Universo Cinematográfico de Marvel?", "o": ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Tom Holland"], "a": 1},
    {"q": "¿Cuál es la película más taquillera de la historia (sin ajustar inflación)?", "o": ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: Ep. VII"], "a": 2},
    {"q": "¿En qué serie de televisión aparece el personaje Walter White?", "o": ["The Wire", "Breaking Bad", "Mad Men", "Dexter"], "a": 1},
    {"q": "¿Cómo se llama el reino de la película 'Frozen'?", "o": ["Genovia", "Arendelle", "Narnia", "Westeros"], "a": 1},
    {"q": "¿Quién es conocido como el 'Rey del Pop'?", "o": ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"], "a": 2},
    {"q": "¿Qué banda de rock británica lanzó el álbum 'The Dark Side of the Moon'?", "o": ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"], "a": 2},
    {"q": "¿Cómo se llama el ogro verde de DreamWorks?", "o": ["Burro", "Shrek", "Fiona", "Puss in Boots"], "a": 1},
    {"q": "¿Quién ganó el Oscar a Mejor Actor por la película 'Joker' (2019)?", "o": ["Heath Ledger", "Jack Nicholson", "Joaquin Phoenix", "Jared Leto"], "a": 2},
    {"q": "¿En qué serie de TV se encuentra la ciudad de Hawkins?", "o": ["Dark", "Stranger Things", "Lost", "Black Mirror"], "a": 1},
    {"q": "¿Cuál es el nombre real de Lady Gaga?", "o": ["Stefani Germanotta", "Robyn Fenty", "Katy Hudson", "Onika Maraj"], "a": 0},
    {"q": "¿Quién escribió la saga de libros de Harry Potter?", "o": ["George R.R. Martin", "J.R.R. Tolkien", "J.K. Rowling", "Stephen King"], "a": 2},
    {"q": "¿Qué superhéroe es conocido como 'El Caballero Oscuro'?", "o": ["Superman", "Spider-Man", "Batman", "Daredevil"], "a": 2},
    {"q": "¿Cómo se llama el ratón más famoso de Disney?", "o": ["Jerry", "Mickey Mouse", "Stuart Little", "Speedy Gonzales"], "a": 1},
    {"q": "¿En qué año se estrenó la primera película de 'Star Wars'?", "o": ["1970", "1977", "1983", "1980"], "a": 1},
    {"q": "¿Quién es el creador de la serie 'Los Simpson'?", "o": ["Seth MacFarlane", "Matt Groening", "Butch Hartman", "Stephen Hillenburg"], "a": 1},
    {"q": "¿Qué cantante lanzó el éxito 'Rolling in the Deep'?", "o": ["Rihanna", "Beyoncé", "Adele", "Taylor Swift"], "a": 2},
    {"q": "¿Cómo se llama el villano principal de 'La Sirenita'?", "o": ["Maléfica", "Úrsula", "Cruella de Vil", "Gothel"], "a": 1},
    {"q": "¿Qué actor protagoniza la saga 'Misión Imposible'?", "o": ["Brad Pitt", "Tom Cruise", "Will Smith", "Matt Damon"], "a": 1},
    {"q": "¿En qué ciudad se entregan los Premios Oscar?", "o": ["Nueva York", "Londres", "Los Ángeles", "Las Vegas"], "a": 2},
    {"q": "¿Quién interpretó a Jack en la película 'Titanic'?", "o": ["Johnny Depp", "Leonardo DiCaprio", "Brad Pitt", "Jude Law"], "a": 1},
    {"q": "¿Qué grupo de música K-pop canta 'Dynamite'?", "o": ["EXO", "Blackpink", "BTS", "Stray Kids"], "a": 2},
    {"q": "¿Cómo se llama la madre de Simba en 'El Rey León'?", "o": ["Nala", "Sarabi", "Zira", "Shenzi"], "a": 1},
    {"q": "¿Cuál es el nombre del director de 'Parásitos'?", "o": ["Akira Kurosawa", "Bong Joon-ho", "Park Chan-wook", "Guillermo del Toro"], "a": 1},
    {"q": "¿Qué serie de TV tiene dragones y un 'Trono de Hierro'?", "o": ["The Witcher", "Vikingos", "Juego de Tronos", "El Señor de los Anillos"], "a": 2},
    {"q": "¿Quién es la 'Reina del Pop'?", "o": ["Britney Spears", "Madonna", "Cher", "Cyndi Lauper"], "a": 1},
    {"q": "¿Cómo se llama el alter ego de Peter Parker?", "o": ["Iron Man", "Hulk", "Spider-Man", "Thor"], "a": 2},
    {"q": "¿Qué película de Disney se desarrolla en México durante el Día de Muertos?", "o": ["Encanto", "Coco", "Moana", "Raya"], "a": 1},
    {"q": "¿Quién canta 'Shape of You'?", "o": ["Justin Bieber", "Ed Sheeran", "Shawn Mendes", "Bruno Mars"], "a": 1},
    {"q": "¿En qué año murió Michael Jackson?", "o": ["2005", "2012", "2009", "2007"], "a": 2},
    {"q": "¿Cómo se llama el líder de los Autobots en 'Transformers'?", "o": ["Bumblebee", "Megatron", "Optimus Prime", "Starscream"], "a": 2},
    {"q": "¿Qué actriz dio vida a Hermione Granger?", "o": ["Emma Stone", "Emma Watson", "Jennifer Lawrence", "Saoirse Ronan"], "a": 1},
    {"q": "¿Cuál es la serie más vista de la historia de Netflix?", "o": ["Stranger Things", "La Casa de Papel", "El Juego del Calamar", "Bridgerton"], "a": 2},
    {"q": "¿Quién compuso la banda sonora de 'Interstellar' y 'El Rey León'?", "o": ["John Williams", "Hans Zimmer", "Danny Elfman", "Ennio Morricone"], "a": 1},
    {"q": "¿De qué país es originaria la serie 'La Casa de Papel'?", "o": ["México", "Argentina", "España", "Colombia"], "a": 2},
    {"q": "¿Cómo se llama el planeta natal de Superman?", "o": ["Krypton", "Asgard", "Tatooine", "Sakaar"], "a": 0},
    {"q": "¿Quién es el agente 007?", "o": ["Jason Bourne", "Ethan Hunt", "James Bond", "John Wick"], "a": 2},
    {"q": "¿Qué cantante tiene un club de fans llamado 'Swifties'?", "o": ["Selena Gomez", "Taylor Swift", "Ariana Grande", "Billie Eilish"], "a": 1},
    {"q": "¿En qué serie aparece el personaje 'Eleven'?", "o": ["Stranger Things", "The Umbrella Academy", "The Boys", "Skins"], "a": 0},
    {"q": "¿Quién dirigió 'El laberinto del fauno'?", "o": ["Alejandro G. Iñárritu", "Guillermo del Toro", "Alfonso Cuarón", "Pedro Almodóvar"], "a": 1},
    {"q": "¿Cómo se llama el hermano de Thor?", "o": ["Hela", "Loki", "Odin", "Heimdall"], "a": 1},
    {"q": "¿Qué banda lanzó el álbum 'Abbey Road'?", "o": ["The Who", "The Beatles", "The Kinks", "The Doors"], "a": 1},
    {"q": "¿Quién es el protagonista de 'Piratas del Caribe'?", "o": ["Will Turner", "Capitán Barbossa", "Jack Sparrow", "Davy Jones"], "a": 2},
    {"q": "¿En qué año se estrenó 'Toy Story', el primer largometraje de Pixar?", "o": ["1990", "1995", "1998", "2000"], "a": 1},
    {"q": "¿Cómo se llama el alter ego de Bruce Banner?", "o": ["Iron Man", "Capitán América", "Hulk", "Viuda Negra"], "a": 2},
    {"q": "¿Qué cantante es conocido como 'Starboy'?", "o": ["Drake", "The Weeknd", "Post Malone", "Travis Scott"], "a": 1},
    {"q": "¿Quién ganó el primer Grammy al Álbum del Año?", "o": ["Frank Sinatra", "Elvis Presley", "Henry Mancini", "Ella Fitzgerald"], "a": 2},
    {"q": "¿Qué película ganó el Oscar a Mejor Película en 2020?", "o": ["1917", "Parásitos", "Joker", "Green Book"], "a": 1},
    {"q": "¿Cómo se llama el mejor amigo de Bob Esponja?", "o": ["Calamardo", "Patricio Estrella", "Arenita", "Don Cangrejo"], "a": 1},
    {"q": "¿Quién interpreta a Wonder Woman en el cine?", "o": ["Gal Gadot", "Scarlett Johansson", "Brie Larson", "Margot Robbie"], "a": 0},
    {"q": "¿En qué serie los personajes son 'La Profesora', 'Tokio' y 'Berlín'?", "o": ["Elite", "Vis a Vis", "La Casa de Papel", "Narcos"], "a": 2},
    {"q": "¿Qué rapero tiene un álbum llamado 'The Slim Shady LP'?", "o": ["Jay-Z", "Eminem", "Snoop Dogg", "Kanye West"], "a": 1},
    {"q": "¿Cómo se llama el universo de películas de superhéroes de DC?", "o": ["MCU", "DCEU", "DCCU", "DC World"], "a": 1},
    {"q": "¿Quién dirigió 'E.T., el extraterrestre'?", "o": ["George Lucas", "Steven Spielberg", "James Cameron", "Ridley Scott"], "a": 1},
    {"q": "¿Qué serie de TV trata sobre una familia de mafiosos en Nueva Jersey?", "o": ["Los Soprano", "Peaky Blinders", "Boardwalk Empire", "The Wire"], "a": 0},
    {"q": "¿Cómo se llama el festival de música más famoso que se celebra en el desierto de California?", "o": ["Lollapalooza", "Coachella", "Tomorrowland", "Glastonbury"], "a": 1},
    {"q": "¿Quién canta 'Bad Guy'?", "o": ["Dua Lipa", "Billie Eilish", "Halsey", "Lorde"], "a": 1},
    {"q": "¿Qué actor dio vida a Wolverine?", "o": ["Hugh Jackman", "Ryan Reynolds", "Tom Hardy", "Christian Bale"], "a": 0},
    {"q": "¿Cómo se llama la inteligencia artificial de Tony Stark?", "o": ["Siri", "Alexa", "J.A.R.V.I.S.", "Cortana"], "a": 2},
    {"q": "¿Qué película de Disney trata sobre una familia con poderes mágicos en Colombia?", "o": ["Coco", "Encanto", "Moana", "Mulan"], "a": 1},
    {"q": "¿Quién es el autor de 'El resplandor'?", "o": ["H.P. Lovecraft", "Edgar Allan Poe", "Stephen King", "Dean Koontz"], "a": 2},
    {"q": "¿Cómo se llama el protagonista de 'Matrix'?", "o": ["Morpheus", "Neo", "Smith", "Trinity"], "a": 1},
    {"q": "¿Qué grupo de rock canta 'Stairway to Heaven'?", "o": ["Deep Purple", "Led Zeppelin", "Aerosmith", "Guns N' Roses"], "a": 1},
    {"q": "¿Quién es la voz de Woody en la versión original de 'Toy Story'?", "o": ["Tim Allen", "Tom Hanks", "Robin Williams", "Billy Crystal"], "a": 1},
    {"q": "¿Qué serie de TV se desarrolla en la oficina de la empresa Dunder Mifflin?", "o": ["Parks and Recreation", "The Office", "Brooklyn Nine-Nine", "Community"], "a": 1},
    {"q": "¿Cómo se llama la ciudad ficticia de Batman?", "o": ["Metrópolis", "Central City", "Gotham City", "Star City"], "a": 2},
    {"q": "¿Qué cantante lanzó el álbum 'Future Nostalgia'?", "o": ["Miley Cyrus", "Dua Lipa", "Katy Perry", "Camila Cabello"], "a": 1},
    {"q": "¿Quién es el director de la trilogía original de 'Spider-Man'?", "o": ["Sam Raimi", "Jon Watts", "Marc Webb", "James Gunn"], "a": 0},
    {"q": "¿En qué serie de animación los protagonistas viajan por el multiverso?", "o": ["South Park", "Family Guy", "Rick y Morty", "Futurama"], "a": 2},
    {"q": "¿Cómo se llama el robot protagonista de la película de 2008 de Pixar?", "o": ["R2-D2", "WALL-E", "Baymax", "C-3PO"], "a": 1},
    {"q": "¿Qué canción de Luis Fonsi se convirtió en un fenómeno mundial en 2017?", "o": ["Bailando", "Despacito", "Gasolina", "Felices los 4"], "a": 1},
    {"q": "¿Quién interpreta a Harley Quinn en el cine?", "o": ["Margot Robbie", "Anne Hathaway", "Amber Heard", "Zoe Kravitz"], "a": 0},
    {"q": "¿Qué actor protagonizó la película 'Forrest Gump'?", "o": ["Tom Cruise", "Tom Hanks", "Harrison Ford", "Robert De Niro"], "a": 1},
    {"q": "¿Cómo se llama el dragón de Daenerys Targaryen más grande?", "o": ["Viserion", "Rhaegal", "Drogon", "Balerion"], "a": 2},
    {"q": "¿Qué serie de Netflix cuenta la vida de la reina Isabel II?", "o": ["The Crown", "Reign", "Victoria", "Downton Abbey"], "a": 0},
    {"q": "¿Quién es el padre de Luke Skywalker?", "o": ["Obi-Wan Kenobi", "Yoda", "Darth Vader", "Palpatine"], "a": 2},
    {"q": "¿Qué película de animación ganó el primer Oscar en esa categoría?", "o": ["Toy Story", "Shrek", "Monsters, Inc.", "El viaje de Chihiro"], "a": 1},
    {"q": "¿Cómo se llama la banda de 'heavy metal' que canta 'Enter Sandman'?", "o": ["Iron Maiden", "Metallica", "Megadeth", "Slayer"], "a": 1},
    {"q": "¿Quién protagonizó 'Men in Black' junto a Tommy Lee Jones?", "o": ["Eddie Murphy", "Will Smith", "Chris Rock", "Samuel L. Jackson"], "a": 1}
],
"Historia": [
    {"q": "¿En qué año llegó Cristóbal Colón a América?", "o": ["1482", "1492", "1502", "1498"], "a": 1},
    {"q": "¿Quién fue el primer presidente de los Estados Unidos?", "o": ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], "a": 2},
    {"q": "¿Qué civilización construyó las pirámides de Giza?", "o": ["Mayas", "Aztecas", "Egipcios", "Sumerios"], "a": 2},
    {"q": "¿En qué año comenzó la Segunda Guerra Mundial?", "o": ["1914", "1939", "1945", "1929"], "a": 1},
    {"q": "¿Quién fue la última reina del Antiguo Egipto?", "o": ["Nefertiti", "Cleopatra VII", "Hatshepsut", "Isis"], "a": 1},
    {"q": "¿Qué muro dividió Berlín durante la Guerra Fría?", "o": ["Muro de Adriano", "Muro de Berlín", "Muro de Hierro", "Muro Occidental"], "a": 1},
    {"q": "¿Quién fue el líder de la Revolución Rusa de 1917?", "o": ["Stalin", "Trotsky", "Lenin", "Rasputín"], "a": 2},
    {"q": "¿Qué ciudad fue destruida por la erupción del Vesubio en el 79 d.C.?", "o": ["Roma", "Nápoles", "Pompeya", "Cartago"], "a": 2},
    {"q": "¿En qué país nació Adolf Hitler?", "o": ["Alemania", "Austria", "Polonia", "Hungría"], "a": 1},
    {"q": "¿Qué evento marcó el inicio de la Revolución Francesa?", "o": ["Toma de la Bastilla", "Muerte de Luis XVI", "Batalla de Waterloo", "El Terror"], "a": 0},
    {"q": "¿Quién fue conocido como el 'Rey Sol'?", "o": ["Felipe II", "Luis XIV", "Carlos V", "Enrique VIII"], "a": 1},
    {"q": "¿Qué imperio dominó gran parte de Europa bajo el mando de Julio César?", "o": ["Griego", "Persa", "Romano", "Bizantino"], "a": 2},
    {"q": "¿Quién descubrió la penicilina?", "o": ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Gregor Mendel"], "a": 1},
    {"q": "¿En qué año cayó el Imperio Romano de Occidente?", "o": ["476 d.C.", "1453 d.C.", "313 d.C.", "1000 d.C."], "a": 0},
    {"q": "¿Quién escribió el 'Manifiesto Comunista' junto a Friedrich Engels?", "o": ["Adam Smith", "Karl Marx", "John Locke", "Jean-Jacques Rousseau"], "a": 1},
    {"q": "¿Qué famosa ruta comercial conectaba China con Europa?", "o": ["Ruta de la Sal", "Ruta de la Seda", "Ruta de las Especias", "Ruta del Té"], "a": 1},
    {"q": "¿Quién fue el emperador de Francia que fue derrotado en Waterloo?", "o": ["Luis XVI", "Napoleón Bonaparte", "Carlos de Gaulle", "Robespierre"], "a": 1},
    {"q": "¿Qué civilización inventó la escritura cuneiforme?", "o": ["Fenicios", "Sumerios", "Griegos", "Persas"], "a": 1},
    {"q": "¿Cuál era la capital del Imperio Inca?", "o": ["Tenochtitlán", "Lima", "Cuzco", "Quito"], "a": 2},
    {"q": "¿Qué guerra duró de 1914 a 1918?", "o": ["Segunda Guerra Mundial", "Guerra de Vietnam", "Primera Guerra Mundial", "Guerra Civil Española"], "a": 2},
    {"q": "¿Quién fue el líder de la independencia de la India?", "o": ["Nelson Mandela", "Mahatma Gandhi", "Jawaharlal Nehru", "Martin Luther King"], "a": 1},
    {"q": "¿Qué país lanzó la primera bomba atómica en la historia?", "o": ["Alemania", "URSS", "EE.UU.", "Japón"], "a": 2},
    {"q": "¿Quién fue el primer hombre en viajar al espacio?", "o": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], "a": 2},
    {"q": "¿Qué barco se hundió en su viaje inaugural en 1912?", "o": ["Lusitania", "Titanic", "Santa María", "Bismarck"], "a": 1},
    {"q": "¿Quién fue el conquistador de México?", "o": ["Francisco Pizarro", "Hernán Cortés", "Diego de Almagro", "Vasco Núñez de Balboa"], "a": 1},
    {"q": "¿Qué dinastía construyó la Gran Muralla China?", "o": ["Han", "Ming", "Qin", "Tang"], "a": 2},
    {"q": "¿En qué siglo ocurrió la Peste Negra en Europa?", "o": ["Siglo XII", "Siglo XIV", "Siglo XVI", "Siglo X"], "a": 1},
    {"q": "¿Quién fue el presidente de EE.UU. durante la Guerra Civil?", "o": ["George Washington", "Andrew Jackson", "Abraham Lincoln", "Ulysses S. Grant"], "a": 2},
    {"q": "¿Qué reina gobernó el Reino Unido por más de 63 años en el siglo XIX?", "o": ["Isabel I", "Victoria", "Ana", "Isabel II"], "a": 1},
    {"q": "¿Quién fue el líder del movimiento de derechos civiles en EE.UU.?", "o": ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.", "John F. Kennedy"], "a": 2},
    {"q": "¿Qué imperio fue derrotado por los españoles liderados por Pizarro?", "o": ["Azteca", "Maya", "Inca", "Olmeca"], "a": 2},
    {"q": "¿En qué año se produjo la caída del Muro de Berlín?", "o": ["1985", "1989", "1991", "1993"], "a": 1},
    {"q": "¿Quién fue el fundador del Imperio Mongol?", "o": ["Kublai Kan", "Gengis Kan", "Tamerlán", "Atila"], "a": 1},
    {"q": "¿Qué tratado puso fin a la Primera Guerra Mundial?", "o": ["Tratado de Tordesillas", "Tratado de Versalles", "Tratado de París", "Tratado de Utrecht"], "a": 1},
    {"q": "¿Qué filósofo griego fue maestro de Alejandro Magno?", "o": ["Sócrates", "Platón", "Aristóteles", "Pitágoras"], "a": 2},
    {"q": "¿En qué año comenzó la Guerra Civil Española?", "o": ["1931", "1936", "1939", "1945"], "a": 1},
    {"q": "¿Quién fue el primer humano en pisar la Luna?", "o": ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], "a": 1},
    {"q": "¿Qué inventó Johannes Gutenberg en el siglo XV?", "o": ["Telescopio", "Imprenta", "Brújula", "Pólvora"], "a": 1},
    {"q": "¿Qué faraón egipcio descubrieron intacto en 1922?", "o": ["Ramsés II", "Tutankamón", "Keops", "Seti I"], "a": 1},
    {"q": "¿Qué país colonizó la mayor parte de Sudamérica?", "o": ["Portugal", "España", "Reino Unido", "Francia"], "a": 1},
    {"q": "¿Quién fue la 'Doncella de Orleans' en la Guerra de los Cien Años?", "o": ["Catalina de Médici", "Juana de Arco", "María Estuardo", "Leonor de Aquitania"], "a": 1},
    {"q": "¿En qué ciudad nació el Renacimiento?", "o": ["Roma", "Venecia", "Florencia", "Milán"], "a": 2},
    {"q": "¿Qué país atacó Pearl Harbor en 1941?", "o": ["Alemania", "Japón", "Italia", "China"], "a": 1},
    {"q": "¿Quién lideró la independencia de varios países sudamericanos?", "o": ["Bernardo O'Higgins", "Simón Bolívar", "José de San Martín", "Todos los anteriores"], "a": 3},
    {"q": "¿Qué civilización inventó el calendario de 365 días?", "o": ["Egipcia", "Griega", "Romana", "Babilónica"], "a": 0},
    {"q": "¿Quién fue el dictador de la Unión Soviética hasta 1953?", "o": ["Lenin", "Stalin", "Kruschev", "Brezhnev"], "a": 1},
    {"q": "¿Qué conflicto enfrentó a EE.UU. y la URSS sin armas directas?", "o": ["Guerra de Corea", "Guerra Fría", "Guerra del Golfo", "Guerra de Vietnam"], "a": 1},
    {"q": "¿Quién fue el rey de Macedonia que creó uno de los imperios más grandes?", "o": ["Filipo II", "Alejandro Magno", "Pericles", "Leonidas"], "a": 1},
    {"q": "¿En qué año terminó la Guerra de Vietnam?", "o": ["1970", "1975", "1980", "1965"], "a": 1},
    {"q": "¿Qué organización se fundó tras la Segunda Guerra Mundial?", "o": ["Sociedad de Naciones", "OTAN", "ONU", "Unión Europea"], "a": 2},
    {"q": "¿Quién fue el líder del Apartheid en Sudáfrica?", "o": ["Desmond Tutu", "Nelson Mandela", "P.W. Botha", "Frederick de Klerk"], "a": 1},
    {"q": "¿Qué emperador romano legalizó el cristianismo?", "o": ["Nerón", "Trajano", "Constantino", "Augusto"], "a": 2},
    {"q": "¿Quién fue la primera mujer en ganar un Premio Nobel?", "o": ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Jane Goodall"], "a": 1},
    {"q": "¿Qué batalla terminó con el imperio de Napoleón?", "o": ["Austerlitz", "Leipzig", "Waterloo", "Trafalgar"], "a": 2},
    {"q": "¿Qué país invadió Alemania para iniciar la 2ª Guerra Mundial?", "o": ["Francia", "Polonia", "Checoslovaquia", "Austria"], "a": 1},
    {"q": "¿Qué civilización vivía en la antigua ciudad de Cartago?", "o": ["Romanos", "Griegos", "Fenicios", "Persas"], "a": 2},
    {"q": "¿En qué año fue asesinado John F. Kennedy?", "o": ["1960", "1963", "1968", "1965"], "a": 1},
    {"q": "¿Quién fue el primer emperador de China?", "o": ["Mao Zedong", "Qin Shi Huang", "Sun Yat-sen", "Confucio"], "a": 1},
    {"q": "¿Qué imperio construyó el Coliseo?", "o": ["Griego", "Bizantino", "Romano", "Otomano"], "a": 2},
    {"q": "¿Quién lideró la Revolución Cubana?", "o": ["Che Guevara", "Fidel Castro", "Camilo Cienfuegos", "Batista"], "a": 1},
    {"q": "¿Qué explorador dio la primera vuelta al mundo (aunque murió antes)?", "o": ["Vasco da Gama", "Magallanes", "Marco Polo", "James Cook"], "a": 1},
    {"q": "¿En qué ciudad se fundó la democracia?", "o": ["Roma", "Esparta", "Atenas", "Tebas"], "a": 2},
    {"q": "¿Quién fue la reina de España que apoyó a Colón?", "o": ["Juana la Loca", "Isabel la Católica", "Catalina de Aragón", "María Tudor"], "a": 1},
    {"q": "¿Qué inventaron los hermanos Wright en 1903?", "o": ["Automóvil", "Avión", "Teléfono", "Radio"], "a": 1},
    {"q": "¿En qué año se hundió la Unión Soviética?", "o": ["1989", "1991", "1995", "1985"], "a": 1},
    {"q": "¿Quién fue el rey asesinado en la Revolución Francesa?", "o": ["Luis XIV", "Luis XV", "Luis XVI", "Luis XVIII"], "a": 2},
    {"q": "¿Qué civilización precolombina habitaba en México?", "o": ["Azteca", "Inca", "Mapuche", "Navajo"], "a": 0},
    {"q": "¿En qué país ocurrió la Revolución Industrial?", "o": ["Francia", "Alemania", "Reino Unido", "EE.UU."], "a": 2},
    {"q": "¿Quién fue el padre de la medicina?", "o": ["Sócrates", "Hipócrates", "Galeno", "Platón"], "a": 1},
    {"q": "¿Qué guerra enfrentó a las dos Coreas?", "o": ["1945-1949", "1950-1953", "1960-1964", "1939-1945"], "a": 1},
    {"q": "¿En qué siglo se descubrió América?", "o": ["XIV", "XV", "XVI", "XVII"], "a": 1},
    {"q": "¿Qué país construyó el Canal de Panamá (terminado en 1914)?", "o": ["Francia", "Panamá", "EE.UU.", "España"], "a": 2},
    {"q": "¿Quién fue el líder espiritual del Tíbet que huyó a India?", "o": ["Confucio", "Dalai Lama", "Lao-Tse", "Buda"], "a": 1},
    {"q": "¿Qué imperio dominó la India hasta 1947?", "o": ["Francés", "Portugués", "Británico", "Neerlandés"], "a": 2},
    {"q": "¿Qué ciudad es la más antigua continuamente habitada?", "o": ["Roma", "Jericó", "Damasco", "Atenas"], "a": 2},
    {"q": "¿Quién fue el autor de 'El Príncipe'?", "o": ["Maquiavelo", "Dante", "Erasmo", "Petrarca"], "a": 0},
    {"q": "¿En qué año nació el Euro como moneda física?", "o": ["1999", "2002", "2000", "2005"], "a": 1},
    {"q": "¿Qué país se independizó de la URSS y sufrió un accidente nuclear en 1986?", "o": ["Bielorrusia", "Ucrania", "Lituania", "Polonia"], "a": 1},
    {"q": "¿Quién fue la primera mujer Primera Ministra del Reino Unido?", "o": ["Angela Merkel", "Margaret Thatcher", "Theresa May", "Indira Gandhi"], "a": 1},
    {"q": "¿En qué año fueron los atentados de las Torres Gemelas?", "o": ["1999", "2001", "2003", "2005"], "a": 1}
],
"Arte": [
    {"q": "¿Quién pintó la 'Mona Lisa'?", "o": ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"], "a": 2},
    {"q": "¿Quién escribió 'Don Quijote de la Mancha'?", "o": ["Lope de Vega", "Miguel de Cervantes", "Quevedo", "Góngora"], "a": 1},
    {"q": "¿En qué ciudad se encuentra el Museo del Louvre?", "o": ["Londres", "Madrid", "París", "Roma"], "a": 2},
    {"q": "¿Qué artista es famoso por pintar latas de sopa Campbell?", "o": ["Jackson Pollock", "Andy Warhol", "Picasso", "Salvador Dalí"], "a": 1},
    {"q": "¿Quién escribió 'Romeo y Julieta'?", "o": ["Charles Dickens", "William Shakespeare", "Oscar Wilde", "Dante Alighieri"], "a": 1},
    {"q": "¿Qué pintor se cortó la oreja izquierda?", "o": ["Vincent van Gogh", "Paul Gauguin", "Claude Monet", "Edvard Munch"], "a": 0},
    {"q": "¿Quién esculpió el 'David'?", "o": ["Bernini", "Donatello", "Miguel Ángel", "Canova"], "a": 2},
    {"q": "¿Cuál es el libro más vendido de la historia después de la Biblia?", "o": ["El Principito", "Don Quijote", "Harry Potter", "Historia de dos ciudades"], "a": 1},
    {"q": "¿Quién pintó 'El Guernica'?", "o": ["Velázquez", "Goya", "Pablo Picasso", "Joan Miró"], "a": 2},
    {"q": "¿Qué estilo arquitectónico caracteriza a la Catedral de Notre Dame?", "o": ["Barroco", "Románico", "Gótico", "Renacimiento"], "a": 2},
    {"q": "¿Quién es el autor de 'La Odisea'?", "o": ["Sófocles", "Eurípides", "Homero", "Virgilio"], "a": 2},
    {"q": "¿Qué pintor español realizó 'Las Meninas'?", "o": ["Murillo", "Diego Velázquez", "El Greco", "Sorolla"], "a": 1},
    {"q": "¿Quién escribió 'Cien años de soledad'?", "o": ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Pablo Neruda"], "a": 1},
    {"q": "¿En qué país nació el movimiento del Renacimiento?", "o": ["Francia", "España", "Italia", "Grecia"], "a": 2},
    {"q": "¿Quién pintó 'La persistencia de la memoria' (relojes blandos)?", "o": ["René Magritte", "Joan Miró", "Salvador Dalí", "Frida Kahlo"], "a": 2},
    {"q": "¿Qué poeta escribió 'Veinte poemas de amor y una canción desesperada'?", "o": ["Federico García Lorca", "Gustavo Adolfo Bécquer", "Pablo Neruda", "Octavio Paz"], "a": 2},
    {"q": "¿Quién diseñó la Sagrada Familia en Barcelona?", "o": ["Le Corbusier", "Frank Gehry", "Antoni Gaudí", "Oscar Niemeyer"], "a": 2},
    {"q": "¿Cuál es la obra más famosa de Dante Alighieri?", "o": ["El Decamerón", "La Divina Comedia", "Eneida", "Fausto"], "a": 1},
    {"q": "¿Quién pintó 'La noche estrellada'?", "o": ["Claude Monet", "Vincent van Gogh", "Gustav Klimt", "Edouard Manet"], "a": 1},
    {"q": "¿Qué autor escribió '1984'?", "o": ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"], "a": 1},
    {"q": "¿Quién esculpió 'El Pensador'?", "o": ["Auguste Rodin", "Miguel Ángel", "Giacometti", "Moore"], "a": 0},
    {"q": "¿A qué movimiento pertenece la pintura 'Impresión, sol naciente' de Monet?", "o": ["Expresionismo", "Impresionismo", "Cubismo", "Fovismo"], "a": 1},
    {"q": "¿Quién escribió 'El Principito'?", "o": ["Antoine de Saint-Exupéry", "Victor Hugo", "Marcel Proust", "Albert Camus"], "a": 0},
    {"q": "¿Qué pintura de Edvard Munch muestra a una figura gritando?", "o": ["El grito", "Ansiedad", "Miedo", "El beso"], "a": 0},
    {"q": "¿Quién es el autor de 'Hamlet'?", "o": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Milton"], "a": 1},
    {"q": "¿Qué arquitecto diseñó el Museo Guggenheim de Bilbao?", "o": ["Norman Foster", "Frank Gehry", "Zaha Hadid", "Santiago Calatrava"], "a": 1},
    {"q": "¿Quién escribió 'La metamorfosis'?", "o": ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Stefan Zweig"], "a": 1},
    {"q": "¿Qué técnica pictórica usaba Jackson Pollock?", "o": ["Puntillismo", "Dripping (Goteo)", "Fresco", "Acuarela"], "a": 1},
    {"q": "¿Quién pintó 'La última cena'?", "o": ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Botticelli"], "a": 0},
    {"q": "¿Qué escritora creó al detective Hércules Poirot?", "o": ["Jane Austen", "Virginia Woolf", "Agatha Christie", "Mary Shelley"], "a": 2},
    {"q": "¿Quién pintó 'El jardín de las delicias'?", "o": ["El Bosco", "Brueghel", "Durero", "Rubens"], "a": 0},
    {"q": "¿Qué autor escribió 'Orgullo y prejuicio'?", "o": ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "George Eliot"], "a": 1},
    {"q": "¿Quién pintó 'El nacimiento de Venus'?", "o": ["Sandro Botticelli", "Tiziano", "Caravaggio", "Fra Angelico"], "a": 0},
    {"q": "¿Qué filósofo y escritor escribió 'Así habló Zaratustra'?", "o": ["Kant", "Schopenhauer", "Friedrich Nietzsche", "Heidegger"], "a": 2},
    {"q": "¿Quién es la autora de 'Frankenstein'?", "o": ["Mary Shelley", "Ann Radcliffe", "Bram Stoker", "Edgar Allan Poe"], "a": 0},
    {"q": "¿Qué pintor mexicano es famoso por sus murales y su relación con Frida Kahlo?", "o": ["David Alfaro Siqueiros", "Diego Rivera", "José Clemente Orozco", "Rufino Tamayo"], "a": 1},
    {"q": "¿Quién escribió 'Los miserables'?", "o": ["Gustave Flaubert", "Victor Hugo", "Stendhal", "Émile Zola"], "a": 1},
    {"q": "¿En qué museo se encuentra 'Las Meninas'?", "o": ["Museo del Prado", "Reina Sofía", "Thyssen", "Guggenheim"], "a": 0},
    {"q": "¿Quién escribió 'El Hobbit'?", "o": ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Ursula K. Le Guin"], "a": 1},
    {"q": "¿Qué artista pintó la Capilla Sixtina?", "o": ["Leonardo da Vinci", "Rafael", "Miguel Ángel", "Donatello"], "a": 2},
    {"q": "¿Quién es el autor de 'Crónica de una muerte anunciada'?", "o": ["Gabriel García Márquez", "Isabel Allende", "Carlos Fuentes", "Juan Rulfo"], "a": 0},
    {"q": "¿Qué pintor barroco usaba el claroscuro de forma dramática?", "o": ["Rembrandt", "Caravaggio", "Rubens", "Vermeer"], "a": 1},
    {"q": "¿Quién escribió 'Ulysses'?", "o": ["Oscar Wilde", "James Joyce", "Samuel Beckett", "W.B. Yeats"], "a": 1},
    {"q": "¿Qué escultura griega no tiene brazos?", "o": ["Victoria de Samotracia", "Venus de Milo", "Laocoonte", "Discóbolo"], "a": 1},
    {"q": "¿Quién escribió el poema 'El cuervo'?", "o": ["Walt Whitman", "Edgar Allan Poe", "T.S. Eliot", "Ezra Pound"], "a": 1},
    {"q": "¿Qué pintor impresionista se obsesionó con pintar nenúfares?", "o": ["Edgar Degas", "Pierre-Auguste Renoir", "Claude Monet", "Camille Pissarro"], "a": 2},
    {"q": "¿Quién escribió 'Rayuela'?", "o": ["Jorge Luis Borges", "Julio Cortázar", "Ernesto Sabato", "Adolfo Bioy Casares"], "a": 1},
    {"q": "¿Qué nombre recibe el arte japonés de plegar papel?", "o": ["Ikebana", "Haiku", "Origami", "Bonsái"], "a": 2},
    {"q": "¿Quién pintó 'La joven de la perla'?", "o": ["Johannes Vermeer", "Frans Hals", "Rembrandt", "Jan van Eyck"], "a": 0},
    {"q": "¿Quién escribió 'Moby Dick'?", "o": ["Nathaniel Hawthorne", "Herman Melville", "Mark Twain", "Jack London"], "a": 1},
    {"q": "¿Qué edificio de la antigua Grecia está dedicado a Atenea?", "o": ["Erecteón", "Partenón", "Templo de Zeus", "Altar de Pérgamo"], "a": 1},
    {"q": "¿Quién es el autor de 'Fahrenheit 451'?", "o": ["Ray Bradbury", "Isaac Asimov", "Arthur C. Clarke", "Philip K. Dick"], "a": 0},
    {"q": "¿Qué artista pintó 'El beso'?", "o": ["Egon Schiele", "Gustav Klimt", "Oskar Kokoschka", "Max Beckmann"], "a": 1},
    {"q": "¿Quién escribió 'Guerra y Paz'?", "o": ["Fiódor Dostoyevski", "León Tolstói", "Antón Chéjov", "Aleksandr Pushkin"], "a": 1},
    {"q": "¿Qué estilo artístico se caracteriza por formas geométricas y planos fragmentados?", "o": ["Surrealismo", "Cubismo", "Futurismo", "Dadaísmo"], "a": 1},
    {"q": "¿Quién escribió 'Alicia en el país de las maravillas'?", "o": ["Lewis Carroll", "Roald Dahl", "Beatrix Potter", "Kenneth Grahame"], "a": 0},
    {"q": "¿Quién pintó 'La libertad guiando al pueblo'?", "o": ["Théodore Géricault", "Eugène Delacroix", "Jean-Auguste-Dominique Ingres", "Jacques-Louis David"], "a": 1},
    {"q": "¿Qué autor escribió 'Pedro Páramo'?", "o": ["Juan Rulfo", "Octavio Paz", "Carlos Fuentes", "Mariano Azuela"], "a": 0},
    {"q": "¿Quién diseñó la cúpula de la Basílica de San Pedro?", "o": ["Bramante", "Bernini", "Miguel Ángel", "Borromini"], "a": 2},
    {"q": "¿Quién escribió 'El retrato de Dorian Gray'?", "o": ["Bram Stoker", "Oscar Wilde", "Robert Louis Stevenson", "Arthur Conan Doyle"], "a": 1},
    {"q": "¿Qué pintor flamenco es autor de 'El descendimiento de la cruz'?", "o": ["Rogier van der Weyden", "Hans Memling", "Hugo van der Goes", "Jan van Eyck"], "a": 0},
    {"q": "¿Quién es el autor de 'Madame Bovary'?", "o": ["Honoré de Balzac", "Gustave Flaubert", "Guy de Maupassant", "Stendhal"], "a": 1},
    {"q": "¿Qué artista contemporáneo es conocido por sus grafitis satíricos y anonimato?", "o": ["Jean-Michel Basquiat", "Keith Haring", "Banksy", "Shepard Fairey"], "a": 2},
    {"q": "¿Quién escribió 'Las flores del mal'?", "o": ["Arthur Rimbaud", "Charles Baudelaire", "Paul Verlaine", "Stéphane Mallarmé"], "a": 1},
    {"q": "¿Qué museo neoyorquino tiene forma de espiral blanca?", "o": ["MET", "MoMA", "Solomon R. Guggenheim", "Whitney"], "a": 2},
    {"q": "¿Quién es el autor de 'Crimen y castigo'?", "o": ["León Tolstói", "Fiódor Dostoyevski", "Iván Turguénev", "Nikolái Gógol"], "a": 1},
    {"q": "¿Qué pintor es el máximo exponente del Puntillismo?", "o": ["Georges Seurat", "Paul Cézanne", "Henri Matisse", "Paul Signac"], "a": 0},
    {"q": "¿Quién escribió 'El Aleph'?", "o": ["Jorge Luis Borges", "Julio Cortázar", "Ernesto Sabato", "Mario Benedetti"], "a": 0},
    {"q": "¿Qué artista estadounidense es famosa por sus cuadros de flores gigantes?", "o": ["Mary Cassatt", "Georgia O'Keeffe", "Frida Kahlo", "Tamara de Lempicka"], "a": 1},
    {"q": "¿Quién escribió 'La Ilíada'?", "o": ["Hesíodo", "Píndaro", "Homero", "Esquilo"], "a": 2},
    {"q": "¿Qué estilo arquitectónico se caracteriza por el exceso de ornamentación y curvas?", "o": ["Renacimiento", "Neoclásico", "Barroco", "Funcionalismo"], "a": 2},
    {"q": "¿Quién escribió 'Cumbres borrascosas'?", "o": ["Charlotte Brontë", "Emily Brontë", "Anne Brontë", "Jane Austen"], "a": 1},
    {"q": "¿Qué pintor pop art creó la obra 'Whaam!'?", "o": ["Roy Lichtenstein", "Andy Warhol", "Jasper Johns", "Robert Rauschenberg"], "a": 0},
    {"q": "¿Quién es el autor de 'Fausto'?", "o": ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Heinrich Heine", "Thomas Mann"], "a": 0},
    {"q": "¿En qué país se encuentra la Gran Pirámide de Chichén Itzá?", "o": ["Guatemala", "Honduras", "México", "Belice"], "a": 2},
    {"q": "¿Quién escribió 'La casa de Bernarda Alba'?", "o": ["Federico García Lorca", "Antonio Machado", "Miguel Hernández", "Rafael Alberti"], "a": 0},
    {"q": "¿Qué artista pintó 'Las tres gracias'?", "o": ["Pedro Pablo Rubens", "Rembrandt", "Velázquez", "Tiziano"], "a": 0},
    {"q": "¿Quién escribió 'Drácula'?", "o": ["Mary Shelley", "Bram Stoker", "Sheridan Le Fanu", "John Polidori"], "a": 1},
    {"q": "¿Qué ciudad es famosa por el edificio de la Ópera con forma de velas blancas?", "o": ["Nueva York", "Sídney", "Londres", "Oslo"], "a": 1},
    {"q": "¿Quién escribió 'El viejo y el mar'?", "o": ["William Faulkner", "Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald"], "a": 1}
],
"Ciencia": [
    {"q": "¿Cuál es el planeta más cercano al Sol?", "o": ["Venus", "Marte", "Mercurio", "Júpiter"], "a": 2},
    {"q": "¿Cuál es el símbolo químico del oro?", "o": ["Ag", "Fe", "Au", "Pb"], "a": 2},
    {"q": "¿Quién propuso la Teoría de la Relatividad?", "o": ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"], "a": 1},
    {"q": "¿Qué gas respiramos para sobrevivir?", "o": ["Nitrógeno", "Dióxido de Carbono", "Oxígeno", "Hidrógeno"], "a": 2},
    {"q": "¿Cuál es el animal terrestre más rápido?", "o": ["León", "Guepardo", "Caballo", "Gacela"], "a": 1},
    {"q": "¿Cuántos huesos tiene un adulto humano promedio?", "o": ["180", "206", "300", "250"], "a": 1},
    {"q": "¿Cuál es el órgano más grande del cuerpo humano?", "o": ["Hígado", "Corazón", "Piel", "Pulmones"], "a": 2},
    {"q": "¿Cómo se llama el proceso por el cual las plantas fabrican su alimento?", "o": ["Respiración", "Fotosíntesis", "Oxidación", "Transpiración"], "a": 1},
    {"q": "¿Cuál es el planeta rojo?", "o": ["Venus", "Marte", "Saturno", "Neptuno"], "a": 1},
    {"q": "¿Qué partícula del átomo tiene carga negativa?", "o": ["Protón", "Neutrón", "Electrón", "Átomo"], "a": 2},
    {"q": "¿Cuál es el metal que es líquido a temperatura ambiente?", "o": ["Plata", "Mercurio", "Cobre", "Plomo"], "a": 1},
    {"q": "¿Cómo se llama la fuerza que nos mantiene pegados al suelo?", "o": ["Magnetismo", "Fricción", "Gravedad", "Inercia"], "a": 2},
    {"q": "¿Cuál es el animal más grande del mundo?", "o": ["Elefante africano", "Ballena azul", "Tiburón ballena", "Cachalote"], "a": 1},
    {"q": "¿Qué gas expulsamos al exhalar?", "o": ["Oxígeno", "Dióxido de carbono", "Metano", "Argón"], "a": 1},
    {"q": "¿Cuál es la unidad básica de la vida?", "o": ["Átomo", "Molécula", "Célula", "Tejido"], "a": 2},
    {"q": "¿Cuántos planetas hay en el sistema solar?", "o": ["7", "8", "9", "10"], "a": 1},
    {"q": "¿Cuál es la sustancia más dura del cuerpo humano?", "o": ["Hueso", "Esmalte dental", "Cartílago", "Uña"], "a": 1},
    {"q": "¿Qué científico formuló las leyes del movimiento y la gravitación?", "o": ["Galileo Galilei", "Charles Darwin", "Isaac Newton", "Marie Curie"], "a": 2},
    {"q": "¿Cuál es el único mamífero capaz de volar?", "o": ["Avestruz", "Murciélago", "Pingüino", "Ardilla voladora"], "a": 1},
    {"q": "¿Qué elemento químico es necesario para la combustión?", "o": ["Hidrógeno", "Helio", "Oxígeno", "Nitrógeno"], "a": 2},
    {"q": "¿Cómo se llama el centro de un átomo?", "o": ["Corteza", "Núcleo", "Órbita", "Protón"], "a": 1},
    {"q": "¿Cuál es el animal más inteligente después del humano?", "o": ["Perro", "Delfín", "Gato", "Caballo"], "a": 1},
    {"q": "¿Qué planeta tiene el día más largo?", "o": ["Mercurio", "Venus", "Marte", "Júpiter"], "a": 1},
    {"q": "¿Cuál es el pH del agua pura?", "o": ["0", "5", "7", "14"], "a": 2},
    {"q": "¿Qué tipo de sangre es conocida como el donante universal?", "o": ["A+", "B-", "AB+", "O-"], "a": 3},
    {"q": "¿Cómo se llama el pigmento que da color a las plantas?", "o": ["Hemoglobina", "Melanina", "Clorofila", "Caroteno"], "a": 2},
    {"q": "¿Cuál es el animal más alto de la Tierra?", "o": ["Elefante", "Jirafa", "Avestruz", "Alce"], "a": 1},
    {"q": "¿Qué planeta es conocido como el gigante gaseoso más grande?", "o": ["Saturno", "Urano", "Júpiter", "Neptuno"], "a": 2},
    {"q": "¿Cuál es el elemento químico más abundante en el universo?", "o": ["Oxígeno", "Helio", "Hidrógeno", "Carbono"], "a": 2},
    {"q": "¿Cómo se llama la ciencia que estudia los fósiles?", "o": ["Arqueología", "Paleontología", "Geología", "Biología"], "a": 1},
    {"q": "¿Qué parte de la célula contiene el material genético?", "o": ["Citoplasma", "Ribosoma", "Núcleo", "Membrana"], "a": 2},
    {"q": "¿Cuál es el único pájaro que puede volar hacia atrás?", "o": ["Colibrí", "Águila", "Loro", "Búho"], "a": 0},
    {"q": "¿Qué vitamina obtenemos principalmente del sol?", "o": ["Vitamina A", "Vitamina B12", "Vitamina C", "Vitamina D"], "a": 3},
    {"q": "¿Cómo se llama el satélite natural de la Tierra?", "o": ["Europa", "Luna", "Titán", "Ganimedes"], "a": 1},
    {"q": "¿Qué metal es el mejor conductor de la electricidad?", "o": ["Oro", "Cobre", "Plata", "Hierro"], "a": 2},
    {"q": "¿Cuál es la velocidad de la luz aproximadamente?", "o": ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "10.000 km/s"], "a": 0},
    {"q": "¿Qué animal pone el huevo más grande?", "o": ["Águila", "Cocodrilo", "Avestruz", "Tiburón"], "a": 2},
    {"q": "¿Cuál es el gas más abundante en la atmósfera terrestre?", "o": ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"], "a": 2},
    {"q": "¿Qué rama de la biología estudia los animales?", "o": ["Botánica", "Zoología", "Ecología", "Genética"], "a": 1},
    {"q": "¿Cómo se llama el cambio de estado de sólido a gas sin pasar por líquido?", "o": ["Evaporación", "Sublimación", "Condensación", "Fusión"], "a": 1},
    {"q": "¿Qué órgano produce la insulina?", "o": ["Hígado", "Riñón", "Páncreas", "Bazo"], "a": 2},
    {"q": "¿Cuál es el planeta con anillos más espectaculares?", "o": ["Júpiter", "Saturno", "Urano", "Neptuno"], "a": 1},
    {"q": "¿Cómo se llaman los animales que comen de todo (plantas y carne)?", "o": ["Herbívoros", "Carnívoros", "Omnívoros", "Frugívoros"], "a": 2},
    {"q": "¿Cuál es el animal más letal del mundo por número de muertes humanas?", "o": ["Tiburón", "León", "Mosquito", "Serpiente"], "a": 2},
    {"q": "¿Qué inventó Thomas Edison?", "o": ["La bombilla", "El teléfono", "El motor a vapor", "La radio"], "a": 0},
    {"q": "¿Qué ácido hay en el estómago humano?", "o": ["Ácido sulfúrico", "Ácido clorhídrico", "Ácido nítrico", "Ácido acético"], "a": 1},
    {"q": "¿Cuántos dientes tiene un humano adulto promedio?", "o": ["28", "30", "32", "34"], "a": 2},
    {"q": "¿Cuál es la galaxia en la que vivimos?", "o": ["Andrómeda", "Vía Láctea", "Sombrero", "Triángulo"], "a": 1},
    {"q": "¿Qué animal es un monotrema (mamífero que pone huevos)?", "o": ["Canguro", "Ornitorrinco", "Koala", "Delfín"], "a": 1},
    {"q": "¿Qué estudia la botánica?", "o": ["Los animales", "Las rocas", "Las plantas", "Las estrellas"], "a": 2},
    {"q": "¿Cuál es el elemento químico con símbolo 'C'?", "o": ["Calcio", "Cobre", "Carbono", "Cloro"], "a": 2},
    {"q": "¿Cómo se llama el movimiento de la Tierra sobre su propio eje?", "o": ["Traslación", "Rotación", "Nutación", "Precesión"], "a": 1},
    {"q": "¿Qué parte del ojo detecta la luz?", "o": ["Iris", "Pupila", "Retina", "Córnea"], "a": 2},
    {"q": "¿Cuál es el mamífero más pequeño del mundo?", "o": ["Ratón", "Musaraña", "Hámster", "Topo"], "a": 1},
    {"q": "¿Qué gas es vital para que las plantas realicen la fotosíntesis?", "o": ["Oxígeno", "Nitrógeno", "Dióxido de Carbono", "Helio"], "a": 2},
    {"q": "¿Quién escribió 'El origen de las especies'?", "o": ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Jean-Baptiste Lamarck"], "a": 1},
    {"q": "¿Cuál es el hueso más largo del cuerpo humano?", "o": ["Húmero", "Tibia", "Fémur", "Radio"], "a": 2},
    {"q": "¿Qué planeta es conocido como el 'lucero del alba'?", "o": ["Marte", "Venus", "Mercurio", "Júpiter"], "a": 1},
    {"q": "¿Cómo se llama la capa de gas que rodea la Tierra?", "o": ["Hidrosfera", "Atmósfera", "Litosfera", "Biosfera"], "a": 1},
    {"q": "¿Cuál es el animal con el cuello más largo?", "o": ["Cisne", "Jirafa", "Avestruz", "Llama"], "a": 1},
    {"q": "¿Qué mineral es el diamante en su forma pura?", "o": ["Hierro", "Carbono", "Silicio", "Azufre"], "a": 1},
    {"q": "¿Cómo se llama la ciencia que estudia el clima?", "o": ["Geología", "Meteorología", "Astronomía", "Ecología"], "a": 1},
    {"q": "¿Qué animal tiene tres corazones?", "o": ["Pulpo", "Ballena", "Caballo", "Elefante"], "a": 0},
    {"q": "¿Qué parte del cerebro controla el equilibrio?", "o": ["Corteza", "Cerebelo", "Bulbo raquídeo", "Hipotálamo"], "a": 1},
    {"q": "¿Cuál es el único planeta que no tiene nombre de un dios romano?", "o": ["Urano", "Neptuno", "Tierra", "Marte"], "a": 2},
    {"q": "¿Qué tipo de animal es una salamandra?", "o": ["Reptil", "Anfibio", "Pez", "Mamífero"], "a": 1},
    {"q": "¿Cuál es la fórmula química del agua oxigenada?", "o": ["H2O", "H2O2", "HO2", "OH2"], "a": 1},
    {"q": "¿Qué fuerza atrae a los objetos con masa entre sí?", "o": ["Electromagnetismo", "Fuerza Nuclear", "Gravedad", "Fricción"], "a": 2},
    {"q": "¿Cuál es el animal que más años puede vivir?", "o": ["Tortuga gigante", "Ballena de Groenlandia", "Elefante", "Loro"], "a": 1},
    {"q": "¿Qué metal es el componente principal del acero?", "o": ["Cobre", "Aluminio", "Hierro", "Zinc"], "a": 2},
    {"q": "¿Cuál es el órgano que bombea la sangre?", "o": ["Pulmón", "Cerebro", "Corazón", "Hígado"], "a": 2},
    {"q": "¿Qué gas nos protege de los rayos ultravioleta en la atmósfera?", "o": ["Metano", "Ozono", "Oxígeno", "Nitrógeno"], "a": 1},
    {"q": "¿Qué animal es conocido por cambiar de color para camuflarse?", "o": ["Camaleón", "Iguana", "Serpiente", "Rana"], "a": 0},
    {"q": "¿Cómo se llama la distancia que recorre la luz en un año?", "o": ["Año luz", "Pársec", "Unidad Astronómica", "Kilómetro"], "a": 0},
    {"q": "¿Cuál es la temperatura de ebullición del agua al nivel del mar?", "o": ["90°C", "100°C", "110°C", "120°C"], "a": 1},
    {"q": "¿Qué parte de la planta absorbe el agua?", "o": ["Hoja", "Tallo", "Raíz", "Flor"], "a": 2},
    {"q": "¿Cómo se llama el proceso de división celular?", "o": ["Fotosíntesis", "Mitosis", "Digestión", "Fusión"], "a": 1},
    {"q": "¿Qué animal es el pariente vivo más cercano al T-Rex?", "o": ["Cocodrilo", "Gallina", "Lagartija", "Dragón de Komodo"], "a": 1},
    {"q": "¿Cuál es el elemento químico más ligero?", "o": ["Helio", "Oxígeno", "Hidrógeno", "Carbono"], "a": 2},
    {"q": "¿Qué sentido está más desarrollado en los perros?", "o": ["Vista", "Gusto", "Olfato", "Oído"], "a": 2}
],
"Deportes": [
    {"q": "¿Cuántos jugadores tiene un equipo de fútbol en el campo?", "o": ["10", "11", "12", "9"], "a": 1},
    {"q": "¿Cada cuántos años se celebran los Juegos Olímpicos?", "o": ["2", "3", "4", "5"], "a": 2},
    {"q": "¿Quién es considerado el mejor jugador de baloncesto de la historia?", "o": ["LeBron James", "Kobe Bryant", "Michael Jordan", "Stephen Curry"], "a": 2},
    {"q": "¿Cómo se llama el protagonista de la saga de videojuegos 'The Legend of Zelda'?", "o": ["Zelda", "Link", "Ganon", "Epona"], "a": 1},
    {"q": "¿Qué deporte practica Rafael Nadal?", "o": ["Fútbol", "Golf", "Tenis", "Baloncesto"], "a": 2},
    {"q": "¿Cuántos minutos dura un partido de baloncesto de la NBA?", "o": ["40", "48", "60", "90"], "a": 1},
    {"q": "¿En qué ciudad se celebraron los primeros Juegos Olímpicos modernos?", "o": ["Roma", "París", "Atenas", "Londres"], "a": 2},
    {"q": "¿Cómo se llama el fontanero más famoso de los videojuegos?", "o": ["Luigi", "Wario", "Mario", "Walugi"], "a": 2},
    {"q": "¿Qué selección ha ganado más Mundiales de Fútbol?", "o": ["Alemania", "Argentina", "Italia", "Brasil"], "a": 3},
    {"q": "¿Cuántas piezas tiene cada jugador al empezar una partida de ajedrez?", "o": ["12", "14", "16", "20"], "a": 2},
    {"q": "¿En qué deporte se utiliza un 'puck'?", "o": ["Rugby", "Hockey sobre hielo", "Lacrosse", "Polo"], "a": 1},
    {"q": "¿Cómo se llama el juego de mesa donde el objetivo es dominar el mundo?", "o": ["Cluedo", "Risk", "Monopoly", "Catan"], "a": 1},
    {"q": "¿Qué color de cinturón es el más alto en las artes marciales?", "o": ["Blanco", "Azul", "Negro", "Rojo"], "a": 2},
    {"q": "¿Quién es el hombre más rápido del mundo en los 100 metros lisos?", "o": ["Carl Lewis", "Tyson Gay", "Usain Bolt", "Yohan Blake"], "a": 2},
    {"q": "¿En qué consola debutó el primer juego de 'Halo'?", "o": ["PlayStation", "Xbox", "Nintendo 64", "GameCube"], "a": 1},
    {"q": "¿Cuál es la puntuación máxima posible en un juego de bolos (bowling)?", "o": ["100", "200", "300", "400"], "a": 2},
    {"q": "¿Qué ciclista ganó 7 Tours de Francia (luego retirados)?", "o": ["Miguel Induráin", "Lance Armstrong", "Eddy Merckx", "Alberto Contador"], "a": 1},
    {"q": "¿Cómo se llama el campo de juego en el béisbol?", "o": ["Cancha", "Diamante", "Pista", "Rink"], "a": 1},
    {"q": "¿Qué videojuego es conocido por sus bloques de colores llamados 'Tetriminos'?", "o": ["Tetris", "Candy Crush", "Minecraft", "Pac-Man"], "a": 0},
    {"q": "¿Cuántos tiempos (cuartos) tiene un partido de fútbol americano?", "o": ["2", "3", "4", "5"], "a": 2},
    {"q": "¿Quién ostenta el récord de más títulos de Grand Slam en tenis masculino?", "o": ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Andre Agassi"], "a": 1},
    {"q": "¿Cómo se llama el juego de mesa que consiste en hundir los barcos del rival?", "o": ["Batalla Naval", "Operación", "Estratego", "Dominó"], "a": 0},
    {"q": "¿En qué país se inventó el voleibol?", "o": ["Francia", "Estados Unidos", "Brasil", "Japón"], "a": 1},
    {"q": "¿Cuál es el color de la camiseta que lleva el líder del Tour de Francia?", "o": ["Rosa", "Rojo", "Amarillo", "Verde"], "a": 2},
    {"q": "¿Qué empresa fabrica la consola PlayStation?", "o": ["Microsoft", "Nintendo", "Sony", "Sega"], "a": 2},
    {"q": "¿Cuántos hoyos tiene un campo de golf estándar?", "o": ["9", "12", "18", "21"], "a": 2},
    {"q": "¿Qué deporte se practica en una piscina y utiliza una pelota?", "o": ["Natación", "Waterpolo", "Surf", "Esquí acuático"], "a": 1},
    {"q": "¿Cómo se llama el pokémon amarillo que acompaña a Ash Ketchum?", "o": ["Charmander", "Pikachu", "Squirtle", "Bulbasaur"], "a": 1},
    {"q": "¿En qué ciudad juegan los Lakers y los Clippers?", "o": ["Chicago", "Nueva York", "Los Ángeles", "Miami"], "a": 2},
    {"q": "¿Cuántos jugadores hay en un equipo de voleibol en pista?", "o": ["4", "5", "6", "7"], "a": 2},
    {"q": "¿Qué juego de cartas consiste en llegar a 21 puntos sin pasarse?", "o": ["Póker", "Blackjack", "Truco", "Solitario"], "a": 1},
    {"q": "¿Quién es el máximo goleador de la historia de los Mundiales?", "o": ["Miroslav Klose", "Ronaldo Nazário", "Pelé", "Messi"], "a": 0},
    {"q": "¿Cómo se llama el estadio del Real Madrid?", "o": ["Camp Nou", "Wanda Metropolitano", "Santiago Bernabéu", "Mestalla"], "a": 2},
    {"q": "¿En qué deporte se hacen 'strikes' y 'spares'?", "o": ["Tenis", "Bolos", "Cricket", "Dardos"], "a": 1},
    {"q": "¿Qué videojuego de lucha tiene personajes como Ryu y Ken?", "o": ["Mortal Kombat", "Tekken", "Street Fighter", "Smash Bros"], "a": 2},
    {"q": "¿Cuál es la distancia de una maratón completa?", "o": ["21 km", "42,195 km", "50 km", "10 km"], "a": 1},
    {"q": "¿En qué deporte se utiliza una batea y una pelota pequeña?", "o": ["Béisbol", "Softbol", "Cricket", "Todos los anteriores"], "a": 3},
    {"q": "¿Cómo se llama el balón ovalado usado en el deporte rey de Nueva Zelanda?", "o": ["Balón de Rugby", "Balón de Basket", "Balón de Soccer", "Pelota de Golf"], "a": 0},
    {"q": "¿Quién es el piloto con más títulos de Fórmula 1 (empatado)?", "o": ["Ayrton Senna", "Lewis Hamilton", "Sebastian Vettel", "Fernando Alonso"], "a": 1},
    {"q": "¿Qué pieza del ajedrez puede moverse en forma de 'L'?", "o": ["Torre", "Alfil", "Caballo", "Reina"], "a": 2},
    {"q": "¿Cómo se llama el protagonista del videojuego 'God of War'?", "o": ["Zeus", "Kratos", "Ares", "Atreus"], "a": 1},
    {"q": "¿En qué deporte se compite por la Copa Davis?", "o": ["Fútbol", "Rugby", "Tenis", "Vela"], "a": 2},
    {"q": "¿Cuántos anillos tiene la bandera olímpica?", "o": ["4", "5", "6", "7"], "a": 1},
    {"q": "¿Qué juego de mesa utiliza un tablero con 64 escaques?", "o": ["Damas", "Ajedrez", "Ambos", "Parchís"], "a": 2},
    {"q": "¿Cómo se llama el estadio del FC Barcelona?", "o": ["Santiago Bernabéu", "San Mamés", "Camp Nou", "Benito Villamarín"], "a": 2},
    {"q": "¿Qué deporte se asocia con el torneo de Wimbledon?", "o": ["Golf", "Polo", "Tenis", "Cricket"], "a": 2},
    {"q": "¿Quién ganó el Mundial de Fútbol de 2022?", "o": ["Francia", "Argentina", "Croacia", "Marruecos"], "a": 1},
    {"q": "¿Cómo se llama la mascota de SEGA?", "o": ["Mario", "Sonic", "Crash", "Spyro"], "a": 1},
    {"q": "¿En qué deporte se usa una red muy alta y raquetas ligeras para golpear un volante?", "o": ["Squash", "Bádminton", "Ping-pong", "Pádel"], "a": 1},
    {"q": "¿Qué color de ficha suele empezar en el ajedrez?", "o": ["Negras", "Rojas", "Blancas", "Azules"], "a": 2},
    {"q": "¿Qué país inventó el fútbol?", "o": ["Brasil", "Inglaterra", "Francia", "China"], "a": 1},
    {"q": "¿Cómo se llama el trofeo que se entrega al campeón de la NFL?", "o": ["Copa del Mundo", "Trofeo Vince Lombardi", "Anillo de Oro", "Stanley Cup"], "a": 1},
    {"q": "¿En qué videojuego aparece una 'Tormenta' que reduce el mapa?", "o": ["Call of Duty", "Fortnite", "Minecraft", "Apex Legends"], "a": 1},
    {"q": "¿Qué nadador ha ganado más medallas olímpicas de oro?", "o": ["Ian Thorpe", "Michael Phelps", "Mark Spitz", "Ryan Lochte"], "a": 1},
    {"q": "¿Cuál es el deporte nacional de Japón?", "o": ["Kárate", "Judo", "Sumo", "Kendo"], "a": 2},
    {"q": "¿Cómo se llama el movimiento de meter la pelota en el aro sin que toque el borde?", "o": ["Mate", "Limpio (Swish)", "Triple", "Bandeja"], "a": 1},
    {"q": "¿Cuántos jugadores hay en un equipo de balonmano?", "o": ["5", "6", "7", "11"], "a": 2},
    {"q": "¿Qué juego de mesa se basa en comprar y vender propiedades?", "o": ["Scrabble", "Monopoly", "Trivial", "Pictionary"], "a": 1},
    {"q": "¿Quién es conocido como 'The Great One' en el hockey sobre hielo?", "o": ["Wayne Gretzky", "Mario Lemieux", "Sidney Crosby", "Bobby Orr"], "a": 0},
    {"q": "¿Qué ciudad alberga el torneo de tenis Roland Garros?", "o": ["Madrid", "Londres", "París", "Nueva York"], "a": 2},
    {"q": "¿Cómo se llama el dragón de la serie 'Spyro'?", "o": ["Spyro", "Cynder", "Sparx", "Ignitus"], "a": 0},
    {"q": "¿En qué deporte se utiliza una espada, un florete o un sable?", "o": ["Esgrima", "Kendo", "Boxeo", "Lucha libre"], "a": 0},
    {"q": "¿Cuál es el máximo de jugadores en una partida estándar de 'Among Us'?", "o": ["5", "10", "15", "20"], "a": 2},
    {"q": "¿Qué gimnasta sorprendió al mundo con un 10 perfecto en 1976?", "o": ["Simone Biles", "Nadia Comăneci", "Svetlana Khorkina", "Elena Mukhina"], "a": 1},
    {"q": "¿En qué país se encuentra el circuito de Monza de Fórmula 1?", "o": ["España", "Francia", "Italia", "Mónaco"], "a": 2},
    {"q": "¿Cómo se llaman las fichas del juego Mahjong?", "o": ["Cartas", "Tejas", "Dados", "Piedras"], "a": 1},
    {"q": "¿Qué deporte se juega en el 'Super Bowl'?", "o": ["Béisbol", "Fútbol Americano", "Baloncesto", "Hockey"], "a": 1},
    {"q": "¿Cuál es el nombre del videojuego donde debes salvar a la Princesa Peach?", "o": ["Zelda", "Donkey Kong", "Super Mario Bros", "Metroid"], "a": 2},
    {"q": "¿Cuántos dados se usan normalmente en el juego de mesa 'Generala'?", "o": ["3", "4", "5", "6"], "a": 2},
    {"q": "¿Quién es el máximo ganador de la Champions League (como club)?", "o": ["AC Milan", "Bayern Múnich", "Real Madrid", "Liverpool"], "a": 2},
    {"q": "¿Qué deporte utiliza un arco y flechas?", "o": ["Esgrima", "Tiro con arco", "Dardos", "Jabalina"], "a": 1},
    {"q": "¿Cómo se llama el primer videojuego de la historia (comercial)?", "o": ["Pong", "Pac-Man", "Space Invaders", "Computer Space"], "a": 3},
    {"q": "¿En qué posición juega un 'Quarterback'?", "o": ["Fútbol", "Fútbol Americano", "Rugby", "Béisbol"], "a": 1},
    {"q": "¿Qué pieza de ajedrez no puede retroceder?", "o": ["Alfil", "Peón", "Caballo", "Torre"], "a": 1},
    {"q": "¿Cómo se llama el juego de tirar una bola para derribar pinos?", "o": ["Billar", "Bowling (Bolos)", "Golf", "Petanca"], "a": 1},
    {"q": "¿En qué país nació el jugador de fútbol Lionel Messi?", "o": ["España", "Argentina", "Uruguay", "Brasil"], "a": 1},
    {"q": "¿Qué deporte se practica sobre una tabla en la nieve?", "o": ["Esquí", "Snowboard", "Surf", "Skate"], "a": 1},
    {"q": "¿Cuántas cuerdas tiene una guitarra estándar?", "o": ["4", "5", "6", "7"], "a": 2},
    {"q": "¿Cuál es el nombre del juego donde debes formar palabras con letras?", "o": ["Bingo", "Scrabble", "Sudoku", "Crucigrama"], "a": 1},
    {"q": "¿Qué equipo de la NBA tiene más títulos (empatado en 2024)?", "o": ["Lakers", "Celtics", "Bulls", "Warriors"], "a": 1}
]
};

let user = "";
let score = 0;
let count = 0;
const TOTAL_PREGUNTAS = 12;
const historial = { "Geografía": [], "Entretenimiento": [], "Historia": [], "Arte": [], "Ciencia": [], "Deportes": [] };
const stats = { // intentos y aciertos por tema
    "Geografía": { attempts: 0, correct: 0 },
    "Entretenimiento": { attempts: 0, correct: 0 },
    "Historia": { attempts: 0, correct: 0 },
    "Arte": { attempts: 0, correct: 0 },
    "Ciencia": { attempts: 0, correct: 0 },
    "Deportes": { attempts: 0, correct: 0 }
};

// Inicializamos canvas/ctx tras cargarse el DOM para evitar null refs
let canvas = null;
let ctx = null;
let spinBtn = null;
const categories = Object.keys(bancoPreguntas);
const colors = ["#3498db", "#9b59b6", "#e67e22", "#f1c40f", "#2ecc71", "#e74c3c"];
let startAngle = 0;
const arc = Math.PI / (categories.length / 2);

// Evitar repeticiones globales: guardamos "categoria:index" seleccionado
const globalUsed = new Set();

// Generador automático de preguntas reales por categoría (intenta evitar duplicados por texto)
function generarPreguntasRealesPorCategoria(n = 20) {
    const exists = (cat, text) => bancoPreguntas[cat].some(p => p.q === text);

    // Helper: shuffle
    function shuffleArray(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } }

    // Generar y añadir sin duplicados
    // Mantener un contador por categoría para numerar placeholders de forma única
    const generatedCounters = {};
    categories.forEach(cat => { generatedCounters[cat] = bancoPreguntas[cat].length; });

    categories.forEach(cat => {
        // gen puede no existir (se usó antes para ayudas de generación). Protegemos la llamada.
        let generated = [];
        try {
            if (typeof gen !== 'undefined' && gen && typeof gen[cat] === 'function') {
                const maybe = gen[cat]();
                if (Array.isArray(maybe)) generated = maybe;
            }
        } catch (e) {
            console.warn('Error generando preguntas para', cat, e);
            generated = [];
        }
        let added = 0;
        for (const q of generated) {
            if (added >= n) break;
            if (!exists(cat, q.q)) {
                bancoPreguntas[cat].push(q);
                added++;
            }
        }
        // Si no se generaron suficientes (por falta de datos de apoyo), completar con variantes plausibles
        // En vez de placeholders genéricos, clonamos/mezclamos preguntas reales de la misma categoría
        // para crear variantes con opciones válidas y respuesta correcta ajustada.
        const pool = bancoPreguntas[cat].slice(0); // copia actual del banco
        // Si no hay suficientes preguntas reales para clonar, todavía generamos textos únicos pero más descriptivos
        for (let i = 0; i < (n - added); i++) {
            generatedCounters[cat] += 1;
            const num = generatedCounters[cat];
            // Intentar clonar una pregunta existente y shufflear opciones
            if (pool.length > 0) {
                // Tomar una base al azar
                const base = pool[Math.floor(Math.random() * pool.length)];
                // Clonar pregunta
                const newQ = { q: `${base.q} (variante ${num})`, o: base.o.slice(0), a: base.a };
                // Mezclar opciones y ajustar índice de la respuesta correcta
                const opts = newQ.o.map((v, idx) => ({ v, idx }));
                shuffleArray(opts);
                newQ.o = opts.map(x => x.v);
                const newIndex = opts.findIndex(x => x.idx === base.a);
                newQ.a = newIndex >= 0 ? newIndex : 0;

                // Asegurar texto único
                let text = newQ.q;
                let safeNum = num;
                while (exists(cat, text)) {
                    safeNum++;
                    text = `${base.q} (variante ${safeNum})`;
                }
                generatedCounters[cat] = safeNum;
                newQ.q = text;
                bancoPreguntas[cat].push(newQ);
            } else {
                // Caso extremo: no hay preguntas en la categoría (muy improbable). Crear placeholder más descriptivo.
                const text = `Pregunta generada ${num} (${cat}) - (detalle pendiente)`;
                bancoPreguntas[cat].push({ q: text, o: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"], a: 0 });
            }
        }
    });
}

// Generar 20 preguntas reales por categoría y añadirlas al banco (si ya existen, no se duplican)
generarPreguntasRealesPorCategoria(20);

// ----------------- Firebase (modular SDK) -----------------
// Importar la SDK modular desde CDN (versión 12.x)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, signOut as firebaseSignOut, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, orderBy, limit, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

// Esta es tu firebaseConfig (proporcionada). Si la quieres cambiar, reemplaza
// estos valores por los de tu proyecto en Firebase Console.
const firebaseConfig = {
    apiKey: "AIzaSyA08fD15OeN8AD7Pjm9syYQQM97i89nu6s",
    authDomain: "trivial-99d56.firebaseapp.com",
    projectId: "trivial-99d56",
    storageBucket: "trivial-99d56.firebasestorage.app",
    messagingSenderId: "544275627332",
    appId: "1:544275627332:web:5ddf76b59390c2d9e36b11",
    measurementId: "G-7D7FWJFFQK"
};

let firebaseApp, auth, db;
try {
    firebaseApp = initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
    db = getFirestore(firebaseApp);
} catch (e) {
    console.warn('Firebase no inicializado - añade tu firebaseConfig si quieres usar auth/Firestore', e);
}


async function signInWithEmail() {
    if (!auth) return alert('Firebase no está configurado.');
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;
    if (!email || !password) return alert('Introduce email y contraseña.');
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        alert('Error en inicio de sesión: ' + err.message);
    }
}

function signOut() {
    if (!auth) return;
    firebaseSignOut(auth).catch(e => console.warn('Error signOut', e));
}

// Observador de estado de autenticación
if (auth) {
    onAuthStateChanged(auth, u => {
        const status = document.getElementById('auth-status');
        if (u) {
            user = u.displayName || u.email || 'Usuario';
            if (status) status.innerText = `Autenticado: ${user}`;
            const ud = document.getElementById('user-display'); if (ud) ud.innerText = user;
        } else {
            user = '';
            if (status) status.innerText = 'No autenticado';
            const ud = document.getElementById('user-display'); if (ud) ud.innerText = '';
        }
    });
}

// Vincular botones
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.onclick = empezarJuego;
    // Inicializar canvas y botón de giro
    canvas = document.getElementById('canvas');
    if (canvas) {
        try { ctx = canvas.getContext('2d'); } catch (e) { ctx = null; }
    }
    spinBtn = document.getElementById('spin-btn');
    if (spinBtn) spinBtn.onclick = spinOnce;
    // Dibujar ruleta inicial (si el canvas está disponible)
    drawRoulette();
});
// -----------------------------------------------------------

async function empezarJuego() {
    if (!auth) return alert('Firebase no está configurado.');
    const email = document.getElementById('email-input').value.trim();
    const password = document.getElementById('password-input').value;
    if (!email || !password) return alert('Introduce email y contraseña para jugar.');

    if (!auth.currentUser) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            return alert('Error en inicio de sesión: ' + err.message);
        }
    }

    const userDisplay = auth.currentUser?.displayName || auth.currentUser?.email || 'Usuario';
    user = userDisplay;
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('user-display').innerText = user;
    drawRoulette();
}

function drawRoulette() {
    if (!ctx || !canvas) return; // si no hay canvas no dibujamos
    categories.forEach((name, i) => {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];
        ctx.beginPath();
        ctx.arc(200, 200, 200, angle, angle + arc, false);
        ctx.lineTo(200, 200);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = "white";
        ctx.translate(200 + Math.cos(angle + arc / 2) * 140, 200 + Math.sin(angle + arc / 2) * 140);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.font = 'bold 14px Arial';
        ctx.fillText(name, -ctx.measureText(name).width / 2, 0);
        ctx.restore();
    });
}
function spinOnce() {
    if (count >= TOTAL_PREGUNTAS) return;
    if (spinBtn) spinBtn.disabled = true;
    const quizArea = document.getElementById("quiz-area");
    if (quizArea) quizArea.classList.add("hidden");

    let spinAngleStart = Math.random() * 10 + 10;
    let spinTimeTotal = Math.random() * 2000 + 3000;
    let spinTime = 0;

    function rotate() {
        spinTime += 30;
        if (spinTime >= spinTimeTotal) {
            const degrees = startAngle * 180 / Math.PI + 90;
            const index = Math.floor((360 - degrees % 360) / (arc * 180 / Math.PI));
            setTimeout(() => mostrarPregunta(categories[index]), 500);
            return;
        }
        startAngle += (spinAngleStart * Math.PI / 180);
        drawRoulette();
        setTimeout(rotate, 30);
    }
    rotate();
}

function mostrarPregunta(tema) {
    // Seleccionar una pregunta que no haya salido a nivel global
    let preguntasTema = bancoPreguntas[tema];
    const total = preguntasTema.length;
    let chosenIndex = -1;

    // Intentos aleatorios
    for (let attempt = 0; attempt < 100; attempt++) {
        const idx = Math.floor(Math.random() * total);
        const key = `${tema}:${idx}`;
        if (!globalUsed.has(key)) { chosenIndex = idx; break; }
    }

    // Si no encontrado, buscar secuencial
    if (chosenIndex === -1) {
        for (let i = 0; i < total; i++) {
            const key = `${tema}:${i}`;
            if (!globalUsed.has(key)) { chosenIndex = i; break; }
        }
    }

    // Si la categoría está agotada, buscar en otras categorías
    if (chosenIndex === -1) {
        let found = false;
        for (const another of categories) {
            const tTotal = bancoPreguntas[another].length;
            for (let i = 0; i < tTotal; i++) {
                const key = `${another}:${i}`;
                if (!globalUsed.has(key)) {
                    tema = another;
                    chosenIndex = i;
                    preguntasTema = bancoPreguntas[tema];
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }

    if (chosenIndex === -1) {
        alert('No quedan preguntas disponibles.');
        document.getElementById("spin-btn").disabled = false;
        return;
    }

    const item = preguntasTema[chosenIndex];
    historial[tema].push(chosenIndex);
    globalUsed.add(`${tema}:${chosenIndex}`);

    document.getElementById("quiz-area").classList.remove("hidden");
    document.getElementById("categoria-display").innerText = tema;
    document.getElementById("categoria-display").style.color = colors[categories.indexOf(tema)];
    document.getElementById("pregunta-text").innerText = item.q;
    
    const feedbackEl = document.getElementById('feedback');
    if (feedbackEl) { feedbackEl.innerText = ''; feedbackEl.className = 'feedback'; }

    const container = document.getElementById("opciones-container");
    container.innerHTML = "";

    // aumentar attempts del tema cuando se muestre la pregunta (contará como intento una vez que se responda)
    item.o.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.disabled = false;
        btn.onclick = () => {
            // bloquear todas las opciones inmediatamente
            Array.from(container.children).forEach(b => b.disabled = true);
            stats[tema].attempts++;
            count++;

            // resaltar correcta e incorrecta
            if (i === item.a) {
                score++;
                stats[tema].correct++;
                btn.style.borderColor = "#2ecc71";
                btn.style.color = "#2ecc71";
                if (feedbackEl) { feedbackEl.className = 'feedback success'; feedbackEl.innerText = '¡Correcto!'; }
            } else {
                btn.style.borderColor = "#e74c3c";
                btn.style.color = "#e74c3c";
                // marcar la correcta
                const correctBtn = Array.from(container.children)[item.a];
                if (correctBtn) {
                    correctBtn.style.borderColor = "#2ecc71";
                    correctBtn.style.color = "#2ecc71";
                }
                if (feedbackEl) { feedbackEl.className = 'feedback error'; feedbackEl.innerText = 'Incorrecto — respuesta correcta: ' + item.o[item.a]; }
            }
            
            document.getElementById("current-count").innerText = count;
            document.getElementById("score-display").innerText = score;

            setTimeout(() => {
                if (count === TOTAL_PREGUNTAS) {
                    mostrarResultados();
                } else {
                    document.getElementById("quiz-area").classList.add("hidden");
                    document.getElementById("spin-btn").disabled = false;
                }
            }, 900);
        };
        container.appendChild(btn);
    });
}

async function mostrarResultados() {
    // ocultar zona juego
    document.getElementById("quiz-area").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    document.getElementById("spin-btn").disabled = true;

    const finalSummary = document.getElementById("final-summary");
    const perTopic = document.getElementById("per-topic-stats");
    perTopic.innerHTML = "";

    const percentTotal = Math.round((score / TOTAL_PREGUNTAS) * 100);
    finalSummary.innerText = `${user}, obtuviste ${score} de ${TOTAL_PREGUNTAS} respuestas correctas. Porcentaje total: ${percentTotal}%`;

    // Mostrar porcentaje por tema
    Object.keys(stats).forEach(t => {
        const s = stats[t];
        const attempts = s.attempts;
        const correct = s.correct;
        const pct = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);

        const div = document.createElement('div');
        div.className = 'topic-stat';
        div.innerHTML = `<strong>${t}</strong><div>${correct} / ${attempts} (${pct}%)</div>`;

        const bar = document.createElement('div');
        bar.className = 'topic-bar';
        const inner = document.createElement('div');
        inner.style.width = pct + '%';
        bar.appendChild(inner);
        div.appendChild(bar);

        perTopic.appendChild(div);
    });

    // Intentar guardar en Firestore si está configurado; si no es posible, guardar en localStorage
    if (db) {
        const uid = (auth && auth.currentUser) ? auth.currentUser.uid : (localStorage.getItem('trivial_local_uid') || null);
        // si no hay uid, crear un local uid para identificar dispositivos
        let localUid = localStorage.getItem('trivial_local_uid');
            if (!uid && !localUid) {
                localUid = 'local-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
                localStorage.setItem('trivial_local_uid', localUid);
            }

            const payload = {
                userDisplay: user || 'Anónimo',
                uid: uid || localUid,
                score,
                total: TOTAL_PREGUNTAS,
                percent: percentTotal,
                byTopic: stats,
                timestamp: serverTimestamp()
            };

            // Intentar guardar en Firestore (modular)
            try {
                await addDoc(collection(db, 'results'), payload);
                console.log('Resultados guardados en Firestore');
            } catch (e) {
                console.warn('Error guardando en Firestore, salvando localmente:', e);
                // fallback local
                const local = JSON.parse(localStorage.getItem('trivial_results') || '[]');
                local.unshift({ ...payload, timestamp: new Date().toISOString() });
                localStorage.setItem('trivial_results', JSON.stringify(local.slice(0, 200)));
                console.log('Resultados guardados en localStorage');
            }
        } catch (e) {
            console.warn('Error en proceso de guardado:', e);
        }
    } else {
        // Guardar en localStorage si no hay db
        const local = JSON.parse(localStorage.getItem('trivial_results') || '[]');
        local.unshift({ userDisplay: user || 'Anónimo', score, total: TOTAL_PREGUNTAS, percent: percentTotal, byTopic: stats, timestamp: new Date().toISOString() });
        localStorage.setItem('trivial_results', JSON.stringify(local.slice(0, 200)));
        console.log('Resultados guardados en localStorage (no hay Firestore configurado)');
    }
}

// Mostrar historial de partidas guardadas en la colección 'results'
function mostrarHistorial() {
        if (!auth || !auth.currentUser) return alert('Necesitas iniciar sesión para ver el historial.');
        const uid = auth.currentUser.uid;
        document.getElementById('setup-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        document.getElementById('history-screen').classList.remove('hidden');
        const list = document.getElementById('history-list');
        list.innerHTML = 'Cargando...';

        // Consultar resultados por uid
            (async () => {
                try {
                    const q = query(collection(db, 'results'), where('uid', '==', uid), orderBy('timestamp', 'desc'), limit(50));
                    const snap = await getDocs(q);
                    if (snap.empty) { list.innerHTML = '<p>No hay partidas guardadas.</p>'; return; }
                    const items = [];
                    snap.forEach(doc => {
                        const d = doc.data();
                        const dateObj = d.timestamp && d.timestamp.toDate ? d.timestamp.toDate() : (d.timestamp ? new Date(d.timestamp) : null);
                        const date = dateObj ? dateObj.toLocaleString() : 'Sin fecha';

                            // Construir sección por tema si existe byTopic
                            let topicsHtml = '';
                            if (d.byTopic) {
                                    const keys = Object.keys(d.byTopic);
                                    const topicItems = keys.map(k => {
                                            const t = d.byTopic[k];
                                            const attempts = t.attempts || 0;
                                            const correct = t.correct || 0;
                                            const pct = attempts === 0 ? 0 : Math.round((correct / attempts) * 100);
                                            return `
                                                    <div class="history-topic">
                                                            <div class="label">${k}</div>
                                                            <div class="small-bar"><div style="width:${pct}%"></div></div>
                                                            <div class="pct">${pct}%</div>
                                                    </div>`;
                                    });
                                    topicsHtml = `<div class="history-topics">${topicItems.join('')}</div>`;
                            }

                            items.push(`<div class="history-item">
                                    <div class="history-header"><div class="history-date">${date}</div><div class="history-score">${d.score}/${d.total} (${d.percent}%)</div></div>
                                    ${topicsHtml}
                            </div>`);
                    });
                    list.innerHTML = items.join('');
                } catch (e) {
                    console.warn('Error cargando historial', e);
                    list.innerHTML = '<p>Error cargando historial.</p>';
                }
            })();
}

function cerrarHistorial() {
        document.getElementById('history-screen').classList.add('hidden');
        document.getElementById('setup-screen').classList.remove('hidden');
}

function reiniciarJuego() {
    // reset
    score = 0;
    count = 0;
    Object.keys(historial).forEach(k => historial[k] = []);
    Object.keys(stats).forEach(k => { stats[k].attempts = 0; stats[k].correct = 0; });
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    if (emailInput) emailInput.value = '';
    if (passwordInput) passwordInput.value = '';
    document.getElementById('current-count').innerText = '0';
    document.getElementById('score-display').innerText = '0';
    document.getElementById('spin-btn').disabled = false;
}

// Mostrar ranking: mejores porcentajes por usuario (consulta Firestore)
function mostrarRanking() {
    const rankList = document.getElementById('ranking-list');
    if (!rankList) return alert('No hay elemento de ranking en la página.');
    rankList.innerHTML = 'Cargando...';
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('ranking-screen').classList.remove('hidden');

    if (!db) {
        rankList.innerHTML = '<p>Firestore no está configurado. No se puede mostrar el ranking.</p>';
        return;
    }

    // Consultar los últimos 500 resultados y agrupar por uid (procesado en cliente)
    (async () => {
        try {
            const q = query(collection(db, 'results'), orderBy('percent', 'desc'), limit(500));
            const snap = await getDocs(q);
            if (snap.empty) { rankList.innerHTML = '<p>No hay partidas guardadas.</p>'; return; }
            // Map uid -> best record
            const bestByUid = new Map();
            snap.forEach(doc => {
                const d = doc.data();
                if (!d.uid) return;
                const existing = bestByUid.get(d.uid);
                if (!existing || (d.percent || 0) > (existing.percent || 0)) {
                    bestByUid.set(d.uid, { name: d.userDisplay || 'Anónimo', percent: d.percent || 0, score: d.score || 0, total: d.total || TOTAL_PREGUNTAS, date: d.timestamp && d.timestamp.toDate ? d.timestamp.toDate() : (d.timestamp ? new Date(d.timestamp) : null) });
                }
            });

            // Ordenar por percent desc
            const arr = Array.from(bestByUid.entries()).map(([uid, info]) => ({ uid, ...info }));
            arr.sort((a,b) => b.percent - a.percent);

            // Construir HTML
            if (arr.length === 0) {
                rankList.innerHTML = '<p>No hay datos de ranking.</p>';
                return;
            }
            const items = arr.slice(0, 50).map((r, idx) => {
                const dateStr = r.date ? r.date.toLocaleString() : '—';
                return `<div class="ranking-item"><div class="rank-pos">#${idx+1}</div><div class="rank-name">${escapeHtml(r.name)}<div style="font-size:0.9rem;color:#bcd">${dateStr}</div></div><div class="rank-score">${r.score}/${r.total} (${r.percent}%)</div></div>`;
            });
            rankList.innerHTML = items.join('');
        } catch (e) {
            console.warn('Error cargando ranking', e);
            rankList.innerHTML = '<p>Error cargando ranking.</p>';
        }
    })();
}

function cerrarRanking() {
    document.getElementById('ranking-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
}

// pequeña función de escape para seguridad XSS mínima
function escapeHtml(s) {
    if (!s) return '';
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}