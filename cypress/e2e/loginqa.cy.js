describe('Домашка - форма логина и пароля', function () {

    it('Верный логин и верный пароль', function () { // 1
         cy.visit('https://login.qa.studio/'); 
         cy.get('#mail').type('german@dolnikov.ru'); 
         cy.get('#pass').type('iLoveqastudio1'); 
         cy.get('#loginButton').click(); 
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
         cy.get('#messageHeader'). should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  

     })



    it('Восстановление пароля', function () { //2
         cy.visit('https://login.qa.studio/'); 
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('soulluosy@yandex.ru');
         cy.get('#restoreEmailButton'). click();
         cy.get('#messageHeader'). contains('Успешно отправили пароль на e-mail');
         cy.get('#messageHeader'). should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
      


    it('Верный логин и неверный пароль', function () { //3
         cy.visit('https://login.qa.studio/'); 
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio12');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#messageHeader'). should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   




    it('Неверный логин и верный пароль', function () { //4
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('geman@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton'). click();
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');


    })


    it('Логин без @ и верный пароль', function () { //5
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton'). click();
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
         cy.get('#messageHeader').should('be.visible');
    }) 


    it('Приведение к строчным буквам', function () { //5
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton'). click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    }) 

})    







 
