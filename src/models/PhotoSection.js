import BaseResumeSection from "./BaseResumeSection";
import color from "../utils/colors";

export default class PhotoSection extends BaseResumeSection {
  constructor({ x, y, w, h, i, background = color({hex: '#fff'}), borderRadius, padding }, data) {
    super({ x, y, w, h, i, background}, data);
    this.aspect = { borderRadius, padding };
  }
}