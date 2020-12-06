import {urlPortal} from '../../../support/constants';

export class LoginPortalPage {

    goToLogin(siteDomain) {
        switch (siteDomain) {
            case 'rc-':
            case 'test-':
                cy.visit(`rc-${urlPortal}`)
                break;
            case 'prod':
                cy.visit(`${urlPortal}`)
                break
        }
    };

    signIn() {
        cy.get('[type="email"]').type('seamlesspaytest@gmail.com');
        cy.get('[type="password"]').type('123123@');
        cy.get('[type="button"]').click();
    };
}
