import "./styles.css";

// 追加ボタンのクリックイベント
const onClickAdd = () => {
  // 入力値を取得して値を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ボタン要素
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 戻すボタン
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    // 完了したTODOから未完了のTODOへ戻す
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      moveElement(
        returnButton.previousElementSibling.innerText,
        "incomplete-list"
      );
    });
    // 未完了のTODOから完了したTODOへ要素を移動させる
    const completeTarget = completeButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "list-title";
    p.innerText = completeButton.previousElementSibling.innerText;
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(li);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 押された削除ボタンの親要素ごと未完了リストから削除
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 要素の移動メソッド
  const moveElement = (moveText, moveElementId) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row";
    const p = document.createElement("p");
    p.className = "list-title";
    p.innerText = moveText;
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    // IDで指定した要素の子要素に追加
    const ul = document.getElementById(moveElementId);
    ul.appendChild(li);
  };
  // 未完了のTODO要素へ追加
  moveElement(inputText, "incomplete-list");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
