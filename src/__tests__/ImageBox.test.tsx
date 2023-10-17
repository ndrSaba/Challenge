import React from 'react';
import { render } from '@testing-library/react';
import ImageBox from '../components/ImageBox';

describe('ImageBox', () => {
    it('renders the image and caption', () => {
        const { getByText } = render(
            <ImageBox
                imageUrl="https://example.com/image.jpg"
                caption="A beautiful image"
                subCaption="Taken by John Doe"
            />
        );

        const image = getByText('A beautiful image');

        expect(image).toBeInTheDocument();

        const subCaption = getByText('Taken by John Doe');
        expect(subCaption).toBeInTheDocument();
    });

    it('renders an error message when there is an error', () => {
        const { getByText } = render(
            <ImageBox
                imageUrl="https://example.com/image.jpg"
                caption="A beautiful image"
                subCaption="Taken by John Doe"
                error="Failed to load image"
            />
        );

        const errorMessage = getByText('Failed to load image');
        expect(errorMessage).toBeInTheDocument();
    });
});
