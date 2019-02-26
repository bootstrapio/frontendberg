import { ContentH3Attributes } from '../../elements/content-h3/attributes';
import { ContentParagraphAttributes } from '../../elements/content-paragraph/attributes';
import { ContentLinkAttributes } from '../../elements/content-link/attributes';

export const ContentAttributes = {
	...ContentH3Attributes,
	...ContentLinkAttributes,
	...ContentParagraphAttributes,
};
