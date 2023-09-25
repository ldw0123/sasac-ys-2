import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 코딩테스트 연습

A = input()
B = input()

print("A의 값: " + str(A))
print(str(B))