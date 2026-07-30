import pickle

import pandas as pd

from flask import Flask, jsonify, request

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "Disease Prediction ML API is running",
        "endpoints": {
            "predict": "/api/predict (POST)"
        }
    })

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)
        
    df = pd.DataFrame([data])
    output = model.predict(df)
    
    desc = pd.read_csv('description.csv')
    
    result = desc[desc['Disease'] == output[0]]
    description_text = result.iloc[0]["Description"] if not result.empty else "No description available."
    
    wrk = pd.read_csv('workout.csv')
    wrk = wrk[wrk["disease"] == output[0]]
    workout_list = wrk["workout"].tolist() if not wrk.empty else []
    
    diets = pd.read_csv('diets.csv')
    die = diets[diets['Disease'] == output[0]]['Diet']
    die = [d for d in die.values]
    
    med = pd.read_csv('medications.csv')
    medi = med[med['Disease'] == output[0]]['Medication']
    medi = [m for m in medi.values]
    
    return jsonify({
        "disease": output[0],
        "description": description_text,
        "workout": workout_list,
        "diets": die,
        "medication": medi
    })
    
if(__name__ == '__main__'):
    app.run(host='0.0.0.0', port=5000, debug=True)
