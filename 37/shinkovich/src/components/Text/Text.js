import { useHistory } from 'react-router-dom';

import { TextWrapper, TextBlock, CurvyText, Button } from './styles';

const Text = () => {
	const history = useHistory();

	const handleClick = () => history.push('/');

	return (
		<TextWrapper>
			<CurvyText isPrimary>Text 1</CurvyText>
			<CurvyText>Text 2</CurvyText>
			<TextBlock isPrimary>Text 3</TextBlock>
			<TextBlock>Text 4</TextBlock>
			<Button onClick={handleClick}>Click</Button>
		</TextWrapper>
	);
};

export default Text;
