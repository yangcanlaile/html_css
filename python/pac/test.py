from math import sqrt
from sys import stdout
for m in range(101, 201):
    k = int(sqrt(m + 1))
    for i in range(2, k + 1):
        if m % i == 0:
            leap = 0
