# 깊이 우선 탐색 DFS의 구현

## 클래스와 함수 선언 부분 ##
class Graph():
    def __init__(self, size):
        self.SIZE = size
        self.graph = [[0 for _ in range(size)]for _ in range(size)]


## 전역 변수 선언 부분 ##
G1 = None
stack = []  # 스택
visitedAry = []  # 방문한 정점

## 메인 코드 부분 ##
G1 = Graph(4)
G1.graph[0][2] = 1
G1.graph[0][3] = 1
G1.graph[1][2] = 1
G1.graph[2][0] = 1
G1.graph[2][1] = 1
G1.graph[2][3] = 1
G1.graph[3][0] = 1
G1.graph[3][2] = 1

print('## G1 무방향 그래프 ##')
for row in range(4):
    for col in range(4):
        print(G1.graph[row][col], end=' ')
    print()

current = 0  # 시작 정점
stack.append(current)
visitedAry.append(current)

while (len(stack) != 0):
    next = None
    for vertex in range(4):
        if G1.graph[current][vertex] == 1:
            if vertex in visitedAry:  # 방문한 적이 있는 정점이면 탈락
                pass
            else:
                next = vertex
                break

    if next != None:
        current = next
        stack.append(current)
        visitedAry.append(current)
    else:
        current = stack.pop()  # pop() : 리스트의 마지막 항목을 리턴하고 삭제함

print('방문 순서 -> ', end=' ')
for i in visitedAry:
    print(chr(ord('A')+i), end=' ')
