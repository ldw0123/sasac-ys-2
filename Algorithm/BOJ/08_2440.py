# 별 찍기 3 (2440) Bronze IV

number = int(input(""))

for i in range(number, 0, -1):  # number부터 0이 될 때까지 1을 빼면서 반복 ( number == 0 이 되면 반복문 종료)
    print("*" * i)
