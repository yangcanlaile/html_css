import json
nums = [1, 2, 3, 4, 5]
fileName = "1.txt"

with open(fileName, 'w') as op_file:
    json.dump(nums, op_file)

with open(fileName, 'r') as open_file:
    lista = json.load(open_file)

print(lista)
