import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from '../components/DropDown';

test('renders DropDown component with closed menu', () => {
    const { getByText } = render(
        <DropDown breeds={['Breed1', 'Breed2']} subBreeds={[]} selectedBreed="" setSelectedBreed={() => { }} setSelectedSubBreed={() => { }} handleSubBreedsList={() => { }} />
    );

    const selectButton = getByText('Select a Breed');
    const breed1Button = getByText('Breed1');
    const breed2Button = getByText('Breed2');

    expect(selectButton).toBeInTheDocument();
    expect(breed1Button).toBeInTheDocument();
    expect(breed2Button).toBeInTheDocument();
});

test('renders DropDown component with open menu', () => {
    const { getByText } = render(
        <DropDown breeds={['Breed1', 'Breed2']} selectedBreed="" subBreeds={[]} setSelectedBreed={() => { }} setSelectedSubBreed={() => { }} handleSubBreedsList={() => { }} />
    );

    const selectButton = getByText('Select a Breed');
    fireEvent.click(selectButton);

    const breed1Button = getByText('Breed1');
    const breed2Button = getByText('Breed2');

    expect(selectButton).toBeInTheDocument();
    expect(breed1Button).toBeInTheDocument();
    expect(breed2Button).toBeInTheDocument();
});