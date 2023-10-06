from random import *

# 일반 유닛
class Unit: 
  def __init__(self, name, hp, speed, damage): # 스타크래프트 유닛의 이름, 체력, 공격력
    self.name = name
    self.hp = hp
    self.speed = speed
    self.damage = damage
    print("{0}유닛이 생성되었습니다.".format(name))
  
  def damaged(self, damage):
    print("{0}: {1}데미지를 입었습니다." .format(self.name, damage))
    self.hp -= damage
    print("{0}: 현재 체력은 {1}입니다." .format(self.name, self.hp))
    if self.hp <= 0:
      print("{0}: 파괴되었습니다." .format(self.name))
    
  def move(self, location):
    print("{0}: {1} 방향으로 이동합니다. [속도 {2}]".format(self.name, location, self.speed))

# 공격 유닛
class AttackUnit(Unit): 
  def __init__(self, name, hp, speed, damage):
    Unit.__init__(self, name, hp, damage, speed)
    self.damage = damage

  def attack(self, location): 
    print("{0}: {1} 방향으로 적군을 공격합니다. [공격력 {2}]" .format(self.name, location, self.damage))

# 마린
class Marine(AttackUnit):
  def __init__(self):
    AttackUnit.__init__(self, "마린", 40, 5, 5)
  
  # 스팀팩
  def stimpack(self): 
    if self.hp > 10:
      self.hp -= 10
      print("{0}: 스팀팩을 사용합니다. (HP 10 감소)".format(self.name))
    else:
      print("{0}: 체력이 부족하여 스팀팩을 사용할 수 없습니다.".format(self.name))
  
# 탱크
class Tank(AttackUnit):
  # 시즈 모드
  seize_developed = False # 시즈 모드 개발 여부

  def __init__(self):
    AttackUnit.__init__(self, "탱크", 150, 2, 35)
    self.seize_mode = False

  def set_seize_mode(self):
    if Tank.seize_developed == False:
      return
    
    # 현재 시즈 모드가 아닐 때 -> 시즈 모드
    if self.seize_mode == False:
      print("{0}: 시즈 모드로 전환합니다.".format(self.name))
      self.damage *= 2
      self.seize_mode == True
      # 현재 시즈 모드일 때 -> 시즈 모드 해제
    else: 
      print("{0}: 시즈 모드를 해제합니다.".format(self.name))
      self.damage /= 2
      self.seize_mode = False

class Flyable: # 날 수 있는 기능을 지닌 클래스
  def __init__(self, flying_speed):
    # flying_speed 멤버 변수 초기화
    self.flying_speed = flying_speed

  def fly(self, name, location):
    print("{0}: {1} 방향으로 날아갑니다. [속도 {2}]".format(name, location, self.flying_speed))

# FlyableAttackUnit 클래스는 AttackUnit, Flyable 클래스를 다중 상속 받고 있음
# 공중 공격 유닛 클래스
class FlyableAttackUnit(AttackUnit, Flyable): 
  def __init__(self, name, hp, damage, flying_speed):
    AttackUnit.__init__(self, name, hp, 0, damage) # 지상 speed: 0
    Flyable.__init__(self, flying_speed)
  
  # 메서드 오버라이딩
  def move(self, location): 
    self.fly(self.name, location)

# 레이스
class wraith(FlyableAttackUnit):
  def __init__(self):
    FlyableAttackUnit.__init__(self, "레이스", 80, 20, 8)
    self.clocked = False # 클로킹 모드 (해제 상태)

  def clocking(self):
    if self.clocked == True: # 클로킹 모드 -> 모드 해제
      print("{0}: 클로킹 모드를 해제합니다.".format(self.name))
      self.clocked = False
    else: # 클로킹 모드 해제 -> 모드 설정
      print("{0}: 클로킹 모드를 설정합니다.".format(self.name))
      self.clocked = True

def game_start():
  print("[알림] 새로운 게임을 시작합니다.")

def game_over():
  print("Player: gg")
  print("[Player] 님이 게임에서 퇴장하였습니다.")

# 실제 게임 진행
game_start()

# 마린 3기 생성
m1 = Marine()
m2 = Marine()
m3 = Marine()

# 탱크 2기 생성
t1 = Tank()
t2 = Tank()

# 레이스 1기 생성
w1 = wraith()

# 유닛 일괄 관리
attack_units = [] # 리스트 생성
# append() : 파이썬의 리스트 메서드로, 주어진 요소를 리스트의 끝에 추가하는 역할
attack_units.append(m1)
attack_units.append(m2)
attack_units.append(m3)
attack_units.append(t1)
attack_units.append(t2)
attack_units.append(w1)

# 전군 이동
for unit in attack_units:
  unit.move("1시")

# 탱크 시즈모드 개발
Tank.seize_developed = True
print("[알림] 탱크 시즈 모드 개발이 완료되었습니다.")

# 공격 모드 준비 (마린: 스팀팩, 탱크: 시즈 모드, 레이스: 클로킹 모드)
for unit in attack_units:
  # isinstance() : 첫 번째 인자로 주어진 객체가 두 번째 인자로 주어진 클래스의 인스턴스인지를 확인함
  if isinstance(unit, Marine): # 이 unit객체는 Marine클래스의 인스턴스인가?
    unit.stimpack()
  elif isinstance(unit, Tank):
    unit.set_seize_mode()
  elif isinstance(unit, wraith):
    unit.clocking()

# 전군 공격
for unit in attack_units:
  unit.attack("1시")

# 전군 피해
for unit in attack_units:
  unit.damaged(randint(5, 20)) # 5부터 20(포함)까지의 무작위 수로 공격받음

# 게임 종료
game_over()