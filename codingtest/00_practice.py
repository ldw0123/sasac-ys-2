import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

# input(' ').split을 사용하면 입력받은 값을 공백으로 분리하여 변수에 차례대로 저장 (split은 분리하다, 나누다라는 뜻)
# map에 int와 input().split()을 넣으면 split의 결과를 모두 int로 변환 (실수로 변환할 때는 int 대신 float를 넣습니다.)
# -> map(int, input(' ').split())

A, B = map(int, input('두 정수를 입력하시오: ').split())

if 0 < A & B < 10:
    print(A+B)
else:
    print('숫자를 다시 입력하세요')

# A+B (1000)
A, B = map(int, input().split())  # 두 정수 A와 B를 입력받습니다.

# 사칙연산
print(A + B)
print(A - B)
print(A * B)
print(int(A / B))
print(A % B)


# 모음의 개수 (1264)
vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']  # 모음

while True:
    count = 0
    sentence = input()
    if sentence == '#':
        break
    for s in sentence:
        if s in vowel:
            count += 1
    print(count)


# 핸드폰 요금 (1267)
n = int(input())  # 저번 달에 이용한 통화의 수
call = list(map(int, input().split()))  # 통화 시간을 리스트 형식으로 입력받음

y = 0  # 영식 요금제
m = 0  # 민식 요금제

for i in call:
    y += (i//30+1)*10  # 영식 요금제: 30초마다 10원
    m += (i//60+1)*15  # 민식 요금제: 60초마다 15원

if y > m:  # 민식 요금제가 더 저렴하다면
    print('M', m)
elif y < m:  # 영식 요금제가 더 저렴하다면
    print('Y', y)
else:  # 요금이 같다면
    print('Y', 'M', y)
