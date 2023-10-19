from random import *
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

# 파이썬 실습 문제

'''
Quiz) 당신은 최근에 코딩 스터디 모임을 새로 만들었습니다.
월 4회 스터디를 하는데 3번은 온라인으로 하고 1번은 오프라인으로 하기로 했습니다.
아래 조건에 맞는 오프라인 모임 날짜를 정해주는 프로그램을 작성하시오.

조건1 : 랜덤으로 날짜를 뽑아야 함
조건2 : 월별 날짜는 다름을 감안하여 최소 일수인 28 이내로 정힘
조건3 : 매월 1~3일은 스터디 준비를 해야 하므로 제외

(출력문 예제)
오프라인 스터디 모임 날짜는 매월 x 일로 선정되었습니다.
'''


date = randint(4, 28)  # 4 이상 28 이하의 난수 생성
print('오프라인 스터디 모임 날짜는 매월 ' + str(date) + '일로 선정되었습니다.')
