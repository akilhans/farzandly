import re

with open('client/lib/healthData.ts', encoding='utf-8') as f:
    c = f.read()

matches = re.findall(r'"slug":\s*"([^"]+)"[\s\S]*?"heroImage":\s*"([^"]*)"', c)
for slug, img in matches:
    print(f"{slug} -> {img}")
