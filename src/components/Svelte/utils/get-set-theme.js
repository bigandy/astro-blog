export const getSetTheme = () => {
  const theme = localStorage.getItem("theme");
  document.body.setAttribute("data-theme", theme);

  return theme;
};
