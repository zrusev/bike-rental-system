![license](https://img.shields.io/github/license/zrusev/Flight_System.svg) ![size](https://img.shields.io/github/repo-size/zrusev/Bike_Rental_System.svg) ![last commit](https://img.shields.io/github/last-commit/zrusev/Bike_Rental_System.svg)


# Bike Rental System

Bike Rental System represent a web application for bike rental using Angular.
The app allows the users to create and render their personal bikes and log a pick up point for rental while Kinvey is used as a back-end service.

#### Application: 
-	public part (accessible without authentication) - latest top three added bikes; top three rented bikes
-	private part (available for registered users) - CRUD operations over a bike, personal profile
-	administrative part (available for administrators only) - all bikes listed and available for removal

Implemented authentication and roles; error handling and forms validation.
[Ng-Bootstrap](https://ng-bootstrap.github.io/#/home) grants a friendly UI; background theme by [Bootswatch](https://bootswatch.com/minty/).

#### Features:
- Google Maps implementation
- Components - lifecycle hooks; reusability of children; passing data from parent to child or from child to parent
- Service Layer - API calls inside services and provide them using DI; full range of CRUD operations. Handle remote data using Observables and RxJS, use Interceptors to attach
- Tokens, handle API errors outside components.
- Routing - routing modules. Use of authentication guards to block access to specific routes. Lazy loading of modules. Split the application into separate Angular modules.
- Forms and Directives - Use either template-driven and reactive forms.