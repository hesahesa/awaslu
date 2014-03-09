-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 09, 2014 at 03:26 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `awaslu`
--

-- --------------------------------------------------------

--
-- Table structure for table `report_tbl`
--

CREATE TABLE IF NOT EXISTS `report_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `picture_url` varchar(128) NOT NULL,
  `description` varchar(512) NOT NULL,
  `date` datetime NOT NULL,
  `caleg_id_API` varchar(64) DEFAULT NULL,
  `latitude` varchar(64) NOT NULL,
  `longitude` varchar(64) NOT NULL,
  `party_id_API` varchar(64) NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `area_id_API` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `report_tbl`
--

INSERT INTO `report_tbl` (`id`, `title`, `picture_url`, `description`, `date`, `caleg_id_API`, `latitude`, `longitude`, `party_id_API`, `user_id`, `area_id_API`) VALUES
(1, 'laporan 1', '12345', 'ini deskripsi laporan 1', '2014-03-08 15:56:13', 'calegid-1', 'latitude', 'longitude', 'partyid-1', '1', '32'),
(2, 'laporan 2', '1234', 'deskripsi laporan 2', '2014-03-08 16:36:09', 'calegid-2', 'latitude', 'longitude', 'partyid-1', '1', '32'),
(3, 'laporan 3', '1234', 'deskripsi laporan 3', '2014-03-08 17:45:28', 'calegid-1', 'latitude', 'longitude', 'partyid-1', '1', '75'),
(4, 'laporan 4', 'blaballa', 'deskripsi laporan 4', '2014-03-07 21:12:17', 'calegid-2', 'latitude', 'longitude', 'partyid-1', '3', '75'),
(5, 'aaa', 'aaa', 'aaa', '2014-03-09 04:46:52', 'aaa', 'aaa', 'aaa', 'aaa', '0', 'aaa'),
(6, 'a', 'a', 'a', '2014-03-09 04:52:55', 'a', 'a', 'a', 'a', 'a', 'a'),
(7, 'ads', '{"status":"success","file_name":"CE590134-EB29-4619-A42D-BA712063E495_DSC0131.jpg"}', 'ad', '2014-03-09 04:56:54', 'ad', 'sdf', 'sdf', 'saf', 'sdf', 'wf'),
(8, 'qwqwqwqwrwer', '5069FB3B-9D3D-43AF-A491-DD7866280435Desert.jpg', 'aawdawe', '2014-03-09 06:17:20', 'sfser', 'weewr', 'we', 'erewr', 'wrwer', 'werewr'),
(9, 'giuhkjhkj', 'A832CB3E-5BD7-49BE-BE63-CAEB829D3440Jellyfish.jpg', 'joijoij', '2014-03-09 06:45:42', 'i', 'k', 'k', 'k', 'k', 'k'),
(10, 'fdfdf', 'D306CF84-8B1B-4684-8BF2-7A243533B61DChrysanthemum.jpg', 'j', '2014-03-09 06:50:07', 'j', 'j', 'j', 'j', 'j', 'j'),
(11, 'a', '0C293529-B2F3-44CB-AB13-9000534E0F0FLighthouse.jpg', 'a', '2014-03-09 07:09:08', 'a', 'a', 'a', 'a', 'a', 'a'),
(12, 'n', '86703A24-2644-4DF3-9D11-0BDA199B3B33Jellyfish.jpg', 'n', '2014-03-09 07:11:52', 'n', 'n', 'n', 'n', 'n', 'n'),
(13, 'undefined', 'undefined', 'undefined', '2014-03-09 07:41:36', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(14, 'hhh', '515A2862-A656-445E-8DE3-2802FA84A2B3Koala.jpg', 'undefined', '2014-03-09 07:45:19', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(15, 'hhh', '515A2862-A656-445E-8DE3-2802FA84A2B3Koala.jpg', 'undefined', '2014-03-09 07:45:44', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(16, 'Mengganggu Ketertiban Umum', 'images.jpg', 'undefined', '2014-03-09 07:45:56', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(17, 'Mengganggu Fasilitas Umum', 'fasilitasumum.jpg', 'undefined', '2014-03-09 07:46:38', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
(18, 'Gambar Caleg di Rumah Ibadah', 'rumahibadah.jpg', 'p', '2014-03-09 07:47:49', 'p', 'undefined', 'p', 'p', 'p', 'p'),
(19, 'Poster merusak lingkungan', 'pelanggaran2.jpg', 'j', '2014-03-09 07:48:40', 'j', 'j', 'j', 'j', 'j', 'jjj');

-- --------------------------------------------------------

--
-- Table structure for table `shares_tbl`
--

CREATE TABLE IF NOT EXISTS `shares_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `report_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `shares_tbl`
--

INSERT INTO `shares_tbl` (`id`, `report_id`) VALUES
(1, 2),
(2, 2),
(3, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE IF NOT EXISTS `user_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`id`, `username`) VALUES
(1, 'ardall'),
(2, 'kuncoro'),
(3, 'hesa');
