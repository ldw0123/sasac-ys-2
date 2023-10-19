# 무방향 그래프

## 클래스와 함수 선언 부분 ##
class Graph():
    def __init__(self, size):
        self.SIZE = size
        self.graph = [[0 for _ in range(size)] for _ in range(size)]


def printGraph(g):
    print('  ', end='  ')
    for v in range(g.SIZE):
        print(nameAry[v], end=' ')
    print()
    for row in range(g.SIZE):
        print(nameAry[row], end='  ')
        for col in range(g.SIZE):
            print(g.graph[row][col], end='   ')
        print()
    print()


## 전역 변수 선언 부분 ##
G1 = None
nameAry = ['서울', '대구', '광주', '대전', '울산', '강릉']
서울, 대구, 광주, 대전, 울산, 강릉 = 0, 1, 2, 3, 4, 5

## 메인 코드 부분 ##
gSize = 6
G1 = Graph(gSize)
G1.graph[서울][대구] = 1
G1.graph[서울][광주] = 1
G1.graph[대구][서울] = 1
G1.graph[대구][대전] = 1
G1.graph[광주][서울] = 1
G1.graph[광주][대전] = 1
G1.graph[대전][대구] = 1
G1.graph[대전][광주] = 1
G1.graph[대전][울산] = 1
G1.graph[대전][강릉] = 1
G1.graph[울산][대전] = 1
G1.graph[울산][강릉] = 1
G1.graph[강릉][대전] = 1
G1.graph[강릉][울산] = 1

print('## G1 무방향 그래프 ##')
printGraph(G1)
