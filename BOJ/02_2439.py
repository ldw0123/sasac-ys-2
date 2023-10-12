# 별찍기 2 (2439) Bronze IV


number = int(input())

for i in range(1, number+1):  # 1부터 number까지 반복
    print(" " * (number-i) + "*" * i)


for i in range(number):
    star = "*"*(i+1)
    print(star.rjust(number))  # 오른쪽 정렬
