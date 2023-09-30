# 🔥 class

# __init__ : 클래스 생성자. 메서드 이름으로 __init__을 사용하면 이 메서드는 생성자가 된다
# 메서드: 클래스 안에 구현된 함수. 즉, 클래스 내부의 함수
# 파이썬 메서드의 첫 번째 매개변수에는 메서드를 호출한 객체가 자동으로 전달됨
# self: 파이썬 메서드의 첫 번째 매개변수 이름은 관례적으로 self를 사용 (자기 자신을 의미함)
class Unit: # 일반 유닛
  def __init__(self, name, hp, damage): # 스타크래프트 유닛의 이름, 체력, 공격력
    self.name = name
    self.hp = hp
    self.damage = damage
    print("{0} 유닛이 생성되었습니다.".format(self.name))
    print("체력 {0}, 공격력 {1}".format(self.hp, self.damage))

# marine1, marine2, tank는 Unit의 인스턴스(객체)
marine1 = Unit("마린", 40, 5)
marine2 = Unit("마린", 40, 5)
tank = Unit("탱크", 150, 35)

# 🔥 멤버 변수: 클래스 내에서 정의된 변수 (예: name, hp, damage)
wraith1 = Unit("레이스", 80, 5)
print("유닛 이름: {0}, 공격력: {1}".format(wraith1.name, wraith1.damage))

wraith2 = Unit("마인드 컨트롤로 빼앗은 레이스", 80, 5)
wraith2.clocking = True # clocking이라는 변수를 외부에서 추가로 만들어서 할당
if wraith2.clocking == True:
  print("{0}는 현재 클로킹 상태입니다." .format(wraith2.name))

# 🔥 메서드
class AttackUnit: # 공격 유닛
  def __init__(self, name, hp, damage):
    self.name = name
    self.hp = hp
    self.damage = damage

  def attack(self, location): 
    print("{0}: {1} 방향으로 적군을 공격합니다. [공격력 {2}]" .format(self.name, location, self.damage))

  def damaged(self, damage):
    print("{0}: {1}데미지를 입었습니다." .format(self.name, damage))
    self.hp -= damage
    print("{0}: 현재 체력은 {1}입니다." .format(self.name, self.hp))
    if self.hp <= 0:
      print("{0}: 파괴되었습니다." .format(self.name))

firebat1 = AttackUnit("파이어뱃", 50, 16)
firebat1.attack("5시")

# 파이어뱃에게 공격을 두 번 받는다고 가정
firebat1.damaged(25) 
firebat1.damaged(25) 
print()


# 🔥 상속
print("<상속>")
class Unit:
  def __init__(self, name, hp):
    self.name = name
    self.hp = hp

# AttackUnit 클래스는 Unit 클래스를 상속받음
class AttackUnit(Unit): # (Unit) : 상속받을 클래스
  def __init__(self, name, hp, damage):
    Unit.__init__(self, name, hp) # Unit에서 만들어진 생성자 호출
    self.damage = damage

  def attack(self, location): 
    print("{0}: {1} 방향으로 적군을 공격합니다. [공격력 {2}]" .format(self.name, location, self.damage))

  def damaged(self, damage):
    print("{0}: {1}데미지를 입었습니다." .format(self.name, damage))
    self.hp -= damage
    print("{0}: 현재 체력은 {1}입니다." .format(self.name, self.hp))
    if self.hp <= 0:
      print("{0}: 파괴되었습니다." .format(self.name))

firebat1 = AttackUnit("파이어뱃", 50, 16)
firebat1.attack("5시")

firebat1.damaged(25) 
firebat1.damaged(25) 