import json
import re

# where to retrieve cleaned course data
data = "2026_cleaned_course_data.json"

# where to save unique subjects list
output = "subjects_list.json"

with open(data, "r", encoding="utf-8") as f:
    data = json.load(f)

subjects = set()

for course_code in data.keys():
    match = re.match(r'^([A-Z&]{2,4})\b', course_code)
    if match:
        subjects.add(match.group(1))

sorted_subjects = sorted(subjects)

with open(output, "w", encoding="utf-8") as f:
    json.dump(sorted_subjects, f, indent=2, ensure_ascii=False)