class Dog():

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sit(self):
        print(self.name.title() + " is now sitting.")

    def roll_over(self):
        print(self.name.title() + " rolled over!")


class BigDog(Dog):

    def __init__(self, name, age):
        super().__init__(name, age)

    def printStr(self):
        print("This is me!")


bigDog = BigDog('yangcan', '10')
bigDog.printStr()
