-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: bjebq0uuje8gwaioauu6-mysql.services.clever-cloud.com    Database: bjebq0uuje8gwaioauu6
-- ------------------------------------------------------
-- Server version	8.0.22-13

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'a05a675a-1414-11e9-9c82-cecd01b08c7e:1-491550428,
a38a16d0-767a-11eb-abe2-cecd029e558e:1-118750672';

--
-- Dumping data for table `ad_menu`
--

LOCK TABLES `ad_menu` WRITE;
/*!40000 ALTER TABLE `ad_menu` DISABLE KEYS */;
INSERT INTO `ad_menu` VALUES (19,'Hospitals','no','fas fa-hospital-alt',NULL,9,19,19,'2021-12-22 13:22:22','2021-12-22 13:22:22'),(21,'Patients','no','fas fa-user-injured',NULL,11,19,19,'2021-12-22 13:36:18','2021-12-22 13:36:18'),(22,'Add Hospital','add-hospital.html','no',19,9,19,19,'2021-12-22 13:39:26','2021-12-22 13:39:26'),(24,'All Hospitals','all-hospitals.html','no',19,9,19,19,'2021-12-22 14:00:50','2021-12-22 14:00:50'),(25,'Departments','no','fas fa-building',NULL,9,19,19,'2021-12-22 21:14:39','2021-12-22 21:14:39'),(26,'Add Department','add-department.html','no',25,9,19,19,'2021-12-22 21:15:12','2021-12-22 21:15:12'),(27,'All Departments','all-departments.html','no',25,9,19,19,'2021-12-22 21:15:54','2021-12-22 21:15:54'),(28,'Appointments','no','fas fa-calendar-check',NULL,9,19,19,'2021-12-22 21:17:24','2021-12-22 21:17:24'),(29,'Add Appointment','add-appointment.html','no',28,9,19,19,'2021-12-22 21:17:53','2021-12-22 21:17:53'),(30,'All Appointments','all-appointments.html','no',28,9,19,19,'2021-12-22 21:18:24','2021-12-22 21:18:24'),(31,'Add Patient','add-patient.html','no',21,11,19,19,'2021-12-22 21:21:14','2021-12-22 21:21:14'),(32,'All Patients','all-patients.html','no',21,11,19,19,'2021-12-22 21:21:43','2021-12-22 21:21:43'),(33,'Doctors','no','fas fa-user-md',NULL,11,19,19,'2021-12-22 21:22:22','2021-12-22 21:22:22'),(34,'Add Doctor','add-doctor.html','no',33,11,19,19,'2021-12-22 21:23:01','2021-12-22 21:23:01'),(35,'All Doctors','all-doctors.html','no',33,11,19,19,'2021-12-22 21:23:25','2021-12-22 21:23:25'),(36,'Hospital Admins','no','fas fa-user-cog',NULL,11,19,19,'2021-12-22 21:25:08','2021-12-22 21:25:08'),(37,'Add Hospital Admin','add-hospital-admin.html','no',36,11,19,19,'2021-12-22 21:25:50','2021-12-22 21:25:50'),(38,'All Hospital Admins','all-hospital-admins.html','no',36,11,19,19,'2021-12-22 21:26:32','2021-12-22 21:26:32'),(39,'Roles','no','fas fa-scroll',NULL,12,19,19,'2021-12-23 10:35:02','2021-12-23 10:35:02'),(40,'Add Role','add-role.html','no',39,12,19,19,'2021-12-23 10:35:50','2021-12-23 10:35:50'),(41,'All Roles','all-roles.html','no',39,12,19,19,'2021-12-23 10:37:08','2021-12-23 10:37:08'),(42,'Menu Categories','no','fas fa-ellipsis-v',NULL,12,19,19,'2021-12-23 10:38:45','2021-12-23 10:38:45'),(43,'Add Menu Category','add-menu-category.html','no',42,12,19,19,'2021-12-23 10:39:18','2021-12-23 10:39:18'),(44,'All Menu Categories','all-menu-categories.html','no',42,12,19,19,'2021-12-23 10:39:45','2021-12-23 10:39:45'),(45,'Menus','no','fas fa-ellipsis-v',NULL,12,19,19,'2021-12-23 10:41:15','2021-12-23 10:41:15'),(46,'Add Menu','add-menu.html','no',45,12,19,19,'2021-12-23 10:42:04','2021-12-23 10:42:04'),(47,'All Menus','all-menus.html','no',45,12,19,19,'2021-12-23 10:42:40','2021-12-23 10:42:40'),(48,'User Access Roles','no','fas fa-user-tag',NULL,12,19,19,'2021-12-23 10:43:39','2021-12-23 10:43:39'),(49,'Add UserAccess Role','add-user-access-roles.html','no',48,12,19,19,'2021-12-23 10:44:44','2021-12-23 10:44:44'),(50,'All User Access Roles','all-user-access-roles.html','no',48,12,19,19,'2021-12-23 10:45:21','2021-12-23 10:45:21'),(51,'Menu Access Roles','no','fas fa-project-diagram',NULL,12,19,19,'2021-12-23 10:45:56','2021-12-23 10:45:56'),(52,'Add Menu Access Role','add-menu-access-roles.html','no',51,12,19,19,'2021-12-23 10:46:40','2021-12-23 10:46:40'),(53,'All Menu Access Roles','all-menu-access-roles.html','no',51,12,19,19,'2021-12-23 10:47:07','2021-12-23 10:47:07'),(57,'Diseases','no','fas fa-virus',NULL,15,19,19,'2022-01-18 11:22:01','2022-01-18 11:22:01'),(58,'Add Disease','add-disease.html','no',57,15,19,19,'2022-01-18 11:22:56','2022-01-18 11:22:56'),(59,'All Diseases','all-diseases.html','no',57,15,19,19,'2022-01-18 11:23:25','2022-01-18 11:23:25'),(60,'Pharmacy Admins','no','fas fa-user-cog',NULL,11,19,19,'2022-02-23 14:33:32','2022-02-23 14:33:32'),(61,'Add Pharmacy Admin','add-pharmacy-admin.html','no',60,11,19,19,'2022-02-23 14:34:19','2022-02-23 14:34:19'),(63,'All Pharmacy Admins','all-pharmacy-admins.html','no',60,11,19,19,'2022-02-23 14:45:22','2022-02-23 14:45:22'),(64,'Pharmacies','no','fa-solid fa-prescription',NULL,16,19,19,'2022-02-23 14:53:41','2022-02-23 14:53:41'),(65,'Add Pharmacy','add-pharmacy.html','no',64,16,19,19,'2022-02-23 14:54:16','2022-02-23 14:54:16'),(66,'All Pharmacies','all-pharmacies.html','no',64,16,19,19,'2022-02-23 14:54:48','2022-02-23 14:54:48'),(76,'Medicine Units','no','fa-solid fa-ruler-horizontal',NULL,16,19,19,'2022-02-23 15:24:00','2022-02-23 15:24:00'),(77,'Add Unit','add-unit.html','no',76,16,19,19,'2022-02-23 15:24:20','2022-02-23 15:24:20'),(78,'All Units','all-units.html','no',76,16,19,19,'2022-02-23 15:24:40','2022-02-23 15:24:40'),(79,'Medicines','no','fa-solid fa-suitcase-medical',NULL,16,19,19,'2022-02-23 15:25:36','2022-02-23 15:25:36'),(80,'Add Medicine','add-medicine.html','no',79,16,19,19,'2022-02-23 15:25:59','2022-02-23 15:25:59'),(81,'All Medicines','all-medicines.html','no',79,16,19,19,'2022-02-23 15:26:22','2022-02-23 15:26:22'),(82,'Medicine Details','no','fa-solid fa-suitcase-medical',NULL,16,19,19,'2022-02-23 15:27:47','2022-02-23 15:27:47'),(83,'Add Medicine Detail','add-medicine-detail.html','no',82,16,19,19,'2022-02-23 15:28:09','2022-02-23 15:28:09'),(84,'All Medicine Details','all-medicine-details.html','no',82,16,19,19,'2022-02-23 15:28:32','2022-02-23 15:28:32'),(85,'Orders','no','fa-brands fa-first-order',NULL,16,19,19,'2022-02-23 15:30:17','2022-02-23 15:30:17'),(86,'All Orders','all-orders.html','no',85,16,19,19,'2022-02-23 15:31:00','2022-02-23 15:31:00');
/*!40000 ALTER TABLE `ad_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ad_menu_access_roles`
--

LOCK TABLES `ad_menu_access_roles` WRITE;
/*!40000 ALTER TABLE `ad_menu_access_roles` DISABLE KEYS */;
INSERT INTO `ad_menu_access_roles` VALUES (36,21,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(38,25,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(39,26,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(40,27,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(41,28,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(42,29,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(43,30,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(44,31,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(45,32,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(46,33,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(47,34,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(48,35,28,19,19,'2021-12-22 21:30:41','2021-12-22 21:30:41'),(49,39,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(50,40,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(51,41,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(52,42,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(53,43,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(54,44,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(55,45,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(56,46,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(57,47,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(58,48,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(59,49,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(60,50,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(61,51,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(62,52,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(63,53,32,19,19,'2021-12-23 10:52:09','2021-12-23 10:52:09'),(64,19,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(65,21,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(66,22,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(67,24,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(68,25,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(69,26,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(70,27,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(71,28,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(72,29,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(73,30,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(74,31,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(75,32,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(76,33,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(77,34,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(78,35,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(79,36,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(80,37,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(81,38,32,19,19,'2021-12-23 10:56:04','2021-12-23 10:56:04'),(85,57,32,19,19,'2022-01-18 11:24:26','2022-01-18 11:24:26'),(86,58,32,19,19,'2022-01-18 11:24:26','2022-01-18 11:24:26'),(87,59,32,19,19,'2022-01-18 11:24:26','2022-01-18 11:24:26'),(88,57,28,19,19,'2022-01-18 11:25:05','2022-01-18 11:25:05'),(89,58,28,19,19,'2022-01-18 11:25:05','2022-01-18 11:25:05'),(90,59,28,19,19,'2022-01-18 11:25:05','2022-01-18 11:25:05'),(91,60,32,19,19,'2022-02-23 14:44:46','2022-02-23 14:44:46'),(92,61,32,19,19,'2022-02-23 14:44:46','2022-02-23 14:44:46'),(93,63,32,19,19,'2022-02-23 14:45:52','2022-02-23 14:45:52'),(94,64,32,19,19,'2022-02-23 14:55:15','2022-02-23 14:55:15'),(95,65,32,19,19,'2022-02-23 14:55:15','2022-02-23 14:55:15'),(96,66,32,19,19,'2022-02-23 14:55:15','2022-02-23 14:55:15'),(103,76,32,19,19,'2022-02-23 15:24:57','2022-02-23 15:24:57'),(104,77,32,19,19,'2022-02-23 15:24:57','2022-02-23 15:24:57'),(105,78,32,19,19,'2022-02-23 15:24:57','2022-02-23 15:24:57'),(106,79,32,19,19,'2022-02-23 15:27:15','2022-02-23 15:27:15'),(107,80,32,19,19,'2022-02-23 15:27:15','2022-02-23 15:27:15'),(108,81,32,19,19,'2022-02-23 15:27:15','2022-02-23 15:27:15'),(109,82,32,19,19,'2022-02-23 15:29:00','2022-02-23 15:29:00'),(110,83,32,19,19,'2022-02-23 15:29:00','2022-02-23 15:29:00'),(111,84,32,19,19,'2022-02-23 15:29:00','2022-02-23 15:29:00'),(112,85,32,19,19,'2022-02-23 15:31:31','2022-02-23 15:31:31'),(113,86,32,19,19,'2022-02-23 15:31:31','2022-02-23 15:31:31');
/*!40000 ALTER TABLE `ad_menu_access_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ad_role`
--

LOCK TABLES `ad_role` WRITE;
/*!40000 ALTER TABLE `ad_role` DISABLE KEYS */;
INSERT INTO `ad_role` VALUES (22,'Pharmacy Admin',19,19,'2021-12-19 15:13:19','2021-12-19 15:13:19'),(24,'Ambulance Service Admin',19,19,'2021-12-19 15:13:42','2021-12-19 15:13:42'),(25,'Product Selling Sector Admin',19,19,'2021-12-19 15:14:37','2021-12-19 15:14:37'),(28,'Hospital Admin',19,19,'2021-12-19 18:03:25','2021-12-19 18:03:25'),(32,'Super Admin',19,19,'2021-12-22 21:10:27','2021-12-22 21:10:27'),(33,'hk',19,19,'2022-02-23 18:30:54','2022-02-23 18:30:54'),(34,'For fever',19,19,'2022-02-23 18:58:43','2022-02-23 18:58:43');
/*!40000 ALTER TABLE `ad_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ad_user_access_roles`
--

LOCK TABLES `ad_user_access_roles` WRITE;
/*!40000 ALTER TABLE `ad_user_access_roles` DISABLE KEYS */;
INSERT INTO `ad_user_access_roles` VALUES (15,20,22,19,19,'2021-12-21 16:51:58','2021-12-21 16:51:58'),(16,20,28,19,19,'2021-12-21 16:51:58','2021-12-21 16:51:58'),(20,19,32,19,19,'2021-12-23 10:47:31','2021-12-23 10:47:31'),(24,25,28,19,19,'2022-01-12 12:34:26','2022-01-12 12:34:26'),(25,26,28,19,19,'2022-01-12 12:36:54','2022-01-12 12:36:54'),(26,27,28,19,19,'2022-01-18 09:58:08','2022-01-18 09:58:08'),(29,44,28,19,19,'2022-01-20 17:15:16','2022-01-20 17:15:16'),(30,58,22,19,19,'2022-02-23 15:43:03','2022-02-23 15:43:03'),(31,59,22,19,19,'2022-02-23 15:49:44','2022-02-23 15:49:44');
/*!40000 ALTER TABLE `ad_user_access_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (4,'Cardiology','image_1641731776618.jpg',15,50,'+924299211129','info.cargiology@ghurki.com','Recently Registered',1,19,19,'2022-01-07 12:10:36','2022-01-09 12:36:16'),(6,'Gynaecology Department','image_1641816243245.jpeg',20,85,'401 231 231','gynaecology@nishtar.com','Active',5,19,19,'2022-01-10 12:04:02','2022-01-10 12:05:33'),(7,'Emergency Department','image_1641983035951.jpg',30,200,'1112 222 111','emergency@nishtar.com','Recently Registered',5,20,20,'2022-01-12 10:23:55','2022-01-12 10:23:55'),(8,'Cancer Department','image_1642502178318.jpg',20,1000,'+924299211124','cancer@shoukatkhanam.com','Recently Registered',6,27,27,'2022-01-18 10:36:18','2022-01-18 10:36:18');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `disease`
--

LOCK TABLES `disease` WRITE;
/*!40000 ALTER TABLE `disease` DISABLE KEYS */;
INSERT INTO `disease` VALUES (1,'Malaria','Fever in which person feels cold','fever','Mosqueto','Fever',9,19,19,'2022-01-18 12:22:54','2022-01-18 12:22:54'),(2,'Dengue','Fever in which person feels cold and weaknes','High Fever and coldness','Mosqueto','Fever',7,19,19,'2022-01-18 12:46:07','2022-01-18 14:05:17');
/*!40000 ALTER TABLE `disease` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `disease_treated_by_dr`
--

LOCK TABLES `disease_treated_by_dr` WRITE;
/*!40000 ALTER TABLE `disease_treated_by_dr` DISABLE KEYS */;
INSERT INTO `disease_treated_by_dr` VALUES (17,2,14,20,20,'2022-01-22 10:52:48','2022-01-22 10:52:48'),(19,1,16,27,27,'2022-01-22 11:05:03','2022-01-22 11:05:03');
/*!40000 ALTER TABLE `disease_treated_by_dr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (14,18765,16,1,'a','a',45,20,19,'2022-01-22 10:52:47','2022-01-25 17:01:52'),(16,1221,12,1,'Mon to Fri','10.30Am - 4.00Pm',47,27,27,'2022-01-22 11:05:02','2022-01-22 11:05:02');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `dr_in_depart`
--

LOCK TABLES `dr_in_depart` WRITE;
/*!40000 ALTER TABLE `dr_in_depart` DISABLE KEYS */;
INSERT INTO `dr_in_depart` VALUES (7,14,7,20,20,'2022-01-22 10:52:48','2022-01-22 10:52:48'),(9,16,8,27,27,'2022-01-22 11:05:03','2022-01-22 11:05:03');
/*!40000 ALTER TABLE `dr_in_depart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'Ghurki Trust Teaching Hospital','Mon-Fri 10am to 12pm','image_1641557221080.png',150,300,8,'Lahore','Pakistan','GT Road, Jallo More','53500','042 305 921','info@ghurki.com','Recently Registered',19,19,2022,'2022-01-09 12:40:34','0000-00-00 00:00:00'),(2,'Mayo Hospital','Mon-Fri 10:30am to 12pm','image_1641556386273.png',190,405,10,'Lahore','Pakistan','Hall Road, GPO Lahore','54001','+924299211128','mayohospital@gmail.com','Recently Registered',19,19,2022,'2022-01-07 11:53:06','0000-00-00 00:00:00'),(5,'Nishtar Hospital','Mon-Sat 24 Hrs','image_1641815913745.jpg',190,1000,23,'Multan','Pakistan','Nishtar Road','12346','402 976 215','info@nishtar.com','Active',19,19,2022,'2022-01-10 12:00:32','0000-00-00 00:00:00'),(6,'Shoukat Khanam Hospital','Mon-Fri 10:30am to 12:30pm','image_1642501961263.jpg',100,5000,20,'Lahore','Pakistan','Johr Town','486876','+924299211127','shoukatkhanam@gmail.com','Recently Registered',19,19,2022,'2022-01-18 10:32:41','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `medicine_history`
--

LOCK TABLES `medicine_history` WRITE;
/*!40000 ALTER TABLE `medicine_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `medicine_order`
--

LOCK TABLES `medicine_order` WRITE;
/*!40000 ALTER TABLE `medicine_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `medicine_unit`
--

LOCK TABLES `medicine_unit` WRITE;
/*!40000 ALTER TABLE `medicine_unit` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `menu_category`
--

LOCK TABLES `menu_category` WRITE;
/*!40000 ALTER TABLE `menu_category` DISABLE KEYS */;
INSERT INTO `menu_category` VALUES (9,'Hospital Management',19,19,'2021-12-22 12:28:41','2021-12-22 12:28:41'),(11,'Users',19,19,'2021-12-22 12:28:56','2021-12-22 12:28:56'),(12,'User-Role Management',19,19,'2021-12-22 12:29:16','2021-12-22 12:29:16'),(14,'ASSIGN TO ADMINS',19,19,'2022-01-08 08:32:56','2022-01-08 08:32:56'),(15,'General',19,19,'2022-01-18 11:19:15','2022-01-18 11:19:15'),(16,'Pharmacy Management',19,19,'2022-02-23 14:31:19','2022-02-23 14:31:19');
/*!40000 ALTER TABLE `menu_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (9,'Recently Registered',57,19,19,'2022-01-25 17:20:18','2022-01-25 17:20:18');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient_in_depart`
--

LOCK TABLES `patient_in_depart` WRITE;
/*!40000 ALTER TABLE `patient_in_depart` DISABLE KEYS */;
INSERT INTO `patient_in_depart` VALUES (3,9,6,19,19,'2022-01-25 17:20:19','2022-01-25 17:20:19');
/*!40000 ALTER TABLE `patient_in_depart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `patient_previous_disease`
--

LOCK TABLES `patient_previous_disease` WRITE;
/*!40000 ALTER TABLE `patient_previous_disease` DISABLE KEYS */;
INSERT INTO `patient_previous_disease` VALUES (9,'Year','6',9,1,19,19,'2022-01-25 17:20:19','2022-01-25 17:20:19');
/*!40000 ALTER TABLE `patient_previous_disease` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pharmacy`
--

LOCK TABLES `pharmacy` WRITE;
/*!40000 ALTER TABLE `pharmacy` DISABLE KEYS */;
INSERT INTO `pharmacy` VALUES (5,'Clinix Cure plus','Ghari Shahu','Lahore','Pakistan','0000000','000000000','876 545 6789','clinix@gmail.com',20,19,19,'2022-02-23 18:02:06','2022-02-23 18:02:39');
/*!40000 ALTER TABLE `pharmacy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `qualification`
--

LOCK TABLES `qualification` WRITE;
/*!40000 ALTER TABLE `qualification` DISABLE KEYS */;
INSERT INTO `qualification` VALUES (15,'a',14,20,20,'2022-01-22 10:52:48','2022-01-22 10:52:48'),(17,'MBBS',16,27,27,'2022-01-22 11:05:03','2022-01-22 11:05:03');
/*!40000 ALTER TABLE `qualification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `specialization`
--

LOCK TABLES `specialization` WRITE;
/*!40000 ALTER TABLE `specialization` DISABLE KEYS */;
INSERT INTO `specialization` VALUES (14,'a',14,20,20,'2022-01-22 10:52:48','2022-01-22 10:52:48'),(16,'Medicine',16,27,27,'2022-01-22 11:05:03','2022-01-22 11:05:03');
/*!40000 ALTER TABLE `specialization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (3,'kg',19,19,'2022-02-23 18:20:22','2022-02-23 18:20:22'),(4,'mg',19,19,'2022-02-23 18:21:50','2022-02-23 18:21:50');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (19,'superuser@gmail.com','$2b$10$iaFIrUQ8f58vqECytvFe0uyu8AxSRIy6qyswi7DAizRWG1I7gKmLS','Super User','superuser@gmail.com','email',1,0,1,'2021-12-18 21:56:46','2022-01-20 10:04:32',NULL,NULL,NULL,NULL,NULL,'image_1642673072832.jpg','0000-00-00 00:00:00','0000-00-00 00:00:00'),(20,'user1@gmail.com','$2a$10$UTqC68uvUekXTb86GOqDsuqsye/PbkZW3MupENigQeNpdf4CuaUBe','User 1','user1@gmail.com','email',1,1,0,'2021-12-20 19:53:42','2022-01-20 10:04:59','Multan','Pakistan',0,'73678','0000-00-00','image_1642673099878.jpg','2001-07-10 00:00:00','0000-00-00 00:00:00'),(25,'user2@gmail.com','$2a$10$62d18DawJzYJipCCwDh4beBFCFC9NG1qGFQvTQjf.VMNMiRO0O9fW','Admin 2','user2@gmail.com','email',1,1,0,'2022-01-12 12:34:25','2022-01-20 18:28:41','Multan','Pakistan',0,'12345','0000-00-00','image_1642703321653.jpg','2001-07-10 00:00:00','0000-00-00 00:00:00'),(26,'user3@gmail.com','$2a$10$DoxTa2wLkKllGC7sBFYDeOwmV55fHjFr6XjnHQvw7flmE6nDsO8Zq','Admin 3','user3@gmail.com','email',1,1,0,'2022-01-12 12:36:54','2022-01-20 10:04:42','Multan','Pakistan',0,'73678','0000-00-00','image_1642673082251.jpg','2001-07-10 00:00:00','0000-00-00 00:00:00'),(27,'hadmin@gmail.com','$2a$10$j2k1d6.owzh6fpp9hzY5BOTm2SlYlTAN7WYw61LSQl2P8RGZukZqW','H Admin','hadmin@gmail.com','email',1,1,0,'2022-01-18 09:58:08','2022-01-20 18:32:01','Multan','New york',0,'999999','0000-00-00','image_1642703521290.jpg','2001-07-10 00:00:00','0000-00-00 00:00:00'),(44,'ghjgfg@gmail.com','$2a$10$CMYwXtiOjvoNIPIDlFTzeOjQEFFiy6WvtvuEYeA1ioLykOXx1M7ie','hgkjg','ghjgfg@gmail.com','email',1,1,0,'2022-01-20 17:15:15','2022-01-20 18:30:15','Multan','khawaja colony',0,'12345','0000-00-00','image_1642703415404.jpg','2022-01-20 00:00:00','0000-00-00 00:00:00'),(45,'a@c.c','$2a$10$GX.OVacf74Eo0OJ6eTqCZuZpfd7zhD3Ml1zeVtjcjRXo/2biTOWD2','Dr Ab','a@c.c','email',1,0,0,'2022-01-22 10:52:47','2022-01-22 10:52:47','a','a',0,'11111','1212-12-12','image_1642848767863.jpg','2022-01-22 00:00:00','0000-00-00 00:00:00'),(47,'dr123@gmail.com','$2a$10$4Z6XATP4jVOiJpMqffmt6uX2BCOzP25UA2iYl8jQK9SD5OwggP35S','Dr Sohaib Maqsood','dr123@gmail.com','email',1,0,0,'2022-01-22 11:05:02','2022-01-22 11:05:02','Multan','Pakistan',0,'12345','0000-00-00','image_1642849502718.jpg','2022-01-22 00:00:00','0000-00-00 00:00:00'),(53,'patient1@gmail.com','$2a$10$Ysq4oNk7nnm7rZRpCGrorOhc134UqIBiwKi6TwwG1WAFLiTE6BQ9.','Patient 1','patient1@gmail.com','email',1,0,0,'2022-01-24 09:34:20','2022-01-25 15:48:22','dg khan','dg khan',0,'99999','0000-00-00','image_1643115911451.jpg','2022-01-24 00:00:00','0000-00-00 00:00:00'),(54,'patient2@gmail.com','$2a$10$5b2hgdvfehIf12Ou/Zn61etfb6EJQgTdqAS08uBchohNgGMXXwQv6','Patient 2','patient2@gmail.com','email',1,0,0,'2022-01-24 11:03:32','2022-01-24 11:03:32','Lahore','Pakistan',0,'12345','0000-00-00','image_1643022212653.jpg','2022-01-24 00:00:00','0000-00-00 00:00:00'),(55,'moeez@gmail.com','$2a$10$gmFPbgBmQP0qYpySa9ib/OeBU4Ilfka3xgPbxfEVQhLoq1Pvbq8L2','Moeez Ahmad','moeez@gmail.com','email',1,0,0,'2022-01-25 13:17:58','2022-01-25 17:18:10','Muree','Pakistan',0,'866778','0000-00-00','image_1643131090001.jpg','2022-01-06 00:00:00','0000-00-00 00:00:00'),(57,'moeez78@gmail.com','$2a$10$UqA6rAMDXv5rdlr9/ZTmTemALCiH2KUCGoc4cpSHEP3qLkaKENTi.','Moeez Ahmad','moeez78@gmail.com','email',1,0,0,'2022-01-25 17:20:18','2022-01-25 17:20:18','Gujranwala','Dubai',0,'90000','0000-00-00','image_1643131218849.jpg','2022-01-17 00:00:00','0000-00-00 00:00:00'),(58,'baberbahi@gmail.com','$2a$10$K9C1MxXG4dPA93AtFNnGS./M0PGgPrE69tPceMsIwusHtnZkGAkRG','Baber Ali Khan','baberbahi@gmail.com','email',1,1,0,'DG khan','Paris','Gulgusht','878098',98765789,'image_1645630983338.png','2022-02-09','male','2022-02-23 15:43:00','2022-02-23 15:43:03'),(59,'padmin@gmail.com','$2a$10$w/v2BTZDbjEQaAyOhfI.7uqaOtrjknirn60tpg9IYPIAJYOCoIF.O','Pharmacy Admin ','padmin@gmail.com','email',1,1,0,'Lahore','Pakistan','Lesbela','987678',5789878987,'image_1645631384775.png','2022-02-09','male','2022-02-23 15:49:43','2022-02-23 15:49:44');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-24  1:45:33
