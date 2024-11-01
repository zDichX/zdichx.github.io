import gsap from 'gsap';

export const textSplitAnimation = (
  element: HTMLElement | null,
  fromParams: gsap.TweenVars,
  toParams: gsap.TweenVars
) => {
  if (element) {
    const text = element.textContent || '';
    const characters = text.split('');
    element.textContent = ''; // 清空元素内容

    // 为每个字符创建 span 并添加到 DOM 中
    characters.forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'char';
      element.appendChild(span);
    });

    const name = element.querySelectorAll('.char');
    gsap.fromTo(name, fromParams, toParams);
  }
};
