describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки 'Забыли пароль?'
         cy.get('#mail').type('german@dolnikov.ru'); //нашел поле логин и ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //нашел поле пароль и ввели верный пароль
         cy.get('#loginButton').click(); //нашел кнопку войти и нажал на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверил, что авторизация прошла успешно
         cy.get('#messageHeader'). should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю 

     })
 }) 

describe('Проверка авторизации', function () {

    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки 'Забыли пароль?'
         cy.get('#mail').type('german@dolnikov.ru'); //нашел поле логин и ввели верный логин
         cy.get('#pass').type('iLoveqastudio12'); //нашел поле пароль и ввели неверный пароль
         cy.get('#loginButton').click(); //нашел кнопку войти и нажал на нее
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверил, авторизация не прошла и вижу текст
         cy.get('#messageHeader'). should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю 
    })
})       

describe('Проверка авторизации', function () {

    it('Логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки 'Забыли пароль?'
         cy.get('#mail').type('germandolnikov.ru'); //нашел поле логин и ввели логин без @
         cy.get('#pass').type('iLoveqastudio1'); //нашел поле пароль и ввели верный пароль
         cy.get('#loginButton').click(); //нашел кнопку войти и нажал на нее
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверил, что авторизация не прошла и вижу текст
         cy.get('#messageHeader'). should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю 
    })
})    


describe('Проверка восстановления пароля', function () {

    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/'); // зашел на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //нашел кнопку "Забыли пароль?" и проверил ее цвет
         cy.get('#forgotEmailButton').click();//нашел кнопку "забыли пароль?"
         cy.get('#mailForgot').type('german@dolnikov.ru')//ввел верный логин
         cy.get('#restoreEmailButton').click();//нажал на кнопку "Отправить код"
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверил, что код отправлен и вижу текст
         cy.get('#messageHeader'). should('be.visible');//текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден пользователю 
    })
})    







 // План:
 // Найти поле логин и ввести верный логин
 // Найти поле пароль и ввести верный пароль
 // Найти кнопрку войти и нажать на нее
 // Проверить, что авторизация прошла успешно