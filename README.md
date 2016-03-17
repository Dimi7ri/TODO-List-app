# TODO-List-app
<br /> The purpose of this project is to write a To Do Tasks List using:
* Spring Boot (v1.3.2)
* **[REST](https://spring.io/understanding/REST)** 
* Hibernate (Using Spring Data JPA)
* HTML5
* AngularJS (v1.5.0)
* Bootstrap (v3.3.6)

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
* Very useful 'starter' POMs for Maven with a plug & play effect almost, to add any external tools we want.

---

#### Spring Data Overview.
Spring Data adds a very convinient extra layer of abstraction on top of our JPA provider that simplifies persistence.
This layer of abtraction is called Repository and reduces the amount of repetitive code needed to implement data access significantly,  **[for more details.](http://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html)**
<br/>The implementation option are:<br/>
* **[CrudRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.1.RELEASE/api/org/springframework/data/repository/CrudRepository.html)** mainly for CRUD methods.<br/> 
* **[PagingAndSortingRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.0.M1/api/org/springframework/data/repository/PagingAndSortingRepository.html)** with some additional methods on top of CrudRepository <br/> 
* **[JpaRepository](http://docs.spring.io/spring-data/data-jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html)** for JPA methods.<br/>
Note that I use **JpaRepository** interface in this project..

---

### AngularJS and REST Overview.
**[AngularJS](https://github.com/angular/angular.js)** is a front-end open source web application framework developed by Adam Abrons and Misko Hevery and now maintained by Google. <br />
* AngularJS makes "Single Page Applications" extending HTML by using Directives to express the behaviour of our app. Also separating Client and Server, allowing us to develop and test each Side independently.<br />
* The **only** way the Front End communicates with the Back End is through **[JSON](http://www.json.org/)**.<br />
* Since each element is loaded once, bandwidth usage is decreased significantly, also improving response speed, in comparison to classic request and response cycles in Client-Server technologies.<br />
* AngularJS makes the browser look more like a WebApp than a WebPage using JavaScript that is executed in the browser.<br />
* To explain AngularJS further I created this repository **[AngularJS-samples](https://github.com/Dimi7ri/AngularJS-samples)**. For official documentation, tutorials and information about **[AngularJS](https://angularjs.org/)**. </br>
<br /> 

##### The front-end of this project is structured this way: </br>
/public<br />
----------/controllers<br />
--------------------Controller1.js<br />
--------------------Controller2.js<br />
----------/css<br />
--------------------boostrap.min.js<br />
----------/fonts<br />
--------------------glyphicons<br />
----------/js<br />
--------------------angular-route.min.js<br />
--------------------angular.min.js<br />
--------------------boostrap.min.js<br />
----------/services<br />
--------------------serviceOrFactory1.js<br />
--------------------serviceOrFactory2.js<br />
----------/views<br />
--------------------View1.html<br />
--------------------View2.html<br />
----------app.js<br />
----------index.html<br />

