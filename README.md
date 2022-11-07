# Angular


entrar en powershell como administrador

Set-ExecutionPolicy Unrestricted

Get-ExecutionPolicy 

---
IMPORTANTE: ACTUALIZAR EL CLI DE ANGULAR (EXISTENTE) CON EL SIGUIENTE COMANDO:

ng update @angular/cli @angular/core

---

npm install -g @angular/cli

creacion de un nuevo proyecto de angular: ng new nombre-app

ng -serve -o

---
instrucciones de la pagina de angular

ng new my-first-project

cd my-first-project

ng serve

---

APP EN PRODUCCION

ng build my-app -c production

---

comando de angular CLI para crear componentes(forma explicita y forma abreviada).

ng generate component nombre-del-componente

ng g c nombre-del-componente

---

CREACION DE UN COMPONENTE INLINE ( dentro de @component )

ng g c nombre-del-componente -s -t

---

Instalacion de bootstrap via NPM

npm install bootstrap --save

---

Installation BOOTSTRAP for Angular CLI

ng add @ng-bootstrap/ng-bootstrap
