import eel
eel.init("Frontend", allowed_extensions=['.js', '.html'])

@eel.expose
def AlertHello():
    print("Success to run")

AlertHello()

eel.start("index.html", size=(1920, 1080))