# Repaso M2 | Breaking Bad App

Para este proyecto estaremos consumiendo los datos que nos ofrece la API de Breaking Bad. La idea general va a ser obtener info de la API, guardarla en el store de Redux y renderizar dicha info con React.

El enlace de la API es el siguiente: https://www.breakingbadapi.com

## Objetivos del Proyecto

- Construir una App utilizando React, Redux, y React Router DOM.
- Afirmar y conectar los conceptos aprendidos en el M2.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

## Comenzando

1. Forkear el repositorio para tener una copia del mismo en sus cuentas
2. Clonar el repositorio en sus computadoras para comenzar a trabajar

# Jerarquía de componentes

## App

El componente App va a ser el lugar donde vamos a definir las rutas y la barra de navegación. Las rutas serán las siguientes:

- **"/":** Renderizaremos una landing page.
- **"/characters":** Renderizaremos una lista de todos los personajes.
- **"/characters/:id":** Renderizaremos la información de cada personaje.
- **"/favs":** Renderizaremos una lista de los personajes favoritos.

## Home

En el componente Home solo renderizaremos un titulo y un botón que nos redireccionará al componente Characters.

## Characters

En el componente Characters debemos obtener todos los personajes de la API y renderizar sus nombres.

## Character

En el componente Character debemos obtener los datos de un personaje especifico utilizando su ID y mostrarlos por pantalla.

## CharactersFav

En el componente CharactersFav debemos obtener los personajes que hemos agregado como favoritos y renderizar los nombres de los mismos.

## TAs (Teaching Asistants)

- **José Mella**
- **Leandro Morales**
