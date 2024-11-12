export const textSplit = (
  element: HTMLElement | null,
  className: string
) => {
  if (element) {
    const text = element.textContent || "";
    const characters = text.split("");
    element.textContent = ""; // 清空元素内容

    // 为每个字符创建 span 并添加到 DOM 中
    characters.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = className;
      element.appendChild(span);
    });

    // const name = element.querySelectorAll(`.${className}`);
    // gsap.fromTo(name, fromParams, toParams);
  }
};
