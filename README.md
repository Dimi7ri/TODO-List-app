# TODO-List-app
<br /> The purpose of this project is to write a To Do Tasks List using:
* Spring Boot 
* REST services
* Hibernate (Using Spring Data JPA)
* HTML5
* AngularJS

---

### Spring Boot Overview.
Spring Boot aims to provide Quick Start development in production level Spring applications and services.
Basically, with a couple of clicks you get your configuration, tools and libraries started and you are ready to develop your application. <br /> 
In the case of this project, since this is a Web-App I used **[Spring Boot 1.3.2](http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)**  and selected **[JPA](http://docs.spring.io/spring-data/jpa/docs/1.4.3.RELEASE/reference/html/jpa.repositories.html)**, **Web** and **[H2](http://www.h2database.com/)**. 
Spring boot downloaded and configured all Spring and 3rd party libraries for me, in a matter of minutes.
Normally, setting up all technologies we are going to use required a lot of time and unnecesary effort.

* Spring Boot provided Spring framework dependencies and embed Tomcat, JPA, H2, JDBC, log4j over slf4j, Jackson, Hibernate, jUnit, Dom4j 3rd party dependencies.
* No more XML hard to understand configuration files, but Annotation Based configuration.
* Included also security, metrics, health checks, externalized configuration so our app is ready for production.
* Very useful 'starter' POMs for Mave with a plug & play effect almost, to add any external tools we want.

---

### Spring Data Overview.
Spring Data adds a very convinient extra layer of abstraction on top of our JPA provider that simplifies persistence.
This layer of abtraction is called Repository and reduces the amount of repetitive code needed to implement data access significantly,  **[for more details.](http://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html)**
<br/>The implementation option are:<br/>
* **[CrudRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.1.RELEASE/api/org/springframework/data/repository/CrudRepository.html)** mainly for CRUD methods.<br/> 
* **[PagingAndSortingRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.0.M1/api/org/springframework/data/repository/PagingAndSortingRepository.html)** with some additional methods on top of CrudRepository <br/> 
* **[JpaRepository](http://docs.spring.io/spring-data/data-jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html)** for JPA methods.<br/>
Note that I use **JpaRepository** interface in this project.
