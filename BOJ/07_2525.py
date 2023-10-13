# 오븐 시계 (2525) Bronze III

A, B = map(int, input().split()) # 현재 시각 A, 현재 분 B
C = int(input()) # 요리하는 데 필요한 시간 C

A += C // 60 # 몇 시간 만큼 A에 더함
B += C % 60 # 나머지 분을 C에 대입

if B >= 60: # 60분이 넘으면
  A += 1 # 시간에 +1
  B -= 60 # 분 - 60

if A >= 24: # 24시가 넘으면
  A -= 24 # 0시로 초기화

print(A, B)