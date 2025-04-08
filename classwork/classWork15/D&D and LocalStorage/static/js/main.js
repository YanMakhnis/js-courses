
const board = document.getElementById("board");

const columns = [
  { id: "backlog", name: "🕐 Backlog" },
  { id: "todo", name: "📝 To Do" },
  { id: "inprogress", name: "🔧 In Progress" },
  { id: "codereview", name: "👀 Code Review" },
  { id: "intesting", name: "🧪 In Testing" },
  { id: "done", name: "✅ Done" },
];

let boardData = {
  backlog: [],
  todo: [],
  inprogress: [],
  intesting: [],
  codereview: [],
  done: [],
};

function renderBoard() {
  board.innerHTML = "";
  for (let col of columns) {
    const column = document.createElement("div");
    column.className = "column";
    column.id = col.id;
    column.innerHTML = `<h2>${col.name}</h2>`;

    const ticketsWrapper = document.createElement("div");
    ticketsWrapper.className = "tickets-wrapper";
    ticketsWrapper.dataset.id = col.id;
    column.append(ticketsWrapper);

    boardData[col.id].forEach((ticket) => {
      ticketsWrapper.appendChild(createTicket(ticket));
    });

    board.appendChild(column);
  }
}

function createTicket(ticket) {
  const div = document.createElement("div");
  div.className = "ticket";
  div.draggable = true;
  div.dataset.id = ticket.id;
  div.innerHTML = `
    <div class="ticket-title">${ticket.title}</div>
    <div class="ticket-description">${ticket.description}</div>
  `;

  return div;
}

export function moveTicket(id, toCol) {
  for (let col in boardData) {
    const idx = boardData[col].findIndex((t) => t.id === id);
    if (idx !== -1) {
      const [ticket] = boardData[col].splice(idx, 1);
      boardData[toCol].push(ticket);
      saveBoard();
      renderBoard();
      return;
    }
  }
}

function addTicket() {
  const title = document.getElementById("newTitle").value.trim();
  const desc = document.getElementById("newDesc").value.trim();

  if (!title) return alert("Введите заголовок");

  const id = "task-" + Date.now();
  const newTicket = { id, title, description: desc };
  boardData["todo"].push(newTicket);
  saveBoard();
  renderBoard();
  closeModal();

  document.getElementById("newTitle").value = "";
  document.getElementById("newDesc").value = "";
}

renderBoard();
