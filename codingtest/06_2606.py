# 바이러스 (2606) Silver III
# DFS / BFS

# 노드의 수(N): 7
# 간선의 수(M): 6 
# 탐색을 시작할 노드의 번호(V)

# 간선 정보
# (1, 2), (2, 3), (1, 5), (5, 2), (5, 6), (4, 7)

# 1번 노드에서 직결되어있는 노드의 수: 4

import sys

def dfs(idx):
  global visited
  visited[idx] = True # 방문을 했으면 True
  print(idx, end = ' ')

# 0. 입력 및 초기화
input = sys.stdin.readline
N, M, V = map(int, input().split())

# grape : 2차원 배열 그래프
# False 가 N+1 개 있는 1차원 배열을
# for문을 통해 N+1개의 행이 있는 2차원 배열로 만든다
graph = [[False] * (N + 1) for _ in range(N + 1)]

# visited : 방문함. 1차원 배열 그래프
visited = [False] * (N + 1)

# 1. graph 정보 입력
for _ in range(M): # M개의 간선의 정보
  a, b = map(int, input().split())
  graph[a][b] = True
  graph[b][a] = True

# 2. dfs
dfs(v) # v 노드부터 dfs 함수를 실행해라
print()