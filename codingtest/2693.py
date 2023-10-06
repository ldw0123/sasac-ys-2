import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

# N번째 큰 수 (2693)
'''
배열 A가 주어졌을 때, N번째 큰 값을 출력하는 프로그램을 작성하시오.

배열 A의 크기는 항상 10이고, 자연수만 가지고 있다. N은 항상 3이다.
'''

# list.sort() 함수 : 리스트를 오름차순으로 정렬 (문자열, 숫자 가능)
# list.sort(reverse=False) : 매개변수를 reverse=False로 지정하면 내림차순으로 정렬

# 길이가 10인 배열(list) A 입력받기
x = int(input())

for i in range(x):
  A = list(map(int, input().split()))
  A.sort()
  # A 리스트에서 3번째로 큰 수(역순)를 출력
  print(A[-3])
