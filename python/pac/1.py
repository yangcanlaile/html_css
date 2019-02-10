profit = input('Please input profit: ')
profitList = [1000000, 600000, 400000, 200000, 100000, 0]
rat = [0.01, 0.015, 0.03, 0.03, 0.075, 0.1]
bonus = 0
for idx in range(0, 6):

    if(profit > profitList[idx]):
        bonus += (profit - profitList[idx]) * rat
        print(profit - profitList[idx] * rat)
        profit = profitList[idx]

print("bonus: ", bonus)
