document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = encodeURIComponent(document.getElementById('nombre').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const telefono = encodeURIComponent(document.getElementById('telefono').value || 'No proporcionado');
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value);

    const texto = `Nuevo mensaje de contacto:\n\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`;

    window.open(`https://wa.me/573011959402?text=${texto}`, '_blank');
});