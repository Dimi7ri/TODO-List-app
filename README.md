# TODO-List-app
<br /> The purpose of this project is to write a To Do Tasks List using:
* Spring Boot 
* REST services
* Hibernate (Using Spring Data JPA)
* HTML5
* AngularJS

---

### Spring Data Overview.
Spring Data adds a very convinient extra layer of abstraction on top of our JPA provider that simplifies persistence.
This layer of abtraction is called Repository and reduces the amount of repetitive code needed to implement data access significantly,  **[for more details.](http://docs.spring.io/spring-data/data-commons/docs/1.6.1.RELEASE/reference/html/repositories.html)**
<br/>The implementation option are:<br/>
**[CrudRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.1.RELEASE/api/org/springframework/data/repository/CrudRepository.html)** mainly for CRUD methods.<br/> **[PagingAndSortingRepository](http://docs.spring.io/spring-data/data-commons/docs/1.2.0.M1/api/org/springframework/data/repository/PagingAndSortingRepository.html)** with some additional methods on top of CrudRepository <br/> **[JpaRepository](http://docs.spring.io/spring-data/data-jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html)** for JPA methods.<br/>
Note that I use **JpaRepository** interface in this project.
