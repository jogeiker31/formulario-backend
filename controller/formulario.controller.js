process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
var nodemailer = require('nodemailer');
var mailer = nodemailer.createTransport({
    host: 'mail.olahagency.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'jogeiker1999@olahagency.com', // generated ethereal user
        pass: 'jogeikerjogeiker' // generated ethereal password
      }
   });

var hbs = require('nodemailer-express-handlebars');
var options = {
viewEngine : {
    extname: '.hbs', // handlebars extension
    layoutsDir: 'views/email/', // location of handlebars templates
    defaultLayout: 'credenciales', // name of main template
    partialsDir: 'views/email/', // location of your subtemplates aka. header, footer etc
},
viewPath: 'views/email',
extName: '.hbs'
};

const formCtrl = {}


function sendEmail(usuario){
    mailer.use('compile', hbs(options));
    mailer.sendMail({
        from: 'jogeiker1999@olahagency.com',
        to: usuario.email,
        subject: `Samuel Formulario`,
        template: 'template',
        context: {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo:usuario.email,
            mensaje:usuario.mensaje,
            
            
        }
        }, (error, response)=>{
            if(error){
                console.log(error);
                sendEmail(usuario)
           
            }else{
                console.log(response);
                res.status(200).json({
                    ok:true
                })
              
            }
           
            
        }) 
}


formCtrl.email = async (req,res)=>{
    let usuario = req.body
   
    sendEmail(usuario)
    res.status(200).json({
        ok:true
    })
}

module.exports = formCtrl;