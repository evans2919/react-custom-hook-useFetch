# Hook personalizado para consumo de API en React

Este proyecto contiene un hook personalizado para facilitar el consumo de una API en aplicaciones React. El hook, llamado `useFetch`, maneja las solicitudes de API, el estado de carga, los datos recibidos y los posibles errores.

## Instalación

Para utilizar este hook en tu proyecto, puedes seguir los siguientes pasos:

1. Instala React en tu aplicación, si aún no lo has hecho.

2. Copia el contenido del archivo `useFetch.js` en tu proyecto React, preferiblemente en un directorio específico para hooks o en un archivo dedicado a los hooks.

3. Asegúrate de que tu proyecto tenga las dependencias requeridas para usar el hook. Este hook utiliza las siguientes dependencias:

   - `react`: La librería de React.
   - `react-dom`: Para renderizar la aplicación de React.

   Puedes instalar estas dependencias usando npm (Node Package Manager) o yarn ejecutando el siguiente comando:

   ```bash
   npm install react react-dom
   ```

   o

   ```bash
   yarn add react react-dom
   ```

## Uso

Después de haber instalado correctamente el hook en tu proyecto, puedes utilizarlo de la siguiente manera:

1. Importa el hook `useFetch` en el archivo donde deseas consumir una API:

   ```jsx
   import { useFetch } from './path/to/useFetch';
   ```

2. Dentro de tu componente funcional de React, utiliza el hook `useFetch` de la siguiente manera:

   ```jsx
   const MyComponent = () => {
     const { data, loading, error } = useFetch('https://api.example.com/data');

     // Renderiza el estado de carga mientras se obtiene la respuesta de la API
     if (loading) {
       return <div>Cargando...</div>;
     }

     // Renderiza los datos recibidos de la API
     if (data) {
       return <div>{JSON.stringify(data)}</div>;
     }

     // Renderiza el mensaje de error en caso de que ocurra uno
     if (error) {
       return <div>Error: {error}</div>;
     }

     return null;
   };
   ```

   Asegúrate de reemplazar `'https://api.example.com/data'` con la URL de la API que deseas consumir en tu aplicación.

3. Personaliza la lógica de renderizado de acuerdo a tus necesidades. Puedes utilizar el estado `data` para mostrar los datos recibidos de la API, `loading` para mostrar un indicador de carga y `error` para mostrar un mensaje de error en caso de que ocurra uno.

## Contribuciones

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacerlo siguiendo estos pasos:

1. Haz un fork de este repositorio.

2. Crea una nueva rama para tus cambios:

   ```bash
   git checkout -b mi-rama-de-funcionalidad
   ```

3. Realiza tus modificaciones y mejoras.

4. Asegúrate de escribir pruebas unitarias para las nuevas funcionalidades o correcciones que agregues.

5. Ejecuta las pruebas existentes para asegurarte de que no se hayan introducido nuevos errores:

   ```bash
   npm test
   ```

6. Envía una solicitud de extracción (pull request) describiendo tus cambios y mejoras.