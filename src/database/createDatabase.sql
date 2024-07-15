CREATE DATABASE IF NOT EXISTS cartoon;
USE cartoon;
CREATE TABLE `Casts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `Characters` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `Cast_Characters` (
    `cast_id` int DEFAULT NULL,
    `character_id` int DEFAULT NULL,
    KEY `cast_id` (`cast_id`),
    KEY `character_id` (`character_id`),
    CONSTRAINT `Cast_Characters_ibfk_1` FOREIGN KEY (`cast_id`) REFERENCES `Casts` (`id`),
    CONSTRAINT `Cast_Characters_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `Characters` (`id`)
);
-- Inserir dubladores na tabela Casts
INSERT INTO Casts (name) VALUES
('Hank Azaria'),          -- Voz de Moe Szyslak e Chief Wiggum
('Nancy Cartwright'),      -- Voz de Bart Simpson
('Dan Castellaneta'),      -- Voz de Homer Simpson
('Julie Kavner'),          -- Voz de Marge Simpson
('Yeardley Smith'),        -- Voz de Lisa Simpson
('Marcia Wallace');        -- Voz de Edna Krabappel

-- Inserir personagens na tabela Characters
INSERT INTO Characters (name) VALUES
('Moe Szyslak'),
('Chief Wiggum'),
('Bart Simpson'),
('Homer Simpson'),
('Marge Simpson'),
('Lisa Simpson'),
('Edna Krabappel');

-- Associar dubladores aos personagens na tabela Cast_Characters
INSERT INTO Cast_Characters (cast_id, character_id) VALUES
(1, 1),  -- Hank Azaria dubla Moe Szyslak
(1, 2),  -- Hank Azaria dubla Chief Wiggum
(2, 3),  -- Nancy Cartwright dubla Bart Simpson
(3, 4),  -- Dan Castellaneta dubla Homer Simpson
(4, 5),  -- Julie Kavner dubla Marge Simpson
(5, 6),  -- Yeardley Smith dubla Lisa Simpson
(6, 7);  -- Marcia Wallace dubla Edna Krabappel