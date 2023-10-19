# 🔥 class

# __init__ : 클래스 생성자(객체를 초기화). 메서드 이름으로 __init__을 사용하면 이 메서드는 생성자가 된다
# 메서드: 클래스 안에 구현된 함수. 즉, 클래스 내부의 함수
# 파이썬 메서드의 첫 번째 매개변수에는 메서드를 호출한 객체가 자동으로 전달됨
# self: 파이썬 메서드의 첫 번째 매개변수 이름은 관례적으로 self를 사용 (자기 자신을 의미함)
class Unit:  # 일반 유닛
    def __init__(self, name, hp, speed, damage):  # 스타크래프트 유닛의 이름, 체력, 공격력
        self.name = name
        self.hp = hp
        self.speed = speed
        self.damage = damage

    def move(self, location):
        print("[지상 유닛 이동]")
        print("{0}: {1} 방향으로 이동합니다. [속도 {2}]".format(
            self.name, location, self.speed))


# 🔥 멤버 변수: 클래스 내에서 정의된 변수 (예: name, hp, damage)
wraith1 = Unit("레이스", 80, 5, 8)
print("유닛 이름: {0}, 공격력: {1}".format(wraith1.name, wraith1.damage))

wraith2 = Unit("마인드 컨트롤로 빼앗은 레이스", 80, 5, 8)
wraith2.clocking = True  # clocking이라는 변수를 외부에서 추가로 만들어서 할당
if wraith2.clocking == True:
    print("{0}는 현재 클로킹 상태입니다." .format(wraith2.name))

# 🔥 상속
# (Unit) : 상속받을 클래스를 괄호 안에 적는다
# AttackUnit 클래스는 Unit 클래스를 상속받음


class AttackUnit(Unit):  # 공격 유닛
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, damage, speed)  # Unit에서 만들어진 생성자 호출
        self.damage = damage

    def attack(self, location):
        print("{0}: {1} 방향으로 적군을 공격합니다. [공격력 {2}]" .format(
            self.name, location, self.damage))

    def damaged(self, damage):
        print("{0}: {1}데미지를 입었습니다." .format(self.name, damage))
        self.hp -= damage
        print("{0}: 현재 체력은 {1}입니다." .format(self.name, self.hp))
        if self.hp <= 0:
            print("{0}: 파괴되었습니다." .format(self.name))


print()
firebat1 = AttackUnit("파이어뱃", 50, 5, 16)
firebat1.attack("5시")

# marine1, marine2, tank는 Unit의 인스턴스(객체)
marine1 = Unit("마린", 40, 5, 7)
marine2 = Unit("마린", 40, 5, 7)
tank = Unit("탱크", 150, 35, 4)

firebat1 = AttackUnit("파이어뱃", 50, 16, 5)
firebat1.attack("5시")

# 파이어뱃에게 공격을 두 번 받는다고 가정
firebat1.damaged(25)
firebat1.damaged(25)
print()


class Flyable:  # 날 수 있는 기능을 지닌 클래스
    def __init__(self, flying_speed):
        # flying_speed 멤버 변수 초기화
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0}: {1} 방향으로 날아갑니다. [속도 {2}]".format(
            name, location, self.flying_speed))

# 🔥 다중 상속
# FlyableAttackUnit 클래스는 AttackUnit, Flyable 클래스를 다중 상속 받고 있음


class FlyableAttackUnit(AttackUnit, Flyable):  # 공중 공격 유닛 클래스
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)  # 지상 speed: 0
        Flyable.__init__(self, flying_speed)

    # 메서드 오버라이딩
    def move(self, location):
        print("[공중 유닛 이동]")
        self.fly(self.name, location)


valkyrie = FlyableAttackUnit("발키리", 200, 6, 5)
valkyrie.fly(valkyrie.name, "3시")
print()

# 🔥 메서드 오버라이딩: 자식 클래스에서 정의한 메서드를 쓰고 싶을 때 메서드를 새롭게 정의해서 사용함
vulture = AttackUnit("벌쳐", 80, 20, 12)

battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecruiser.move("9시")  # 메서드 오버라이딩을 통해 값을 전달하고 있음
print()

# 🔥 pass: 아무것도 하지 않고 일단 넘어간다는 의미


def game_start():
    print("[알림] 새로운 게임을 시작합니다.")


def game_over():
    pass


game_start()
game_over()  # pass를 했기 때문에 아무것도 실행되지 않고 그냥 넘어감

# 🔥 super():


class BuildingUnit(Unit):  # Unit 클래스를 상속 받고 있음
    def __init__(self, name, hp, location):
        # Unit.__init__(self, name, hp, 0) -> 아래 처럼 super를 사용할 수 있음
        super().__init__(name, hp, 0)  # self 필요 없음
        self.location = location

# supply_depot = BuildingUnit("서플라이 디폿", 500, "7시")
