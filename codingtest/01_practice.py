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
