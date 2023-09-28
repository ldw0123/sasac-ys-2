# 🪐 표준 입출력
print("Python", "Java", "Swift") # ','로 구분하면 자동으로 띄어쓰기가 들어감
print("Python", "Java", "Swift", sep = ",") # separate. sep = " " : 인자 사이를 구분
print("Python", "Java", "Swift", sep = " vs ")
print("Python", "Java", "Swift", end = ": ") # end = " " : 문장의 끝 부분에 추가
print("무엇이 더 재밌을까요?")

import sys
print("Python", "Java", "Swift", file = sys.stdout) # file = sys.stdout : 표준 출력
print("Python", "Java", "Swift", file = sys.stderr) # file = sys.stderr : 표준 에러

# 딕셔너리 자료형
scores = {"수학":0, }