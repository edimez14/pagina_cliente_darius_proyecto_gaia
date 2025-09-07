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
    window.open(`https://wa.me/573011959402?text=${texto}`, '_blank');
    
    // Opcional: Resetear el formulario después del envío
    this.reset();
});

// Sincronizar país con código de teléfono (código existente)
document.addEventListener('DOMContentLoaded', function() {
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
        
        paisSelect.addEventListener('change', function() {
            actualizarCodigo(paisSelect, codigoPaisSelect);
        });
    }
    
    // Event listeners para formulario de voluntariado
    if (vPaisSelect && vCodigoPaisSelect) {
        // Establecer código inicial según país predeterminado (Colombia)
        actualizarCodigo(vPaisSelect, vCodigoPaisSelect);
        
        vPaisSelect.addEventListener('change', function() {
            actualizarCodigo(vPaisSelect, vCodigoPaisSelect);
        });
    }
});

// Sincronizar país con código de teléfono
document.addEventListener('DOMContentLoaded', function() {
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
        paisSelect.addEventListener('change', function() {
            actualizarCodigo(paisSelect, codigoPaisSelect);
        });
    }
    
    // Event listeners para formulario de voluntariado
    if (vPaisSelect && vCodigoPaisSelect) {
        vPaisSelect.addEventListener('change', function() {
            actualizarCodigo(vPaisSelect, vCodigoPaisSelect);
        });
    }
});