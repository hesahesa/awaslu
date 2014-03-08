-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 08, 2014 at 07:02 
-- Server version: 5.1.41
-- PHP Version: 5.3.1

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
-- Table structure for table `picture_tbl`
--

DROP TABLE IF EXISTS `picture_tbl`;
CREATE TABLE IF NOT EXISTS `picture_tbl` (
  `picture_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(512) NOT NULL,
  PRIMARY KEY (`picture_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `picture_tbl`
--


-- --------------------------------------------------------

--
-- Table structure for table `report_tbl`
--

DROP TABLE IF EXISTS `report_tbl`;
CREATE TABLE IF NOT EXISTS `report_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `picture_id` int(11) NOT NULL,
  `description` varchar(512) NOT NULL,
  `date` datetime NOT NULL,
  `caleg_id_API` varchar(64) NOT NULL,
  `lat` varchar(64) NOT NULL,
  `long` varchar(64) NOT NULL,
  `party_id_API` varchar(64) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `report_tbl`
--

INSERT INTO `report_tbl` (`id`, `title`, `picture_id`, `description`, `date`, `caleg_id_API`, `lat`, `long`, `party_id_API`, `user_id`) VALUES
(1, 'laporan 1', 12345, 'ini deskripsi laporan 1', '2014-03-08 15:56:13', 'caleg id', 'latitude', 'longitude', 'party id', 1),
(2, 'laporan 2', 1234, 'deskripsi laporan 2', '2014-03-08 16:36:09', 'caleg id', 'latitude', 'longitude', 'party id', 1),
(3, 'laporan 3', 1234, 'deskripsi laporan 3', '2014-03-08 17:45:28', 'caleg ip', 'latitude', 'longitude', 'party id', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shares_tbl`
--

DROP TABLE IF EXISTS `shares_tbl`;
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

DROP TABLE IF EXISTS `user_tbl`;
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
