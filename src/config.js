const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  title: 'Lightning in a Bot',
  url: 'https://lightninginabot.com',
  contactEmail: 'hello@lightninginabot.com',
  formActionURL: 'https://formspree.io/hello@lightninginabot.com',
  formSubmittedURL: 'https://lightninginabot.com/message-submitted'
}, environment);
