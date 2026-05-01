import os
import re

dir_path = 'src/pages'
for filename in os.listdir(dir_path):
    if filename.endswith('.jsx'):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Replace "Slide XX &mdash; Category" with just "Category"
        new_content = re.sub(r'Slide \d{2}\s*&mdash;\s*', '', content)
        
        if new_content != content:
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Updated {filename}")

print("Done stripping slide numbers.")
