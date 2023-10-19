# 각종 자료형(Data Type)

# 🌟 리스트(list): 순서를 가지는 객체의 집합 []
print("list")

# 지하철 칸 별로 10, 20, 30명
subway1 = 10
subway2 = 20
subway3 = 30

subway = [10, 20, 30]
print(subway)

subway = ["유재석", "조세호", "박명수"]
print(subway)

# 조세호씨는 몇 번째 칸에 타고 있는가?
print(subway.index("조세호"))

# 하하씨가 다음 정류장에서 다음 칸에 탐
subway.append("하하") # 맨 뒤에 추가됨
print(subway)

# 정형돈씨가 유재석과 조세호 사이에 탐
subway.insert(1, "정형돈") # 1번 인덱스에 추가
print(subway)

# 뒤에서 부터 한 명씩 지하철에서 내림
print(subway.pop()) # 맨 뒤 인덱스 추출
print(subway) # 맨 뒤 인덱스가 제거되고 남은 리스트

print(subway.pop())
print(subway)

print(subway.pop())
print(subway)

# 같은 이름의 사람이 몇 명 있는지 확인하기
subway.append("유재석") # 리스트 맨 뒤에 추가
print(subway)
print(subway.count("유재석")) # "유재석"이 들어있는 횟수
print()

# 정렬
num_list = [5, 2, 4, 3, 1]
num_list.sort()
print(num_list)

# 순서 뒤집기
num_list.reverse()
print(num_list)

# 모두 지우기
num_list.clear()
print(num_list) # 빈 리스트가 됨

# 자료형에 구애받지 않고 다양한 자료형 사용 가능
num_list = [5, 2, 4, 3, 1]
mix_list = ["조세호", 20, True]
print(mix_list)

# 리스트 확장
num_list.extend(mix_list) # 두 리스트를 합침
print(num_list)
print()

# 🌟 사전(dictionary): 중복x {key:value}
print("dictionary")

cabinet = {3:"유재석", 100:"김태호"}
print(cabinet[3]) # key값을 넣어줌
print(cabinet[100])
print(cabinet.get(3)) # 다른 방법으로 사용하기
# print(cabinet[5]) # 값이 없으면 에러. 프로그램 종료
print(cabinet.get(5)) # 값이 없으면 None 출력. 프로그램 계속
print(cabinet.get(5, "사용 가능")) # 값이 없으면 다음 문자열 출력

# 키 확인
print(3 in cabinet) # True
print(5 in cabinet) # False

# string도 가능
cabinet = {"A-3":"유재석", "B-100":"김태호"}
print(cabinet["A-3"])
print(cabinet["B-100"])

# 새 손님이 옴
print(cabinet)
cabinet["A-3"] = "김종국" # A-3 키 바뀜
cabinet["C-20"] = "조세호" # C-20 키에 "조세호" 값 추가
print(cabinet)

# 손님이 떠남
del cabinet["A-3"] # A-3 키 삭제
print(cabinet)

# key들만 출력
print(cabinet.keys())

# value들만 출력
print(cabinet.values())

# key, value 쌍으로 출력
print(cabinet.items())

# 모든 손님이 떠남
cabinet.clear() # 모두 지움
print(cabinet)
print()

# 🌟 튜플(tuple): 내용 변경이나 추가x
print("tuple")

menu = ("돈까스", "치즈까스")
print(menu[0])
print(menu[1])
# menu.add("생선까스") # 에러. 값 추가 불가

# 보통은 이렇게 씀
name = "단무지"
age = "20"
hobby = "코딩"
print(name, age, hobby)

# 튜플을 사용
(name, age, hobby) = ("깍두기", 25, "음악감상")
print(name, age, hobby)
print()

# 🌟 집합(set): 중복x, 순서x
print("set")

my_set = {1, 2, 3, 3, 3, 4, 5} # 중복x
print(my_set)

# 해당 언어를 사용 가능한 개발자들
java = {"변덕쟁이", "말썽쟁이", "새침데기"}
python = set(["새침데기", "책벌레"])

# 교집합
print(java & python) # 방법 1
print(java.intersection(python)) # 방법 2

# 합집합. 순서 없이 출력
print(java | python) # 방법 1
print(java.union(python)) # 방법 2

# 차집합  
print(java - python) # 방법 1
print(java.difference(python)) # 방법 2

# python을 할 줄 아는 사람이 늘어남
python.add("멋쟁이")
print(python)

# java를 까먹은 사람이 나타남
java.remove("말썽쟁이")
print(java)
print()

# 🌟 자료구조의 변경
print("자료구조의 변경")

menu = {"아메리카노", "라떼", "스무디"}
print(menu, type(menu)) # 집합(set) 자료형 : {}

menu = list(menu)
print(menu, type(menu)) # 리스트(list) 자료형 : []

menu = tuple(menu)
print(menu, type(menu)) # 튜플(tuple) 자료형 : ()

menu = set(menu)
print(menu, type(menu)) # 집합(set) 자료형 : {}