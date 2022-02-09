export const makeElement = (tagName: keyof HTMLElementTagNameMap): HTMLElement => {
  return document.createElement(tagName);
}

export const removeElement = (
  node: Node | null
): Node | null => {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
    return node;
  }
  return null;
}

export const removeAllChildren = (
  node: Node | null
): Node | null => {
  if (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    return node;
  }
  return null;
}

export const hasClass = (
  element: Element | SVGElement,
  className: string
): boolean => {
  if (element.classList)
    return !!className && element.classList.contains(className)

  return (
    ` ${element.className.baseVal || element.className} `.indexOf(
      ` ${className} `
    ) !== -1
  )
}

export const addClass = (
  element: Element | SVGElement,
  className: string
): void => {
  if (element.classList) element.classList.add(className)
  else if (!hasClass(element, className))
    if (typeof element.className === 'string')
      (element as Element).className = `${element.className} ${className}`
    else
      element.setAttribute(
        'class',
        `${(element.className && element.className.baseVal) || ''} ${className}`
      )
}

const replaceClassName = (origClass: string, classToRemove: string): string => {
  return origClass
    .replace(new RegExp(`(^|\\s)${classToRemove}(?:\\s|$)`, 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '')
}

export const removeClass = (
  element: Element | SVGElement,
  className: string
): void => {
  if (element.classList) {
    element.classList.remove(className)
  } else if (typeof element.className === 'string') {
    (element as Element).className = replaceClassName(
      element.className,
      className
    )
  } else {
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className
      )
    )
  }
}