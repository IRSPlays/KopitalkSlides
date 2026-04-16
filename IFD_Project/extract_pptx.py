import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text(pptx_path):
    try:
        with zipfile.ZipFile(pptx_path, 'r') as z:
            slide_files = [f for f in z.namelist() if f.startswith('ppt/slides/slide')]
            slide_files.sort(key=lambda x: int(x.replace('ppt/slides/slide', '').replace('.xml', '')))
            
            for slide in slide_files:
                tree = ET.fromstring(z.read(slide))
                texts = [node.text for node in tree.iter() if node.text and node.text.strip()]
                print(f'\n--- {slide} ---')
                print(' | '.join(texts))
    except Exception as e:
        print(f"Error: {e}")

extract_text("IFD_Assets/ADSS International Friendship Day 2026.pptx")
