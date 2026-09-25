# -*- coding: utf-8 -*-
"""
Generates complete 12 health topics with trilingual content (UZ, EN, RU),
exact matching picture paths, multiple quiz questions, and exports to:
1. client/lib/healthData.ts
2. server/src/scripts/seedHealthData.ts
"""
import json
import os

# We will read existing client/lib/healthData.ts to preserve existing texts
# and add the new Brain and Mouth topics, ensuring all 12 are fully trilingual and use correct images.

print("Starting generation...")
