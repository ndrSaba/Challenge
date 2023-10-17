import { render, fireEvent } from '@testing-library/react';
import SubBreeds from '../components/SubBreeds';

describe('SubBreeds component', () => {
    const subBreeds = ['subBreed1', 'subBreed2', 'subBreed3'];
    const setSelectedSubBreed = jest.fn();

    it('renders the subBreeds list', () => {
        const { getByText } = render(
            <SubBreeds
                subBreeds={subBreeds}
                setSelectedSubBreed={setSelectedSubBreed}
            />
        );

        expect(getByText('SubBreeds')).toBeInTheDocument();
        expect(getByText('subBreed1')).toBeInTheDocument();
        expect(getByText('subBreed2')).toBeInTheDocument();
        expect(getByText('subBreed3')).toBeInTheDocument();
    });

    it('calls setSelectedSubBreed when a subBreed button is clicked', () => {
        const { getByText } = render(
            <SubBreeds
                subBreeds={subBreeds}
                setSelectedSubBreed={setSelectedSubBreed}
            />
        );

        fireEvent.click(getByText('subBreed1'));
        expect(setSelectedSubBreed).toHaveBeenCalledWith('subBreed1');

        fireEvent.click(getByText('subBreed2'));
        expect(setSelectedSubBreed).toHaveBeenCalledWith('subBreed2');

        fireEvent.click(getByText('subBreed3'));
        expect(setSelectedSubBreed).toHaveBeenCalledWith('subBreed3');
    });
});
