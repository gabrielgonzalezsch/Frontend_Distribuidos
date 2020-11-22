
![](https://i.ibb.co/sCHRR2w/front.png)

Direccion
http://142.93.127.0:3000/
##Definición de sistema distribuido

Los sistemas de distribución pueden definirse como el flujo secuencial de procedimientos, sistemas y actividades que están diseñados y vinculados para facilitar y monitorear el movimiento de bienes y servicios desde la fuente hasta el consumidor. Siendo este una colección de computadores independientes, y que para el usuario parecen ser un solo sistema coherente.

**Las ventajas que aporta este tipo de sistema son**
-  **Mejor tolerancia ante fallos:** Esta ventaja se relaciona con la forma en que se distribuyen los datos, haciendo uso de nodos encargados de almacenar y replicar la información del sistema, utilizando las la información duplicada para casos en que caiga uno de los nodos.
- **Mayor velocidad y procesamiento distribuido:** El procesamiento de las consultas se subdividen entre todos los nodos del sistema, lo que permite una mejor eficacia e impide la sobrecarga individuales de los nodos.
- **Escalabilidad:** En el caso de que se quiera mejorar el sistema, no es mandatorio mejorar la capacidad de procesamiento de los nodos, sino que es posible añadir un nuevo nodo al cluster con tal de cumplir el mismo objetivo.

**Las Desventajas que aporta este tipo de sistema son:**
- **Requiere alta gestión y mantención:** ya que las computadoras en un sistema pueden ser de diferentes tipos y ejecutar versiones diferentes a nivel de SO y aplicaciones.
- **Integridad de los datos y degradación de los servicios:** Se puede acceder al sistema desde diferentes computadoras, por lo que, el tráfico en la red, puede estar sujeto a escuchas indeseadas, como también a ataques informáticos.
- **Son sistemas impredecibles:** Ya que pueden pueden cambiar rápidamente, el tiempo requerido para responder a una petición de usuario puede variar dramáticamente, de una petición a otra.


## Características de un sistema distribuido

### Disponibilidad
Esta característica hace alusión a la facilitación de recursos remotos que se le entrega al usuario, basándose en la replicación de datos y procesos, de tal forma de que se continúe ofreciendo el servicio a pesar de la caída de uno o varios nodos. Lo anterior, determinará lo confiable que es el sistema en cuanto tolerancia a fallos.

### Transparencia 

Un sistema distribuido es transparente, cuando este es capaz de presentarse ante los usuarios y las aplicaciones como si fuese un sistema es ejecutado en una sola computadora, y esconder el hecho de estar formado cuyos procesos y recursos están distribuidos físicamente en varias computadoras. Por lo que, el usuario percibirá que el sistema es un todo y no varios componentes separados. Esta característica se conforma de 8 conceptos:  acceso, ubicación, migración, re-localización, replicación, concurrencia, fallas, persistencia.

### Apertura
Un sistema distribuido abierto es aquel que puede ofrecer servicios bajo reglas estándar (sintaxis y semántica), este se rige por los siguinetes aspectos:

- Interoperabilidad: Permite que procesos se comuniquen y generen implementaciones diferentes.
- Portabilidad: Extensiones que pueden ser usadas en otros sistemas.  
- Fácil extensión: Que permita poder agregar más componentes. 

### Escabilidad 

Hace referencia a la capacidad que tiene el sistema para adaptarse a los cambios en los requerimientos de rendimiento, a razón de la carga que tenga el sistema. Existen dos tipos de esacalabilidades:
Vertical: Esto hace alusión a aumentar las capacidades que tienen los nodos, mejorando el hardware por uno mas potente.
Horizontal: Por otro lado, esta hace referencia a aumentar la cantidad de nodos de un sistema, con tal de potenciar la capacidad del todo.


##Análisis de las características de un sistema distribuido.

### Disponibilidad
En la actualidad, el sistema implementado no cuenta con mecanismos que den soporte a la tolerancia a fallos, tales como la réplica de nodos y base de datos, de igual manera, tampoco existen herramientas que permitan balancear la carga. Para sustentar lo anterior, es necesario agregar servidores con tal de subdividir la carga, agregando un servidor dedicado para el manejo de la base de datos, otro para front y back.

###Transparencia
- #### Acceso:  
El uso de gestor de paquetes de node.js (npm), permite una fácil instalación en cuanto a las dependencias, y módulos necesarios para que funcione el sistema. Además, esta proporciona comandos que facilitan la inicialización.

- #### Ubicación
El sistema no presenta un dominio web implementado en base al protocolo DNS, ya que, el cliente trabaja directamente desde la dirección IP del servidor en el que se encuentra contenido el sistema, por lo que,  no cumple esta característica.

- #### Migración:
Esta característica no se presenta dentro del sistema, debido a que no existen mecanismos que permitan el cambio de ubicación de recursos, sin que se afecte la localización de los mismos.

- #### Re-Localizacion
Esta característica va de la mano con la característica de la ubicación dentro del sistema distribuido, por lo que al no estar implementado el protocolo DNS, el sistema no cuenta con la re-localización apta(ej: Roaming) a efectuar, debido al manejo de IPs sin redirección disponible.  

- #### Replicación
Este no cumple con esta característica, debido a que los recursos no se encuentran replicados dentro del sistema, como es el caso de la base de datos, en donde se almacena sólo una copia de los datos.

- #### Concurrencia
A través del objeto "Request" proporcionados por el framework express, al igual que el manejo de solicitudes y consultas con los objetos "await" y "Promise" proporcionado javascript, la concurrencia de solicitudes se da de forma transparente, sin denotar a los usuarios que están accediendo a un mismo recurso.   

- #### Falla
Esta característica se cumple, debido a que el sistema queda totalmente inutilizable para los casos de que falle uno de los componentes, haciendo totalmente visible cualquier fallo para el usuario.


### Apertura

El sistema debido a que se encuentra implementado bajo una arquitectura de API REST, esto permite que procesos se comuniquen y generen implementaciones diferentes, por lo que, se cumple el punto de Interoperabilidad. La modularización y estandarización en los distintos componentes usados (Backend: Nodejs Express y Frontend: ReactJs) logra que el sistema pueda ser desplegado en distintos sistemas operativos, por lo que, se cumple con el punto de Portabilidad, cabe mencionar, que este punto se podría mejorar con el uso e implementación de contenedores como docker. Se cumple con el punto de Fácil extensión, al hacer uso del Framework NodeJs como base de las capas integradas dentro del sistema (Backend y Frontend), esto permite que puedan agregarse distintos componentes y/o bibliotecas almacenadas dentro del repositorio npm. Por todo lo anterior mencionado, el sistema cumple con la característica de Apertura.

### Escalabilidad
- #### Horizontal
De por si, el sistema no cuenta con este tipo de escalabilidad, debido a que todo el proyecto se encuentra montado dentro de un Droplet, sin embargo, es posible crear droplets adicionales, separando Front, Back y Base de datos, esto con el fin de que cada tecnología disponga de su propios recursos.


- #### Vertical
Como el sistema se encuentra montado dentro de un Droplet de Digitalocean, es posible modificar la asignación de recursos a nivel Físico (Hardware), por lo que, es posible mejorar el rendimiento cuando sea necesario, por correspondencia, mejorar la escalabilidad vertical del sistema. 

## Test

Para analizar la capacidad de respuesta del servidor, se decidió utilizar la herramienta Artillery, la cual permite generar peticiones ficticias con tal de analizar el desempeño que tiene el sistema ante situaciones de carga. Para esto se generaron dos archivos de prueba, el primero trata de un request POST de un usuario ficticio, mientras que el segundo trata de una petición GET de los permisos que se encuentran en la base de datos. En ambos casos la duración es de 10 segundos, con una tasa de generación de 150 usuarios por segundo, los cual genera un total de 1500 usuarios ficticios por 10 segundos

**POST**
![](https://i.ibb.co/TvKThD1/post.png)
De las solicitudes, se desprenden los siguientes datos:
- De las 1500 solicitudes, se completaron exitosamente 1495, fallando aproximadamente en 0.4% de los casos.
- El tiempo promedio de respuesta fue de 3780.1 ms por solicitud, con una máxima de  39127.8 ms, y mínima 294.2 ms.

**GET**
![](https://i.ibb.co/NVnVS0Q/get.png)
De las solicitudes, se desprenden los siguientes datos:
- De las 1500 solicitudes, se completaron exitosamente 1320, fallando aproximadamente en 12% de los casos.
- El tiempo promedio de respuesta fue de 4874.8 ms por solicitud, con una máxima de 105406.3 ms y mínima de 301.3 ms
