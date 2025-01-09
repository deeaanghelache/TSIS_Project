from flask import Blueprint, request, jsonify
import subprocess

blueprint = Blueprint('blueprint', __name__)


@blueprint.route('/question_generation', methods=['POST'])
def generate_questions():
    try:
        # parse data from the learning app form page
        data = request.json
        problem = data.get('problem')

        if not problem:
            return jsonify({'error': "Problem for solving is required!"}), 400

        # the command to execute the question generator script
        generate_questions_cmd = ['python', '../model/question_generation_pipeline.py', problem]

        # running the generator script
        result = subprocess.run(generate_questions_cmd, capture_output=True, text=True)

        # format the result
        response = {
            'questions': result.stdout,
            'errors': result.stderr,
            'return_code': result.returncode
        }
        return jsonify(response, 200 if result.returncode == 0 else 500)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

