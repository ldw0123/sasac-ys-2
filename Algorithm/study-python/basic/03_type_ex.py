'''
실습: 당신의 학교에서는 파이션 코딩 대회를 주최합니다.
참석률을 높이기 위해 댓글 이벤트를 진행하기로 하였습니다.
댓글 작성자들 중에 추첨을 통해 1명은 치킨, 3명은 커피 쿠폰을 받게 됩니다.
추첨 프로그램을 작성하시오.

조건1 : 편의상 댓글은 20명이 작성하였고, 아이디는 1~20 이라고 가정
조건2 : 댓글 내용과 상관 없이 무작위로 추첨하되 중복 불가
조건3 : random 모듈의 shuffle 과 sample 을 활용

출력 예제
-- 당첨자 발표 --
치킨 당첨자 : 1
커피 당첨자 : [2, 3, 4]
-- 축하합니다 --
'''

from random import *

# people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] # 비효율적
people = range(1, 21) # 1 ~ 20 까지 range 타입의 숫자를 생성
people = list(people) # list타입 형변환

shuffle(people) # 순서 뒤섞음
winners = sample(people, 4) # sample(people, 1) : people 리스트에서 무작위로 4개 추출

print("-- 당첨자 발표 --")
print("치킨 당첨자: {0}".format(winners[0])) 
print("커피 당첨자: {0}".format(winners[1:]))
print("-- 축하합니다 --")