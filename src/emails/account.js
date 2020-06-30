const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

//sgMail.setApiKey(sendgridAPIKey)
//souad.bouzid610@gmail.com
//send api key
const sendWelcomeEmail = (email, name)=>{
  sgMail.send({
      to: email,
      from: 'souad.bouzid610@gmail.com',
      subject: 'Thanks for joining in!',
      text: `Welcome to the app, ${name}.let me know how you get along with the app`,
      
  })
}

const sendCancelationEmail = (email, name)=>{
sgMail.send({
  to: email,
  from: 'souad.bouzid610@gmail.com',
  subject: 'sorry to see you go!',
  text: `Goodbye, ${name}.I hope to see you back soon.`
})
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}