FROM python:3.9
RUN apt-get update && apt-get install -y ffmpeg  # For video processing
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]  # Replace "app.py" with your actual script name
