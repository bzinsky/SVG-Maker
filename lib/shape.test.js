const { Circle, Triangle, Square } = require('./shape');

test('Circle render method', () => {
  const circle = new Circle();
  circle.shapeColor = '#FF0000';

  const svgContent = circle.render();

  expect(svgContent).toContain('<circle');
  expect(svgContent).toContain('fill="#FF0000"');
});