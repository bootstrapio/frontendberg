import { ContentH2Attributes } from '../../elements/content-h2/attributes';
import { ContentH3Attributes } from '../../elements/content-h3/attributes';
import { ContentParagraphAttributes } from '../../elements/content-paragraph/attributes';
import { ContentLinkAttributes } from '../../elements/content-link/attributes';

export const ContentAttributes = {
	...ContentH2Attributes,
	...ContentH3Attributes,
	...ContentLinkAttributes,
	...ContentParagraphAttributes,
};
