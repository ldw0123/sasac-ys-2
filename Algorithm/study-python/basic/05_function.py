# 🌏 함수 - def 함수 이름():
def open_account(): # def 키워드 : define
  print("새로운 계좌가 생성되었습니다")

open_account() # 함수 호출

# 🌏 전달값과 반환값
def deposit(balance, money): # 입금하는 함수
  print("입금이 완료되었습니다. 잔액은 {0}원 입니다.".format(balance + money))
  return balance + money

def withdraw(balance, money): # 출금
  if balance >= money: # 잔액이 출금액보다 많으면
    print("출금이 완료되었습니다. 잔액은 {0}원 입니다.".format(balance - money))
    return balance - money
  else: # 출금액이 잔액보다 많으면
    print("출금이 완료되지 않았습니다. 잔액은 {0}원 입니다.".format(balance))
    return balance
  
def withdraw_night(balance, money): # 저녁에 출금
  commission = 300 # 수수로 100원
  # 두 개의 값을 ','로 구분해서 반환함. (commission, balance - money - commission)이라는 튜플을 반환
  return commission, balance - money - commission 
  
balance = 0 # 잔액
balance = deposit(balance, 10000) # 함수 호출
balance = withdraw(balance, 2000)
commission, balance = withdraw_night(balance, 500)
print("수수료는 {0}원 이며, 잔액은 {1}원 입니다." .format(commission, balance))
print()


# 🌏 기본값
def profile(name, age, main_lang):
  # \ : 줄 바꿈 코드
  print("이름: {0}\t나이: {1}\t주 사용 언어: {2}" \
        .format(name, age, main_lang))
  
profile("홍당무", 23, "파이썬")
profile("청경채", 27, "자바")

# 같은 학교, 같은 학년, 같은 반, 같은 수업이라면?
def profile_2(name, age = 17, main_lang = "파이썬"): # 기본값 사용
  print("이름: {0}\t나이: {1}\t주 사용 언어: {2}" \
        .format(name, age, main_lang))
  
profile_2("고려인삼")
profile_2("양상추")
print()

# 🌏 키워드값
def profile_3(name, age, main_lang):
  print("이름: {0}\t나이: {1}\t주 사용 언어: {2}" \
        .format(name, age, main_lang))
  
profile_3(name = "살구", main_lang = "파이썬", age = 20)
profile_3(main_lang = "파이썬", age = 29, name = "씨 없는 수박") # 순서가 뒤바껴 있어도 순서대로 호출 됨
print()

# 🌏 가변인자: '*매개변수'를 작성하고, for문으로 출력
def profile_4(name, age, *language):
  # end = " " - print문이 끝날 때 줄바꿈을 하지 않음
  print("이름: {0}\t나이: {1}\t".format(name, age), end = " ") 
  for lang in language:
    print(lang, end = " ")
  print()

profile_4("샤인머스캣", 24, "Python", "Java", "C", "C++", "C#", "JavaScript") # 샤인머스캣씨는 여섯 가지 언어를 할 줄 앎
profile_4("천도복숭아", 22, "Kotlin", "Swift") # 천도복숭아씨는 두 가지 언어만 할 줄 앎
print()

# 🌏 지역변수 & 전역변수
gun_1 = 10 # 전역변수

def checkpoint(soldiers): # 경계 근무
  gun_2 = 20 # 전역변수
  global gun_1 # 전역 공간에 있는 gun_1 사용
  gun_2 = gun_2 - soldiers
  gun_1 = gun_1 - soldiers
  print("[함수 내] 남은 총: {0}".format(gun_2))

def checkpoint_return(gun_1, soldiers):
  gun_1 = gun_1 - soldiers
  print("[함수 내] 남은 총: {0}".format(gun_1))
  return gun_1 # 반환하면서 gun_1을 외부로 던짐

print("전체 총: {0}".format(gun_1))
checkpoint(2) # 두 명이 경계 근무를 나감
print("남은 총: {0}".format(gun_1))

gun_1 = checkpoint_return(gun_1, 4) # 반환된 값을 받아서 다시 전달
print("남은 총: {0}".format(gun_1))