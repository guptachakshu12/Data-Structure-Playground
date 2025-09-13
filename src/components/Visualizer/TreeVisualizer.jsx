import React, { useEffect, useRef, useState } from "react";
import Playground from "../Playground";
import "./TreeVisualizer.css";

let nodeIdCounter = 0;

export default function TreeVisualizer() {
  const [tree, setTree] = useState(null);
  const [value, setValue] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  // Traversal state
  const [mode, setMode] = useState("inorder");
  const [traversalValues, setTraversalValues] = useState([]);
  const [curIndex, setCurIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const renderNode = (node) => {
    if (!node) return <div className="tree-node empty" />;
    const isHighlighted = curIndex >= 0 && traversalValues[curIndex] === node.value;

    return (
      <div className="tree-node-wrapper" key={node.id}>
        <div
          className={`tree-node ${isHighlighted ? "highlight" : ""}`}
          onClick={(e) => { e.stopPropagation(); setSelectedNodeId(prev => (prev === node.id ? null : node.id)); }}
        >
          {node.value}
        </div>

        <div className="tree-children">
          {renderNode(node.left)}
          {renderNode(node.right)}
        </div>
      </div>
    );
  };

  const addNode = (side = null) => {
    if (value === "") return alert("Enter a value!");
    const v = Number(value);
    if (Number.isNaN(v)) return alert("Enter numeric value!");

    const newNode = { id: nodeIdCounter++, value: v, left: null, right: null };
    if (!tree) {
      setTree(newNode);
      setValue("");
      setSelectedNodeId(null);
      resetTraversal();
      return;
    }

    if (selectedNodeId === null) return alert("Select a parent node first!");

    let inserted = false;
    const insertRec = (n) => {
      if (!n || inserted) return;
      if (n.id === selectedNodeId) {
        if (side === "left") { if (n.left) { alert("Left exists"); inserted = true; return; } n.left = newNode; inserted = true; return; }
        if (side === "right") { if (n.right) { alert("Right exists"); inserted = true; return; } n.right = newNode; inserted = true; return; }
        alert("Specify left/right!"); inserted = true; return;
      }
      insertRec(n.left); insertRec(n.right);
    };
    insertRec(tree);
    if (inserted) { setTree({ ...tree }); setValue(""); setSelectedNodeId(null); resetTraversal(); }
  };

  const removeSelected = () => {
    if (!tree) return alert("Tree is empty!");
    if (selectedNodeId === null) return alert("Select a node to remove!");

    let newRoot = tree;

    const deleteById = (node, parent = null, side = null) => {
      if (!node) return;
      if (node.id === selectedNodeId) {
        if (!node.left && !node.right) { if (parent) parent[side] = null; else newRoot = null; }
        else if (node.left && !node.right) { if (parent) parent[side] = node.left; else newRoot = node.left; }
        else if (!node.left && node.right) { if (parent) parent[side] = node.right; else newRoot = node.right; }
        else {
          let succParent = node; let succ = node.right;
          while (succ.left) { succParent = succ; succ = succ.left; }
          node.value = succ.value; node.id = succ.id;
          deleteById(succ, succParent, succParent.left === succ ? "left" : "right");
        }
        return;
      }
      deleteById(node.left, node, "left");
      deleteById(node.right, node, "right");
    };

    deleteById(tree);
    setSelectedNodeId(null);
    setTree(newRoot ? { ...newRoot } : null);
    resetTraversal();
  };

  const buildTraversalValues = (m, node) => {
    if (!node) return [];
    const res = [];
    const pre = (n) => { if (!n) return; res.push(n.value); pre(n.left); pre(n.right); };
    const inord = (n) => { if (!n) return; inord(n.left); res.push(n.value); inord(n.right); };
    const post = (n) => { if (!n) return; post(n.left); post(n.right); res.push(n.value); };
    if (m === "preorder") pre(node);
    else if (m === "postorder") post(node);
    else inord(node);
    return res;
  };

  const startTraversal = () => {
    if (!tree) return alert("Tree is empty!");
    const values = buildTraversalValues(mode, tree);
    setTraversalValues(values);
    setCurIndex(0);
    setIsPlaying(true);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurIndex(prev => {
        if (prev + 1 >= values.length) { clearInterval(intervalRef.current); setIsPlaying(false); return prev; }
        return prev + 1;
      });
    }, 600);
  };

  const resetTraversal = () => { clearInterval(intervalRef.current); setTraversalValues([]); setCurIndex(-1); setIsPlaying(false); };
  const clearTree = () => { setTree(null); setSelectedNodeId(null); resetTraversal(); };

  return (
    <Playground>
      <div className="visualizer-card tree-visualizer">
        <h2>Binary Tree Visualizer</h2>

        <div className="controls grid">
          <div className="group">
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter node value" />
            {!tree ? (
              <button onClick={() => addNode()}>Set Root</button>
            ) : (
              <>
                <button onClick={() => addNode("left")}>Add Left</button>
                <button onClick={() => addNode("right")}>Add Right</button>
                <button onClick={removeSelected}>Remove Selected</button>
              </>
            )}
            <button onClick={clearTree}>Clear</button>
          </div>

          <div className="group">
            <label>Traversal</label>
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="inorder">Inorder</option>
              <option value="preorder">Preorder</option>
              <option value="postorder">Postorder</option>
            </select>

            <div className="traversal-controls">
              <button onClick={startTraversal} disabled={isPlaying}>Start</button>
              <button onClick={resetTraversal}>Reset</button>
            </div>

            <div className="traversal-info">
              Traversal: {traversalValues.length ? traversalValues.join(" → ") : "—"}
            </div>
          </div>
        </div>

        <div className="tree-container" onClick={() => setSelectedNodeId(null)}>
          {renderNode(tree)}
        </div>
      </div>
    </Playground>
  );
}
