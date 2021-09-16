export const blocksFromServer = (blocks) => ({
	data: blocks?.data || blocks,
	statusText: blocks?.status_text || blocks?.statusText,
});

export const blocksToServer = (blocks) => blocks;

export const blockFromServer = (block) => ({
	data: block?.data || block,
	statusText: block?.status_text || block?.statusText,
});

export const blockToServer = (block) => block;
