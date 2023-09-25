import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 이 파일은 코딩테스트 연습장 입니다.

# 사용자로부터 두 정수 A와 B를 입력받습니다.
A, B = map(int, input().split())

# A와 B의 합을 출력합니다.
print(A + B)