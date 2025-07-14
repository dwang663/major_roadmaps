import json
import re

WORD_LIMIT = 50

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

with open("courses.json", "r", encoding="utf-8") as f:
    text = json.load(f)

code_to_description = {}

for course in text["data"]["courses"]:
    description = clean_text(course.get("description", ""))
    description = truncate_to_n_words(description, WORD_LIMIT)
    for listing in course.get("listings", []):
        course_code = clean_text(listing.get("course_code", ""))
        code_to_description[course_code] = description

with open("cleaned_course_data.json", "w", encoding="utf-8") as f:
    json.dump(code_to_description, f, indent=2, ensure_ascii=False)
