document.addEventListener('DOMContentLoaded', function () {
    const customerForm = document.getElementById('customer-form');
    const customerTableBody = document.querySelector('#customer-table tbody');

    customerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        const customer = {
            nombre,
            apellido,
            email,
            telefono
        };

        const newRow = customerTableBody.insertRow();
        newRow.innerHTML = `
            <td>${customer.nombre}</td>
            <td>${customer.apellido}</td>
            <td>${customer.email}</td>
            <td>${customer.telefono}</td>
        `;

        // Limpia el formulario
        customerForm.reset();
    });
});
