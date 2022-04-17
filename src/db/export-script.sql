-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: health-care-app
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ad_menu`
--

DROP TABLE IF EXISTS `ad_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_menu` (
  `menu_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(55) NOT NULL,
  `link` varchar(255) NOT NULL,
  `icon` varchar(500) DEFAULT NULL,
  `parent_id` bigint unsigned DEFAULT NULL,
  `category_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`menu_id`),
  UNIQUE KEY `description` (`description`),
  KEY `ad_menu_parent` (`parent_id`),
  KEY `ad_menu_created_by` (`created_by`),
  KEY `ad_menu_updated_by` (`updated_by`),
  KEY `ad_menu_category_idx` (`category_id`),
  CONSTRAINT `ad_menu_category_id` FOREIGN KEY (`category_id`) REFERENCES `menu_category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_menu_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_menu_parent` FOREIGN KEY (`parent_id`) REFERENCES `ad_menu` (`menu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_menu_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ad_menu_access_roles`
--

DROP TABLE IF EXISTS `ad_menu_access_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_menu_access_roles` (
  `mar_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `menu_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`mar_id`),
  UNIQUE KEY `ad_menu_access_roles_menuId_roleId_unique` (`menu_id`,`role_id`),
  KEY `ad_mar_role_id` (`role_id`),
  KEY `ad_mar_created_by` (`created_by`),
  KEY `ad_mar_updated_by` (`updated_by`),
  CONSTRAINT `ad_mar_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_mar_menu_id` FOREIGN KEY (`menu_id`) REFERENCES `ad_menu` (`menu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_mar_role_id` FOREIGN KEY (`role_id`) REFERENCES `ad_role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_mar_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ad_role`
--

DROP TABLE IF EXISTS `ad_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_role` (
  `role_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(55) NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `description` (`description`),
  KEY `ad_role_created_by` (`created_by`),
  KEY `ad_role_updated_by` (`updated_by`),
  CONSTRAINT `ad_role_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_role_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ad_user_access_roles`
--

DROP TABLE IF EXISTS `ad_user_access_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ad_user_access_roles` (
  `uar_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`uar_id`),
  UNIQUE KEY `ad_user_access_roles_roleId_userId_unique` (`user_id`,`role_id`),
  KEY `ad_uar_role_id` (`role_id`),
  KEY `ad_uar_created_by` (`created_by`),
  KEY `ad_uar_updated_by` (`updated_by`),
  CONSTRAINT `ad_uar_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_uar_role_id` FOREIGN KEY (`role_id`) REFERENCES `ad_role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_uar_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ad_uar_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `appointment_date_time` datetime DEFAULT NULL,
  `appointment_reason` varchar(1000) NOT NULL,
  `fee` bigint unsigned NOT NULL,
  `status` varchar(45) NOT NULL,
  `patient_id` bigint unsigned NOT NULL,
  `doctor_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `fk_appointment_created_by_idx` (`created_by`),
  KEY `fk_appointment_updated_by_idx` (`updated_by`),
  KEY `fk_appointment_patient_idx` (`patient_id`),
  KEY `fk_appointment_doctor_idx` (`doctor_id`),
  CONSTRAINT `fk_appointment_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `department_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `max_doctors` bigint unsigned NOT NULL,
  `max_patients` bigint unsigned NOT NULL,
  `phone_no` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `status` varchar(55) NOT NULL,
  `hospital_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`department_id`),
  UNIQUE KEY `department_name` (`department_name`),
  KEY `fk_department_created_by_idx` (`created_by`),
  KEY `fk_department_updated_by_idx` (`updated_by`),
  KEY `fk_department_hopital_idx` (`hospital_id`),
  CONSTRAINT `fk_department_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_department_hopital` FOREIGN KEY (`hospital_id`) REFERENCES `hospital` (`hospital_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_department_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `disease`
--

DROP TABLE IF EXISTS `disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disease` (
  `disease_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `disease_name` varchar(255) NOT NULL,
  `disease_description` varchar(255) NOT NULL,
  `disease_symptoms` varchar(255) NOT NULL,
  `disease_causes` varchar(255) NOT NULL,
  `disease_type` varchar(255) NOT NULL,
  `risk_factor` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`disease_id`),
  KEY `fk_disease_created_by_idx` (`created_by`),
  KEY `fk_disease_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_disease_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_disease_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `disease_treated_by_dr`
--

DROP TABLE IF EXISTS `disease_treated_by_dr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disease_treated_by_dr` (
  `dtbd_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `disease_id` bigint unsigned NOT NULL,
  `doctor_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`dtbd_id`),
  KEY `fk_dtbd_created_by_idx` (`created_by`),
  KEY `fk_dtbd_updated_by_idx` (`updated_by`),
  KEY `fk_dtbd_disease_idx` (`disease_id`),
  KEY `fk_dtbd_doctor_idx` (`doctor_id`),
  CONSTRAINT `fk_dtbd_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dtbd_disease` FOREIGN KEY (`disease_id`) REFERENCES `disease` (`disease_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dtbd_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dtbd_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doctor_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fee` bigint unsigned NOT NULL,
  `experience` bigint unsigned NOT NULL,
  `is_available` tinyint(1) NOT NULL,
  `availablity_days` varchar(55) NOT NULL,
  `active_hours` varchar(55) NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `fk_doctor_created_by_idx` (`created_by`),
  KEY `fk_doctor_updated_by_idx` (`updated_by`),
  KEY `fk_doctor_user_id_idx` (`user_id`),
  CONSTRAINT `fk_doctor_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_doctor_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_doctor_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `dr_in_depart`
--

DROP TABLE IF EXISTS `dr_in_depart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dr_in_depart` (
  `dr_in_depart_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` bigint unsigned NOT NULL,
  `department_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`dr_in_depart_id`),
  KEY `fk_dir_created_by_idx` (`created_by`),
  KEY `fk_dir_created_by_idx1` (`updated_by`),
  KEY `fk_dir_doctor_idx` (`doctor_id`),
  KEY `fk_dir_department_idx` (`department_id`),
  CONSTRAINT `fk_dir_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dir_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_dir_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `hospital_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `hospital_name` varchar(255) NOT NULL,
  `opening_hours` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `max_doctors` int unsigned NOT NULL,
  `max_patients` int unsigned NOT NULL,
  `max_departments` int unsigned NOT NULL,
  `city` varchar(55) NOT NULL,
  `country` varchar(55) NOT NULL,
  `area` varchar(55) NOT NULL,
  `postal_code` varchar(55) NOT NULL,
  `phone_no` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `status` varchar(55) NOT NULL,
  `admin_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`hospital_id`),
  UNIQUE KEY `hospital_name` (`hospital_name`),
  KEY `fk_hospital_created_by_idx` (`created_by`),
  KEY `fk_hospital_updated_by_idx` (`updated_by`),
  KEY `fk_hospital_admin_idx` (`admin_id`),
  CONSTRAINT `fk_hospital_admin` FOREIGN KEY (`admin_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hospital_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hospital_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `medicine_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medicine_name` varchar(55) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`medicine_id`),
  UNIQUE KEY `medicine_name_UNIQUE` (`medicine_name`),
  KEY `fk_medicine_created_by_idx` (`created_by`),
  KEY `fk_medicine_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_medicine_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medicine_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicine_history`
--

DROP TABLE IF EXISTS `medicine_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_history` (
  `m_history_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medicine_id` bigint unsigned NOT NULL,
  `appointment_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`m_history_id`),
  KEY `fk_mh_created_by_idx` (`created_by`),
  KEY `fk_mh_updated_by_idx` (`updated_by`),
  KEY `fk_mh_appointment_idx` (`appointment_id`),
  CONSTRAINT `fk_mh_appointment` FOREIGN KEY (`appointment_id`) REFERENCES `appointment` (`appointment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mh_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mh_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicine_order`
--

DROP TABLE IF EXISTS `medicine_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_order` (
  `mo_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medicine_unit_id` bigint unsigned NOT NULL,
  `order_id` bigint unsigned NOT NULL,
  `quantity` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`mo_id`),
  KEY `fk_medorder_medunit_idx` (`medicine_unit_id`),
  KEY `fk_medorder_order_idx` (`order_id`),
  KEY `fk_medorder_created_idx` (`created_by`),
  KEY `fk_medorder_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_medorder_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medorder_medunit` FOREIGN KEY (`medicine_unit_id`) REFERENCES `medicine_unit` (`mu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medorder_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medorder_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicine_pharmacy`
--

DROP TABLE IF EXISTS `medicine_pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_pharmacy` (
  `mp_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medicine_unit_id` bigint unsigned NOT NULL,
  `pharmacy_id` bigint unsigned NOT NULL,
  `quantity` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`mp_id`),
  KEY `fk_medpharmacy_created_by_idx` (`created_by`),
  KEY `fk_medpharmacy_updated_by_idx` (`updated_by`),
  KEY `fk_medpharmacy_medunit_idx` (`medicine_unit_id`),
  KEY `fk_medpharmacy_pharmacy_idx` (`pharmacy_id`),
  CONSTRAINT `fk_medpharmacy_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medpharmacy_medunit` FOREIGN KEY (`medicine_unit_id`) REFERENCES `medicine_unit` (`mu_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medpharmacy_pharmacy` FOREIGN KEY (`pharmacy_id`) REFERENCES `pharmacy` (`pharmacy_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_medpharmacy_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `medicine_unit`
--

DROP TABLE IF EXISTS `medicine_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_unit` (
  `mu_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `medicine_id` bigint unsigned NOT NULL,
  `unit_id` bigint unsigned NOT NULL,
  `unit_number` bigint unsigned NOT NULL,
  `price_per_unit` bigint unsigned NOT NULL,
  `med_total_number` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`mu_id`),
  KEY `fk_mu_medicine_idx` (`medicine_id`),
  KEY `fk_mu_unit_idx` (`unit_id`),
  KEY `fk_mu_created_by_idx` (`created_by`),
  KEY `fk_mu_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_mu_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mu_medicine` FOREIGN KEY (`medicine_id`) REFERENCES `medicine` (`medicine_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mu_unit` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_mu_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `menu_category`
--

DROP TABLE IF EXISTS `menu_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_category` (
  `category_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(55) NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `description` (`description`),
  KEY `menu_category_created_by` (`created_by`),
  KEY `menu_category_updated_by` (`updated_by`),
  CONSTRAINT `menu_category_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `menu_category_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `pharmacy_id` bigint unsigned NOT NULL,
  `area` varchar(255) NOT NULL,
  `city` varchar(55) NOT NULL,
  `country` varchar(55) NOT NULL,
  `postal_code` varchar(55) NOT NULL,
  `status` varchar(255) NOT NULL,
  `is_paid` tinyint(1) NOT NULL DEFAULT '0',
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_order_user_idx` (`user_id`),
  KEY `fk_order_pharmacy_idx` (`pharmacy_id`),
  KEY `fk_order_created_by_idx` (`created_by`),
  KEY `fk_order_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_order_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_pharmacy` FOREIGN KEY (`pharmacy_id`) REFERENCES `pharmacy` (`pharmacy_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_order_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`patient_id`),
  KEY `fk_patient_created_by_idx` (`created_by`),
  KEY `fk_patient_updated_by_idx` (`updated_by`),
  KEY `fk_patient_user_id_idx` (`user_id`),
  CONSTRAINT `fk_patient_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_patient_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_patient_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `patient_in_depart`
--

DROP TABLE IF EXISTS `patient_in_depart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_in_depart` (
  `patient_in_depart_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` bigint unsigned NOT NULL,
  `department_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`patient_in_depart_id`),
  KEY `fk_patient_created_by_idx` (`created_by`),
  KEY `fk_patient_updated_by_idx` (`updated_by`),
  KEY `fk_pid_patient_idx` (`patient_id`),
  KEY `fk_pid_department_idx` (`department_id`),
  CONSTRAINT `fk_pid_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pid_department` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pid_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pid_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `patient_previous_disease`
--

DROP TABLE IF EXISTS `patient_previous_disease`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_previous_disease` (
  `p_history_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `duaration_unit` varchar(255) NOT NULL,
  `duaration_count` varchar(255) NOT NULL,
  `patient_id` bigint unsigned NOT NULL,
  `disease_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`p_history_id`),
  KEY `fk_ppd_created_by_idx` (`created_by`),
  KEY `fk_ppd_updated_by_idx` (`updated_by`),
  KEY `fk_ppd_patient_idx` (`patient_id`),
  KEY `fk_ppd_disease_idx` (`disease_id`),
  CONSTRAINT `fk_ppd_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ppd_disease` FOREIGN KEY (`disease_id`) REFERENCES `disease` (`disease_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ppd_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_ppd_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pharmacy`
--

DROP TABLE IF EXISTS `pharmacy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pharmacy` (
  `pharmacy_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `pharmacy_name` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `licence_number` varchar(55) NOT NULL,
  `phone_no` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `admin_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`pharmacy_id`),
  KEY `fk_pharmacy_admin_idx` (`admin_id`),
  KEY `fk_pharmacy_created_by_idx` (`created_by`),
  KEY `fk_pharmacy_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_pharmacy_admin` FOREIGN KEY (`admin_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pharmacy_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_pharmacy_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `qualification`
--

DROP TABLE IF EXISTS `qualification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qualification` (
  `qualification_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `details` varchar(55) NOT NULL,
  `doctor_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`qualification_id`),
  KEY `fk_qualification_created_by_idx` (`created_by`),
  KEY `fk_qualification_updated_by_idx` (`updated_by`),
  KEY `fk_qualification_doctor_idx` (`doctor_id`),
  CONSTRAINT `fk_qualification_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_qualification_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_qualification_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `stars` bigint unsigned NOT NULL,
  `patient_id` bigint unsigned NOT NULL,
  `doctor_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `fk_review_created_by_idx` (`created_by`),
  KEY `fk_review_updated_by_idx` (`updated_by`),
  KEY `fk_review_patient_idx` (`patient_id`),
  KEY `fk_review_doctor_idx` (`doctor_id`),
  CONSTRAINT `fk_review_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_review_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_review_patient` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_review_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `specialization`
--

DROP TABLE IF EXISTS `specialization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialization` (
  `specialization_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `details` varchar(55) NOT NULL,
  `doctor_id` bigint unsigned NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`specialization_id`),
  KEY `fk_specialization_created_by_idx` (`created_by`),
  KEY `fk_specialization_updated_by_idx` (`updated_by`),
  KEY `fk_specialization_doctor_idx` (`doctor_id`),
  CONSTRAINT `fk_specialization_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_specialization_doctor` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_specialization_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `unit_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `updated_by` bigint unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`unit_id`),
  UNIQUE KEY `description_UNIQUE` (`description`),
  KEY `fk_unit_created_by_idx` (`created_by`),
  KEY `fk_unit_updated_by_idx` (`updated_by`),
  CONSTRAINT `fk_unit_created_by` FOREIGN KEY (`created_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_unit_updated_by` FOREIGN KEY (`updated_by`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `auth_type` varchar(55) NOT NULL DEFAULT 'email',
  `is_active` tinyint(1) DEFAULT '1',
  `is_admin` tinyint(1) DEFAULT '0',
  `is_superuser` tinyint(1) DEFAULT '0',
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-17 23:06:20
