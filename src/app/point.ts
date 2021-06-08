export class Point {
  constructor(private x: number, private y: number) {
  }

  setValue(x: number, y: number)
  {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y)
  }
}
