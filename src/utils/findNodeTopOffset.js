/**
 * Helps to find node's top offset from top node
 * @param node - current dom node
 * @returns {number}
 */
export default function findNodeTopOffset(node) {
  let curtop = 0;
  let curtopscroll = 0;

  if (node.offsetParent) {
    do {
      curtop += node.offsetTop;
      curtopscroll += node.offsetParent ? node.offsetParent.scrollTop : 0;
    } while ((node = node.offsetParent));

    return curtop - curtopscroll;
  }
}
