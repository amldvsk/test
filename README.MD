![alt text](https://www.moonsite.co.il/media/1057/moonsite-logo.png?anchor=center&mode=crop&rnd=131429454620000000 "Moonsite Logo")

# Angular 1 - Bootstrap 3 Moonsite Boilerplate
---

#### Folder Hierarchy 
* src
    *   app
        *   components
        *   containers
        *   directives
        *   services
    *   assets

#### Explanation

**src**

holds all the application source code and other resources like images, fonts ETC...

**app**

holds the application source code like javascript files sass and html templates

**components**

small reusable pieces of the application like (special inputs, header, footer ETC...) 

**containers**

bigger component that holds the pages 
container will hold smaller components used to render the page

* container (main page)
    * header (component)
    * form
        * Name Input (component that can validate name input)
        * ID Input (component that can validate ID input)
    * footer (component)

**directives**

holds all the codes that used to interact with the dom (like changing the logo on page scroll)

** *keep in mind you can't mix component and directive on the same element*

**services**

holds all the codes that deals with the data management of the appliction like http calls localsotrage ETC...

**assets**

holds images, fonts ETC....


**Created From gulp-angular**

https://github.com/Swiip/generator-gulp-angular