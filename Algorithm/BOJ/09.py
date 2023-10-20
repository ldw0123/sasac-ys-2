# DFS와 BFS (1260) Silver II
# N: 정점의 개수, M: 간선의 개수, V 탐색을 시작할 정점의 번호

import sys


def dfs(idx):  # DFS 구현
    global visited
    visited[idx] = True  # 해당 V값 방문 처리
    print(idx, end=' ')
    for next in range(1, N + 1):  # 1 부터 N 까지
        if not visited[next] and graph[idx][next]:  # 만약 next를 방문하지 않고 V와 연결되어 있다면
            dfs(next)  # 해당 next 값으로 dfs를 돈다 (깊이 탐색)


def bfs():  # BFS 구현
    global q, visited
    while q:  # q에 요소가 있을 때 까지 반복
        cur = q.pop(0)  # q의 0번 인덱스 요소를 pop
        print(cur, end=' ')
        for next in range(1, N + 1):
            if not visited[next] and graph[cur][next]:
                visited[next] = True
                q.append(next)  # q의 맨 끝에 추가


# 0. 입력 및 초기화
input = sys.stdin.readline
N, M, V = map(int, input().split())

# False로 초기화한 그래프를 2차원 배열(인접행렬)로 나타냄
graph = [[False] * (N + 1) for _ in range(N + 1)]
visited = [False] * (N + 1)  # 방문한 노드를 표시하는 배열

# 1. graph 정보 입력
for _ in range(M):
    a, b = map(int, input().split())
    graph[a][b] = True
    graph[b][a] = True

# 2. DFS
dfs(V)
print()

# 3. BFS
visited = [False] * (N + 1)  # visited 배열을 False로 다시 초기화
q = [V]
visited[V] = True
bfs()
