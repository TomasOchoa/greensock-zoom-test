export class BrowserWindow {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number){
    this.width = width;
    this.height = height;
  }

  set width(value: number) {
    this._width = value;
  }

  set height(value: number) {
    this._height = value;
  }
  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }
}
