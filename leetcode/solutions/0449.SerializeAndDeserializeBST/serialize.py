from typing import List
from os.path import dirname, abspath, join
import sys
sys.path.append(abspath(dirname(__file__) + "/../../../datastructure/"))
from BinaryTreeNode import TreeNode

from collections import deque

class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        if TreeNode == None:
            return "[]"

        values: List[str] = []
        queue = deque([root])

        while len(queue) > 0:
            node = queue.popleft()

            if node == None:
                values.append("")
                continue

            values.append(str(node.val))
            queue.append(node.left)
            queue.append(node.right)

        while len(values) > 0 and values[-1] == "":
            values: List[str] = values[:-1]

        return "[{}]".format(",".join(values))

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        if data == "[]":
            return None

        values = data[1:-1].split(",")
        root = TreeNode(values[0])
        queue = deque([[root, True], [root, False]])

        for val in values[1:]:
            node, isLeft = queue.popleft()

            if val == "":
                continue

            child = TreeNode(int(val))

            if isLeft:
                node.left = child
            else:
                node.right = child

            queue.append([child, True])
            queue.append([child, False])

        return root
