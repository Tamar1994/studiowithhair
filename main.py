from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def homePage():
    return render_template("home.html")


app.run(debug=True)