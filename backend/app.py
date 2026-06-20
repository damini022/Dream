import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
genai.configure(
    api_key=""
)

model = genai.GenerativeModel("gemini-3.5-flash")


@app.route("/")
def home():
    return "DreamMind AI Backend Running"

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    dream = data.get("dream", "")

    prompt = f"""
    Analyze this dream.

    Return only in this format:

    Emotion: <emotion>
    Interpretation: <meaning>

    Dream:
    {dream}
    """

    response = model.generate_content(prompt)

    text = response.text

    emotion = "Unknown"
    interpretation = text

    if "Emotion:" in text:
        lines = text.split("\n")
        for line in lines:
            if line.startswith("Emotion:"):
                emotion = line.replace("Emotion:", "").strip()
            elif line.startswith("Interpretation:"):
                interpretation = line.replace("Interpretation:", "").strip()

    return jsonify({
        "emotion": emotion,
        "interpretation": interpretation
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
