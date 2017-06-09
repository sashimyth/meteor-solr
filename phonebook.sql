-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 09 Jun 2017 pada 08.08
-- Versi Server: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phonebook`
--
CREATE DATABASE IF NOT EXISTS `phonebook` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `phonebook`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int(11) UNSIGNED NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `home_no` varchar(20) DEFAULT NULL,
  `office_no` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `nama`, `mobile_no`, `home_no`, `office_no`, `email`, `address`, `birthday`, `created_at`, `updated_at`) VALUES
(1, 'Ani', '21321321', '124243', '134325', '2332@232', 'iehofaeihiofh', '2016-10-22', '2016-10-17 16:01:26', '2016-10-18 16:14:15'),
(2, 'Budi', '093395024', '', '', '', '', '2016-10-29', '2016-10-17 16:10:48', '2016-10-24 17:46:05'),
(3, 'Cacha', '', '', '', '', 'sleman', '2016-10-22', '2016-10-17 16:11:36', '2016-10-24 18:13:30'),
(4, 'Doni', NULL, NULL, NULL, NULL, NULL, NULL, '2016-10-17 16:11:40', '2016-10-17 16:11:40'),
(5, 'Ely', NULL, NULL, NULL, NULL, NULL, NULL, '2016-10-17 16:11:45', '2016-10-17 16:11:45'),
(6, 'Fina', NULL, NULL, NULL, NULL, NULL, NULL, '2016-10-17 16:11:50', '2016-10-17 16:11:50'),
(7, 'Geisha', NULL, NULL, NULL, NULL, NULL, NULL, '2016-10-17 16:12:30', '2016-10-17 16:12:30'),
(9, 'SAssre9u9', '90284904', '09090420470', '29403948310984', 'dkeodk@3o', '20194204e3hod83290r', '2016-10-18', '2016-10-18 16:29:08', '2016-10-18 16:29:08'),
(10, 'Sekese', '', '', '', '', '', '2016-10-25', '2016-10-24 18:14:46', '2016-10-24 18:14:46'),
(11, 'sss', '', '', '', '', '', '2016-10-25', '2016-10-24 18:45:10', '2016-10-24 18:45:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
