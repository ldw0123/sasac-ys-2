# 🪐 표준 입출력
print("Python", "Java", "Swift") # ','로 구분하면 자동으로 띄어쓰기가 들어감
print("Python", "Java", "Swift", sep = ",") # separate. sep = " " : 인자 사이를 구분
print("Python", "Java", "Swift", sep = " vs ")
print("Python", "Java", "Swift", end = ": ") # end = " " : 문장의 끝 부분에 추가
print("무엇이 더 재밌을까요?")

import sys
# print("Python", "Java", "Swift", file = sys.stdout) # file = sys.stdout : 표준 출력
# print("Python", "Java", "Swift", file = sys.stderr) # file = sys.stderr : 표준 에러

# 시험 성적
scores = {"수학":0, "영어": 50, "코딩": 100} # 딕셔너리 자료형
# 딕셔너리.items() : 키와 값을 쌍으로 튜플로 보냄
for subject, score in scores.items(): 
  # .ljust(6) : 6칸의 공간을 확보한 후, 왼쪽 정렬
  # .rjust(4) : 4칸의 공간을 확보한 후, 오른쪽 정렬
  print(subject.ljust(6), str(score).rjust(4), sep=":") 

# 은행 대기순번표
# 001, 002, 003, ...
for num in range(1, 21):
  # .zfill(3) : 3칸의 공간을 확보한 후, 0으로 채움
  print("대기번호: " + str(num).zfill(3))

# 표준 입력
# input()으로 값을 입력하면 항상 문자열로 저장됨
answer = input("아무 값이나 입력하세요: ")
print(type(answer)) # 숫자를 입력해도 str타입이 나옴
print("입력하신 값은 " + answer + "입니다.")
print()

# 🪐 다양한 출력 포맷
# 빈 자리는 빈 공간으로 두고, 오른쪽 정렬을 하되, 총 10자리 공간을 확보
print("{0: >10}".format(500))

# 양수일 때는 +로 표시, 음수일 때는 -로 표시
print("{0: >+10}".format(500))
print("{0: >+10}".format(-500)) 

# 왼쪽 정렬하고, 빈칸을 _로 채움
print("{0:_<+10}".format(500))

# 큰 수가 들어 왔을 때 3자리 마다 ','를 추가
print("{0:,}".format(100000000000))

# 큰 수가 들어 왔을 때 3자리 마다 ','를 추가하고, +-부호도 붙이기
print("{0:+,}".format(100000000000))
print("{0:+,}".format(-100000000000))

# 3자리 마다 ','를 붙이고, 부호를 붙이고, 자릿수 확보하고, 빈자리는 '^'로 채우기
print("{0:^<+30,}".format(100000000000))

# 소수점 출력
print("{0:f}".format(5/3))

# 소수점 특정 자리수 까지만 표시
print("{0:.3f}".format(5/3))
print()

# 🪐 파일 입출력
# open("파일 이름.형식", "w: 쓰기 목적(덮어쓰기)", encoding="utf-8")
score_file = open("score.txt", "w", encoding="utf8") # 파일 열기
print("수학: 0점", file=score_file)
print("영어: 50점", file=score_file)
score_file.close() # 파일 닫기

# "a": 이미 존재하는 파일 뒤에 이어쓰기
score_file = open("score.txt", "a", encoding="utf-8")
score_file.write("과학: 80점")
score_file.write("\n코딩: 100점") # .write()는 줄바꿈이 들어가지 않음
score_file.close()

# "r": read. 파일의 내용을 읽어 옴
score_file = open("score.txt", "r", encoding="utf-8")
print(score_file.read())
score_file.close()

# 줄별로 읽기. 한 줄을 읽어오고 나서 커서는 다음 줄로 이동
score_file = open("score.txt", "r", encoding="utf-8")
# 한 줄씩 읽기. 4줄이니까 4번 작성
print(score_file.readline(), end="") # 줄바꿈을 안 할 때 end=""
print(score_file.readline(), end="")
print(score_file.readline(), end="")
print(score_file.readline())
score_file.close()

# 파일을 끝까지 자동으로 한 줄씩 읽어오기
score_file = open("score.txt", "r", encoding="utf-8")
while True:
  line = score_file.readline()
  if not line: # 읽어 올 내용이 없으면
    break # 반복문 종료
  print(line, end="")
score_file.close()
print()

# 리스트에 값을 넣어서 출력하기
score_file = open("score.txt", "r", encoding="utf-8")
lines = score_file.readlines() # list 형태로 저장
for line in lines:
  print(line, end="")
score_file.close()
print()
print() 

# 🪐 pickle
