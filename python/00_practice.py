import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 이 파일은 코딩테스트 연습장 입니다.

# 두 정수 A와 B를 입력받습니다.
# A, B = map(int, input().split())

# # 사칙연산
# print(A + B)
# print(A - B)
# print(A * B)
# print(int(A / B))
# print(A % B)

'''
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

(AxB)%C는 ((A%C) x (B%C))%C 와 같을까?

세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
'''

# 세 수를 입력받는다
# A,B,C = input().split()

# # int로 형변환
# A = int(A) 
# B = int(B)
# C = int(C)

# print((A+B)%C)
# print(((A%C) + (B%C))%C)
# print((A*B)%C)
# print(((A%C) * (B%C))%C)


vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] # 모음

while True:
  count = 0
  sentence = input()
  if sentence == '#':
    break
  for s in sentence:
    if s in vowel:
      count += 1
  print(count)

