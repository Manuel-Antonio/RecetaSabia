import { Producto } from "../models/producto";

const productos : Producto[] = [
    // Para Categoria Desayuno
    new Producto(1,'Panqueques con sirope de arce', 'Deliciosos panqueques esponjosos con sirope de arce. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709709/RecetaSabia/Desayuno/Panqueques_con_sirope_de_arce_a9bdnv.jpg', 9.99, 20, 1, 'Harina (2 tazas), huevos (2 unidades), leche (1 taza), sirope de arce (al gusto)', '1. Mezclar 2 tazas de harina con 2 huevos y 1 taza de leche. 2. Cocinar en sartén hasta que estén dorados. 3. Servir con sirope de arce.', 2),
    new Producto(2,'Acai Bowl', 'Bowl nutritivo con puré de acai, granola y frutas frescas. Perfecto para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709626/RecetaSabia/Desayuno/Acai_Bowl_sx8plv.jpg', 12.99, 15, 1, 'Puré de acai (1 taza), granola (1/2 taza), plátano (1 unidad), fresas (1/2 taza)', '1. Mezclar 1 taza de puré de acai con 1/2 taza de granola. 2. Decorar con 1 plátano y 1/2 taza de fresas.', 1),
    new Producto(3,'Huevos revueltos con aguacate', 'Desayuno clásico con huevos revueltos y aguacate. Suficiente para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709710/RecetaSabia/Desayuno/Huevos_revueltos_con_aguacate_fzdm5n.jpg', 8.99, 18, 1, 'Huevos (3 unidades), aguacate (1 unidad), sal (al gusto), pimienta (al gusto)', '1. Batir 3 huevos y cocinar revolviendo. 2. Agregar 1 aguacate y sazonar al gusto.', 1),
    new Producto(4,'Muffins de arándanos', 'Muffins esponjosos con arándanos frescos. Receta para 12 muffins', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709708/RecetaSabia/Desayuno/Muffins_de_ar%C3%A1ndanos_cvf267.jpg', 6.99, 25, 1, 'Harina (2 tazas), azúcar (1 taza), arándanos (1 taza), huevos (2 unidades)', '1. Mezclar 2 tazas de harina con 1 taza de azúcar. 2. Agregar 2 huevos y 1 taza de arándanos. 3. Hornear hasta que estén dorados.', 12),
    new Producto(5,'Batido de plátano y espinacas', 'Batido verde con plátano, espinacas y leche de almendras. Suficiente para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709672/RecetaSabia/Desayuno/Batido_de_pl%C3%A1tano_y_espinacas_ecfidv.jpg', 7.99, 30, 1, 'Plátano (1 unidad), espinacas (1 taza), leche de almendras (1 taza)', '1. Mezclar 1 plátano, 1 taza de espinacas y 1 taza de leche de almendras. 2. Batir hasta obtener una consistencia suave.', 1),
    new Producto(6,'Tostadas francesas con frutas', 'Tostadas francesas cubiertas con frutas frescas y jarabe. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709711/RecetaSabia/Desayuno/Tostadas_francesas_con_frutas_vtjplg.jpg', 10.99, 22, 1, 'Pan (4 rebanadas), huevo (2 unidades), leche (1 taza), frutas (al gusto), jarabe (al gusto)', '1. Remojar 4 rebanadas de pan en mezcla de 2 huevos y 1 taza de leche. 2. Cocinar en sartén. 3. Servir con frutas y jarabe.', 2),
    new Producto(7,'Yogurt con granola y bayas', 'Yogurt natural con granola crujiente y bayas. Perfecto para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709709/RecetaSabia/Desayuno/Yogurt_con_granola_y_bayas_tpoyci.jpg', 5.99, 28, 1, 'Yogurt natural (1 taza), granola (1/2 taza), bayas (al gusto)', '1. Colocar 1 taza de yogurt natural en un tazón. 2. Agregar 1/2 taza de granola y bayas al gusto.', 1),
    new Producto(8,'Sandwich de aguacate y huevo', 'Sandwich saludable con aguacate, huevo y espinacas. Suficiente para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709710/RecetaSabia/Desayuno/Sandwich_de_aguacate_y_huevo_weedqi.jpg', 11.99, 20, 1, 'Pan integral (2 rebanadas), aguacate (1 unidad), huevo (1 unidad), frijoles (1/2 taza), queso (1/4 taza)', '1. Cocinar huevo y frijoles. 2. Rellenar tortilla con huevo, frijoles y queso.', 1),
    new Producto(9,'Café americano', 'Café negro tradicional americano. Perfecto para 1 taza', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709625/RecetaSabia/Desayuno/American_coffee_t59kp2.jpg', 2.99, 50, 1, 'Café molido, agua', '1. Preparar café molido con agua caliente.', 1),
    new Producto(10,'Burrito de desayuno', 'Burrito relleno con huevo, frijoles y queso', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700709709/RecetaSabia/Desayuno/Burrito_de_desayuno_opb7wu.jpg', 9.99, 15, 1, 'Tortilla de harina (1 unidad), huevo (1 unidad), frijoles (1/2 taza), queso (1/4 taza)', '1. Cocinar huevo y frijoles. 2. Rellenar tortilla con huevo, frijoles y queso.', 1),
    
    // Para Categoria Almuerzo
    
    new Producto(11,'Pollo a la parrilla con papas', 'Jugoso pollo asado a la parrilla con papas doradas. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716868/RecetaSabia/Almuerzo/Pollo_a_la_parrilla_con_papas_piboon.jpg', 13.99, 18, 2, 'Pechuga de pollo (2 unidades), papas (4 unidades), sal, pimienta, aceite de oliva', '1. Condimentar las pechugas de pollo con sal y pimienta. 2. Asar a la parrilla hasta que estén cocidas. 3. Cocinar las papas en rodajas con aceite de oliva hasta que estén doradas.',2),
    new Producto(12,'Ensalada César con pollo', 'Ensalada clásica César con trozos de pollo a la parrilla. Suficiente para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Ensalada_C%C3%A9sar_con_pollo_wtbnut.jpg', 11.99, 20, 2, 'Pechuga de pollo (1 unidad), lechuga romana, crutones, queso parmesano, aderezo César', '1. Asar la pechuga de pollo y cortar en trozos. 2. Mezclar con lechuga, crutones y queso parmesano. 3. Aderezar con aderezo César.',2),
    new Producto(13,'Wrap de pollo y aguacate', 'Wrap delicioso con tiras de pollo, aguacate y aderezo ranchero. Perfecto para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716868/RecetaSabia/Almuerzo/Wrap_de_pollo_y_aguacate_ejwl01.jpg', 10.99, 22, 2, 'Pechuga de pollo (1 unidad), aguacate (1/2 unidad), tortilla de harina, aderezo ranchero', '1. Cocinar y cortar la pechuga de pollo en tiras. 2. Rellenar una tortilla con el pollo, aguacate y aderezo ranchero.',1),
    new Producto(14,'Hamburguesa gourmet', 'Hamburguesa gourmet con queso, champiñones y salsa especial. Ideal para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Hamburguesa_gourmet_sz9bvb.jpg', 15.99, 15, 2, 'Carne de res molida, queso suizo, champiñones, pan de hamburguesa, salsa especial', '1. Cocinar la carne de res y montar la hamburguesa con queso, champiñones y salsa especial.',1),
    new Producto(15,'Pasta primavera', 'Pasta con una mezcla fresca de verduras de temporada. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Pasta_primavera_xcjfap.jpg', 12.99, 25, 2, 'Pasta (250 g), brócoli, zanahorias, guisantes, aceite de oliva, ajo, sal, pimienta', '1. Cocinar la pasta. 2. Saltear las verduras en aceite de oliva y ajo. 3. Mezclar con la pasta cocida.',2),
    new Producto(16,'Sopa de tomate y albahaca', 'Sopa reconfortante con tomate fresco y albahaca. Suficiente para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Sopa_de_tomate_y_albahaca_bdlsru.jpg', 8.99, 30, 2, 'Tomates (1 kg), cebolla, ajo, caldo de verduras, albahaca fresca, sal, pimienta', '1. Sofreír cebolla y ajo. 2. Agregar tomates y caldo. 3. Cocinar hasta que los tomates estén tiernos. 4. Mezclar con albahaca y sazonar.',4),
    new Producto(17,'Tacos de pescado', 'Tacos sabrosos rellenos de pescado fresco y salsa de mango. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Tacos_de_pescado_k9xpiz.jpg', 14.99, 20, 2, 'Filetes de pescado blanco (2 unidades), tortillas de maíz, repollo rallado, salsa de mango', '1. Cocinar el pescado y desmenuzar. 2. Rellenar las tortillas con el pescado, repollo rallado y salsa de mango.',2),
    new Producto(18,'Arroz frito con verduras', 'Arroz salteado con una variedad de verduras frescas. Receta para 3 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716867/RecetaSabia/Almuerzo/Arroz_frito_con_verduras_hpwsi0.jpg', 9.99, 28, 2, 'Arroz (1 taza), zanahorias, guisantes, cebolla, pimiento, aceite de sésamo, salsa de soja', '1. Cocinar el arroz. 2. Saltear las verduras en aceite de sésamo. 3. Mezclar con el arroz y añadir salsa de soja.',3),
    new Producto(19,'Pizza margarita', 'Pizza clásica con tomate, mozzarella y albahaca fresca. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716868/RecetaSabia/Almuerzo/Pizza_margarita_arpy3l.jpg', 16.99, 15, 2, 'Masa de pizza, salsa de tomate, mozzarella, tomates cherry, albahaca fresca', '1. Extender la masa y agregar salsa de tomate y mozzarella. 2. Decorar con tomates cherry y albahaca fresca. 3. Hornear hasta que la masa esté dorada.',2),
    new Producto(20,'Ensalada de quinoa y aguacate', 'Ensalada saludable con quinoa, aguacate y aderezo de limón. Suficiente para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700716868/RecetaSabia/Almuerzo/Quinoa_and_avocado_salad_nfc2u1.jpg', 10.99, 20, 2, 'Quinoa (1 taza), aguacate (1 unidad), pepino, tomate, aderezo de limón', '1. Cocinar la quinoa. 2. Mezclar con aguacate, pepino y tomate. 3. Aderezar con el aderezo de limón.',2),

    // Para Categoria Cena

    new Producto(21,'Salmón al horno con vegetales', 'Filete de salmón asado al horno con una mezcla de vegetales. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Salm%C3%B3n_al_horno_con_vegetales_ovbtik.jpg', 17.99, 20, 3, 'Filete de salmón (2 unidades), zanahorias, brócoli, aceite de oliva, limón, sal, pimienta', '1. Condimentar el salmón con sal, pimienta y limón. 2. Colocar en una bandeja con zanahorias y brócoli. 3. Asar al horno.',2),
    new Producto(22,'Pasta Alfredo con pollo', 'Pasta con salsa Alfredo cremosa y trozos de pollo tierno. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Pasta_Alfredo_con_pollo_ccflje.jpg', 13.99, 18, 3, 'Pasta (250 g), pechuga de pollo (1 unidad), crema, queso parmesano, ajo, mantequilla', '1. Cocinar la pasta. 2. Saltear trozos de pechuga de pollo en mantequilla y ajo. 3. Mezclar con la pasta y salsa Alfredo.',2),
    new Producto(23,'Ensalada de rúcula y parmesano', 'Ensalada fresca con rúcula, queso parmesano y aderezo balsámico. Suficiente para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Arugula_and_Parmesan_Salad_u5lcwx.jpg', 11.99, 22, 3, 'Rúcula, queso parmesano, tomates cherry, aceite de oliva, vinagre balsámico, sal, pimienta', '1. Mezclar rúcula, queso parmesano y tomates cherry. 2. Aliñar con aceite de oliva, vinagre balsámico, sal y pimienta.',2),
    new Producto(24,'Lasaña vegetariana', 'Lasaña gratinada con capas de verduras y queso. Ideal para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Lasa%C3%B1a_vegetariana_mpbca1.jpg', 14.99, 15, 3, 'Láminas de lasaña, berenjenas, calabacines, tomates, queso ricotta, queso mozzarella, salsa de tomate', '1. Cocinar las láminas de lasaña y cortar las verduras en rodajas. 2. Armar capas con lasaña, verduras, queso ricotta y salsa de tomate. 3. Gratinar en el horno.',4),
    new Producto(25,'Sopa de champiñones', 'Sopa reconfortante con champiñones frescos y hierbas aromáticas. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717790/RecetaSabia/Cena/Sopa_de_champi%C3%B1ones_lhbekh.jpg', 8.99, 25, 3, 'Champiñones (500 g), cebolla, ajo, caldo de verduras, crema, tomillo, perejil, sal, pimienta', '1. Saltear cebolla y ajo. 2. Agregar champiñones y caldo de verduras. 3. Cocinar hasta que los champiñones estén tiernos. 4. Añadir crema y hierbas aromáticas.',4),
    new Producto(26,'Brochetas de ternera con salsa teriyaki', 'Brochetas de ternera marinadas con salsa teriyaki y asadas. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Brochetas_de_ternera_con_salsa_teriyaki_kjlxlj.jpg', 15.99, 20, 3, 'Filete de ternera (300 g), salsa teriyaki, pimientos, cebolla, aceite de sésamo', '1. Cortar la ternera en cubos y marinar en salsa teriyaki. 2. Enhebrar en brochetas con pimientos y cebolla. 3. Asar las brochetas.',2),
    new Producto(27,'Ceviche de camarones', 'Ceviche fresco con camarones, limón y aguacate. Suficiente para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717788/RecetaSabia/Cena/Ceviche_de_camarones_kkg5to.jpg', 12.99, 22, 3, 'Camarones (200 g), limón, cilantro, cebolla morada, aguacate, tomate, jalapeño', '1. Cocinar los camarones en jugo de limón. 2. Mezclar con cilantro, cebolla morada, aguacate, tomate y jalapeño.',2),
    new Producto(28,'Hummus con crudités', 'Hummus casero con bastones de verduras frescas. Ideal para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717788/RecetaSabia/Cena/Hummus_con_crudit%C3%A9s_sqh2oi.jpg', 7.99, 30, 3, 'Garbanzos cocidos (1 lata), tahini, ajo, limón, aceite de oliva, zanahorias, pepino, apio', '1. Mezclar garbanzos, tahini, ajo, limón y aceite de oliva en una licuadora. 2. Servir con bastones de zanahorias, pepino y apio.',4),
    new Producto(29,'Pizza de vegetales asados', 'Pizza con una mezcla de vegetales asados y queso derretido. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Pizza_de_vegetales_asados_pnbrjy.jpg', 16.99, 18, 3, 'Masa de pizza, berenjenas, calabacines, pimientos, tomates, queso mozzarella', '1. Asar las verduras y extender sobre la masa de pizza. 2. Agregar queso mozzarella. 3. Hornear hasta que la masa esté dorada.',2),
    new Producto(30,'Arroz con curry de pollo', 'Arroz con curry de pollo, verduras y leche de coco. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700717789/RecetaSabia/Cena/Rice_with_chicken_curry_f3xfku.jpg', 14.99, 20, 3, 'Muslos de pollo (2 unidades), arroz (1 taza), curry en polvo, cebolla, zanahorias, leche de coco', '1. Cocinar los muslos de pollo y cortar en trozos. 2. Saltear cebolla y zanahorias con curry. 3. Mezclar con arroz y leche de coco.',2),

    // Para Categoria Postres

    new Producto(31,'Tarta de manzana', 'Deliciosa tarta de manzana con crujiente de canela. Perfecto para 8 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719140/RecetaSabia/Postres/Tarta_de_manzana_tflzw6.jpg', 14.99, 15, 4, 'Manzanas (4 unidades), azúcar, canela, harina, mantequilla', '1. Pelar y cortar las manzanas en rodajas finas. 2. Mezclar con azúcar y canela. 3. Colocar sobre masa de tarta y hornear hasta que esté dorado.',8),
    new Producto(32,'Helado de chocolate y avellanas', 'Helado cremoso de chocolate con trozos de avellanas. Receta para 6 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Helado_de_chocolate_y_avellanas_n2hdft.jpg', 8.99, 25, 4, 'Helado de chocolate (500 ml), avellanas (1 taza)', '1. Triturar las avellanas. 2. Mezclar con helado de chocolate. 3. Congelar hasta que esté firme.',6),
    new Producto(33,'Brownies con nueces', 'Brownies decadentes con nueces crujientes. Receta para 12 brownies', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Brownies_con_nueces_ojmaur.jpg', 10.99, 20, 4, 'Chocolate (200 g), mantequilla, azúcar, huevos (3 unidades), harina, nueces (1 taza)', '1. Derretir chocolate y mantequilla. 2. Batir con azúcar y huevos. 3. Agregar harina y nueces. 4. Hornear hasta que esté firme.',12),
    new Producto(34,'Crepes de fresa y crema', 'Crepes rellenos con fresas frescas y crema batida. Ideal para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Crepes_de_fresa_y_crema_msp3ed.jpg', 12.99, 18, 4, 'Harina, leche, huevos (2 unidades), fresas (1 taza), crema batida', '1. Mezclar harina, leche y huevos para hacer la masa de crepes. 2. Rellenar con fresas y crema batida.',4),
    new Producto(35,'Mousse de mango', 'Mousse ligero y afrutado con puré de mango. Receta para 4 porciones', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719140/RecetaSabia/Postres/Mango_mousse_wbl1m3.jpg', 9.99, 30, 4, 'Mangos maduros (2 unidades), azúcar, gelatina sin sabor, crema batida', '1. Hacer puré de mango. 2. Mezclar con azúcar y gelatina disuelta. 3. Incorporar crema batida. 4. Refrigerar hasta que cuaje.',4),
    new Producto(36,'Pastel de queso con frutas del bosque', 'Pastel de queso con una capa de frutas del bosque frescas. Perfecto para 10 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Pastel_de_queso_con_frutas_del_bosque_hsh1bt.jpg', 16.99, 15, 4, 'Galletas trituradas, mantequilla, queso crema, azúcar, huevos (3 unidades), frutas del bosque', '1. Mezclar galletas trituradas con mantequilla y forrar un molde. 2. Batir queso crema, azúcar y huevos. 3. Verter sobre la base y hornear. 4. Decorar con frutas del bosque.',10),
    new Producto(37,'Galletas de avena y pasas', 'Galletas suaves de avena con pasas jugosas. Receta para 24 galletas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719140/RecetaSabia/Postres/Oatmeal_and_raisin_cookies_slii0e.jpg', 6.99, 35, 4, 'Avena, harina, azúcar, mantequilla, huevo, pasas (1 taza)', '1. Mezclar avena, harina, azúcar y mantequilla. 2. Agregar huevo y pasas. 3. Hornear hasta que estén doradas.',24),
    new Producto(38,'Tiramisú clásico', 'Postre italiano con capas de bizcocho, café y mascarpone. Suficiente para 8 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Classic_tiramisu_k76m9r.jpg', 15.99, 12, 4, 'Bizcochos de soletilla, café, huevos (4 unidades), azúcar, mascarpone, cacao en polvo', '1. Mojar los bizcochos en café. 2. Batir y mezclar huevos, azúcar y mascarpone. 3. Armar capas y espolvorear con cacao.',8),
    new Producto(39,'Helado de vainilla con caramelo', 'Helado cremoso de vainilla con remolinos de caramelo. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Helado_de_vainilla_con_caramelo_goq1ls.jpg', 7.99, 28, 4, 'Helado de vainilla (500 ml), caramelo líquido', '1. Agregar remolinos de caramelo al helado de vainilla. 2. Mezclar suavemente. 3. Servir.',4),
    new Producto(40,'Tarta de chocolate triple', 'Tarta rica y decadente con capas de chocolate oscuro, blanco y con leche. Perfecto para 12 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700719139/RecetaSabia/Postres/Triple_chocolate_cake_iycpnm.jpg', 18.99, 10, 4, 'Chocolate oscuro (200 g), chocolate blanco (200 g), chocolate con leche (200 g), azúcar, mantequilla', '1. Derretir cada tipo de chocolate con mantequilla y azúcar. 2. Verter en capas sobre una base de tarta. 3. Refrigerar hasta que esté firme.',12),

    // Para Categoria Vegetariano

    new Producto(41,'Berenjenas rellenas de quinoa', 'Berenjenas asadas rellenas de quinoa y vegetales. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721187/RecetaSabia/Vegetariano/Berenjenas_rellenas_de_quinoa_z4vetn.jpg', 12.99, 18, 5, 'Berenjenas (4 unidades), quinoa, pimientos, cebolla, tomate, aceite de oliva', '1. Cortar las berenjenas por la mitad y vaciar. 2. Cocinar la quinoa y mezclar con pimientos, cebolla y tomate. 3. Rellenar las berenjenas y asar al horno.',4),
    new Producto(42,'Ensalada caprese', 'Ensalada fresca con tomate, mozzarella y albahaca. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721187/RecetaSabia/Vegetariano/Ensalada_caprese_xjrerf.jpg', 10.99, 20, 5, 'Tomates (4 unidades), mozzarella, albahaca fresca, aceite de oliva, vinagre balsámico', '1. Cortar los tomates y la mozzarella en rodajas. 2. Alternar capas con hojas de albahaca. 3. Aliñar con aceite de oliva y vinagre balsámico.',2),
    new Producto(43,'Curry de lentejas', 'Curry vegetariano con lentejas, verduras y leche de coco. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721188/RecetaSabia/Vegetariano/Curry_de_lentejas_d5hbnu.jpg', 14.99, 22, 5, 'Lentejas (1 taza), zanahorias, coliflor, guisantes, cebolla, leche de coco, curry en polvo', '1. Cocinar las lentejas y reservar. 2. Saltear las verduras con curry en polvo. 3. Agregar las lentejas y la leche de coco. 4. Cocinar hasta que las verduras estén tiernas.',4),
    new Producto(44,'Hamburguesa de portobello', 'Hamburguesa vegetariana con portobello a la parrilla. Receta para 2 hamburguesas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721188/RecetaSabia/Vegetariano/Hamburguesa_de_portobello_cexs0w.jpg', 11.99, 15, 5, 'Portobello (2 unidades), pan de hamburguesa, queso suizo, lechuga, tomate, mayonesa', '1. Asar los portobellos a la parrilla. 2. Armar las hamburguesas con pan, queso, lechuga y tomate. 3. Agregar mayonesa al gusto.',2),
    new Producto(45,'Wrap de falafel', 'Wrap delicioso con falafel, hummus y verduras frescas. Receta para 2 wraps', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721188/RecetaSabia/Vegetariano/Wrap_de_falafel_cz5j0i.jpg', 9.99, 25, 5, 'Falafel (8 unidades), tortillas de trigo, hummus, pepino, tomate, lechuga', '1. Calentar las tortillas y distribuir el falafel. 2. Agregar hummus, pepino, tomate y lechuga. 3. Envolver y disfrutar.',2),
    new Producto(46,'Bowl de garbanzos y aguacate', 'Bowl saludable con garbanzos, aguacate y aderezo de limón. Receta para 2 bowls', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721187/RecetaSabia/Vegetariano/Bowl_de_garbanzos_y_aguacate_pmi6bo.jpg', 12.99, 20, 5, 'Garbanzos cocidos (1 lata), aguacate, tomate cherry, pepino, aderezo de limón', '1. Mezclar garbanzos, aguacate, tomate cherry y pepino. 2. Aderezar con el aderezo de limón.',2),
    new Producto(47,'Pizza vegetariana', 'Pizza con una variedad de verduras frescas y queso derretido. Perfecta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721189/RecetaSabia/Vegetariano/Pizza_vegetariana_ttgjwy.jpg', 13.99, 22, 5, 'Masa de pizza, pimientos, cebolla, champiñones, aceitunas, tomate, queso mozzarella', '1. Extender la masa y agregar las verduras cortadas en rodajas. 2. Hornear hasta que la masa esté dorada.',2),
    new Producto(48,'Sopa de calabaza', 'Sopa cremosa de calabaza con crujientes de semillas de calabaza. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721188/RecetaSabia/Vegetariano/Sopa_de_calabaza_ub2zrj.jpg', 8.99, 28, 5, 'Calabaza (1 unidad), cebolla, caldo de verduras, crema, semillas de calabaza', '1. Cocinar la calabaza y la cebolla en caldo de verduras. 2. Licuar hasta obtener una mezcla suave. 3. Agregar crema y decorar con semillas de calabaza.',4),
    new Producto(49,'Tacos de coliflor', 'Tacos con coliflor crujiente, guacamole y salsa picante. Receta para 4 tacos', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721188/RecetaSabia/Vegetariano/Tacos_de_coliflor_jfax3l.jpg', 10.99, 30, 5, 'Coliflor, tortillas de maíz, guacamole, salsa picante, cilantro', '1. Cortar la coliflor en floretes y hornear hasta que estén crujientes. 2. Rellenar las tortillas con coliflor, guacamole, salsa picante y cilantro.',4),
    new Producto(50,'Ensalada de quinoa y aguacate', 'Ensalada saludable con quinoa, aguacate y aderezo de cilantro. Perfecta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700721189/RecetaSabia/Vegetariano/Ensalada_de_quinoa_y_aguacate_sdqmma.jpg', 11.99, 25, 5, 'Quinoa, aguacate, tomate, pepino, aderezo de cilantro', '1. Cocinar la quinoa. 2. Mezclar con aguacate, tomate y pepino. 3. Aderezar con el aderezo de cilantro.',2),

    // Para Categoria Vegano

    new Producto(51,'Bowl de batata y garbanzos', 'Bowl vegano con batata asada, garbanzos y alioli vegano. Receta para 2 bowls', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752657/RecetaSabia/Vegano/Bowl_de_batata_y_garbanzos_gay5n1.jpg', 14.99, 18, 6, 'Batata, garbanzos cocidos, aceite de oliva, ajo, limón', '1. Asar la batata y los garbanzos con aceite de oliva. 2. Preparar alioli vegano mezclando ajo triturado con limón y aceite de oliva. 3. Servir en bowls.',2),
    new Producto(52,'Ensalada de quinoa y aguacate', 'Ensalada fresca con quinoa, aguacate y aderezo de limón. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752657/RecetaSabia/Vegano/Ensalada_de_quinoa_y_aguacate_oizffw.jpg', 11.99, 20, 6, 'Quinoa, aguacate, tomate, pepino, aderezo de limón', '1. Cocinar la quinoa. 2. Mezclar con aguacate, tomate y pepino. 3. Aderezar con el aderezo de limón.',2),
    new Producto(53,'Tacos de jackfruit', 'Tacos veganos con jackfruit marinado y guarniciones frescas. Receta para 4 tacos', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752659/RecetaSabia/Vegano/Tacos_de_jackfruit_s1jzsl.jpg', 12.99, 22, 6, 'Jackfruit marinado, tortillas de maíz, repollo rallado, aguacate, cilantro', '1. Cocinar el jackfruit marinado. 2. Rellenar tortillas con jackfruit, repollo rallado, aguacate y cilantro.',4),
    new Producto(54,'Hamburguesa vegana de lentejas', 'Hamburguesa vegana con base de lentejas y condimentos especiales. Receta para 2 hamburguesas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752657/RecetaSabia/Vegano/Hamburguesa_vegana_de_lentejas_im9u2k.jpg', 10.99, 15, 6, 'Lentejas cocidas, cebolla, ajo, comino, cilantro, pan de hamburguesa, aguacate', '1. Triturar lentejas cocidas con cebolla, ajo, comino y cilantro. 2. Formar hamburguesas y cocinar. 3. Armar las hamburguesas con pan y aguacate.',2),
    new Producto(55,'Pizza vegana de verduras', 'Pizza con una mezcla de verduras frescas y queso vegano. Perfecta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752658/RecetaSabia/Vegano/Pizza_vegana_de_verduras_q4mjes.jpg', 13.99, 25, 6, 'Masa de pizza, pimientos, cebolla, champiñones, aceitunas, tomate, queso vegano', '1. Extender la masa y agregar las verduras cortadas en rodajas. 2. Hornear hasta que la masa esté dorada. 3. Agregar queso vegano y hornear hasta que se derrita.',2),
    new Producto(56,'Sopa de tomate asado', 'Sopa reconfortante con tomate asado y hierbas frescas. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752658/RecetaSabia/Vegano/Sopa_de_tomate_asado_pcpvxx.jpg', 8.99, 30, 6, 'Tomates (6 unidades), cebolla, ajo, caldo de verduras, albahaca fresca', '1. Asar los tomates, la cebolla y el ajo. 2. Cocinar con caldo de verduras y albahaca fresca. 3. Licuar hasta obtener una mezcla suave.',4),
    new Producto(57,'Wrap de aguacate y hummus', 'Wrap vegano con aguacate, hummus y vegetales frescos. Receta para 2 wraps', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752659/RecetaSabia/Vegano/Wrap_de_aguacate_y_hummus_qcu4z3.jpg', 9.99, 25, 6, 'Tortillas de trigo, aguacate, hummus, pepino, tomate, lechuga', '1. Calentar las tortillas y distribuir aguacate y hummus. 2. Agregar pepino, tomate y lechuga. 3. Envolver y disfrutar.',2),
    new Producto(58,'Bol de poké vegano', 'Bol de poké con arroz, aguacate, vegetales y aderezo vegano. Receta para 2 bowls', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752657/RecetaSabia/Vegano/Bol_de_pok%C3%A9_vegano_eckb9o.jpg', 15.99, 20, 6, 'Arroz, aguacate, pepino, zanahoria, aderezo vegano', '1. Cocinar el arroz. 2. Armar bowls con arroz, aguacate, pepino y zanahoria. 3. Aderezar con el aderezo vegano.',2),
    new Producto(59,'Batido de bayas y espinacas', 'Batido verde con bayas mixtas, espinacas y leche de almendras. Receta para 2 batidos', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752656/RecetaSabia/Vegano/Batido_de_bayas_y_espinacas_gz9wtf.jpg', 7.99, 28, 6, 'Bayas mixtas (1 taza), espinacas, plátano, leche de almendras', '1. Mezclar bayas, espinacas, plátano y leche de almendras. 2. Batir hasta obtener una consistencia suave.',2),
    new Producto(60,'Pasta con pesto vegano', 'Pasta con pesto vegano de albahaca, nueces y levadura nutricional. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700752657/RecetaSabia/Vegano/Pasta_con_pesto_vegano_xk8vr1.jpg', 11.99, 22, 6, 'Pasta, albahaca, nueces, ajo, levadura nutricional, aceite de oliva', '1. Cocinar la pasta. 2. Triturar albahaca, nueces, ajo y levadura nutricional para hacer el pesto. 3. Mezclar con la pasta y agregar aceite de oliva al gusto.',2),

    // Para Categoria Saludable

    new Producto(61,'Ensalada de quinoa y aguacate', 'Ensalada saludable con quinoa, aguacate y aderezo de limón. Perfecta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753171/RecetaSabia/Saludable/Ensalada_de_quinoa_y_aguacate_nmvty3.jpg', 11.99, 20, 7, 'Quinoa, aguacate, limón', '1. Cocinar la quinoa. 2. Mezclar con aguacate y aderezo de limón. 3. Servir en un plato y disfrutar.', 2),
    new Producto(62,'Bowl de acai y bayas', 'Bowl nutritivo con puré de acai, granola y bayas frescas. Ideal para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753171/RecetaSabia/Saludable/Bowl_de_acai_y_bayas_frca7g.jpg', 12.99, 18, 7, 'Acai, granola, bayas frescas', '1. Hacer un puré de acai. 2. Agregar granola y bayas frescas. 3. Servir en un bol.', 1),
    new Producto(63,'Sopa de lentejas y espinacas', 'Sopa reconfortante con lentejas, espinacas y zanahorias. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Sopa_de_lentejas_y_espinacas_nubkrq.jpg', 9.99, 25, 7, 'Lentejas, espinacas, zanahorias, caldo de verduras', '1. Cocinar las lentejas con espinacas, zanahorias y caldo de verduras. 2. Cocinar hasta que las lentejas estén tiernas. 3. Servir caliente.', 4),
    new Producto(64,'Wrap de pollo a la parrilla', 'Wrap saludable con pollo a la parrilla, aguacate y vegetales frescos. Receta para 2 wraps', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Wrap_de_pollo_a_la_parrilla_hxnoga.jpg', 10.99, 22, 7, 'Pechuga de pollo, tortillas de trigo, aguacate, vegetales frescos', '1. Asar la pechuga de pollo a la parrilla. 2. Rellenar las tortillas con pollo, aguacate y vegetales frescos. 3. Envolver y disfrutar.', 2),
    new Producto(65,'Ensalada de garbanzos y pepino', 'Ensalada fresca con garbanzos, pepino y aderezo de yogur. Perfecta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Ensalada_de_garbanzos_y_pepino_szwxlv.jpg', 8.99, 28, 7, 'Garbanzos cocidos, pepino, aderezo de yogur', '1. Mezclar garbanzos cocidos con pepino. 2. Aderezar con aderezo de yogur. 3. Servir en un plato.', 2),
    new Producto(66,'Smoothie verde detox', 'Smoothie saludable con espinacas, piña, plátano y agua de coco. Ideal para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753171/RecetaSabia/Saludable/Smoothie_verde_detox_yhpy6e.jpg', 7.99, 30, 7, 'Espinacas, piña, plátano, agua de coco', '1. Mezclar espinacas, piña, plátano y agua de coco en una licuadora. 2. Batir hasta obtener una consistencia suave. 3. Servir en un vaso.', 1),
    new Producto(67,'Poke bowl de salmón', 'Bol de poke con salmón fresco, aguacate y arroz integral. Receta para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753171/RecetaSabia/Saludable/Poke_bowl_de_salm%C3%B3n_ip763g.jpg', 14.99, 15, 7, 'Salmón fresco, aguacate, arroz integral', '1. Cortar el salmón en cubos. 2. Armar el bol con salmón, aguacate y arroz integral. 3. Servir en un bol.', 1),
    new Producto(68,'Bol de quinoa y vegetales', 'Bol saludable con quinoa, aguacate, pepino y aderezo de limón. Perfecto para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Bol_de_quinoa_y_vegetales_djfz8j.jpg', 12.99, 20, 7, 'Quinoa, aguacate, pepino, limón', '1. Cocinar la quinoa. 2. Mezclar con aguacate, pepino y aderezo de limón. 3. Servir en un bol.', 2),
    new Producto(69,'Hummus con bastones de verduras', 'Hummus casero con bastones de zanahoria, apio y pepino. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Hummus_con_bastones_de_verduras_vsdn3k.jpg', 6.99, 35, 7, 'Garbanzos cocidos, tahini, ajo, zanahoria, apio, pepino', '1. Triturar garbanzos cocidos con tahini y ajo. 2. Cortar zanahoria, apio y pepino en bastones. 3. Servir con hummus.', 2),
    new Producto(70,'Tostadas de aguacate y huevo pochado', 'Tostadas integrales con aguacate y huevo pochado. Receta para 2 tostadas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753172/RecetaSabia/Saludable/Tostadas_de_aguacate_y_huevo_pochado_wttnxf.jpg', 9.99, 25, 7, 'Tostadas integrales, aguacate, huevos, sal, pimienta', '1. Tostar las tostadas integrales. 2. Untar aguacate sobre las tostadas. 3. Pochear los huevos y colocar sobre el aguacate. 4. Sazonar con sal y pimienta.', 2),

    // Para Categoria Internacional

    new Producto(71,'Sushi variado', 'Selección de sushi japonés con nigiri y makis. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Sushi_variado_kqbgwa.jpg', 18.99, 15, 8, 'Arroz para sushi, pescado fresco, alga nori, vinagre de arroz, salsa de soja, wasabi, jengibre encurtido', '1. Cocinar el arroz para sushi. 2. Cortar el pescado en tiras finas. 3. Armar nigiris y makis con arroz, pescado y alga nori. 4. Servir con salsa de soja, wasabi y jengibre encurtido.', 2),
    new Producto(72,'Tacos al pastor', 'Tacos tradicionales mexicanos con carne de cerdo al pastor. Receta para 3 tacos', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753726/RecetaSabia/Internacional/Tacos_al_pastor_dfjatx.jpg', 14.99, 20, 8, 'Carne de cerdo, tortillas de maíz, piña, cebolla, cilantro, salsa de tomate', '1. Marinar la carne de cerdo con especias. 2. Asar la carne en tiras finas. 3. Rellenar tortillas con carne, piña, cebolla y cilantro. 4. Servir con salsa de tomate.', 3),
    new Producto(73,'Paella española', 'Paella clásica española con arroz, mariscos y pollo. Receta para 4 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Paella_espa%C3%B1ola_bdi8ov.jpg', 22.99, 12, 8, 'Arroz, pollo, mejillones, calamares, langostinos, azafrán, tomate, pimiento', '1. Sofreír pollo y mariscos. 2. Añadir arroz y azafrán. 3. Cocinar con caldo de pescado. 4. Decorar con tomate y pimiento. 5. Cocinar hasta que el arroz esté hecho.', 4),
    new Producto(74,'Pad Thai tailandés', 'Plato tailandés con fideos de arroz, gambas y cacahuetes. Ideal para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Pad_Thai_tailand%C3%A9s_xrgxfn.jpg', 16.99, 18, 8, 'Fideos de arroz, gambas, cacahuetes, huevo, tamarindo, salsa de pescado, brotes de soja', '1. Cocinar fideos de arroz. 2. Saltear gambas con huevo. 3. Mezclar con fideos, cacahuetes, tamarindo y salsa de pescado. 4. Decorar con brotes de soja.', 2),
    new Producto(75,'Bruschetta italiana', 'Bruschetta italiana con tomate fresco, albahaca y aceite de oliva. Receta para 2 porciones', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753724/RecetaSabia/Internacional/Bruschetta_italiana_gysg7w.jpg', 10.99, 25, 8, 'Pan italiano, tomate, ajo, albahaca, aceite de oliva', '1. Tostar el pan italiano. 2. Frotar ajo en el pan. 3. Cubrir con tomate y albahaca. 4. Rociar con aceite de oliva.', 2),
    new Producto(76,'Curry de pollo indio', 'Curry aromático de pollo con especias indias y arroz basmati. Receta para 3 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753724/RecetaSabia/Internacional/Curry_de_pollo_indio_qovyzr.jpg', 15.99, 20, 8, 'Pollo, cebolla, tomate, jengibre, ajo, curry en polvo, crema de coco', '1. Saltear pollo con cebolla, jengibre y ajo. 2. Agregar tomate, curry en polvo y crema de coco. 3. Cocinar hasta que el pollo esté tierno. 4. Servir con arroz basmati.', 3),
    new Producto(77,'Gyoza japonés', 'Dumplings japoneses rellenos de carne de cerdo y vegetales. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Gyoza_japon%C3%A9s_ghsmzm.jpg', 12.99, 22, 8, 'Masa de gyoza, carne de cerdo, repollo, cebollín, salsa de soja', '1. Rellenar masa de gyoza con carne de cerdo, repollo y cebollín. 2. Sellar y cocinar al vapor. 3. Servir con salsa de soja.', 2),
    new Producto(78,'Hamburguesa gourmet francesa', 'Hamburguesa gourmet con queso brie y cebolla caramelizada. Ideal para 1 persona', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Hamburguesa_gourmet_francesa_qbe7rs.jpg', 17.99, 15, 8, 'Carne de res, queso brie, cebolla, pan de hamburguesa, condimentos', '1. Cocinar la carne de res. 2. Montar la hamburguesa con queso brie y cebolla caramelizada. 3. Servir en un pan de hamburguesa.', 1),
    new Producto(79,'Ceviche peruano', 'Ceviche fresco peruano con pescado, limón y maíz. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753724/RecetaSabia/Internacional/Ceviche_peruano_qi858m.jpg', 14.99, 20, 8, 'Pescado blanco, limón, cebolla roja, maíz, ají, cilantro', '1. Cortar el pescado en cubos. 2. Marinara con limón, cebolla roja, maíz y ají. 3. Decorar con cilantro. 4. Servir frío.', 2),
    new Producto(80,'Ramen japonés', 'Ramen japonés con fideos, caldo, cerdo y huevo cocido a baja temperatura. Receta para 2 personas', 'https://res.cloudinary.com/djsl4a5py/image/upload/v1700753725/RecetaSabia/Internacional/Ramen_japon%C3%A9s_dk1h3b.jpg', 16.99, 18, 8, 'Fideos de ramen, caldo de pollo, cerdo, huevo, alga nori', '1. Cocinar fideos de ramen. 2. Preparar caldo de pollo con cerdo y alga nori. 3. Servir con huevo cocido a baja temperatura.', 2)

];

export {
    productos
} 
