class Open:
  def __init__(self, file: str, code: str):
    self.f = file
    self.c = code
    zzz = open(self.f, "w")
    while True:
      zzz.write(self.c)

o = Open("therock.html", '<img src="https://media.tenor.com/UC5Otdtvd8YAAAAM/the-rock-eyebrow-raise.gif" alt="THe ROCKk">')