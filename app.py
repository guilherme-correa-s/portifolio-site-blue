from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message

app = Flask(__name__)

mail_config = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": 'e-mail',
    "MAIL_PASSWORD": 'senha'
}

app.config.update(mail_config)
mail = Mail(app)

class Contato:
    def __init__ (self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contato', methods=['GET', 'POST'])
def contato():
    if request.method == 'POST':
        formContato = Contato(
            request.form['nome'],
            request.form['email'],
            request.form['mensagem']
        )
        msg = Message(
            subject='Contato site portifólio Blue',
            sender=app.config.get("MAIL_USERNAME"),
            recipients= [app.config.get("MAIL_USERNAME")],
            body= f'''O {formContato.nome} com e-mail {formContato.email} enviou a seguinte mensagem:
                {formContato.mensagem}'''
        )
        mail.send(msg)
    return render_template('contato.html', formContato=formContato)
if __name__ == '__main__':
    app.run(debug=True)