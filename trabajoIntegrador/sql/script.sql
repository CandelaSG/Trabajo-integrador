CREATE SCHEMA legoland;
USE legoland;
CREATE TABLE profiles(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(200) NOT NULL UNIQUE,
email VARCHAR(200) NOT NULL UNIQUE,
contrasenia VARCHAR(100) NOT NULL,
foto_perfil VARCHAR(100) NULL,
fecha_nacimiento DATE NOT NULL,
documento INT UNSIGNED NOT NULL,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE products(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(200) NOT NULL,
descripcion VARCHAR(500) NOT NULL,
foto VARCHAR(100) NULL,

id_profile INT UNSIGNED,

FOREIGN KEY (id_profile) REFERENCES profiles(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR(500) NOT NULL,

id_product INT UNSIGNED,
id_profile INT UNSIGNED,


FOREIGN KEY (id_product) REFERENCES products(id),
FOREIGN KEY (id_profile) REFERENCES profiles(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

-- Agregar usuarios
INSERT INTO profiles
VALUES (default,'Javier.estilos','javier@estilos.com','123javier','/images/users/harry.png','1994-02-01',38228098,default,default,default);
INSERT INTO profiles
VALUES (default,'El_Messias','el@messias.com','123messi','/images/users/messi.png','1987-06-24',27987234,default,default,default);
INSERT INTO profiles
VALUES (default,'Milanesa_de_carne','miladecarne@lamejor.com','sisoylamejor','/images/users/milanesa.png','1900-12-01',12567856,default,default,default);
INSERT INTO profiles
VALUES (default,'Alberto.f123','tito@fernandez.com','argentinacampeon3','/images/users/alberto.png','1980-12-06',20897880,default,default,default);
INSERT INTO profiles
VALUES (default,'WinniePooh_enojado','winnie@pooh.com','winnieenojado','/images/users/winnie.png','1950-12-16',22347680,default,default,default);

-- Agregar posteos
INSERT INTO products
VALUES (default,'Baby Yoda','Este modelo para construir (novedad en noviembre de 2020) captura todas las simpáticas características de este pequeño personaje de Star Wars™ tan popular, que cuenta con cabeza articulada, orejas móviles y boca ajustable para que adopte diferentes expresiones.','/images/products/babyYoda.png',default,default,default);
INSERT INTO products
VALUES (default,'Guitarra Fender','La guitarra cuenta con barra de trémolo articulada, selector de pastillas, clavijas de afinación, seis cuerdas, pegatinas con el logotipo de Fender® y correa textil. Los ladrillos incluidos te permiten construir la guitarra en rojo o en negro.','/images/products/fender.png', default,default,default);
INSERT INTO products
VALUES (default,'Ramo de flores','El Ramo de Flores ofrece un vibrante despliegue de colores e interesantes formas que se inspiran en flores reales como las rosas, las bocas de dragón, las amapolas, los ásteres, las margaritas y distintos tipos de follaje.','/images/products/flores.png',default,default,default);
INSERT INTO products
VALUES (default,'Globo Terráqueo','Maqueta de una esfera terrestre giratoria para exponer: Explora el mundo mientras construyes el set Globo Terráqueo, una detallada réplica LEGO® Ideas de una esfera terrestre retro','/images/products/globoTierra.png',default,default,default);
INSERT INTO products
VALUES (default,'Set Harry Potter','El set LEGO® Harry Potter™ Iconos de Hogwarts™ incluye artefactos icónicos: la varita y las gafas de Harry, una bandeja de pociones, el diario de Tom Riddle, la Snitch dorada, una bufanda de Hogwarts™, Hedwig™ portando una invitación a Hogwarts y mucho más.','/images/products/hedwig.png',default,default,default);
INSERT INTO products
VALUES (default,'Hulkbuster','El Hulkbuster LEGO® Marvel (76210) captura la magnitud y la potencia del Hulkbuster MK44 que aparece en Vengadores: La Era de Ultrón, la película de Marvel Studios.','/images/products/hulkbuster.png',default,default,default);
INSERT INTO products
VALUES (default,'Land Rover Classic','Déjate llevar por tu creatividad: Descubre el Land Rover Classic Defender 90 LEGO® Icons, un absorbente proyecto para constructores adultos que te permitirá crear, personalizar y exponer tu propio coche de colección','/images/products/landRover.png',default,default,default);
INSERT INTO products
VALUES (default,'Transbordador Espacial','Disfruta de horas de construcción envolvente mientras creas tanto el transbordador espacial Discovery como el telescopio espacial Hubble lanzado al espacio en 1990 durante la misión STS-31 de la NASA.','/images/products/naveNasa.png',default,default,default);
INSERT INTO products
VALUES (default,'Wall-E','Divertidos personajes robóticos: Figuras LEGO® BrickHeadz™ construibles para exponer de los personajes Disney•Pixar EVA y WALL•E (40619). Un regalo creativo para fans de la película o niños y niñas mayores con pasión por los robots','/images/products/wallE.png',default,default,default);
INSERT INTO products
VALUES (default,'Taj Mahal','La cripta con las tumbas de Mumtaz y Shah Jahan, la cámara central que alberga 2 cenotafios, los iwanes, la cúpula principal, los 4 chattris, los 4 minaretes y otros detalles de gran realismo se han recreado con minuciosidad al estilo LEGO®.','/images/products/tajMahal.png',default,default,default);

-- Agregar comentarios
-- Producto 1
INSERT INTO comments
VALUES (default,'Its the best product I have ever bought. I will always choose LEGOLAND before any other brand. Love -H',1,1);
INSERT INTO comments
VALUES (default,'',1,2);
INSERT INTO comments
VALUES (default,'',1,3);
INSERT INTO comments
VALUES (default,'',1,4);
-- Producto 2
INSERT INTO comments
VALUES (default,'',2,1);
INSERT INTO comments
VALUES (default,'',2,2);
INSERT INTO comments
VALUES (default,'',2,3);
INSERT INTO comments
VALUES (default,'',2,4);
-- Producto 3
INSERT INTO comments
VALUES (default,'',3,1);
INSERT INTO comments
VALUES (default,'',3,2);
INSERT INTO comments
VALUES (default,'',3,3);
INSERT INTO comments
VALUES (default,'',3,4);
-- Producto 4
INSERT INTO comments
VALUES (default,'',4,1);
INSERT INTO comments
VALUES (default,'',4,2);
INSERT INTO comments
VALUES (default,'',4,3);
INSERT INTO comments
VALUES (default,'',4,4);
-- Producto 5
INSERT INTO comments
VALUES (default,'',5,1);
INSERT INTO comments
VALUES (default,'',5,2);
INSERT INTO comments
VALUES (default,'',5,3);
INSERT INTO comments
VALUES (default,'',5,4);
-- Producto 6
INSERT INTO comments
VALUES (default,'',6,1);
INSERT INTO comments
VALUES (default,'',6,2);
INSERT INTO comments
VALUES (default,'',6,3);
INSERT INTO comments
VALUES (default,'',6,4);
-- Producto 7
INSERT INTO comments
VALUES (default,'',7,1);
INSERT INTO comments
VALUES (default,'',7,2);
INSERT INTO comments
VALUES (default,'',7,3);
INSERT INTO comments
VALUES (default,'',7,4);
-- Producto 8
INSERT INTO comments
VALUES (default,'',8,1);
INSERT INTO comments
VALUES (default,'',8,2);
INSERT INTO comments
VALUES (default,'',8,3);
INSERT INTO comments
VALUES (default,'',8,4);
-- Producto 9
INSERT INTO comments
VALUES (default,'',9,1);
INSERT INTO comments
VALUES (default,'',9,2);
INSERT INTO comments
VALUES (default,'',9,3);
INSERT INTO comments
VALUES (default,'',9,4);
-- Producto 10
INSERT INTO comments
VALUES (default,'',10,1);
INSERT INTO comments
VALUES (default,'',10,2);
INSERT INTO comments
VALUES (default,'',10,3);
INSERT INTO comments
VALUES (default,'',10,4);
