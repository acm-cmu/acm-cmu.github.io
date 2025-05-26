
import os
from PIL import Image

def convert_png_to_webp(source_folder='.', quality=80, lossless=False):

    for filename in os.listdir(source_folder):
        if filename.lower().endswith('.png'):
            png_path = os.path.join(source_folder, filename)
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_path = os.path.join(source_folder, webp_filename)
            with Image.open(png_path) as img:
                img.save(
                    webp_path, 
                    'WEBP', 
                    quality=quality, 
                    lossless=lossless, 
                    optimize=True
                )
            print(f'Converted {png_path} -> {webp_path}')

if __name__ == '__main__':

    convert_png_to_webp(quality=40, lossless=False)
