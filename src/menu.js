function createMenuItem(menuGrid, name, desc) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const menuHeading = document.createElement("p");
  menuHeading.className = "menu-heading";
  menuHeading.textContent = name;

  const menuDesc = document.createElement("p");
  menuDesc.className = "menu-desc";
  menuDesc.textContent = desc;

  menuItem.appendChild(menuHeading);
  menuItem.appendChild(menuDesc);

  menuGrid.appendChild(menuItem);
}

function createMenuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = '';

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  createMenuItem(
    menuGrid,
    "Lamb Karahi",
    "The world-famous Karahi, a mix of pure ghee, butter, and the finest cut of Lamb. Serve with a side of Raita and Naan."
  );
  contentDiv.appendChild(menuGrid);
}

export { createMenuPage };
