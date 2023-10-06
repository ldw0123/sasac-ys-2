# 기본 인코딩 옵션을 ko로 설정
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

print("hello world")

# 💫 숫자 자료형
print('숫자 자료형')
print(5)
print(-10)
print(3.141592)
print(1000)
print(5+3)
print(2*8)
print(3*(3+1))

# 💫 문자열 자료형
print('풍선')
print("나비")
# 문자열 * n -> 문자열 n번 출력
print("멜론"*9) 

# 💫 boolean 자료형
print(5 > 10)
print(5 < 10)
print(True)
print(False)
print(not True) # False
print(not (5 > 10)) # True
print()

# 💫 변수
animal = "강아지"
name = "연탄이"
age = 4
hobby = "산책"
is_adult = age >= 3

# 정수형 변수는 print문에서 쓰이기 위해 str()로 감싸주어서 정수형을 문자형으로 바꿔주어야 한다.
print("우리집 " + animal + "의 이름은 " + name + "이에요")
hobby = "공놀이"
print(name + "는 " + str(age) + "살이며, " + hobby + "을(를) 아주 좋아해요~")
# +가 아닌 , 로 쓸 경우 str() 형변환을 하지 않아도 된다.
# , 는 무조건 띄어쓰기가 한 번 들어간다
print(name, "는 ", age, "살이며, ", hobby,"을(를) 아주 좋아해요~")
print(name + "는 어른일까요? " + str(is_adult))
print()

# 💫 주석
# ctrl + / -> 한 줄 주석처리
''' 이렇게 하면
여러 문장이
주석처리 됩니다.'''

# 💫 연산자
print('연산자')
print(1+1) # 2
print(3-2) # 1
print(5*2) # 10
print(6/3) # 2.0
print(2**3) # 8
print(5%3)  # 2
print(5//3) # 몫 1
print(10//3) # 몫 3

print(10 > 3) # True
print(4 >= 7) # False

print(3 == 3) # True
print(4 == 2) # False
print(3 + 4 == 7) # True

print(1 != 3) # True
print(not(1 != 3)) # False

# and: 논리 연산자, &: 비트 연산자
# 논리연산자는 제어문 등에서 사용, 비트 연산자는 저수준 작업(이진수) 등에서 사용하므로, 논리 연산자 사용 권장
print((3 > 0) and (3 < 5)) # True
print((3 > 0) & (3 < 5)) # True

print((3 > 0) or (3 > 5)) # True
print((3 > 0) | ( 3 < 5)) # True

print(5 > 4 > 3) # True
print(5 > 4 > 7) # False
print()

# 💫 간단한 수식
print('간단한 수식')
print(2 + 3 * 4) # 14
print((2 + 3) * 4) # 20
number = 2 + 3 * 4 # 14
print(number)
number = number + 2 # 16
print(number)
number += 2 # 18
print(number)
number *= 2 # 36
print(number)
number /= 2 # 18
print(number)
number -= 2 # 16
print(number)
number %= 5 # 1
print(number)
print()

# 💫 숫자 처리 함수
print('숫자 처리 함수')
print(abs(-5)) # 5의 절대값: 5
print(pow(4, 2)) # 4의 2제곱: 16
print(max(5, 12)) # 최댓값 반환: 12
print(min(5, 12)) # 최솟값 반환: 5
print(round(3.14)) # 반올림: 3
print(round(4.99)) # 5

# math 라이브러리에 있는 모든 것을 이용함
from math import *

print(floor(4.99)) # 내림: 4
print(ceil(3.14)) # 올림: 4
print(sqrt(25)) # 제곱근: 5
print()

# 💫 랜덤 함수
from random import *

print('랜덤 함수')
print(random()) # 0.0 이상 1.0 미만의 난수 생성
print(random() * 10) # 0.0 이상 10.0 미만
print(int(random() * 10)) # 0 이상 10 미만
print(int(random() * 10) + 1) # 1 이상 10 이하
print("로또 번호 추첨: " + str(int(random() * 45) + 1)) # 1 이상 45 이하
print("로또 번호 추첨: " + str(int(random() * 45) + 1))
print("로또 번호 추첨: " + str(int(random() * 45) + 1))
print("로또 번호 추첨: " + str(int(random() * 45) + 1))
print("로또 번호 추첨: " + str(int(random() * 45) + 1))
print("로또 번호 추첨: " + str(int(random() * 45) + 1))

print(randrange(1, 46)) # 1이상 46 미만. 즉, 1이상 45이하의 난수 생성

print(randint(1, 45)) # 1이상 45 이하의 난수 생성