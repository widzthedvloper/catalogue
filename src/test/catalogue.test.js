import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<span>CATALOGUE RECEIPES</span>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Bakewell tart</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Bread and Butter Puddind</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef Wellington</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Baingan Bharta</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef Brisket Pot Roast</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef Sunday Roast</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Braised Beef Chilli</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef stroganoff</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Broccoli & Stilton soup</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Bean & Sausage Hotpot</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Banana Pancakes</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef Dumpling Stew</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders span with text correctly', () => {
    const tree = renderer
    .create(<h3>Beef and Mustard Pie</h3>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})
