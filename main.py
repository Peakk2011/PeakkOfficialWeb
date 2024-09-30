import eel
eel.init("./Frontend/ResourceDestop", allowed_extensions=['.js', '.html'])

@eel.expose
def AlertHello():
    print("Success to run")

if eel.start("index.html"):
    AlertHello()
else:
    print("Failed to open site")

AlertHello()

eel.start("index.html", size=(1920, 1080),mode='chrome',cmdline_args=['--kiosk'])