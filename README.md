# Desafío para Software Engineers

Nombre postulante: [Nicolás Pino Silva]
Link a la app en producción: [https://country-search-nicoolas-ps.vercel.app]

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)

Pregunta abierta:
"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Respuesta:
Por parte de la lógica que lleva el backend se podrían implementar mejoras dependiendo del framework que se esté utilizando. Pues, en el caso de Node.js se podrían implementar actualizaciones de una cierta cantidad de elementos en forma paralela. Por otro lado, buscar alguna forma más sencilla la cual se realiza el código, puede ser utilizando alguna librería u otro método.

En el lado de la base de datos se podrían implementar motores de almacenamiento mas adecuados como por ejemplo InnoDB la cual suele tener un mejor rendimiento para realizar Updates o Inserts en la base de datos. Además, se podría optimizar la consulta para que no tenga muchas subconsultas dentro de ella. 

Viendo que la cantidad de filas es bastante grande se podría cambiar la base de datos a una utilizando PostgreSQL. Pues, esta base de datos tiene un mejor rendimiento manejando grandes cantidades de datos, por lo cual se podría hacer varias consultas en paralelo con el fin de lograr la disminución del tiempo de respuesta.

