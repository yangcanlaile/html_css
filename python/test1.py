from datetime import datetime as dt
import sys
import time


for i in range(20):
    a = dt.now()
    sys.stdout.write("\r{0}".format(a))
    sys.stdout.flush()
    sys.stdout.write('\033[4A')
    time.sleep(1)
