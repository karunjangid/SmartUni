from flask import Flask, request, jsonify
from ..models.safetyResponseModel import analyze_video

app = Flask(__name__)

@app.route('/analyze-video', methods=['POST'])
def analyze_video_endpoint():
    """
    Endpoint to analyze a video stream.

    Expects a JSON payload with:
    {
        "videoURL": "url_of_the_video_stream"
    }
    """
    try:
        # Get JSON payload from the request
        data = request.get_json()
        video_url = data.get("videoURL")

        if not video_url:
            return jsonify({"error": "Video URL is required"}), 400

        # Pass the video URL to the analyze_video function
        result = analyze_video(video_url)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
