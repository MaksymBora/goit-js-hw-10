import getRefs from './get-refs';

const refs = getRefs();

// Remove all childs from .cat-info

export function clearCatContainer() {
  const children = Array.from(refs.catContainer.children);

  // Check every child element
  children.forEach(child => {
    // if not a close btn
    if (child !== refs.closeButton) {
      refs.catContainer.removeChild(child);
    }
  });
}
