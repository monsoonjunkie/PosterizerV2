-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 09, 2019 at 07:48 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wickedSales`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` text COLLATE utf8_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `shortDescription`, `longDescription`) VALUES
(1, 'Star Wars - Episode IV New Hope - Classic', 699, 'https://imgc.allpostersimages.com/img/print/u-g-F5L5V30.jpg', 'Movie Poster\r\nFinal Dimensions (width x height): 24\" x 36\"\r\n', 'The first Star Wars movie to be released and the starting of a legendary cinematic legacy. Own a piece of that legacy with this classic poster!'),
(2, 'BACK TO THE FUTURE ', 1099, 'https://imgc.allpostersimages.com/img/print/u-g-Q1E5JP50.jpg', 'Movie Poster\r\nFinal Dimensions (width x height): 8\" x 12', 'This photographic print is digitally printed on archival photographic paper resulting in vivid pure color and exceptional detail that is suitable for museum or gallery display'),
(3, 'The Goonies', 899, 'https://imgc.allpostersimages.com/img/print/u-g-F4S7I00.jpg', 'Movie Poster\r\nFinal Dimensions (width x height): 27\" x 40\"', 'Goonies never say die and neither does this poster. Printed with an offset lithography press, it wont fade, just like your love for this cult classic film.'),
(4, 'Indian Jones - Raiders of the Lost Ark', 999, 'https://imgc.allpostersimages.com/img/print/u-g-F4T31Q0.jpg', 'Movie Poster\r\nFinal Dimensions (width x height): 11\" x 17\"', 'Want to add a little to adventure to your drab home? Add this whiptastic Indiana Jones poster to your wall and you got yourself an ark of a room! Digitally printed at the highest resolution on quality acid free photographic paper.'),
(5, 'Fallout- Nuka Cola', 1499, 'https://imgc.allpostersimages.com/img/print/u-g-F89FNN0.jpg', 'Video Game Poster  (width x height): 24\" x 36\"', 'Return to the Vault and remind yourself the good old days of nuclear distopia!\r\nThis versatile and affordable poster delivers sharp, clean images and a high degree of color accuracy. Your poster is printed with an offset lithography press with a coating to protect the inks.'),
(6, 'SPYRO REIGNITED - CLASSIC', 999, 'https://imgc.allpostersimages.com/img/print/u-g-F9G0HK0.jpg', 'Video Game Poster (width x height): 22.5\" x 34', 'Spyro is back and he\'s never looked better! Relive and revamp your space like the good days with this poster of the remastered trilogy!'),
(7, 'Captain Marvel - Vintage', 1399, 'https://imgc.allpostersimages.com/img/print/u-g-Q1FXWS40.jpg', 'Movie Poster  (width x height): 12\" x 18\"', 'Give your space some intergalatic protection from a cosmic level hero!\r\nHighquality printing gives this poster its vivid and sharp appearance.'),
(8, 'OVERWATCH - COVER', 699, 'https://imgc.allpostersimages.com/img/print/u-g-F9DGMY0.jpg', 'Video Game Poster (width x height): 34\" x 22.5\"', 'The time is now to call on the Overwatch team to protect sanctity of the your space!\r\nThis versatile and affordable poster delivers sharp, clean images and a high degree of color accuracy. '),
(9, 'Cover, Featuring Scarlet Witch', 999, 'https://imgc.allpostersimages.com/img/print/u-g-Q19ECKS0.jpg', 'Comic Book Poster (width x height): 12\" x 18\"', 'Add a little magic to your space with the queen of hexes. Highquality printing gives this poster its vivid and sharp appearance Produced on medium weight cover stock paper this poster strikes a balance between quality and affordability This poster is usually printed with a thin white edge border'),
(10, 'Superman: The Movie', 999, 'https://imgc.allpostersimages.com/img/print/u-g-F4T31V0.jpg', 'Movie Poster (width x height): 11\" x 17\"', 'You\'ll believe a man can fly. Also you\'ll believe that your room will be made of steel, more powerful than a locomotive, make you look cooler than leaping over tall buildings in a single bound and make anyone\r\nwant to out your place faster than a speeding bullet. This is your krytonite.'),
(11, 'Big Trouble in Little China', 799, 'https://imgc.allpostersimages.com/img/print/u-g-F4S7L70.jpg', 'Movie Poster (width x height): 27\" x 40\"', 'There will be big trouble in your space if you don\'t have this on your wall! This versatile and affordable poster delivers sharp, clean images and a high degree of color accuracy. Your poster is printed with an offset lithography press with a coating to protect the inks.'),
(12, 'Blade Runner - The Final Cut', 899, 'https://imgc.allpostersimages.com/img/print/u-g-F4Q1C30.jpg', 'Movie Poster (width x height): 11\" x 17\"', 'Give some cyber punk love to your space!  This versatile and affordable poster delivers sharp, clean images and a high degree of color accuracy. Your poster is printed with an offset lithography press with a coating to protect the inks.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
