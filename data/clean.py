import json
import re

# set maximum word limit for descriptions
WORD_LIMIT = 50

# where to retrieve raw data copied from coursetable catalog
before = "2026_course_data.json"

# where to save cleaned data
after = "2026_cleaned_course_data.json"

def clean_text(value):
    value = re.sub(r'\\u[0-9a-fA-F]{4}', '', value)
    value = value.replace('\\', '')
    value = value.replace('\u00a0', ' ')
    value = ''.join(c for c in value if c.isprintable())
    value = re.sub(r'\s+', ' ', value).strip()
    value = value.replace('"', '\\"')
    return value

def truncate_to_n_words(text, n):
    words = text.split()
    if len(words) > n:
        return ' '.join(words[:n]) + '...'
    return text

with open(before, "r", encoding="utf-8") as f:
    text = json.load(f)

code_to_description = {}

for course in text["data"]["courses"]:
    description = clean_text(course.get("description", ""))
    description = truncate_to_n_words(description, WORD_LIMIT)
    for listing in course.get("listings", []):
        course_code = clean_text(listing.get("course_code", ""))
        if course_code not in code_to_description:
            code_to_description[course_code] = description

with open(after, "w", encoding="utf-8") as f:
    json.dump(code_to_description, f, indent=2, ensure_ascii=False)
