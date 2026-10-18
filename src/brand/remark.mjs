// Remark plugin: replaces `%%name%%` tokens in Markdown and MDX content with the brand's values.
// Text, inline code, code blocks, HTML, link and image addresses, titles and JSX attributes are covered.
// A paragraph that is only a token which comes out empty is removed.

import { fill } from './tokens.mjs';

const STRING_VALUE_TYPES = new Set(['text', 'inlineCode', 'code', 'html']);

export function remarkBrandTokens(tokens) {
  const apply = (node, parent, index) => {
    if (STRING_VALUE_TYPES.has(node.type) && typeof node.value === 'string') {
      // Smart quotes run before this plugin and read an apostrophe after a token ("%%brand%%'s") as an opening quote.
      const value = node.type === 'text' ? node.value.replace(/(%%[A-Za-z0-9_]+%%)\u2018/g, '$1\u2019') : node.value;
      node.value = fill(value, tokens);
    }
    if (typeof node.url === 'string') node.url = fill(node.url, tokens);
    if (typeof node.title === 'string') node.title = fill(node.title, tokens);
    if (typeof node.alt === 'string') node.alt = fill(node.alt, tokens);
    if (node.type === 'code' && typeof node.meta === 'string') node.meta = fill(node.meta, tokens);
    if ((node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && Array.isArray(node.attributes)) {
      for (const attr of node.attributes) if (attr.type === 'mdxJsxAttribute' && typeof attr.value === 'string') attr.value = fill(attr.value, tokens);
    }
    if (Array.isArray(node.children)) {
      for (let i = 0; i < node.children.length; i += 1) {
        const before = node.children.length;
        apply(node.children[i], node, i);
        if (node.children.length < before) i -= 1;
      }
    }
    if (node.type === 'paragraph' && parent && Array.isArray(node.children) && node.children.every((c) => c.type === 'text' && c.value.trim() === '')) {
      parent.children.splice(index, 1);
    }
  };
  return () => (tree) => {
    apply(tree, null, 0);
  };
}
