# -*- coding: utf-8 -*-
import json
import re

# Read existing healthData.ts
with open('client/lib/healthData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

print("File length:", len(content))
