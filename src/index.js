import "./styles.css";

const onClickAdd = () => {
  // 入力値を取得して値を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了のTODO要素
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = inputText;
  // ボタン要素
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了のTODOから完了したTODOへ要素を移動させる
    const completeTarget = completeButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "list-title";
    p.innerText = completeButton.previousElementSibling.innerText;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 完了したTODOから未完了のTODOへ戻す
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.className = "list-row";
      const p = document.createElement("p");
      p.className = "list-title";
      p.innerText = returnButton.previousElementSibling.innerText;
      li.appendChild(div);
      div.appendChild(p);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
      // 未完了リストに追加
      const ul = document.getElementById("incomplete-list");
      ul.appendChild(li);
    });
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素ごと未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了リストに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
