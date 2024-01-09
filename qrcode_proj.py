import qrcode
import image
qr = qrcode.Qrcode(
    version = 15,
    box_size = 10,
    border = 5
    )
data="kartik"
qr.add_data(data)
qr.make(fit=True)
img=qr.make_image(fill="black",back_colour = "white")
img.save("txt.png")
    