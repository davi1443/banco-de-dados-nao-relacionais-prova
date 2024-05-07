from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
db = SQLAlchemy(app)

class Funcionario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    primeiro_nome = db.Column(db.String(50), nullable=False)
    sobrenome = db.Column(db.String(50), nullable=False)
    data_de_admissao = db.Column(db.Date, nullable=False)
    status_funcionario = db.Column(db.Boolean, nullable=False)
    id_setor = db.Column(db.Integer, db.ForeignKey('setor.id'))

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        primeiro_nome = request.form['primeiro_nome']
        sobrenome = request.form['sobrenome']
        data_de_admissao = request.form['data_de_admissao']
        status_funcionario = True if request.form.get('status_funcionario') == 'on' else False
        id_setor = request.form['id_setor']

        funcionario = Funcionario(
            primeiro_nome=primeiro_nome,
            sobrenome=sobrenome,
            data_de_admissao=data_de_admissao,
            status_funcionario=status_funcionario,
            id_setor=id_setor
        )

        db.session.add(funcionario)
        db.session.commit()

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)