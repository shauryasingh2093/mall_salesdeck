import os
import re

dir_path = 'src/pages'
for filename in os.listdir(dir_path):
    if filename.endswith('.jsx'):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Reduce duration: 1.5 -> duration: 0.5
        content = re.sub(r'duration:\s*1\.5', 'duration: 0.5', content)
        # Reduce duration: 1.2 -> duration: 0.6
        content = re.sub(r'duration:\s*1\.2', 'duration: 0.6', content)
        # Reduce duration: 1 -> duration: 0.5
        content = re.sub(r'duration:\s*1(?!\.)', 'duration: 0.5', content)
        
        # Reduce delays
        content = re.sub(r'delay:\s*0\.5', 'delay: 0.2', content)
        content = re.sub(r'delay:\s*0\.8', 'delay: 0.3', content)
        content = re.sub(r'delay:\s*1(?!\.)', 'delay: 0.4', content)
        content = re.sub(r'delay:\s*1\.2', 'delay: 0.5', content)
        content = re.sub(r'delay:\s*1\.4', 'delay: 0.6', content)
        content = re.sub(r'delay:\s*1\.6', 'delay: 0.7', content)
        content = re.sub(r'delay:\s*1\.8', 'delay: 0.8', content)
        content = re.sub(r'delay:\s*2\.1', 'delay: 0.9', content)

        with open(filepath, 'w') as f:
            f.write(content)

print("Done speeding up animations.")
