# Online Bus Booking System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technology Used](#technology-used)
- [Getting Started](#getting-started)
- [Configuring the Application](#configuring-the-application)
- [Running on Local](#running-on-local)
- [Advantages](#advantages)
- [Future Scope](#future-scope)
- [Conclusion](#conclusion)

---

## Introduction
The **Online Bus Booking System** is designed to streamline the bus ticketing process, providing a user-friendly interface for passengers and powerful tools for administrators. The system facilitates efficient bus bookings, schedule management, and data accuracy, redefining standards in online bus reservations with a focus on efficiency, security, and user satisfaction.

---

## Features
- **User-Friendly Interface**: Simplifies the booking process for passengers.
- **Real-Time Updates**: Ensures access to the latest schedules and fares.
- **Admin Dashboard**: Centralized management of buses, routes, and bookings.
- **Secure Data Handling**: Protects user information and transactions.
- **Multi-Device Support**: Fully responsive design for desktops, tablets, and smartphones.

---

## Technology Used
### Front-End Technologies
- Angular
- HTML5, CSS3, JavaScript

### Server-Side Technologies
- Spring Boot
- Tomcat

### Back-End Technologies
- MySQL
- Hibernate

---

## Getting Started
To set up the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MeRishi07/BookYourBus.git
   ```
2. Navigate to the project directory:
   ```bash
   cd online-bus-booking-system
   ```
3. Install required dependencies for the front-end and back-end.

---

## Configuring the Application
1. **Database Setup**:
   - Install MySQL and create a database for the application.
   - Update the database configuration in the application properties file:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/<your-database-name>
     spring.datasource.username=<your-username>
     spring.datasource.password=<your-password>
     ```

2. **API Keys and Environment Variables**:
   - Configure any API keys or environment variables required for the application.

---

## Running on Local
1. **Start the Back-End Server**:
   ```bash
   ./mvnw spring-boot:run
   ```
2. **Start the Front-End Application**:
   Navigate to the front-end directory and run:
   ```bash
   ng serve
   ```
3. Access the application in your browser at:
   ```
   http://localhost:4200
   ```

---

## Advantages
- Book tickets from anywhere, anytime.
- User-friendly interface.
- Real-time schedule and fare updates.
- Environmental sustainability through reduced paper usage.
- Streamlined operations for bus operators.

---

## Future Scope
- Expansion to international travel and cross-border bookings.
- Integration with hotels, airlines, and tour operators.
- Promotion of eco-friendly travel options.

---

## Screenshots
- DB Schema
  ![DB Schema](https://github.com/MeRishi07/BookYourBus/blob/44bc81bdfb69bb1acf5978e30e7f373a3f4b430e/Screenshots/Picture2.jpg)
- UI
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture1.png)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Q.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture3.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture4.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture5.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture6.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture7.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture8.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture9.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture10.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture11.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture12.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture13.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture14.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture15.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture16.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture17.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture18.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture19.jpg)
  ![](https://github.com/MeRishi07/BookYourBus/blob/803331cb2733262ed4f141b23be136af2f7d8c3f/Screenshots/Picture20.jpg)

  
- Test Cases
  ![JUnit Test](https://github.com/MeRishi07/BookYourBus/blob/44bc81bdfb69bb1acf5978e30e7f373a3f4b430e/Screenshots/Picture21.jpg)
  ![JUnit](https://github.com/MeRishi07/BookYourBus/blob/44bc81bdfb69bb1acf5978e30e7f373a3f4b430e/Screenshots/Picture22.jpg)

---

## Conclusion
The **Online Bus Booking System** revolutionizes bus travel planning, offering convenience and efficiency for passengers and operators alike. With scalability and sustainability at its core, this system is designed for future growth and adaptability.


