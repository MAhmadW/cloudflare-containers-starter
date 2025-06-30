FROM python:3.12-slim AS runtime

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY python-container/requirements.txt .

RUN pip install -r requirements.txt

COPY python-container .

EXPOSE 8080
CMD ["fastapi", "run", "--host", "0.0.0.0", "--port", "8080", "--workers", "1"]