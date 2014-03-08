-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 09, 2014 at 05:35 
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
-- Table structure for table `report_tbl`
--

DROP TABLE IF EXISTS `report_tbl`;
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
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

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
(7, 'ads', '{"status":"success","file_name":"CE590134-EB29-4619-A42D-BA712063E495_DSC0131.jpg"}', 'ad', '2014-03-09 04:56:54', 'ad', 'sdf', 'sdf', 'saf', 'sdf', 'wf');

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
