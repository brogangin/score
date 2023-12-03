window.addEventListener("resize", () => {
  const al = document.querySelector("#league-menu-button").getBoundingClientRect().left;
  const aw = document.querySelector("#league-menu-button").getBoundingClientRect().width;
  const bw = document.querySelector("#menu-dropdown").getBoundingClientRect().width;
  const bx = window.scrollX + al - (bw - aw) / 2;

  const ah = document.querySelector("#league-menu-button").getBoundingClientRect().height;
  const at = document.querySelector("#league-menu-button").getBoundingClientRect().top;
  const by = ah + at + 10;
  document.querySelector("#menu-dropdown").setAttribute("style", `position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(${bx}px, ${by}px, 0px);`);
});
