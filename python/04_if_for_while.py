# 🌈 if
weather = input("오늘 날씨는 어떤가요?")
if weather == "비" or weather == "눈":
  print("우산을 챙기세요")
elif weather == "흐림":
  print("비가 올지도 모르겠네요")
else:
  print("오늘은 맑음이겠네요")

temp = int(input("기온은 어때요?"))
if temp >= 30:
  print("너무 더워요 에어컨이 필요해요")
elif temp >= 15 & temp  < 30:
  print("완벽한 날씨에요!")
elif -10 < temp < 15:
  print("외투를 챙기세요")
else:
  print("너무 추워서 얼어버릴 거 같아요")
print()

# 🌈 for: for ~ in [리스트]:
for waiting_no in [0, 1, 2, 3, 4]:
  print("대기번호 1팀: {0}".format(waiting_no))

# for ~ in range(시작 숫자, 끝 숫자):
for waiting_no2 in range(5): # 0, 1, 2, 3, 4
  print("대기번호 2팀: {0}".format(waiting_no2))

for waiting_no3 in range(3, 8): # 3, 4, 5, 6, 7
  print("대기번호 3팀: {0}".format(waiting_no3))
print()

starbucks = ["아이언맨", "토르", "그루트"] # 손님들이 옴
for customer in starbucks:
  print("{0}님, 커피가 준비되었습니다.".format(customer))
print()

# 🌈 while
customer = "토르"
index = 5 # 초기식
while index >= 1: # 조건식
  # 실행식
  print("{0}님, 커피가 준비되었습니다. 커피가 {1}잔 남았어요.".format(customer, index)) 
  index -= 1
  if index == 0:
    print("커피가 다 떨어졌어요. 오늘 영업은 여기까지입니다.")

customer2 = "아이언맨"
person = "Unknown"
index2 = 1
while person != customer2:
  print("{0}님, 커피가 준비되었습니다.".format(customer2))
  person = input("이름이 어떻게 되세요? ")
  if person != customer2:
    print("죄송합니다. 이 음료는 {0}님 것이 아니에요".format(person))
print("{0}님, 맛있게 드세요".format(person))