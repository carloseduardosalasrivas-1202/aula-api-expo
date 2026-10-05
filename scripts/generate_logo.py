from PIL import Image, ImageDraw, ImageFont
import math

W = H = 1200
img = Image.new('RGBA', (W, H), (255, 255, 255, 255))
d = ImageDraw.Draw(img)
BLACK = (0, 0, 0, 255)
WHITE = (255, 255, 255, 255)

cx, cy = W / 2, H / 2
R = 520

# Outer circle
for width in (26, 8):
    d.ellipse((cx - R, cy - R, cx + R, cy + R), outline=BLACK, width=width)

# Top banner text
try:
    title_font = ImageFont.truetype('DejaVuSerif-Bold.ttf', 180)
    sub_font = ImageFont.truetype('DejaVuSerif-Bold.ttf', 112)
    tiny_font = ImageFont.truetype('DejaVuSans-Bold.ttf', 42)
except Exception:
    title_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()
    tiny_font = ImageFont.load_default()

for text, y, font in [('HOPE', 165, title_font), ('BARBEARIA', 940, sub_font)]:
    bbox = d.textbbox((0, 0), text, font=font)
    x = cx - (bbox[2] - bbox[0]) / 2
    y0 = y - (bbox[3] - bbox[1]) / 2
    d.text((x, y0), text, fill=BLACK, font=font)

# Decorative ring accents
for angle in range(0, 360, 30):
    a = math.radians(angle)
    x1 = cx + (R - 26) * math.cos(a)
    y1 = cy + (R - 26) * math.sin(a)
    x2 = cx + (R - 130) * math.cos(a)
    y2 = cy + (R - 130) * math.sin(a)
    d.line((x1, y1, x2, y2), fill=BLACK, width=8)

# Center barber pole
pole_x, pole_y = cx, cy + 40
pole_w, pole_h = 120, 210

d.rounded_rectangle(
    (pole_x - pole_w / 2, pole_y - pole_h / 2, pole_x + pole_w / 2, pole_y + pole_h / 2),
    radius=12,
    fill=BLACK,
)

for i in range(-3, 8):
    x0 = pole_x - pole_w / 2 + i * 24
    y0 = pole_y - pole_h / 2
    x1 = pole_x + pole_w / 2 + 32
    y1 = pole_y + pole_h / 2
    d.line((x0, y0, x1, y1), fill=WHITE, width=12)
    d.line((x0 - 18, y0, x1 - 18, y1), fill=WHITE, width=12)

# Top and bottom arms
for y in [pole_y - pole_h / 2 - 70, pole_y + pole_h / 2 + 70]:
    d.rounded_rectangle((pole_x - 90, y - 16, pole_x + 90, y + 16), radius=12, fill=BLACK)

# Bottom tagline
small = 'AGENDAMENTO &\nCONTROLE FINANCEIRO'
for idx, line in enumerate(small.split('\n')):
    bbox = d.textbbox((0, 0), line, font=tiny_font)
    x = cx - (bbox[2] - bbox[0]) / 2
    y = 1010 + idx * 52
    d.text((x, y), line, fill=BLACK, font=tiny_font)

# Decoration around the logo
for angle in range(30, 360, 60):
    a = math.radians(angle)
    x = cx + 405 * math.cos(a)
    y = cy + 405 * math.sin(a)
    d.arc((x - 60, y - 60, x + 60, y + 60), angle - 35, angle + 35, fill=BLACK, width=10)

for side in (-1, 1):
    d.arc((cx + side * 300 - 60, 930, cx + side * 300 + 60, 1050), 200 if side == -1 else 0, 340 if side == -1 else 180, fill=BLACK, width=8)

# Save final logo
output_path = r'c:\Temp\aula-api-expo\assets\hope-logo.png'
img.save(output_path)
print(f'Logo saved to {output_path}')
