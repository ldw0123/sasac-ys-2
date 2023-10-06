'''
표준 체중을 구하는 프로그램을 작성하시오
표준 체중: 각 개인의 키에 적당한 체중

(성별에 따른 공식)
남자: 키(m) x 키(m) x 22
여자: 키(m) x 키(m) x 21

조건1: 표준 체중은 별도의 함수 내에서 계산
함수명: std_weight
전달값: 키(height), 성별(gender)

조건2: 표준 체중은 소수점 둘째자리까지 표시

(출력 예제)
키 175cm 남자의 표준 체중은 67.38kg 입니다.
'''

def std_weight(height, gender):
  if gender == "man":
    weight = height*height*22
    # {:2f} : 소수점 둘째 자리까지 표시
    print("키 {0}cm 남자의 표준 체중은 {1:.2f}kg입니다.".format(int(height*100), weight))
    
  else:
    # round(( ), 2) : 소수점 둘째 자리까지 반올림
    weight = round((height*height*21), 2)
    print("키 {0}cm 여자의 표준 체중은 {1}kg입니다.".format(int(height*100), weight))
  
std_weight(1.79 , "man")
std_weight(1.61, "woman")