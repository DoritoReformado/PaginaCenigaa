from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/administrativos')
def administrativos():
    return render_template("administrativos.html")

@app.route('/aseguramiento_energetico')
def aseguramiento_energetico():
    return render_template("aseguramiento_energetico.html")

@app.route('/biotecnologia')
def biotecnologia():
    return render_template("biotecnologia.html")

@app.route('/pages/clasificacion_esal.html')
def clasificacion_esal():
    return render_template("calificacionESAL.html")

@app.route('/cambio_climatico')
def cambio_climatico():
    return render_template("cambio_climatico.html")

@app.route('/estructura_organizacional')
def estructura_organizacional():
    return render_template("estructura_organizacional.html")

@app.route('/experiencia_cenigaa')
def experiencia_cenigaa():
    return render_template("experiencia_cenigaa.html")

@app.route('/fundadores')
def fundadores():
    return render_template("fundadores.html")

@app.route('/historia')
def historia():
    return render_template("historia.html")

@app.route('/investigadores')
def investigadores():
    return render_template("investigadores.html")

@app.route('/modelo_sistemas_geoagroambientales')
def MSGAA():
    return render_template("modelacion_sistemas_geoagroambientales.html")

@app.route('/nosotros')
def nosotros():
    return render_template("nosotros.html")

@app.route('/objetivos_desarrollo_sostenible')
def ODS():
    return render_template("ODS.html")

#@app.route('/pasantes')
#def pasantes():
#    return render_template("pasantes.html")

@app.route('/responsabilidad_fiscal')
def responsabilidad_fiscal():
    return render_template("responsabilidad_fiscal.html")

@app.route('/responsabilidad_social')
def responsabilidad_social():
    return render_template("responsabilidad_social.html")

@app.route('/rut_camara_constitucion')
def rut_camara_constitucion():
    return render_template("rut_camara_constitucion.html")

@app.route('/salud_mental')
def salud_mental():
    return render_template("salud_mental.html")

@app.route('/servicios')
def servicios():
    return render_template("servicios.html")

@app.route('/toxicologia_ambiental')
def toxicologia_ambiental():
    return render_template("toxicologia_ambiental.html")

@app.route('/unidades_especializadas')
def unidades_especializadas():
    return render_template("unidades_especializadas.html")

@app.route('/ecoeficiencia_productiva_seguridad_alimentaria')
def ecoeficiencia_productiva_seguridad_alimentaria():
    return render_template("ecoeficiencia_productiva_seguridad_alimentaria.html")

@app.route('/nanotecnologia')
def nanotecnologia():
    return render_template("nanotecnologia.html")

if __name__ == "__main__":
    app.run(debug=True)
