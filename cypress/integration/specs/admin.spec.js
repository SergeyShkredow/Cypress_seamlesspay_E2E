import { LoginAdminPage } from '../pages/admin/LoginAdmin.page';
import { siteDomain } from '../../support/constants';

describe('Admin', () => {
    const loginAdminPage = new LoginAdminPage()

    context('Menu:', () => {
        it('Dashboard page', () => {
            loginAdminPage.goToLogin(siteDomain)
            loginAdminPage.signIn()
        })
    })
})
