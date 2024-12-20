# Useful links
### Public project deployment
https://prueba-tecnica-tecopo.vercel.app/
### Public git repository
https://github.com/Silversun31/prueba_tecnica_tienda_virtual_frontend

## This project is online on [Vercel](https://prueba-tecnica-tecopo.vercel.app/)  
  

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Technical Test Document
## Ecosistema Tecnológico de Puntos de Venta

### Requisitos técnicos
- **Framework**: React
- **Estilos**: TailwindCSS.
- **Librerías**: Libre elección para manejar el estado o realizar fetch de datos (opcional).
- **Versionado**: Subir el código a un repositorio en GitHub.
- **Despliegue**: Usar una plataforma gratuita como Vercel, Netlify, o Render.

### Descripción de la prueba
Desarrollar una tienda online básica con las siguientes pantallas y funcionalidades:

1. **Pantalla de Inicio**
   - **Requisitos**:
     - Mostrar una lista de productos con imagen, nombre, precio y un botón "Agregar al carrito".
     - Los productos deben obtenerse de una API pública (sugerencia: Fake Store API).
     - Implementar un buscador y/o filtro por categoría.

2. **Pantalla de detalle de producto**
   - **Requisitos**:
     - Mostrar información completa del producto seleccionado.
     - Botón para agregar el producto al carrito.

3. **Carrito de compras**
   - **Requisitos**:
     - Mostrar los productos agregados al carrito con su nombre, cantidad y precio total.
     - Permitir eliminar productos o cambiar la cantidad.
     - Mostrar el precio total de todos los productos.

4. **Pantalla de confirmación de compra**
   - **Requisitos**:
     - Mostrar un resumen del carrito con los datos de la compra.
     - Permitir simular la "finalización de compra".

### Criterios de evaluación
1. **Organización del código**
   - Uso de buenas prácticas (estructuración, modularidad, etc.).
   - Nombres claros para componentes, funciones y variables.

2. **Diseño y usabilidad**
   - Interfaz intuitiva y bien diseñada.
   - Uso correcto de estilos y diseño responsive.

3. **Funcionalidad**
   - Cumplimiento de todos los requisitos especificados.
   - Correcto manejo del estado y la comunicación entre componentes.

4. **Despliegue y documentación**
   - Aplicación desplegada correctamente.
   - Archivo README que incluya:
     - Instrucciones para correr el proyecto localmente.
     - URL de la aplicación desplegada.