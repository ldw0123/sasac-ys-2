import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')


# 별찍기 1 (2438) Bronze V
# 풀이 1

star = ""
number = int(input(""))

# for ~ in range(n) : 0부터 n-1까지 반복
for i in range(number):  # 열
    for j in range(i+1):  # 행. 1 ~ number까지 반복
        star += "*"
    star += "\n"
print(star)


# 풀이 2
number = int(input(""))

for i in range(1, number+1):  # 1부터 number까지 반복
    print("*" * i)
