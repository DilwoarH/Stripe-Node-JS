const Stripe = require('stripe');
const stripe = Stripe('sk_test_Hb4o0Oy4pjfrP6KcNR9xIWNV00N3xQcprq');

class StripeApp {
    constructor() {
        this.createCustomer();
    }

    createCustomer() {
        stripe.customers.create({
            email: 'customer@example.com',
        }).then( (customer) => {
            console.log(customer);
        } );
    }
}

new StripeApp();
