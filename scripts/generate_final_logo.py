from PIL import Image, ImageDraw, ImageFont
import math

W = H = 1200
img = Image.new('RGBA', (W, H), (255, 255, 255, 255))
d = ImageDraw.Draw(img)
BLACK = (0, 0, 0, 255)
WHITE = (255, 255, 255, 255)
CX, CY = W / 2, H / 2
R = 545

# outer circle
for width in (30, 8):
    d.ellipse((CX - R, CY - R, CX + R, CY + R), outline=BLACK, width=width, fill=WHITE)

# decorative ring elements
for angle in range(0, 360, 30):
    a = math.radians(angle)
    x1 = CX + (R - 50) * math.cos(a)
    y1 = CY + (R - 50) * math.sin(a)
    x2 = CX + (R - 130) * math.cos(a)
    y2 = CY + (R - 130) * math.sin(a)
    d.line((x1, y1, x2, y2), fill=BLACK, width=9)

# top text
try:
    title_font = ImageFont.truetype('DejaVuSerif-Bold.ttf', 175)
    subtitle_font = ImageFont.truetype('DejaVuSerif-Bold.ttf', 118)
    tagline_font = ImageFont.truetype('DejaVuSans-Bold.ttf', 40)
except Exception:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    tagline_font = ImageFont.load_default()

for text, y, font in [('HOPE', 165, title_font), ('BARBEARIA', 960, subtitle_font)]:
    bbox = d.textbbox((0, 0), text, font=font)
    x = CX - (bbox[2] - bbox[0]) / 2
    y0 = y - (bbox[3] - bbox[1]) / 2
    d.text((x, y0), text, fill=BLACK, font=font)

# center barber pole
pole_x, pole_y = CX, CY + 25
pole_w, pole_h = 120, 220
# main body
for y in [pole_y - pole_h / 2 - 70, pole_y + pole_h / 2 + 70]:
    d.rounded_rectangle((pole_x - 95, y - 18, pole_x + 95, y + 18), radius=10, fill=BLACK)
d.rounded_rectangle((pole_x - pole_w / 2, pole_y - pole_h / 2, pole_x + pole_w / 2, pole_y + pole_h / 2), radius=12, fill=BLACK)
for i in range(-6, 10):
    x0 = pole_x - pole_w / 2 + i * 22
    y0 = pole_y - pole_h / 2
    x1 = pole_x + pole_w / 2 + 24
    y1 = pole_y + pole_h / 2
    d.line((x0, y0, x1, y1), fill=WHITE, width=12)
    d.line((x0 - 18, y0, x1 - 18, y1), fill=WHITE, width=12)

# bottom tagline / two lines
small = 'AGENDAMENTO &\nCONTROLE FINANCEIRO'
for idx, line in enumerate(small.split('\n')):
    bbox = d.textbbox((0, 0), line, font=tagline_font)
    x = CX - (bbox[2] - bbox[0]) / 2
    y = 1030 + idx * 50
    d.text((x, y), line, fill=BLACK, font=tagline_font)

# decorative flourishes and leaves around the emblem
for angle in range(30, 360, 60):
    a = math.radians(angle)
    x = CX + 420 * math.cos(a)
    y = CY + 420 * math.sin(a)
    d.arc((x - 62, y - 62, x + 62, y + 62), angle - 35, angle + 35, fill=BLACK, width=10)

for side in (-1, 1):
    d.arc((CX + side * 300 - 60, 930, CX + side * 300 + 60, 1050), 200 if side == -1 else 0, 340 if side == -1 else 180, fill=BLACK, width=8)

# logo file
output = r'c:\Temp\aula-api-expo\assets\hope-barbearia-logo.png'
img.save(output)
print(f'Created {output}')
