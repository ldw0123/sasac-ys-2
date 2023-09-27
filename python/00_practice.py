import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 이 파일은 코딩테스트 연습장 입니다.

# 두 정수 A와 B를 입력받습니다.
A, B = map(int, input().split())

# 사칙연산
print(A + B)
print(A - B)
print(A * B)
print(int(A / B))
print(A % B)
