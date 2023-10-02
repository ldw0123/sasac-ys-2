# 🔥 super()

class Unit:
  def __init__(self):
    print("Unit 생성자")

class Flyable:
  def __init__(self):
    print("Flyable 생성자")

# Unit, Flyable 클래스 다중 상속 받음
class FlyableUnit(Unit, Flyable):
  def __init__(self):
    # super(): self 필요 없음
    super().__init__()

# Unit 생성자는 호출이 되는데, Flyable 생성자는 호출이 안 됨
# 맨 처음 상속 받는 클래스에 대해서만 __init__ 함수가 호출 된다.
dropship = FlyableUnit()

class FlyableUnit2(Unit, Flyable):
  def __init__(self):
    # 상속을 명시적으로 두 번을 통해 하면 해결 됨
    Unit.__init__(self)
    Flyable.__init__(self)

print()    
dropship2 = FlyableUnit2()