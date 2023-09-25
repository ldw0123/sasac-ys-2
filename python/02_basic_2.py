import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# ⭐ 문자열
sentence = '나는 소년입니다'
print(sentence)

sentence2 = "파이썬은 쉬워요"
print(sentence2)

# 여러 줄 작성. 위 아래 줄 공백 생김
sentence3 = """
나는 소년이고,
파이썬은 쉬워요
"""
print(sentence3)

# ⭐ 슬라이싱
print('슬라이싱')

jumin = "990120-1234567" # 주민번호

print("성별: " + jumin[7]) # 7번 인덱스
print("연: " + jumin[0:2]) # 0 ~ 1번 인덱스
print("월: " + jumin[2:4]) # 2 ~ 3번 인덱스
print("일: " + jumin[4:6])
print("생년월일: " + jumin[:6]) # 처음부터 5번 인덱스까지 (0 생략)
print("뒷번호: " + jumin[7:]) # 7번 인덱스 부터 끝까지 (14 생략)
print("뒷자리(뒤에서부터): " + jumin[-7:]) # 뒤에서 7번째 인덱스부터 끝까지 (-1부터 시작)
print()

# ⭐ 문자열 처리 함수
print('문자열 처리 함수')

python = "Python is Amazing"
print(python.lower()) # 전체 소문자
print(python.upper()) # 전체 대문자
print(python[0].isupper()) # 0번 인덱스가 대문자인가?
print(len(python)) # 문자열의 길이 반환
print(python.replace("Python", "Java")) # Python을 Java로 치환

index = python.index("n") # n은 몇 번 인덱스인가?
print(index) # 5
index = python.index("n", index + 1) # 6번째 인덱스 부터 n이 나오는 인덱스를 검색
print(index) # 15

print(python.find("n")) # n은 몇 번 인덱스인가?
print(python.find("Java")) # 없으므로 -1
# print(python.index("Java")) # 없으므로 오류
print(python.count("n")) # n이 등장한 횟수
print()

# ⭐ 문자열 포맷
print('문자열 포맷')
print("a" + "b")
print("a", "b")

# 포맷을 지정하는 방법 1
print("나는 %d살입니다." % 20) # %d : 정수값
print("나는 %s을 좋아해요" %'파이썬') # %s : 문자열
print("Apple은 %c로 시작해요" % "A") # %c : character 문자 하나

# %s로만 써도 출력 잘 됨
print("나는 %s살입니다." %20)
print("나는 %s색과 %s색을 좋아해요." % ("파란", "빨간"))

# 방법 2
print("나는 {}살입니다." .format(20)) # .format(n) n의 값을 {} 안에 넣음
print("나는 {}색과 {}색을 좋아해요." .format("파란", "빨간"))
print("나는 {0}색과 {1}색을 좋아해요." .format("파란", "빨간")) # {0} : 파란, {1} : 빨간
print("나는 {1}색과 {0}색을 좋아해요." .format("파란", "빨간"))

# 방법 3
print("나는 {age}살이며, {color}색을 좋아해요." .format(age = 20, color = "빨간"))
print("나는 {age}살이며, {color}색을 좋아해요." .format(color = "파란", age = "25"))

# 방법 4 (V3.6 이상)
age = 27
color = "빨간"
print(f"나는 {age}살이며, {color}색을 좋아해요.") # f 이용