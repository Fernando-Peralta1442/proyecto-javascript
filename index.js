// Array de productos
const productos = [
    { id:1, nombre: 'Camiseta', precio: 20 },
    { id:2, nombre: 'Pantalón', precio: 40 },
    { id:3, nombre: 'Zapatos', precio: 60 },
    { id:4, nombre: 'Bolso', precio: 30 }
]

// Función para mostrar todos los productos
const mostrarProductos = () => {
    console.log('Productos disponibles:');
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
};

// Función para buscar un producto por ID
const buscarProductoPorId = id => productos.find(producto => producto.id === id);

// Función para agregar un producto al carrito
const agregarAlCarrito = id => {
    const producto = buscarProductoPorId(id);
    if (producto) {
        carrito.push(producto);
        console.log(`Producto "${producto.nombre}" agregado al carrito.`);
    } else {
        console.log('Producto no encontrado.');
    }
};

// Función para calcular el total del carrito
const calcularTotalCarrito = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    return total;
};

// Array para almacenar los productos del carrito
const carrito = [];

// Iniciar el e-commerce
const iniciarEcommerce = () => {
    mostrarProductos();

    let continuar = true;
    while (continuar) {
        const opcion = parseInt(prompt('Ingrese el ID del producto que desea agregar al carrito (0 para salir):'));
        if (opcion === 0) {
            continuar = false;
        } else {
            agregarAlCarrito(opcion);
        }
    }

    const totalCarrito = calcularTotalCarrito();
    console.log(`Total del carrito: $${totalCarrito}`);
};

// Iniciar el e-commerce
iniciarEcommerce();

