/* =====================================================
   COMIC STORE - JavaScript Principal
   Maneja: Login (simulado + Firebase), Carrito,
           Catálogo, Compra, Navbar, Toasts
   ===================================================== */

'use strict';

/* ─────────────────────────────────────────────────────
   1. DATOS DEL CATÁLOGO
   Imágenes de Open Library / cdnjs para no depender
   de APIs con clave.
───────────────────────────────────────────────────── */
const CATALOGO = {
  marvel: [
    {
      id: 'm1',
      titulo: 'The Amazing Spider-Man #1',
      precio: 14.99,
      marca: 'marvel',
      autor: 'Stan Lee · Steve Ditko',
      año: 1963,
      imagen: 'https://i.pinimg.com/736x/84/fd/a5/84fda569456d503a47b46e641b8928c7.jpg',
      descripcion: 'Tras la muerte del tío Ben, Peter Parker intenta unirse a Los Cuatro Fantásticos para ganar dinero, pero se retira al descubrir que no pagan sueldo. Mientras tanto, J. Jonah Jameson inicia su campaña de desprestigio contra él, y Spider-Man se enfrenta a su primer supervillano, el Camaleón, quien intenta incriminarlo en un robo de secretos de estado.'
    },
    {
      id: 'm2',
      titulo: 'Iron Man: Extremis',
      precio: 18.50,
      marca: 'marvel',
      autor: 'Warren Ellis · Adi Granov',
      año: 2005,
      imagen: 'https://i.pinimg.com/736x/e1/37/f4/e137f46e0a409720388081204a3e11a3.jpg',
      descripcion: 'TExtremis es considerado uno de los arcos más importantes de Iron Man. Warren Ellis reimagina a Tony Stark para la era moderna: un hombre que debe fusionar su cuerpo con la tecnología para sobrevivir. Cuando un supersoldado mejorado con el virus Extremis ataca y casi mata a Stark, este toma una decisión radical: inyectarse el propio virus para rediseñarse desde adentro. El resultado es un Iron Man más poderoso, más rápido y más integrado con su armadura que nunca, pero a un costo humano profundo.'
    },
    {
      id: 'm3',
      titulo: 'X-Men: Days of Future Past',
      precio: 16.99,
      marca: 'marvel',
      autor: 'Chris Claremont · John Byrne',
      año: 1981,
      imagen: 'https://i.pinimg.com/1200x/e4/7f/94/e47f9485613e0f77e7917e250a21a9ee.jpg',
      descripcion: 'En un futuro distópico donde los Centinelas han aniquilado o encarcelado a casi todos los mutantes, una Kitty Pryde adulta transfiere su mente a su yo del pasado (1980). Su misión es guiar a los X-Men para detener a la Hermandad de Mutantes Diabólicos de Mystique, quienes planean asesinar al senador Robert Kelly. Al evitar este magnicidio, logran prevenir la histeria antimutante que desencadenó la creación del programa de Centinelas, alterando el curso de la historia.'
    },
    {
      id: 'm4',
      titulo: 'Avengers: Infinity Gauntlet',
      precio: 22.00,
      marca: 'marvel',
      autor: 'Jim Starlin · George Pérez',
      año: 1991,
      imagen: 'https://i.pinimg.com/736x/e1/70/7b/e1707b5e49dcf5dcc0c8f42b797be487.jpg',
      descripcion: 'En este arco, Thanos obtiene las seis Gemas del Infinito, convirtiéndose en un ser omnipotente con el objetivo de impresionar a la personificación de la Muerte. Con un solo chasquido, elimina a la mitad de los seres vivos del universo. Los héroes supervivientes, liderados por Adam Warlock y el Capitán América, lanzan un ataque desesperado contra él, pero son derrotados fácilmente. Finalmente, la arrogancia de Thanos le hace perder el Guantelete, el cual es reclamado brevemente por Nebula antes de que Warlock restablezca el orden y deshaga la aniquilación masiva.'
    },
    {
      id: 'm5',
      titulo: 'Captain America: Civil War',
      precio: 19.99,
      marca: 'marvel',
      autor: 'Mark Millar · Steve McNiven',
      año: 2006,
      imagen: 'https://i.pinimg.com/1200x/52/53/ee/5253ee8cd2aff68790f61f92b2a8cb70.jpg',
      descripcion: 'Tras un desastroso incidente con víctimas civiles, el gobierno promulga el Acta de Registro de Superhumanos, obligando a los héroes a revelar su identidad y trabajar para el Estado. Esto divide a los Vengadores en dos bandos: Iron Man, quien apoya la ley por seguridad, y el Capitán América, quien la rechaza por considerarla una violación a la libertad. La tensión escala hasta una guerra abierta donde los héroes se enfrentan entre sí, culminando con la rendición de Steve Rogers para detener el caos, aunque su decisión deja al equipo fracturado y en la clandestinidad.'
    },
    {
      id: 'm6',
      titulo: 'Black Panther: A Nation Under Our Feet',
      precio: 17.50,
      marca: 'marvel',
      autor: 'Ta-Nehisi Coates · Brian Stelfreeze',
      año: 2016,
      imagen: 'https://i.pinimg.com/1200x/66/2d/c6/662dc6c48ed7ab6a42148dc0b2cc137f.jpg',
      descripcion: 'Challa regresa a una Wakanda fracturada por el caos y el descontento social tras las invasiones de Namor y Thanos. La nación se enfrenta a una violenta insurrección liderada por El Pueblo, un grupo revolucionario que cuestiona la monarquía y busca la democracia, apoyado por las poderosas Dora Milaje que han desertado. Black Panther se ve obligado a redefinir su rol, entendiendo que ya no puede gobernar solo por derecho divino, lo que culmina en una profunda transformación política de Wakanda hacia un sistema constitucional más justo.'
    },
    {
      id: 'm7',
      titulo: ' Daredevi born again',
      precio: 22.50,
      marca: 'marvel',
      autor: 'Frank Miller · David Mazzucchelli',
      año: 1986,
      imagen: 'https://i.pinimg.com/736x/64/4e/11/644e11409d0d5c789cf81bad825e2582.jpg',
      descripcion: 'En esta icónica saga, Kingpin descubre la identidad secreta de Daredevil después de que una Karen Page desesperada y adicta la vende por una dosis de droga. Wilson Fisk utiliza esta información para destruir sistemáticamente la vida de Matt Murdock: le quita su licencia de abogado, congela sus cuentas bancarias y hace explotar su hogar, llevándolo a la indigencia y a un colapso mental. Sin embargo, Matt logra sobrevivir y encuentra refugio en una iglesia con su madre biológica, la hermana Maggie, logrando una "resurrección" espiritual y física para enfrentar a Fisk y al super-soldado Nuke en una batalla final que redefine su propósito como héroe.'
      
    },
    {
      id: 'm8',
      titulo: ' deadpool kills the marvel universe', 
      precio: 22.50,
      marca: 'marvel',
      autor: 'Cullen Bunn · Dalibor Talajic',
      año: 2012,
      imagen: 'https://m.media-amazon.com/images/I/91nTst7WydL._AC_UF1000,1000_QL80_.jpg',
      descripcion: 'En esta historia de realidad alternativa, la mente de Deadpool se quiebra por completo tras un fallido intento de lavado de cerebro, lo que lo lleva a percibir la verdadera naturaleza de su existencia: todos son solo personajes de ficción controlados por guionistas. Convencido de que la única forma de "liberarlos" de su sufrimiento infinito es la muerte, inicia una masacre sistemática y brutal contra cada héroe y villano de Marvel, desde los Cuatro Fantásticos hasta los Vengadores. Utilizando métodos ingeniosos y crueles para anular sus poderes, Wade Wilson termina su cruzada cruzando la "cuarta pared" para ir tras los mismos escritores que crean sus historias.'
    },
    {
      id: 'm9',
      titulo: 'Welcome Back, Frank ',
      precio: 99.50,
      marca: 'marvel',
      autor: 'Garth Ennis · Steve Dillon',
      año: 2000,
      imagen: 'https://i.pinimg.com/736x/d3/d2/79/d3d279d257863a8bab477f363d87e873.jpg',
      descripcion: 'En esta cruda historia de The Punisher, Frank Castle regresa a Nueva York tras años de ausencia para iniciar una guerra total contra el clan mafioso de Ma Gnucci. Con métodos brutales y calculados, Frank desmantela la organización criminal mientras lidia con un grupo de vigilantes imitadores que intentan seguir sus pasos y un detective torpe encargado de capturarlo. La trama culmina en un violento asedio a la mansión de los Gnucci, donde Castle reafirma su implacable código de justicia y recupera su lugar como el terror definitivo del inframundo neoyorquino.'
    },
    {
      id: 'm10',
      titulo: 'Ultimate Scarlet Witch ',
      precio: 200.50,
      marca: 'marvel',
      autor: 'Chris Cantwell · Emilio Laiso',
      año: 2025,
      imagen: 'https://i.pinimg.com/736x/40/fe/fe/40fefe659136730a9be225263a58d2c7.jpg',
      descripcion: 'En el universo Ultimate Marvel, Wanda Maximoff es una mutante con el poder de alterar las probabilidades que, junto a su hermano Pietro (Quicksilver), lidera inicialmente la Hermandad de Mutantes tras la supuesta muerte de Magneto. A diferencia de su versión clásica, su relación con Pietro es presentada como incestuosa, lo que genera una dinámica oscura y tensa dentro de los Ultimates (los Vengadores de esta realidad). Su historia culmina trágicamente cuando es asesinada a tiros por Ultron, un evento que desata la furia de su hermano y de Magneto, provocando los eventos catastróficos de Ultimatum.'
    },
    {
      id: 'm11',
      titulo: 'Loki: Agente de Asgard',
      precio: 19.99,
      marca: 'marvel',
      autor: 'Al Ewing · Lee Garbett',
      año: 2014,
      imagen: 'https://i.pinimg.com/736x/22/80/d2/2280d2aa56468c9451c822c98b5959f6.jpg',
      descripcion: 'En esta serie, un Loki rejuvenecido y reformado intenta borrar su pasado como villano trabajando para las Madres de Todos de Asgard. A cambio de completar misiones de espionaje y sigilo, cada acto heroico elimina un pecado de su historia oficial. Sin embargo, la trama se complica cuando debe enfrentarse a Rey Loki, una versión futura y malvada de sí mismo que ha regresado para asegurar que su destino de oscuridad se cumpla. Al final, Loki comprende que no puede simplemente borrar su pasado, sino que debe convertirse en el "Dios de las Historias" para definir su propia identidad más allá de las etiquetas de héroe o villano.'
    },
    {
      id: 'm12',
      titulo: 'Thor: Edades del Trueno',
      precio: 19.99,
      marca: 'marvel',
      autor: 'Matt Fraction · Patrick Zircher',
      año: 2008,
      imagen: 'https://i.pinimg.com/736x/6f/1a/f4/6f1af476ff93b66db09dfa2f079cdae0.jpg',
      descripcion: 'En esta antología de relatos épicos, se exploran los orígenes cíclicos de Thor y los dioses de Asgard mucho antes de la era moderna. La historia presenta a un Thor más salvaje, arrogante y brutal, quien debe enfrentar amenazas primordiales como los Gigantes de Hielo y la gran serpiente Jormungand en batallas que definen el destino del reino. A través de varios relatos, se revela la naturaleza repetitiva del Ragnarok, mostrando cómo Odín manipula el destino para que sus guerreros mueran y renazcan constantemente, manteniendo un ciclo de sangre y gloria que forja la leyenda del Dios del Trueno como el protector definitivo de la humanidad y los dioses.'
    },
    {
      id: 'm13',
      titulo: 'Venom: Protector Letal (Lethal Protector)',
      precio: 19.99,
      marca: 'marvel',
      autor: 'David Michelinie · Mark Bagley',
      año: 1993,
      imagen: 'https://i.pinimg.com/736x/18/37/71/183771e32fd54232cf196e4b7a78eabf.jpg',
      descripcion: 'En esta historia, Eddie Brock se traslada a San Francisco tras pactar una tregua con Spider-Man, con la intención de dejar atrás su pasado criminal. Allí, Venom se convierte en el protector de una comunidad de personas sin hogar que vive en una ciudad subterránea oculta. Sin embargo, su paz se interrumpe cuando la Fundación Vida lo captura para extraer muestras de su simbionte, creando a cinco nuevos descendientes asesinos: Scream, Phage, Riot, Lasher y Agony. Venom debe unir fuerzas temporalmente con el Trepamuros para derrotar a su nueva "familia" y detener los planes de la corporación, consolidando su rol como un antihéroe brutal pero con principios.'
    },
    {
      id: 'm14',
      titulo: 'Los 4 Fantásticos de Stan Lee y Jack Kirby',
      precio: 19.99,
      marca: 'marvel',
      autor: 'Stan Lee · Jack Kirby',
      año: 1961,
      imagen: 'https://i.pinimg.com/736x/96/00/76/960076477a312aa94b1e7246cc100591.jpg',
      descripcion: 'Esta etapa, que abarca los primeros 102 números de la serie, es considerada el "Big Bang" del Universo Marvel moderno. En ella, Stan Lee y Jack Kirby rompieron el molde de los superhéroes perfectos al presentar a una familia disfuncional que obtenía sus poderes tras una exposición accidental a rayos cósmicos en el espacio. Reed Richards, Sue Storm, Johnny Storm y Ben Grimm no solo luchaban contra amenazas cósmicas, sino también con sus propios egos, inseguridades y problemas económicos, todo mientras vivían en el Edificio Baxter de Nueva York.'
    },
    {
      id: 'm15',
      titulo: 'Black Widow: Deadly Origin',
      precio: 19.99,
      marca: 'marvel',
      autor: 'Paul Cornell · Tom Raney',
      año: 2009,
      imagen: 'https://i.pinimg.com/736x/3a/e8/40/3ae8405b776c0f5343e0d404009303f4.jpg',
      descripcion: 'En esta miniserie, el pasado de Natasha Romanoff regresa para perseguirla cuando un antiguo protocolo de la era soviética se activa, amenazando a todos sus seres queridos. La trama alterna entre el presente y sus orígenes en la Habitación Roja, revelando cómo fue entrenada desde niña para ser la espía perfecta y cómo su memoria fue manipulada con recuerdos implantados. A medida que rastrea el rastro de una conspiración vinculada a su mentor, la historia muestra su transición de una letal agente de la KGB a una heroína de los Vengadores, culminando en un enfrentamiento que la obliga a aceptar las cicatrices de su pasado para proteger su futuro.'
    },
    {
      id: 'm16',
      titulo: 'El Inmortal Iron Fist (de Matt Fraction y Ed Brubaker)',
      precio: 54.99,
      marca: 'marvel',
      autor: 'Matt Fraction · Ed Brubaker · David Aja',
      año: 2006,
      imagen: 'https://i.pinimg.com/1200x/f1/fa/db/f1fadb81e254b45ff9772b8ec7ed6fd3.jpg',
      descripcion: 'En esta etapa, Danny Rand descubre que no es el único Iron Fist, sino el último de un linaje milenario de guerreros que han protegido la ciudad mística de Kun-Lun. Tras conocer a Orson Randall, su predecesor de la era de la Primera Guerra Mundial, Danny se adentra en una mitología profunda donde descubre la existencia de las Siete Ciudades Celestiales y sus respectivos Armas Inmortales, como la Novia de las Nueve Arañas o el Perro de Grasa.'
    },
    {
      id: 'm17',
      titulo: 'Hawkeye: Kate Bishop',
      precio: 130.99,
      marca: 'marvel',
      autor: 'Kelly Thompson · Leonardo Romero',
      año: 2016,
      imagen: 'https://i.pinimg.com/736x/d0/9a/22/d09a22f9152300107a29d3baa503f2d0.jpg',
      descripcion: 'En esta etapa, centrada en el volumen de 2016, Kate Bishop se traslada a Los Ángeles para establecerse como investigadora privada y distanciarse de Clint Barton. Bajo el nombre de "Hawkeye Investigaciones", Kate intenta ayudar a quienes no tienen a quién recurrir, enfrentándose a casos que van desde chantajes en redes sociales hasta conspiraciones místicas.'
    },
    {
      id: 'm18',
      titulo: 'Avengers: The Childrens Crusade (La Cruzada de los Niños',
      precio: 130.99,
      marca: 'marvel',
      autor: 'Allan Heinberg · Jim Cheung',
      año: 2010,
      imagen: 'https://i.pinimg.com/736x/37/07/7a/37077a31cdbd561f5b5243e3e424c45f.jpg',
      descripcion: 'En esta épica saga de los Young Avengers, Wiccan y Speed emprenden una búsqueda desesperada para encontrar a su madre, la desaparecida Bruja Escarlata (Wanda Maximoff), quien ha estado ausente desde los eventos de House of M. Su rastro los lleva hasta Latveria, donde descubren que Wanda está amnésica y comprometida con el Doctor Doom.'
    }
    
  ],

  dc: [
    {
      id: 'd1',
      titulo: 'Batman: The Dark Knight Returns',
      precio: 20.99,
      marca: 'dc',
      autor: 'Frank Miller · Klaus Janson',
      año: 1986,
      imagen: 'https://i.pinimg.com/736x/ad/2d/07/ad2d07403afed7598070bfdfa77db357.jpg',
      descripcion: 'Batman regresa tras una larga retirada.'
    },
    {
      id: 'd2',
      titulo: 'Superman: Red Son',
      precio: 17.99,
      marca: 'dc',
      autor: 'Mark Millar · Dave Johnson',
      año: 2003,
      imagen: 'https://i.pinimg.com/1200x/c2/97/36/c29736636c7d31a7d19b29d82383c821.jpg',
      descripcion: '¿Qué pasaría si Kal-El hubiera caído en la URSS?'
    },
    {
      id: 'd3',
      titulo: 'Watchmen',
      precio: 24.99,
      marca: 'dc',
      autor: 'Alan Moore · Dave Gibbons',
      año: 1986,
      imagen: 'https://i.pinimg.com/1200x/c8/51/5e/c8515ec44d3a556ce3c1bd3ba3fa92b2.jpg',
      descripcion: 'La novela gráfica más aclamada de todos los tiempos.'
    },
    {
      id: 'd4',
      titulo: 'The Killing Joke',
      precio: 13.99,
      marca: 'dc',
      autor: 'Alan Moore · Brian Bolland',
      año: 1988,
      imagen: 'https://i.pinimg.com/736x/bb/d6/1f/bbd61f777f2553d24ee9ec1d101f9ee7.jpg',
      descripcion: 'El Joker lleva a Batman al límite.'
    },
    {
      id: 'd5',
      titulo: 'Wonder Woman: Year One',
      precio: 18.00,
      marca: 'dc',
      autor: 'Greg Rucka · Nicola Scott',
      año: 2016,
      imagen: 'https://i.pinimg.com/736x/7d/84/ee/7d84ee78eca584c842828a5043f26f7a.jpg',
      descripcion: 'Los orígenes de Diana Prince reimaginados.'
    },
    {
      id: 'd6',
      titulo: 'Green Lantern: Sinestro Corps War',
      precio: 21.50,
      marca: 'dc',
      autor: 'Geoff Johns · Ethan Van Sciver',
      año: 2007,
      imagen: 'https://i.pinimg.com/736x/c1/5f/a8/c15fa8898ce8311047d3d1e5d5ce5b29.jpg',
      descripcion: 'Hal Jordan enfrenta la mayor amenaza galáctica.'
    }
    
  ]
};

/* ─────────────────────────────────────────────────────
   2. UTILIDADES DE localStorage
───────────────────────────────────────────────────── */

/** Obtiene el carrito actual desde localStorage */
function obtenerCarrito() {
  try {
    return JSON.parse(localStorage.getItem('comic_carrito')) || [];
  } catch {
    return [];
  }
}

/** Guarda el carrito en localStorage y actualiza el contador */
function guardarCarrito(carrito) {
  localStorage.setItem('comic_carrito', JSON.stringify(carrito));
  actualizarContadorNavbar();
}

/** Obtiene el usuario logueado desde localStorage */
function obtenerUsuario() {
  try {
    return JSON.parse(localStorage.getItem('comic_usuario')) || null;
  } catch {
    return null;
  }
}

/** Guarda el usuario en localStorage */
function guardarUsuario(usuario) {
  localStorage.setItem('comic_usuario', JSON.stringify(usuario));
}

/** Elimina el usuario del localStorage (logout) */
function eliminarUsuario() {
  localStorage.removeItem('comic_usuario');
}

/* ─────────────────────────────────────────────────────
   3. SISTEMA DE TOASTS (notificaciones)
───────────────────────────────────────────────────── */

/**
 * Muestra una notificación tipo toast en pantalla.
 * @param {string} mensaje - Texto a mostrar
 * @param {'success'|'error'|'info'} tipo - Tipo de notificación
 * @param {number} duracion - Milisegundos antes de desaparecer
 */
function mostrarToast(mensaje, tipo = 'info', duracion = 3500) {
  // Crear o reusar el contenedor de toasts
  let contenedor = document.getElementById('toast-container');
  if (!contenedor) {
    contenedor = document.createElement('div');
    contenedor.id = 'toast-container';
    contenedor.className = 'toast-container';
    document.body.appendChild(contenedor);
  }

  const iconos = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;
  toast.innerHTML = `<span>${iconos[tipo]}</span> ${mensaje}`;
  contenedor.appendChild(toast);

  // Auto-eliminar después de `duracion` ms
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duracion);
}

/* ─────────────────────────────────────────────────────
   4. NAVBAR DINÁMICA
───────────────────────────────────────────────────── */

/** Actualiza el contador de items en el ícono del carrito */
function actualizarContadorNavbar() {
  const carrito = obtenerCarrito();
  const contadores = document.querySelectorAll('.cart-count');
  contadores.forEach(el => {
    el.textContent = carrito.length;
    el.style.display = carrito.length > 0 ? 'flex' : 'none';
  });
}

/** Renderiza la sección de usuario en la navbar */
function renderNavbarUsuario() {
  const usuario = obtenerUsuario();
  const zonaUsuario = document.getElementById('navbar-user-zone');
  if (!zonaUsuario) return;

  if (usuario) {
    // Usuario logueado: mostrar avatar, nombre y botón de salir
    zonaUsuario.innerHTML = `
      <div class="navbar-user">
        <img class="avatar"
             src="${usuario.foto || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(usuario.nombre) + '&background=e23636&color=fff&size=64'}"
             alt="Avatar de ${usuario.nombre}">
        <span class="user-name">${usuario.nombre}</span>
        <button class="btn-logout" id="btn-logout-nav">Salir</button>
      </div>`;

    document.getElementById('btn-logout-nav')
      .addEventListener('click', cerrarSesion);
  } else {
    // No logueado: mostrar enlace a login
    zonaUsuario.innerHTML = `
      <a href="login.html" class="btn btn-outline" style="font-size:.88rem;padding:.4rem .9rem;">
        🔑 Iniciar sesión
      </a>`;
  }
}

/** Inicializa la navbar en todas las páginas */
function initNavbar() {
  actualizarContadorNavbar();
  renderNavbarUsuario();

  // Marcar enlace activo según URL actual
  const pagActual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(enlace => {
    const href = enlace.getAttribute('href');
    if (href === pagActual) enlace.classList.add('active');
  });

  // Menú hamburger para mobile
  const toggle = document.getElementById('navbar-toggle');
  const links  = document.getElementById('navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

/* ─────────────────────────────────────────────────────
   5. AUTENTICACIÓN
   ──
   Esta implementación simula el login con Google.
   Para conectar Firebase Authentication real:
   1. Crear proyecto en https://console.firebase.google.com/
   2. Activar proveedor "Google" en Authentication > Sign-in method
   3. Copiar la configuración en firebaseConfig (ver login.html)
   4. Descomentar el bloque de Firebase en login.html
   5. Reemplazar loginSimulado() por signInWithPopup(provider)
───────────────────────────────────────────────────── */

/**
 * Simula el inicio de sesión con una cuenta Google de demostración.
 * En producción se reemplaza por Firebase signInWithPopup.
 */
function loginSimulado() {
  const usuarioDemo = {
    uid:    'demo_uid_12345',
    nombre: 'Usuario Demo',
    email:  'demo@comicstore.com',
    foto:   'https://ui-avatars.com/api/?name=Usuario+Demo&background=e23636&color=fff&size=64'
  };
  guardarUsuario(usuarioDemo);
  return usuarioDemo;
}

/** Cierra la sesión del usuario */
function cerrarSesion() {
  eliminarUsuario();
  mostrarToast('Has cerrado sesión correctamente.', 'info');
  // Redirigir a inicio después de un momento
  setTimeout(() => { window.location.href = 'index.html'; }, 1200);
}

/* ─────────────────────────────────────────────────────
   6. CATÁLOGO - RENDERIZADO DE TARJETAS
───────────────────────────────────────────────────── */

/**
 * Genera el HTML de una tarjeta de cómic.
 * Al hacer clic en la imagen o título se abre el modal de detalle.
 * @param {Object} comic - Objeto con datos del cómic
 * @returns {string} HTML de la card
 */
function crearCardComic(comic) {
  const claseBrand = comic.marca === 'marvel' ? 'btn-marvel' : 'btn-dc';
  return `
    <article class="comic-card ${comic.marca}" data-id="${comic.id}" role="listitem">
      <div class="comic-card-img-wrap" onclick="abrirModalComic('${comic.id}')" style="cursor:pointer" title="Ver detalles">
        <img src="${comic.imagen}"
             alt="Portada de ${comic.titulo}"
             loading="lazy"
             onerror="this.src='https://via.placeholder.com/300x400/1c1c26/9090a0?text=Sin+imagen'">
        <div class="comic-card-hover-hint">👁 Ver detalles</div>
      </div>
      <div class="comic-info">
        <h3 class="comic-title" onclick="abrirModalComic('${comic.id}')" style="cursor:pointer">${comic.titulo}</h3>
        <p class="comic-price">$${comic.precio.toFixed(2)}</p>
        <button class="btn btn-add ${claseBrand}"
                onclick="agregarAlCarrito('${comic.id}')"
                aria-label="Añadir ${comic.titulo} al carrito">
          🛒 Añadir al carrito
        </button>
      </div>
    </article>`;
}

/**
 * Abre el modal con la información detallada de un cómic.
 * @param {string} comicId - ID del cómic
 */
function abrirModalComic(comicId) {
  const todosLosComics = [...CATALOGO.marvel, ...CATALOGO.dc];
  const comic = todosLosComics.find(c => c.id === comicId);
  if (!comic) return;

  // Eliminar modal anterior si existe
  const anterior = document.getElementById('modal-detalle-comic');
  if (anterior) anterior.remove();

  const claseBrand  = comic.marca === 'marvel' ? 'btn-marvel' : 'btn-dc';
  const colorMarca  = comic.marca === 'marvel' ? 'var(--marvel-red)' : 'var(--dc-blue)';
  const labelMarca  = comic.marca === 'marvel' ? '🔴 MARVEL' : '🔵 DC';
  const autorTexto  = comic.autor || 'Autor desconocido';
  const añoTexto    = comic.año   || '—';

  const overlay = document.createElement('div');
  overlay.id = 'modal-detalle-comic';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal modal-detalle" role="dialog" aria-modal="true" aria-label="Detalle de ${comic.titulo}">
      <button class="modal-close-btn" id="btn-cerrar-detalle" aria-label="Cerrar">✕</button>

      <div class="modal-detalle-inner">
        <!-- Portada -->
        <div class="modal-detalle-cover">
          <img src="${comic.imagen}"
               alt="Portada de ${comic.titulo}"
               onerror="this.src='https://via.placeholder.com/300x420/1c1c26/9090a0?text=Sin+imagen'">
        </div>

        <!-- Info -->
        <div class="modal-detalle-info">
          <span class="modal-marca-badge" style="background:${colorMarca}">${labelMarca}</span>
          <h2 class="modal-detalle-titulo">${comic.titulo}</h2>

          <div class="modal-meta">
            <div class="modal-meta-item">
              <span class="modal-meta-label">✍️ Autor</span>
              <span class="modal-meta-value">${autorTexto}</span>
            </div>
            <div class="modal-meta-item">
              <span class="modal-meta-label">📅 Año</span>
              <span class="modal-meta-value">${añoTexto}</span>
            </div>
            <div class="modal-meta-item">
              <span class="modal-meta-label">💰 Precio</span>
              <span class="modal-meta-value" style="color:var(--accent-gold);font-weight:800;font-size:1.1rem">$${comic.precio.toFixed(2)}</span>
            </div>
          </div>

          <div class="modal-descripcion">
            <h4>📖 Sinopsis</h4>
            <p>${comic.descripcion}</p>
          </div>

          <div class="modal-detalle-btns">
            <button class="btn btn-add ${claseBrand}" onclick="agregarAlCarrito('${comic.id}');cerrarModalComic()">
              🛒 Añadir al carrito
            </button>
            <button class="btn btn-outline" onclick="cerrarModalComic()">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  document.getElementById('btn-cerrar-detalle').addEventListener('click', cerrarModalComic);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) cerrarModalComic(); });

  // Cerrar con Escape
  document.addEventListener('keydown', _escapeModalComic);
}

function _escapeModalComic(e) {
  if (e.key === 'Escape') cerrarModalComic();
}

/** Cierra el modal de detalle */
function cerrarModalComic() {
  const modal = document.getElementById('modal-detalle-comic');
  if (modal) modal.remove();
  document.body.style.overflow = '';
  document.removeEventListener('keydown', _escapeModalComic);
}



/**
 * Renderiza el catálogo de cómics en un contenedor.
 * @param {string} contenedorId - ID del elemento donde insertar
 * @param {'marvel'|'dc'|'all'} marca - Filtro de marca
 */
function renderizarCatalogo(contenedorId, marca = 'all') {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  let comics = [];
  if (marca === 'marvel' || marca === 'all') comics = comics.concat(CATALOGO.marvel);
  if (marca === 'dc'     || marca === 'all') comics = comics.concat(CATALOGO.dc);

  contenedor.innerHTML = comics.map(crearCardComic).join('');
}

/* ─────────────────────────────────────────────────────
   7. CARRITO DE COMPRAS
───────────────────────────────────────────────────── */

/**
 * Añade un cómic al carrito. Valida login antes de agregar.
 * @param {string} comicId - ID del cómic a agregar
 */
function agregarAlCarrito(comicId) {
  // Verificar login
  const usuario = obtenerUsuario();
  if (!usuario) {
    mostrarToast('⚠️ Debes iniciar sesión para comprar.', 'error', 4000);
    // Redirigir a login después de mostrar la alerta
    setTimeout(() => { window.location.href = 'login.html'; }, 1800);
    return;
  }

  // Buscar el cómic en el catálogo
  const todosLosComics = [...CATALOGO.marvel, ...CATALOGO.dc];
  const comic = todosLosComics.find(c => c.id === comicId);
  if (!comic) return;

  // Verificar si ya está en el carrito (evita duplicados)
  const carrito = obtenerCarrito();
  const yaExiste = carrito.some(item => item.id === comicId);
  if (yaExiste) {
    mostrarToast(`"${comic.titulo}" ya está en tu carrito.`, 'info');
    return;
  }

  carrito.push(comic);
  guardarCarrito(carrito);
  mostrarToast(`✔ "${comic.titulo}" añadido al carrito.`, 'success');
}

/**
 * Elimina un cómic del carrito por su ID.
 * @param {string} comicId - ID del cómic a eliminar
 */
function eliminarDelCarrito(comicId) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== comicId);
  guardarCarrito(carrito);
  renderizarCarrito(); // refrescar vista
  mostrarToast('Producto eliminado del carrito.', 'info');
}

/**
 * Renderiza el carrito completo en carrito.html
 */
function renderizarCarrito() {
  const contenedor = document.getElementById('carrito-contenido');
  if (!contenedor) return;

  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    contenedor.innerHTML = `
      <div class="cart-empty">
        <div class="icon-big">🛒</div>
        <h3>Tu carrito está vacío</h3>
        <p>Explora nuestro catálogo y añade tus cómics favoritos.</p>
        <div style="margin-top:1.5rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
          <a href="marvel.html" class="btn btn-marvel">Ver Marvel</a>
          <a href="dc.html"     class="btn btn-dc">Ver DC</a>
        </div>
      </div>`;
    return;
  }

  // Calcular total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  const count = carrito.length;

  const itemsHTML = carrito.map(item => `
    <div class="cart-item">
      <img src="${item.imagen}"
           alt="${item.titulo}"
           onerror="this.src='https://via.placeholder.com/80x108/1c1c26/9090a0?text=?'">
      <div class="cart-item-info">
        <h4>${item.titulo}</h4>
        <span class="brand ${item.marca}">${item.marca.toUpperCase()}</span>
      </div>
      <span class="cart-item-price">$${item.precio.toFixed(2)}</span>
      <button class="btn-remove"
              onclick="eliminarDelCarrito('${item.id}')"
              aria-label="Eliminar ${item.titulo}">
        🗑 Eliminar
      </button>
    </div>`).join('');

  contenedor.innerHTML = `
    <div class="cart-list">${itemsHTML}</div>
    <div class="cart-summary">
      <h3>Resumen del pedido</h3>
      <div class="summary-row">
        <span>Productos (${count})</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Envío</span>
        <span style="color:#27ae60">Gratis ✓</span>
      </div>
      <div class="summary-row">
        <span>Total</span>
        <span class="summary-total">$${total.toFixed(2)}</span>
      </div>
      <button class="btn btn-gold btn-buy" onclick="procesarCompra()">
        💳 Confirmar compra
      </button>
    </div>`;
}

/* ─────────────────────────────────────────────────────
   8. PROCESO DE COMPRA
───────────────────────────────────────────────────── */

/**
 * Procesa la compra final: valida login, muestra modal de éxito
 * y vacía el carrito.
 */
function procesarCompra() {
  const usuario = obtenerUsuario();

  // Verificar que el usuario esté logueado
  if (!usuario) {
    mostrarToast('⚠️ Debes iniciar sesión para completar la compra.', 'error', 4000);
    setTimeout(() => { window.location.href = 'login.html'; }, 1800);
    return;
  }

  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    mostrarToast('Tu carrito está vacío.', 'info');
    return;
  }

  // Calcular total para el modal
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  // Mostrar modal de confirmación/éxito
  mostrarModalCompra(usuario.nombre, total);
}

/**
 * Muestra el modal de compra exitosa y vacía el carrito al confirmar.
 * @param {string} nombre - Nombre del usuario
 * @param {number} total  - Total de la compra
 */
function mostrarModalCompra(nombre, total) {
  // Eliminar modal anterior si existe
  const modalAnterior = document.getElementById('modal-compra');
  if (modalAnterior) modalAnterior.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-compra';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <div style="font-size:3rem;margin-bottom:.5rem">🎉</div>
      <h3>¡Compra exitosa!</h3>
      <p>
        Gracias, <strong>${nombre}</strong>.<br>
        Tu pedido por <strong>$${total.toFixed(2)}</strong> ha sido confirmado.<br>
        <span style="color:#27ae60;font-size:.9rem">
          Recibirás tus cómics pronto. 📦
        </span>
      </p>
      <div class="modal-btns">
        <button class="btn btn-gold" id="btn-modal-ok">¡Perfecto!</button>
        <a href="index.html" class="btn btn-outline">Seguir comprando</a>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  // Al confirmar: vaciar carrito y recargar la página
  document.getElementById('btn-modal-ok').addEventListener('click', () => {
    guardarCarrito([]);
    overlay.remove();
    renderizarCarrito();
    mostrarToast('¡Carrito vaciado! ¡Gracias por tu compra!', 'success', 4000);
  });

  // Cerrar modal al hacer clic fuera del contenido
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

/* ─────────────────────────────────────────────────────
   9. INICIALIZACIÓN POR PÁGINA
   Detecta en qué página estamos y ejecuta lo necesario.
───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';

  // La navbar se inicializa en TODAS las páginas
  initNavbar();

  // ── index.html ──
  if (pagina === 'index.html' || pagina === '') {
    // Renderiza una selección mixta en la home (3 Marvel + 3 DC)
    const contenedorHome = document.getElementById('comics-home');
    if (contenedorHome) {
      const destacados = [
        ...CATALOGO.marvel.slice(0, 3),
        ...CATALOGO.dc.slice(0, 3)
      ];
      contenedorHome.innerHTML = destacados.map(crearCardComic).join('');
    }
  }

  // ── marvel.html ──
  if (pagina === 'marvel.html') {
    renderizarCatalogo('comics-marvel', 'marvel');
  }

  // ── dc.html ──
  if (pagina === 'dc.html') {
    renderizarCatalogo('comics-dc', 'dc');
  }

  // ── carrito.html ──
  if (pagina === 'carrito.html') {
    renderizarCarrito();
  }

  // ── login.html ──
  if (pagina === 'login.html') {
    initLoginPage();
  }
});

/* ─────────────────────────────────────────────────────
   10. LÓGICA DE LOGIN PAGE (login.html)
───────────────────────────────────────────────────── */

/**
 * Inicializa la página de login.
 * Si el usuario ya está logueado, muestra su perfil.
 */
function initLoginPage() {
  const contenedor = document.getElementById('login-container');
  if (!contenedor) return;

  const usuario = obtenerUsuario();

  if (usuario) {
    // Mostrar perfil del usuario logueado
    contenedor.innerHTML = `
      <div class="profile-card">
        <img class="avatar-lg"
             src="${usuario.foto || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(usuario.nombre) + '&background=e23636&color=fff&size=128'}"
             alt="Foto de perfil">
        <h3>${usuario.nombre}</h3>
        <p class="email">${usuario.email}</p>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;font-size:.9rem">
          ¡Listo para comprar cómics! 🦸
        </p>
        <div style="display:flex;flex-direction:column;gap:.8rem">
          <a href="index.html"  class="btn btn-gold"    style="justify-content:center">🏠 Ir al inicio</a>
          <a href="carrito.html" class="btn btn-outline" style="justify-content:center">🛒 Ver carrito</a>
          <button class="btn btn-danger" onclick="cerrarSesion()" style="justify-content:center;border:none">
            🚪 Cerrar sesión
          </button>
        </div>
      </div>`;
    return;
  }

  // Mostrar formulario de login
  contenedor.innerHTML = `
    <div class="login-card">
      <div class="logo-icon">📚</div>
      <h2>Iniciar sesión</h2>
      <p>Accede con tu cuenta para comprar cómics de Marvel y DC.</p>

      <!-- Botón principal: Google (simulado / Firebase) -->
      <button class="btn-google" id="btn-google-login">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
             alt="Logo Google">
        Continuar con Google
      </button>

      <div class="divider-or">o usa una cuenta de demo</div>

      <!-- Botón de cuenta de demostración (siempre funcional) -->
      <button class="btn btn-outline" id="btn-demo-login" style="width:100%;justify-content:center">
        🎭 Entrar como Usuario Demo
      </button>

      <div class="login-info">
        <strong>ℹ️ Sobre Firebase (Google Login real):</strong><br>
        Para activar el inicio de sesión real con Google:
        <ol style="padding-left:1.2rem;margin-top:.4rem">
          <li>Crea un proyecto en <a href="https://console.firebase.google.com/" target="_blank">Firebase Console</a>.</li>
          <li>Activa <em>Authentication → Google</em> como proveedor.</li>
          <li>Copia tu <code>firebaseConfig</code> y pégalo en <code>login.html</code>.</li>
          <li>Descomenta el bloque de Firebase SDK al final de <code>login.html</code>.</li>
        </ol>
      </div>
    </div>`;

  // Botón Demo
  document.getElementById('btn-demo-login').addEventListener('click', () => {
    const usuario = loginSimulado();
    guardarUsuario(usuario);
    mostrarToast(`¡Bienvenido, ${usuario.nombre}!`, 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
  });

  // Botón Google (simulado mientras Firebase no esté configurado)
  document.getElementById('btn-google-login').addEventListener('click', () => {
    // ── ZONA FIREBASE ──────────────────────────────────────────────
    // Si tienes Firebase configurado en login.html, comenta la simulación
    // de abajo y usa:
    //
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth().signInWithPopup(provider)
    //     .then(result => {
    //       const u = result.user;
    //       guardarUsuario({ uid: u.uid, nombre: u.displayName, email: u.email, foto: u.photoURL });
    //       window.location.href = 'index.html';
    //     })
    //     .catch(err => mostrarToast('Error al iniciar sesión: ' + err.message, 'error'));
    //
    // ─────────────────────────────────────────────────────────────

    // Simulación: usa datos de demostración con "Google"
    const usuarioGoogle = {
      uid:    'google_uid_98765',
      nombre: 'Lector Cómic',
      email:  'lector@gmail.com',
      foto:   'https://ui-avatars.com/api/?name=Lector+Cómic&background=0476D0&color=fff&size=64'
    };
    guardarUsuario(usuarioGoogle);
    mostrarToast(`¡Bienvenido, ${usuarioGoogle.nombre}!`, 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
  });
}