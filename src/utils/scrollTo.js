import findNodeTopOffset from './findNodeTopOffset';

export const BEHAVIOR = {
  instant: 'instant',
  smooth: 'smooth',
};

export default ({ scrollItem = window, top, anchor, offset = 0, behavior = BEHAVIOR.smooth }) => {
  const nodeTopOffset = top ?? findNodeTopOffset(document.getElementById(anchor));

  scrollItem.scrollTo({
    top: nodeTopOffset - offset,
    behavior,
  });
};
