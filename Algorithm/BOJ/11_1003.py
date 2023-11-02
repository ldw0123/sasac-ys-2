# 피보나치 함수 (1003) Silver III
# Dynamic Programming

# fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
# fibonacci(n)에서 0, 1의 호출횟수 = (fibonacci(n-1)에서 0, 1 호출횟수) + (fibonacci(n-2)에서 0, 1 호출횟수)

# fibonacci(0)부터 fibonacci(2)까지는 배열을 미리 만들어서 이보다 큰 수에서의 0과 1의 호출 횟수를 추가로 저장
zero = [1, 0, 1]  # 0의 호출 횟수
one = [0, 1, 1]  # 1의 호출 횟수


def fibonacci(N):
    length = len(zero)
    if N >= length:  # 배열의 길이(2)보다 입력받은 수(N)의 값이 같거나 크면 반복문 시작
        for i in range(length, N+1):  # 2부터 N까지 반복
            zero.append(zero[i-1] + zero[i-2])
            one.append(one[i-1] + one[i-2])
    print('{0} {1}'.format(zero[N], one[N]))


T = int(input())  # 테스트 케이스의 개수

for _ in range(T):
    fibonacci(int(input()))
