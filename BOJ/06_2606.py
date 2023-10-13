# 바이러스 (2606) Silver III
# DFS

# 노드의 수(N): 7
# 간선의 수(M): 6 
# 탐색을 시작할 노드의 번호(V)

# 간선 정보
# (1, 2), (2, 3), (1, 5), (5, 2), (5, 6), (4, 7)

# 1번 노드에서 연결되어있는 노드의 수: 4

import sys
input = sys.stdin.readline

# c : 현재 몇 번이 감염됐는가? dfs 1번부터 시작
def dfs(c):
  global answer # 전역변수

  answer += 1 # 방문한 곳이 하나 증가
  visited[c] = 1 # 방문했다고 표시함

# n이 방문함
  for n in graph[c]: # c와 연결된 노드 모두 처리
    if not visited[n]: # n이 방문하지 않으면
      dfs(n) # 해당 노드 방문

N = int(input()) # 노드의 수
M = int(input()) # 간선의 수

graph = [[] for _ in range (N + 1)] # graph 초기화
for _ in range(M):
  s, e = map(int, input().split())
  graph[s].append(e)
  graph[e].append(s)

answer = 0
# visited : 방문함. 1차원 배열 그래프
visited = [0]*(N + 1) # N + 1 개 배열. N번 인덱스까지 세어야 하니까
dfs(1) # 1번부터 시작
print(answer-1)