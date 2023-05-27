CREATE SCHEMA legoland;
USE legoland;

-- Tabla perfiles
CREATE TABLE perfiles(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(200) NOT NULL UNIQUE,
email VARCHAR(200) NOT NULL UNIQUE,
contrasenia VARCHAR(100) NOT NULL,
foto_perfil VARCHAR(500) NULL,
fecha_nacimiento DATE NOT NULL,
documento INT UNSIGNED NOT NULL,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla productos
CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(200) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
foto VARCHAR(500) NULL,

id_perfil INT UNSIGNED,

FOREIGN KEY (id_perfil) REFERENCES perfiles(id),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla comentarios
CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
texto VARCHAR(500) NOT NULL,

id_producto INT UNSIGNED,
id_perfil INT UNSIGNED,


FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_perfil) REFERENCES perfiles(id),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Agregar usuarios
INSERT INTO perfiles
VALUES (default,'Javier.estilos','javier@estilos.com','123javier','/images/users/harry.png','1994-02-01',38228098,default,default);
INSERT INTO perfiles
VALUES (default,'El_Messias','el@messias.com','123messi','/images/users/messi.png','1987-06-24',27987234,default,default);
INSERT INTO perfiles
VALUES (default,'Milanesa_de_carne','miladecarne@lamejor.com','sisoylamejor','/images/users/milanesa.png','1900-12-01',12567856,default,default);
INSERT INTO perfiles
VALUES (default,'Alberto.f123','tito@fernandez.com','argentinacampeon3','/images/users/alberto.png','1980-12-06',20897880,default,default);
INSERT INTO perfiles
VALUES (default,'WinniePooh_enojado','winnie@pooh.com','winnieenojado','/images/users/winnie.png','1950-12-16',22347680,default,default);

-- Agregar posteos
INSERT INTO productos
VALUES (default,'Baby Yoda','Este modelo para construir (novedad en noviembre de 2020) captura todas las simpáticas características de este pequeño personaje de Star Wars™ tan popular, que cuenta con cabeza articulada, orejas móviles y boca ajustable para que adopte diferentes expresiones.','/images/products/babyYoda.png',1,default,default);
INSERT INTO productos
VALUES (default,'Guitarra Fender','La guitarra cuenta con barra de trémolo articulada, selector de pastillas, clavijas de afinación, seis cuerdas, pegatinas con el logotipo de Fender® y correa textil. Los ladrillos incluidos te permiten construir la guitarra en rojo o en negro.','/images/products/fender.png',1,default,default);
INSERT INTO productos
VALUES (default,'Ramo de flores','El Ramo de Flores ofrece un vibrante despliegue de colores e interesantes formas que se inspiran en flores reales como las rosas, las bocas de dragón, las amapolas, los ásteres, las margaritas y distintos tipos de follaje.','/images/products/flores.png',2,default,default);
INSERT INTO productos
VALUES (default,'Globo Terráqueo','Maqueta de una esfera terrestre giratoria para exponer: Explora el mundo mientras construyes el set Globo Terráqueo, una detallada réplica LEGO® Ideas de una esfera terrestre retro','/images/products/globoTierra.png',2,default,default);
INSERT INTO productos
VALUES (default,'Set Harry Potter','El set LEGO® Harry Potter™ Iconos de Hogwarts™ incluye artefactos icónicos: la varita y las gafas de Harry, una bandeja de pociones, el diario de Tom Riddle, la Snitch dorada, una bufanda de Hogwarts™, Hedwig™ portando una invitación a Hogwarts y mucho más.','/images/products/hedwig.png',3,default,default);
INSERT INTO productos
VALUES (default,'Hulkbuster','El Hulkbuster LEGO® Marvel (76210) captura la magnitud y la potencia del Hulkbuster MK44 que aparece en Vengadores: La Era de Ultrón, la película de Marvel Studios.','/images/products/hulkbuster.png',3,default,default);
INSERT INTO productos
VALUES (default,'Land Rover Classic','Déjate llevar por tu creatividad: Descubre el Land Rover Classic Defender 90 LEGO® Icons, un absorbente proyecto para constructores adultos que te permitirá crear, personalizar y exponer tu propio coche de colección','/images/products/landRover.png',4,default,default);
INSERT INTO productos
VALUES (default,'Transbordador Espacial','Disfruta de horas de construcción envolvente mientras creas tanto el transbordador espacial Discovery como el telescopio espacial Hubble lanzado al espacio en 1990 durante la misión STS-31 de la NASA.','/images/products/naveNasa.png',4,default,default);
INSERT INTO productos
VALUES (default,'Wall-E','Divertidos personajes robóticos: Figuras LEGO® BrickHeadz™ construibles para exponer de los personajes Disney•Pixar EVA y WALL•E (40619). Un regalo creativo para fans de la película o niños y niñas mayores con pasión por los robots','/images/products/wallE.png',5,default,default);
INSERT INTO productos
VALUES (default,'Taj Mahal','La cripta con las tumbas de Mumtaz y Shah Jahan, la cámara central que alberga 2 cenotafios, los iwanes, la cúpula principal, los 4 chattris, los 4 minaretes y otros detalles de gran realismo se han recreado con minuciosidad al estilo LEGO®.','/images/products/tajMahal.png',5,default,default);

-- Agregar comentarios
-- Producto 1
INSERT INTO comentarios
VALUES (default,'Its the best product I have ever bought. I will always choose LEGOLAND before any other brand. Love -H',1,1,default,default);
INSERT INTO comentarios
VALUES (default,'Mateo, Ciro y Thiago adoran sus juguetes de LEGOLAND. Gracias por su atención, soy cliente fijo, los amo!! :)',1,2,default,default);
INSERT INTO comentarios
VALUES (default,'Increible producto, me gustaría que hicieran uno de milanesas con puré, yummy!!',1,3,default,default);
INSERT INTO comentarios
VALUES (default,'Por culpa de que compré muchos de sus productos aumentó la deuda externa del país, espero que quede entre nosotros.',1,4,default,default);
-- Producto 2
INSERT INTO comentarios
VALUES (default,'Es justo lo que esperaba, todo completo sin fallas.',2,1,default,default);
INSERT INTO comentarios
VALUES (default,'Genial!! lo amamos!!! nos encantó el producto.',2,2,default,default);
INSERT INTO comentarios
VALUES (default,'Excelente, es de marca lego original. Perfecto encastre.',2,3,default,default);
INSERT INTO comentarios
VALUES (default,'Excelente, pequeñas las piezas pero hermoso igual que en la caja.',2,4,default,default);
-- Producto 3
INSERT INTO comentarios
VALUES (default,'Es perfecto!!!, igual a la imagen de la caja.',3,1,default,default);
INSERT INTO comentarios
VALUES (default,'Hermosos legos, fascinada!!!!.',3,2,default,default);
INSERT INTO comentarios
VALUES (default,'Excelente!.',3,3,default,default);
INSERT INTO comentarios
VALUES (default,'Didáctico y entretenido. Es para todas las edades. Lo armó mi hija de 6 años.',3,4,default,default);
-- Producto 4
INSERT INTO comentarios
VALUES (default,'Muy bueno, era lo que pedimos.',4,1,default,default);
INSERT INTO comentarios
VALUES (default,'Hermoso producto, muy recomendable.',4,2,default,default);
INSERT INTO comentarios
VALUES (default,'Muy bueno!.',4,3,default,default);
INSERT INTO comentarios
VALUES (default,'Los legos no fallan.',4,4,default,default);
-- Producto 5
INSERT INTO comentarios
VALUES (default,'Muy buena.',5,1,default,default);
INSERT INTO comentarios
VALUES (default,'Impecable, muy entretenido.',5,2,default,default);
INSERT INTO comentarios
VALUES (default,'Buen producto excelente calidad.',5,3,default,default);
INSERT INTO comentarios
VALUES (default,'A mí hijo le encanto.',5,4,default,default);
-- Producto 6
INSERT INTO comentarios
VALUES (default,'Muy buen producto y calidad. Lo recomiendo.',6,1,default,default);
INSERT INTO comentarios
VALUES (default,'Mi ahijado ya lo armó y lo tiene en su colección de legos, compra fácil y rápida.',6,2,default,default);
INSERT INTO comentarios
VALUES (default,'Hermoso. Super recomendables. Excelente.',6,3,default,default);
INSERT INTO comentarios
VALUES (default,'Muy lindo, les encantó. Un poco pequeños, pero igual lo disfrutaron.',6,4,default,default);
-- Producto 7
INSERT INTO comentarios
VALUES (default,'Excelente producto, mí hijo feliz.',7,1,default,default);
INSERT INTO comentarios
VALUES (default,'Muy bueno. Excelente relacion precio. Calidad.',7,2,default,default);
INSERT INTO comentarios
VALUES (default,'Muy entretenido para los chicos.',7,3,default,default);
INSERT INTO comentarios
VALUES (default,'Es un producto que nunca falla. Le encanto. Lo mejor entre una figura super cara y un lego. Son lo mejor.',7,4,default,default);
-- Producto 8
INSERT INTO comentarios
VALUES (default,'Muy bueno. Excelente el producto.',8,1,default,default);
INSERT INTO comentarios
VALUES (default,'Como todos los productos de la marca, de una calidad inigualable.',8,2,default,default);
INSERT INTO comentarios
VALUES (default,'Todo perfecto!. Excelente!.',8,3,default,default);
INSERT INTO comentarios
VALUES (default,'Muy bueno, era lo que pedimos.',8,4,default,default);
-- Producto 9
INSERT INTO comentarios
VALUES (default,'Muy buen producto como ya es costumbre en lego. Calidad e ingenio en cada uno de sus productos.',9,1,default,default);
INSERT INTO comentarios
VALUES (default,'Excelente producto. Todo sellado,no falto ninguna pieza.',9,2,default,default);
INSERT INTO comentarios
VALUES (default,'Exelente producto.',9,3,default,default);
INSERT INTO comentarios
VALUES (default,'Espectacular! los detalles son hermosos. Encantaron!!!.',9,4,default,default);
-- Producto 10
INSERT INTO comentarios
VALUES (default,'Excelente producto.',10,1,default,default);
INSERT INTO comentarios
VALUES (default,'Todo genial, muchas gracias.',10,2,default,default);
INSERT INTO comentarios
VALUES (default,'Perfecto, excelente estado. Una maravilla.',10,3,default,default);
INSERT INTO comentarios
VALUES (default,'Espectacular ! calidad lego. Súper divertido.',10,4,default,default);
