import os

replacements = {
    'DiningPathway.jsx': ('Slide 08 &mdash;', 'Slide 05 &mdash;'),
    'HospitalityPathway.jsx': ('Slide 09 &mdash;', 'Slide 06 &mdash;'),
    'EventsPathway.jsx': ('Slide 05 &mdash;', 'Slide 07 &mdash;'),
    'EntertainmentPathway.jsx': ('Slide 06 &mdash;', 'Slide 08 &mdash;'),
    'AttractionsDirectoryPathway.jsx': ('Slide 07 &mdash;', 'Slide 09 &mdash;')
}

dir_path = 'src/pages'
for filename, (old, new) in replacements.items():
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    content = content.replace(old, new)
    with open(filepath, 'w') as f:
        f.write(content)

print("Done updating slide numbers.")
