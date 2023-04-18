#!/bin/bash
echo "Executing entrypoint.sh with CMD arguments: $@"
python /app/main.py "$@"