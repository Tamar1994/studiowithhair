from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def homePage():
    return render_template("home.html")

@app.route("/gestao", methods=['GET', 'POST'])
def gestaoPage():
    return render_template("gestao.html")

if __name__ == '__main__':
    app.run(debug=True)