#!/bin/bash
set -e

if [ -f "venv/bin/activate" ]; then
  source venv/bin/activate
fi

python -m uvicorn server.video_stream:app --host 0.0.0.0 --port 8022
