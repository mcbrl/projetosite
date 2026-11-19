# Scripts Python do dump (scripts/clone_site.py) e da extração do Elementor (tools/extract_*.py).
FROM python:3.14-slim
WORKDIR /app
COPY docker/requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt
