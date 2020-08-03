/*-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2020 at 06:09 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

/*--
-- Database: `rapidwifi`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `area_name` varchar(100) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`id`, `area_name`, `area_id`, `user_id`, `created_by`, `created_date`, `modified_by`, `modified_date`, `status`) VALUES
(1, 'Jalakandapuram', 0, NULL, 1, '2020-07-25 12:16:10', NULL, NULL, 1),
(2, 'salem', 1, NULL, 1, '2020-07-25 12:18:13', 2, '2020-07-25 16:05:09', 0),
(3, 'Erode', 1, NULL, 1, '2020-07-25 12:39:33', 3, '2020-07-25 16:03:28', 0);

-- --------------------------------------------------------

--
-- Table structure for table `connections`
--

CREATE TABLE `connections` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(22) NOT NULL,
  `plan_id` int(11) DEFAULT NULL,
  `bill_date` datetime DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(22) NOT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `customer_email` varchar(200) DEFAULT NULL,
  `customer_mobileno` tinyint(11) DEFAULT NULL,
  `customer_address` varchar(200) DEFAULT NULL,
  `customer_pincode` tinyint(6) DEFAULT NULL,
  `customer_roleid` int(11) DEFAULT NULL,
  `payment_received_type` varchar(50) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customer_id`, `customer_name`, `customer_email`, `customer_mobileno`, `customer_address`, `customer_pincode`, `customer_roleid`, `payment_received_type`, `created_date`, `modified_date`, `created_by`, `modified_by`, `area_id`, `password`, `status`) VALUES
(1, 'RAP003', 'aaaaa', 'aaa1@gmail.com', 127, 'sssssssss', 127, 0, 'full', '2020-07-19 12:33:47', NULL, 0, NULL, NULL, NULL, 1),
(2, 'RAP002', 'bbbbb', 'aaa1@gmail.com', 127, 'sssssssss', 127, 0, 'full', '2020-07-19 12:46:31', NULL, 1, NULL, NULL, NULL, 1),
(4, 'RAP004', 'ccccc', 'aaa@gmail.com', 127, 'sssssssss', 127, 0, 'full', '2020-07-25 16:19:53', NULL, 0, NULL, NULL, NULL, 1),
(5, 'RAP005', 'ddddd', 'aaa@gmail.com', 127, 'sssssssss', 127, 0, 'full', '2020-07-25 16:24:03', NULL, 0, NULL, NULL, NULL, 1),
(6, 'RAP006', 'eeeee', 'aaa@gmail.com', 127, 'sssssssss', 127, 0, 'full', '2020-07-25 16:25:18', NULL, 0, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gst`
--

CREATE TABLE `gst` (
  `id` int(11) NOT NULL,
  `gst_id` varchar(100) DEFAULT NULL,
  `gst_percent` varchar(100) DEFAULT NULL,
  `gst_fromdate` date DEFAULT current_timestamp(),
  `gst_todate` date DEFAULT current_timestamp(),
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gst`
--

INSERT INTO `gst` (`id`, `gst_id`, `gst_percent`, `gst_fromdate`, `gst_todate`, `created_date`, `modified_date`, `created_by`, `modified_by`, `status`) VALUES
(1, 'GST002', '18', '2020-07-26', '2020-07-26', '2020-07-26 09:30:09', '2020-07-26 10:46:30', 1, 1, 1),
(2, 'GST001', '18', '2020-07-26', '2020-10-26', '2020-07-26 10:46:06', NULL, 1, NULL, 1),
(3, 'GST003', '12', '2020-07-26', '2020-10-26', '2020-07-26 10:48:12', NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `installation_charges`
--

CREATE TABLE `installation_charges` (
  `id` int(11) NOT NULL,
  `installation_amount` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `installation_charges`
--

INSERT INTO `installation_charges` (`id`, `installation_amount`, `created_date`, `modified_date`, `created_by`, `modified_by`, `status`) VALUES
(0, 0, '2020-08-02 18:30:43', NULL, 1, NULL, 1),
(0, 1500, '2020-08-02 18:32:03', NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(100) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `plan_id` int(11) DEFAULT NULL,
  `bill_amount` decimal(11,0) DEFAULT 0,
  `pay_amount` decimal(11,0) DEFAULT 0,
  `balance_amount` decimal(11,0) DEFAULT 0,
  `payreceived_user_id` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `plans`
--

CREATE TABLE `plans` (
  `id` int(11) NOT NULL,
  `plan_id` varchar(50) DEFAULT NULL,
  `plan_name` varchar(100) DEFAULT NULL,
  `plan_amount` decimal(10,0) NOT NULL,
  `instllation_charge` decimal(10,0) NOT NULL DEFAULT 0,
  `router_charge` decimal(10,0) NOT NULL DEFAULT 0,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plans`
--

INSERT INTO `plans` (`id`, `plan_id`, `plan_name`, `plan_amount`, `instllation_charge`, `router_charge`, `created_date`, `modified_date`, `created_by`, `modified_by`, `status`) VALUES
(1, '', 'Plan 499', '499', '0', '0', '2020-07-26 11:28:52', NULL, 1, NULL, 0),
(2, 'P001', '', '499', '3000', '2000', '2020-07-26 11:48:30', '2020-07-26 16:56:35', 1, 2, 1),
(3, 'P002', '', '599', '0', '0', '2020-07-26 11:49:01', '2020-07-26 12:19:34', 1, 3, 1),
(4, 'P003', 'P002', '599', '0', '0', '2020-07-26 11:55:02', '2020-07-26 12:19:50', 1, 4, 1),
(5, 'P00', 'P00', '499', '2000', '1000', '2020-07-26 16:54:14', NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(22) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `router_charges`
--

CREATE TABLE `router_charges` (
  `id` int(11) NOT NULL,
  `router_amount` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customer_id` (`customer_id`);

--
-- Indexes for table `gst`
--
ALTER TABLE `gst`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gst`
--
ALTER TABLE `gst`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `plans`
--
ALTER TABLE `plans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
