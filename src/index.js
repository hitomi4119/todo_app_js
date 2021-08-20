import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // const ul = document.createElement("ul");
  // ul.id = "complete-list";
  //div2作成
  /* const div2 =document.createElement("div");
  div2.className = ""; */

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除し、完了したTODOにタグを生成？
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);
    //liの値だけを完了したTODOに引き渡す・・・

    //ここから！

    /* document.getElementById("complete-list").appendChild(completeTarget);
    completeButton.innerText = "戻る";
    document.getElementById("complete-list").removeChild(deleteButton);
 */
    // console.log(completeTarget);
  });

  //button(削除)タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //button(戻る)タグの作成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻る";
  returnButton.addEventListener("click", () => {
    //押された戻るボタンの親タグを削除し、完了したTODOから削除して、未完了リストに戻す
    // const returnTarget = returnButton.parentNode;
    // document.getElementById("complete-list").removeChild(returnTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // div.appendChild(li);
  // div.appendChild(returnButton);

  // ul.appendChild(li);
  // ul.appendChild(returnButton);
  // div.appendChild(returnButton);
  //console.log(div);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //完了したTODOに追加
  //document.getElementById("complete-list").appendChild(ul);

  //
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
