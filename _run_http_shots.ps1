
  $EDGE = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
  $BRAIN = "C:\Users\gwpro\.gemini\antigravity\brain\12777338-e0cf-4554-be96-8c849b358bce"
  $TEMP_DIR = "C:\Users\gwpro\AppData\Local\Temp\edge_shots_http"

  Start-Process -FilePath $EDGE -ArgumentList "--headless=new", "--screenshot=$BRAIN\iphone16_app_1.png", "--window-size=393,852", "--hide-scrollbars", "--disable-gpu", "--user-data-dir=$TEMP_DIR", "http://localhost:8780/_shot1.html" -Wait
  Start-Process -FilePath $EDGE -ArgumentList "--headless=new", "--screenshot=$BRAIN\iphone16_app_2.png", "--window-size=393,852", "--hide-scrollbars", "--disable-gpu", "--user-data-dir=$TEMP_DIR", "http://localhost:8780/_shot2.html" -Wait
  Start-Process -FilePath $EDGE -ArgumentList "--headless=new", "--screenshot=$BRAIN\iphone16_app_3.png", "--window-size=393,852", "--hide-scrollbars", "--disable-gpu", "--user-data-dir=$TEMP_DIR", "http://localhost:8780/_shot3.html" -Wait
  Start-Process -FilePath $EDGE -ArgumentList "--headless=new", "--screenshot=$BRAIN\iphone16_app_4.png", "--window-size=393,852", "--hide-scrollbars", "--disable-gpu", "--user-data-dir=$TEMP_DIR", "http://localhost:8780/_shot4.html" -Wait

  Remove-Item "c:\dev\Whatsthescoreref\_shot1.html", "c:\dev\Whatsthescoreref\_shot2.html", "c:\dev\Whatsthescoreref\_shot3.html", "c:\dev\Whatsthescoreref\_shot4.html" -ErrorAction SilentlyContinue
  