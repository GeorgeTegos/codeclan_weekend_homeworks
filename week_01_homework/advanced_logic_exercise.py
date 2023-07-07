# For the following list of numbers:

numbers = [1, 6, 2, 2, 7, 1, 6, 13, 99, 7]

# 1. Print out a list of the even integers:
new_list = []
for number in numbers:
    if number % 2 == 0:
        new_list.append(number)
print(new_list)


# 2. Print the difference between the largest and smallest value:

# highest_number = 0
# lowest_number = sum(numbers)
# for number in numbers:
#     if number > highest_number:
#         highest_number = number
#     elif number < lowest_number:
#         lowest_number = number

highest_number = max(numbers)
lowest_number = min(numbers)
print("The Difference is: ",highest_number-lowest_number)

# 3. Print True if the list contains a 2 next to a 2 somewhere.
flag = 1
for number in numbers:
        #   IF number 2 exist on next index         IF number 2 exist on previous index
    if (number == 2 and (numbers[flag] == 2)) or (number == 2 and (numbers[flag-2]==2)) :
        print(True,' \tFor lists index position ',flag-1)
    flag += 1


# 4. Print the sum of the numbers, 
#    BUT ignore any section of numbers starting with a 6 and extending to the next 7.
#    
#    So [11, 6, 4, 99, 7, 11] would have sum of 22
def ignore(list_name):
    total = 0
    flag = False       #Create a flag to use as a Start and End point of what we ignore
    for number in list_name:
        if number == 6:     
            flag = True
        elif number == 7:
            flag = False

        if flag == False and number != 7:   # Remove number 7 for our total
            total = total + number
        # elif flag == True:
        #     pass
    return total

print(ignore([11, 6, 4, 99, 7, 11]))

# 5. HARD! Print the sum of the numbers. 
#    Except the number 13 is very unlucky, so it does not count.
#    And numbers that come immediately after a 13 also do not count.
#    HINT - You will need to track the index throughout the loop.
#
#    So [5, 13, 2] would have sum of 5. 

def unlucky(list_name):
    flag = False
    total = 0
    for number in list_name:
        if number == 13:
            flag = True
        elif flag != True:
            total = total + number
    return total

print(unlucky([5, 13, 2]))





