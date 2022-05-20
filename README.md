# Kimche-challenge


### En progreso :) 

### Progreso del dia 12/05/2022
  - Primeros pasos en la creación de la aplicación, elección de tecnologías y maquetado.
  Elección de tecnologías :
  React, Material UI, Apollo Client, Create Vite App, Graphql.

### Progreso del dia 13/05/2022
  - Capa de estilos con Material UI y tema personalizado.
  - Loading creado, mostrado al cargar la aplicación.
  - Creación de un contexto para el manejo de datos a nivel global, para favorecer una busqueda de datos mas sencilla.
  - Consumiendo las primeras querys con ApolloClient.
  - Mostrando la data obtenida dinamicamente en las cards(modelo preliminar) y estilización de la misma.

### Progreso del dia 19/05/2022
  - Filtrando valores por paises y mostrando segun corresponda su continente.
  - Modal para mostrar mas datos acerca del pais seleccionado creado.
  - 
### Entrega dia 20/05/2022
  - Terminar de filtrar por lenguajes
  - Subida a netlify y ultimos cambios a github.
  - 
### PREGUNTA 
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

  Si es posible, tratar de normalizar y simplificar las tablas a modo de que sean ligeras,eliminar datos innecesarios, crear indices para mejorar el rendimiento, asi evitamos recorrer los mismos datos siempre. Caso de que no se pueda, entonces se puede proceder a particionar las tablas, para asi recorrer menos datos del necesario, aunque se pueda lograr un daño de los datos inscritos en las tablas. 
  Tambien se podria considerar en migrar datos que no se utilizan o sean muy antiguos.
 Incrementar la capacidad de disco del servidor en caso de que se requiera puede ser una buena opcion, ya que 90 millones de filas es una cantidad considerable. 
