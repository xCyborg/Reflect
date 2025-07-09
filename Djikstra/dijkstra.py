# Import Heap Queue library for priority queue
import heapq   

def dijkstra(graph, source):
    n = len(graph)
    dist = {node: float('inf') for node in graph}
    dist[source] = 0
    visited = set()
    heap = [(0, source)]  # (distance, node)

    while heap:
        current_dist, u = heapq.heappop(heap)

        if u in visited:
            continue
        visited.add(u)

        for neighbor, weight in graph[u]:
            if neighbor in visited:
                continue
            new_dist = current_dist + weight
            if new_dist < dist[neighbor]:
                dist[neighbor] = new_dist
                heapq.heappush(heap, (new_dist, neighbor))

    return dist
