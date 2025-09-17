// Botón de WhatsApp flotante
const whatsappButton = document.querySelector('.whatsapp-float');
const header = document.querySelector('header');

function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Mostrar el botón después de que el header desaparezca (ajusta el 100 según tu header)
    if (scrollPosition > 100) {
        whatsappButton.classList.add('show');
    } else {
        whatsappButton.classList.remove('show');
    }
}


document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = encodeURIComponent(document.getElementById('nombre').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const telefono = encodeURIComponent(document.getElementById('telefono').value || 'No proporcionado');
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value);

    const texto = `Nuevo mensaje de contacto:\n\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`;

    window.open(`https://wa.me/573011959402?text=${texto}`, '_blank');
});

document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = encodeURIComponent(document.getElementById('nombre').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const pais = encodeURIComponent(document.getElementById('pais').options[document.getElementById('pais').selectedIndex].text);
    const codigoPais = encodeURIComponent(document.getElementById('codigo-pais').value);
    const telefono = encodeURIComponent(document.getElementById('telefono').value || 'No proporcionado');
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value);

    // Crear el texto del mensaje con todos los datos
    const texto = `Nuevo mensaje de contacto:\n\n` +
        `Nombre: ${nombre}\n` +
        `Email: ${email}\n` +
        `País: ${pais}\n` +
        `Teléfono: ${codigoPais} ${telefono}\n\n` +
        `Mensaje: \n${mensaje}`;

    // Abrir WhatsApp con el mensaje predefinido
    window.open(`https://wa.me/573189656717?text=${texto}`, '_blank');

    // Opcional: Resetear el formulario después del envío
    this.reset();
});

// Sincronizar país con código de teléfono (código existente)
document.addEventListener('DOMContentLoaded', function () {
    const paisSelect = document.getElementById('pais');
    const codigoPaisSelect = document.getElementById('codigo-pais');
    const vPaisSelect = document.getElementById('v-pais');
    const vCodigoPaisSelect = document.getElementById('v-codigo-pais');

    // Mapeo de países a códigos
    const codigosPorPais = {
        'AR': '+54', 'BO': '+591', 'CL': '+56', 'CO': '+57', 'CR': '+506',
        'CU': '+53', 'DO': '+1-809', 'EC': '+593', 'SV': '+503', 'GT': '+502',
        'HN': '+504', 'MX': '+52', 'NI': '+505', 'PA': '+507', 'PY': '+595',
        'PE': '+51', 'PR': '+1-787', 'UY': '+598', 'VE': '+58', 'ES': '+34',
        'US': '+1', 'OT': ''
    };

    // Función para actualizar código según país
    function actualizarCodigo(paisSelect, codigoSelect) {
        const codigo = codigosPorPais[paisSelect.value] || '';
        if (codigo) {
            for (let i = 0; i < codigoSelect.options.length; i++) {
                if (codigoSelect.options[i].value === codigo) {
                    codigoSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // Event listeners para formulario de contacto
    if (paisSelect && codigoPaisSelect) {
        // Establecer código inicial según país predeterminado (Colombia)
        actualizarCodigo(paisSelect, codigoPaisSelect);

        paisSelect.addEventListener('change', function () {
            actualizarCodigo(paisSelect, codigoPaisSelect);
        });
    }

    // Event listeners para formulario de voluntariado
    if (vPaisSelect && vCodigoPaisSelect) {
        // Establecer código inicial según país predeterminado (Colombia)
        actualizarCodigo(vPaisSelect, vCodigoPaisSelect);

        vPaisSelect.addEventListener('change', function () {
            actualizarCodigo(vPaisSelect, vCodigoPaisSelect);
        });
    }
});

// Sincronizar país con código de teléfono
document.addEventListener('DOMContentLoaded', function () {
    const paisSelect = document.getElementById('pais');
    const codigoPaisSelect = document.getElementById('codigo-pais');
    const vPaisSelect = document.getElementById('v-pais');
    const vCodigoPaisSelect = document.getElementById('v-codigo-pais');

    // Mapeo de países a códigos
    const codigosPorPais = {
        'AR': '+54', 'BO': '+591', 'CL': '+56', 'CO': '+57', 'CR': '+506',
        'CU': '+53', 'DO': '+1-809', 'EC': '+593', 'SV': '+503', 'GT': '+502',
        'HN': '+504', 'MX': '+52', 'NI': '+505', 'PA': '+507', 'PY': '+595',
        'PE': '+51', 'PR': '+1-787', 'UY': '+598', 'VE': '+58', 'ES': '+34',
        'US': '+1', 'OT': ''
    };

    // Función para actualizar código según país
    function actualizarCodigo(paisSelect, codigoSelect) {
        const codigo = codigosPorPais[paisSelect.value] || '';
        if (codigo) {
            for (let i = 0; i < codigoSelect.options.length; i++) {
                if (codigoSelect.options[i].value === codigo) {
                    codigoSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // Event listeners para formulario de contacto
    if (paisSelect && codigoPaisSelect) {
        paisSelect.addEventListener('change', function () {
            actualizarCodigo(paisSelect, codigoPaisSelect);
        });
    }

    // Event listeners para formulario de voluntariado
    if (vPaisSelect && vCodigoPaisSelect) {
        vPaisSelect.addEventListener('change', function () {
            actualizarCodigo(vPaisSelect, vCodigoPaisSelect);
        });
    }
});

// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuContainer = document.querySelector('.menu-container');
    const body = document.body;

    if (hamburger && menuContainer) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            menuContainer.classList.toggle('active');

            // Prevenir el scroll del body cuando el menú está abierto
            if (menuContainer.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const menuLinks = document.querySelectorAll('.menu-container a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                menuContainer.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });

        // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = menuContainer.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideMenu && !isClickOnHamburger && menuContainer.classList.contains('active')) {
                hamburger.classList.remove('active');
                menuContainer.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    }

    // Header que se oculta al hacer scroll hacia abajo
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll hacia arriba
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const problematicaCards = document.querySelectorAll('.problematica-card');

    function checkScroll() {
        problematicaCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardPosition < screenPosition) {
                card.classList.add('visible');
            }
        });
    }

    // Verificar al cargar y al hacer scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar al cargar la página
});