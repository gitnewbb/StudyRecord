# 깊이 우선 탐색 (Depth-First Search, DFS) in JavaScript

본 문서는 코딩 입문자를 대상으로 JavaScript를 사용한 깊이 우선 탐색(DFS) 알고리즘을 단계별로 설명합니다.

## 1. 깊이 우선 탐색(DFS)이란?

깊이 우선 탐색(DFS)은 트리나 그래프와 같은 자료 구조에서 모든 노드를 탐색하는 알고리즘 중 하나입니다. DFS는 가능한 한 가장 깊은 경로를 우선적으로 탐색하며, 더 이상 탐색할 수 없는 지점에 도달하면 이전 단계로 돌아가 다른 경로를 탐색합니다.

## 2. DFS의 작동 원리

DFS는 스택(Stack) 자료 구조를 사용하여 구현할 수 있습니다. 스택은 후입선출(LIFO, Last-In First-Out) 방식으로 작동하는 자료 구조입니다.

DFS의 작동 원리는 다음과 같습니다.

1. 시작 노드를 스택에 넣습니다.
2. 스택이 빌 때까지 다음 단계를 반복합니다.
   - 스택에서 노드를 하나 꺼냅니다.
   - 꺼낸 노드가 방문하지 않은 노드라면 방문 처리합니다.
   - 해당 노드의 인접 노드 중 방문하지 않은 노드를 스택에 넣습니다.

## 3. JavaScript를 사용한 DFS 구현

다음은 JavaScript를 사용하여 DFS를 구현한 예제 코드입니다.

```javascript
function dfs(graph, startNode) {
  const visited = new Set(); // 방문한 노드를 추적하기 위한 Set
  const stack = [startNode]; // 시작 노드를 스택에 추가

  while (stack.length > 0) {
    const node = stack.pop(); // 스택에서 노드를 꺼냄

    if (!visited.has(node)) {
      visited.add(node); // 노드를 방문 처리
      console.log("방문한 노드:", node);

      // 인접 노드를 역순으로 스택에 추가 (깊이 우선 탐색을 위해)
      const neighbors = graph[node].slice().reverse();
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// 예제 그래프 (인접 리스트)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// DFS 실행
dfs(graph, "A");
```

## 4. DFS의 활용

DFS는 다음과 같은 문제 해결에 활용될 수 있습니다.

- 경로 찾기: 시작 노드에서 목표 노드까지의 경로를 찾습니다.
- 사이클 감지: 그래프에 사이클이 있는지 확인합니다.
- 위상 정렬: 방향 그래프에서 노드의 순서를 정렬합니다.

## 5. 결론

깊이 우선 탐색(DFS)은 그래프와 트리 구조에서 널리 사용되는 강력한 알고리즘입니다. 이 문서를 통해 DFS의 기본 개념과 JavaScript를 사용한 구현 방법을 이해하는 데 도움이 되었기를 바랍니다.
