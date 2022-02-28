import color from '../utils/colors';

export default class BaseResumeSection {
  constructor({ x, y, w, h, i, background = color({hex: '#fff'}) }, data) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.i = i;
    this.background = background;
    this.data = data;
  }
};