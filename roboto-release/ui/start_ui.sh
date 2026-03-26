#!/bin/bash
set -e

python -m http.server 8033 --directory build
