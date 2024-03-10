import React from "react";

function Modal() {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p id="modalText">All fields are required!</p>
      </div>
    </div>
  );
}
