import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/locators";
import allData from '../../data/data'
import 'cypress-file-upload';
Cypress.config('defaultCommandTimeout', 60000)
const locator = new locatorsPage();
const data = new allData();

Given('Open Browser and Visit Website',()=> {
    cy.visit(data.orange_url);
    });
When('Enter the user login with  invalid username', () => {
     //  // Assuming "data" and "locator" are defined somewhere
     cy.wait(2000);
     cy.xpath(locator.Username).should('be.visible')
     cy.xpath(locator.Username).type('dmin'); // Access email using index [0]
     cy.xpath(locator.Password).should('be.visible')
     cy.xpath(locator.Password).type('admin123'); // Access password using index [0]
     });
Then('Click The Login Button', ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
   cy.xpath(locator.login).click()
   cy.wait(2000)
  });
When('Enter the user login with invalid password', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.Username).should('be.visible')
    cy.xpath(locator.Username).type('Admin'); // Access email using index [0]
    cy.xpath(locator.Password).should('be.visible')
    cy.xpath(locator.Password).type('admi'); // Access password using index [0]
    });
Then('Click The Login Button for invalid password',  ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
    cy.xpath(locator.login).click()
   cy.wait(2000)
   });
When('Enter the user login with valid username & password', () => {
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.Username).should('be.visible')
    cy.xpath(locator.Username).type('Admin'); // Access email using index [0]
    cy.xpath(locator.Password).should('be.visible')
    cy.xpath(locator.Password).type('admin123'); // Access password using index [0]
    });
Then('Click The Login Button with Valid Username & Password',  ()=> {
    cy.xpath(locator.login).should('contain','Login')
    cy.xpath(locator.login).should('be.visible')
    cy.xpath(locator.login).click()
    cy.wait(2000)
    });

Then('open admin panel',  ()=> {
    cy.xpath(locator.admin).should('contain','Admin')
    cy.xpath(locator.admin).should('be.visible')
    cy.xpath(locator.admin).click({force:true})
    cy.wait(2000)
    });     
    
    Then('Enter the admin name searching', () => {
        // const feature_dats = dataTable.hashes();
        //  // Assuming "data" and "locator" are defined somewhere
        cy.wait(2000);
        cy.xpath(locator.usernameee).should('be.visible')
        cy.xpath(locator.usernameee).type('Admin');
    });
Then('Now search the admin', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.Search).should('contain','Search')
    cy.xpath(locator.Search).should('be.visible')
    cy.xpath(locator.Search).click({force:true});
    });
    
    
Then ('Go to job board', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.job).should('contain','Job')
    cy.xpath(locator.job).should('be.visible')
    cy.xpath(locator.job).click({force:true});
    });
Then('Click the job title', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.jobtitle).should('contain','Job Titles')
    cy.xpath(locator.jobtitle).should('be.visible')
    cy.xpath(locator.jobtitle).click({force:true});
    });
Then('add new job', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add).should('contain','Add')
    cy.xpath(locator.add).should('be.visible')
    cy.xpath(locator.add).click({force:true});
    });
Then('Write job title', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.writejobtitle).should('be.visible')
    cy.xpath(locator.writejobtitle).type('Junior SQA Engineer');
    });
Then('Save this job', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save).should('contain','Save')
    cy.xpath(locator.save).should('be.visible')
    cy.xpath(locator.save).click({force:true});
    });
Then('Delete this job', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.delete).should('be.visible')
    cy.xpath(locator.delete).click({force:true});
    });
Then('Confirm delete', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.delete2).should('be.visible')
    cy.xpath(locator.delete2).click({force:true});
    });
Then('Click organization', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.clickorg).should('contain','Organization')
    cy.xpath(locator.clickorg).should('be.visible')
    cy.xpath(locator.clickorg).click({force:true});
    });
Then('Check organization info', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.clickorginfo).should('contain','General Information')
    cy.xpath(locator.clickorginfo).should('be.visible')
    cy.xpath(locator.clickorginfo).click({force:true});
    });
Then('Edit Organization info and save it', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.edit).should('be.visible')
    cy.xpath(locator.edit).click({force:true});
    });
Then('Write organization name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.orgname).should('be.visible')
    cy.xpath(locator.orgname).clear().type('OrangeHRM');
    });
Then('Write reginumber on regi box', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.reginumber).should('be.visible')
    cy.xpath(locator.reginumber).clear().type('12345');
    });
Then('Write taxid on taxid box', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.reginumber).should('be.visible')
    cy.xpath(locator.taxid).clear().type('123456');
    });
Then('Write phone number on phone box', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.phone).should('be.visible')
    cy.xpath(locator.phone).clear().type('01740444340');
    });
Then('Write email on email box', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.email).should('be.visible')
    cy.xpath(locator.email).clear().type('qups.parvej@gmail.com');
    });
Then('Click save button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save2).should('contain','Save')
    cy.xpath(locator.save2).should('be.visible')
    cy.xpath(locator.save2).click({force:true});
    });
Then('Click again organization', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.clickorg2).should('contain','Organization')
    cy.xpath(locator.clickorg2).should('be.visible')
    cy.xpath(locator.clickorg2).click({force:true});
    });
Then('Click again location', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.location).should('contain','Locations')
    cy.xpath(locator.location).should('be.visible')
    cy.xpath(locator.location).click({force:true});
    });
Then('Write location name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.locname).should('be.visible')
    cy.xpath(locator.locname).type('Canadian Regional HQ');
    });

Then('Search Location name and city', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.search2).should('contain','Search')
    cy.xpath(locator.search2).should('be.visible')
    cy.xpath(locator.search2).click({force:true});
    });
Then('Click organization once again', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.clickorg3).should('contain','Organization')
    cy.xpath(locator.clickorg3).should('be.visible')
    cy.xpath(locator.clickorg3).click({force:true});
    });
Then('Click structure', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.structure).should('contain','Structure')
    cy.xpath(locator.structure).should('be.visible')
    cy.xpath(locator.structure).click({force:true});
    });
Then('Click edit button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.edit2).should('be.visible')
    cy.xpath(locator.edit2).click({force:true});
    });
Then('Click add button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add2).should('contain','Add')
    cy.xpath(locator.add2).should('be.visible')
    cy.xpath(locator.add2).click({force:true});
    });
Then('Write structure name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.strname).should('be.visible')
    cy.xpath(locator.strname).type('QA QUOPS');
    });
Then('Now save structure', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save3).should('contain','Save')
    cy.xpath(locator.save3).should('be.visible')
    cy.xpath(locator.save3).click({force:true});
    });
Then('Click on qualification', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.qualifiy).should('contain','Qualifications')
    cy.xpath(locator.qualifiy).should('be.visible')
    cy.xpath(locator.qualifiy).click({force:true});
    });

Then('Click on skill', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.skill).should('contain','Skills')
    cy.xpath(locator.skill).should('be.visible')
    cy.xpath(locator.skill).click({force:true});
    });
Then('Click on add button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add3).should('contain','Add')
    cy.xpath(locator.add3).should('be.visible')
    cy.xpath(locator.add3).click({force:true});
    });
Then('Write the skill name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.skilname).should('be.visible')
    cy.xpath(locator.skilname).type('Machine Learning');
    });
Then('Now save this skill', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save4).should('contain','Save')
    cy.xpath(locator.save4).should('be.visible')
    cy.xpath(locator.save4).click({force:true});
    });
Then('Go to qualification for education', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.qualifiy2).should('contain','Qualifications')
    cy.xpath(locator.qualifiy2).should('be.visible')
    cy.xpath(locator.qualifiy2).click({force:true});
    });
Then('Go to education', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.edu).should('contain','Education')
    cy.xpath(locator.edu).should('be.visible')
    cy.xpath(locator.edu).click({force:true});
    });
Then('Click on education add button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add4).should('contain','Add')
    cy.xpath(locator.add4).should('be.visible')
    cy.xpath(locator.add4).click({force:true});
    });

Then('Write the qualification level', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.level).should('be.visible')
    cy.xpath(locator.level).type('Bachelor of Science in CSE');
    });

Then('Save qualification', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save5).should('contain','Save')
    cy.xpath(locator.save5).should('be.visible')
    cy.xpath(locator.save5).click({force:true});
    });
Then('Go to qualification for add language', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.qualifiy3).should('contain','Qualifications')
    cy.xpath(locator.qualifiy3).should('be.visible')
    cy.xpath(locator.qualifiy3).click({force:true});
    });
Then('Click on language', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.language).should('contain','Languages')
    cy.xpath(locator.language).should('be.visible')
    cy.xpath(locator.language).click({force:true});
    });
Then('Click on add for language', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add5).should('contain','Add')
    cy.xpath(locator.add5).should('be.visible')
    cy.xpath(locator.add5).click({force:true});
    });
Then('Write the language name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.lanname).should('be.visible')
    cy.xpath(locator.lanname).type('Banglish');
    });
Then('Now save the language', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save6).should('contain','Save')
    cy.xpath(locator.save6).should('be.visible')
    cy.xpath(locator.save6).click({force:true});
    });
Then('Go again click on qualification', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.qualifiy4).should('contain','Qualifications')
    cy.xpath(locator.qualifiy4).should('be.visible')
    cy.xpath(locator.qualifiy4).click({force:true});
    });

Then('Go to Memberships', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.membership).should('contain','Memberships')
    cy.xpath(locator.membership).should('be.visible')
    cy.xpath(locator.membership).click({force:true});
    });
Then('Add membership name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add6).should('contain','Add')
    cy.xpath(locator.add6).should('be.visible')
    cy.xpath(locator.add6).click({force:true});
    });
Then('Write the membership name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.memname).should('be.visible')
    cy.xpath(locator.memname).type('Badhon Parvej');
    });
Then('Now save membership name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save7).should('contain','Save')
    cy.xpath(locator.save7).should('be.visible')
    cy.xpath(locator.save7).click({force:true});
    });
Then('Go to nationalities', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.nationalities).should('contain','Nationalities')
    cy.xpath(locator.nationalities).should('be.visible')
    cy.xpath(locator.nationalities).click({force:true});
    });
Then('Click add button for added nationalities name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.add7).should('contain','Add')
    cy.xpath(locator.add7).should('be.visible')
    cy.xpath(locator.add7).click({force:true});
    });
Then('Write the nationalities name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.nationame).should('be.visible')
    cy.xpath(locator.nationame).type('Badhon Parvej');
    });
Then('Now save it', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save8).should('contain','Save')
    cy.xpath(locator.save8).should('be.visible')
    cy.xpath(locator.save8).click({force:true});
    });
Then('Go to corporate branding', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.corpbanding).should('contain','Corporate Branding')
    cy.xpath(locator.corpbanding).should('be.visible')
    cy.xpath(locator.corpbanding).click({force:true});
    });
Then('Click on secondary color', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.corpcolourbb).should('be.visible')
    cy.xpath(locator.corpcolourbb).click({force:true});
    });
Then('Select a color', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.setcolor).should('be.visible')
    cy.xpath(locator.setcolor).click({force:true});
    });
Then('Publish corporate branding', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.publish).should('contain','Publish')
    cy.xpath(locator.publish).should('be.visible')
    cy.xpath(locator.publish).click({force:true});
    cy.wait(2000);
    });

Then('Go to configuration', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.configaration).should('contain','Configuration')
    cy.xpath(locator.configaration).should('be.visible')
    cy.xpath(locator.configaration).click({force:true});
    cy.wait(2000);
    });
Then('Click on email configuration', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.emailconfig).should('contain','Email Configuration')
    cy.xpath(locator.emailconfig).should('be.visible')
    cy.xpath(locator.emailconfig).click({force:true});
    cy.wait(2000);
    });
Then('Write the email name', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.emailbox).should('be.visible')
    cy.xpath(locator.emailbox).clear().type('qups@gmail.com');
    });
Then('Setup the email configuration', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save9).should('contain','Save')
    cy.xpath(locator.save9).should('be.visible')
    cy.xpath(locator.save9).click({force:true});
    });
Then('Go to configuration for email subscription', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.configaration2).should('contain','Configuration')
    cy.xpath(locator.configaration2).should('be.visible')
    cy.xpath(locator.configaration2).click({force:true});
    });
Then('Click on email subscription', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.configemailsub).should('contain','Email Subscriptions')
    cy.xpath(locator.configemailsub).should('be.visible')
    cy.xpath(locator.configemailsub).click({force:true});
    });
Then('Click on leave application', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.leavapp).should('be.visible')
    cy.xpath(locator.leavapp).click({force:true});
    });
Then('Go configuration for module', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.configaration3).should('contain','Configuration')
    cy.xpath(locator.configaration3).should('be.visible')
    cy.xpath(locator.configaration3).click({force:true});
    });
Then('Click on module', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.setmod).should('contain','Modules')
    cy.xpath(locator.setmod).should('be.visible')
    cy.xpath(locator.setmod).click({force:true});
    });
Then('Change mobile configuration', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);

    cy.xpath(locator.mobilebutton).should('be.visible')
    cy.xpath(locator.mobilebutton).click({force:true});
    });
Then('Setup the Module', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.save11).should('contain','Save')
    cy.xpath(locator.save11).should('be.visible')
    cy.xpath(locator.save11).click({force:true});
    cy.wait(2000);
    });
When('Check the PIM', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.pim).should('contain','PIM')
    cy.xpath(locator.pim).should('be.visible')
    cy.xpath(locator.pim).click({force:true});
    });
Then('Show the employ list', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.srch).should('contain','Search')
    cy.xpath(locator.srch).should('be.visible')
    cy.xpath(locator.srch).click({force:true});
    });
Then('Check rest button', () => {
    // const feature_dats = dataTable.hashes();
    //  // Assuming "data" and "locator" are defined somewhere
    cy.wait(2000);
    cy.xpath(locator.reset).should('contain','Reset')
    cy.xpath(locator.reset).should('be.visible')
    cy.xpath(locator.reset).click({force:true});
    });