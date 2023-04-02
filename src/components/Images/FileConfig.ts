// @ts-ignore
import png from '../../assets/png.png';
// @ts-ignore
import jpg from '../../assets/jpg.png';
// @ts-ignore
import svg from '../../assets/svg.png';
// @ts-ignore
import defaultImage from '../../assets/default.png';
// @ts-ignore
import jpeg from '../../assets/jpeg.png';

export const ImageConfig: {
  png: string;
  jpg: string;
  svg: string;
  default: string;
  jpeg: string;
  'svg+xml': string;
} = {
  png,
  jpg,
  svg,
  'svg+xml': svg,
  default: defaultImage,
  jpeg,
};
