import { LoginPortalPage } from '../pages/portal/LoginPortal.page';
import { siteDomain } from '../../support/constants';

describe('Admin', () => {

    const loginPortalPage = new LoginPortalPage()

    context('Menu:', () => {
        it('Dashboard page', () => {
            loginPortalPage.goToLogin(siteDomain)
            loginPortalPage.signIn()
        })
    })
})
