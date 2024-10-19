import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, s as spreadAttributes, b as createAstro, d as renderComponent, e as renderSlot, f as renderHead } from '../chunks/astro/server_Cf5uPwNx.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                 */
import 'clsx';
import { isRemotePath } from '@astrojs/internal-helpers/path';
import { A as AstroError, f as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, E as ExpectedImageOptions, g as ExpectedImage, h as ExpectedNotESMImage, r as resolveSrc, i as isRemoteImage, j as isESMImportedImage, k as isLocalService, D as DEFAULT_HASH_PROPS, l as InvalidImageService, m as ImageMissingAlt } from '../chunks/astro/assets-service_CecXjKid.mjs';
import * as mime from 'mrmime';
export { renderers } from '../renderers.mjs';

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="site-mobile-menu"> <div class="site-mobile-menu-header"> <div class="site-mobile-menu-close"> <span class="icofont-close js-menu-toggle"></span> </div> </div> <div class="site-mobile-menu-body"></div> </div> <nav class="site-nav mb-5"> <div class="pb-2 top-bar mb-3"> <div class="container"> <div class="row align-items-center"> <div class="col-6 col-lg-9"> <a href="#" class="small mr-3"><span class="icon-question-circle-o mr-2"></span> <span class="d-none d-lg-inline-block">Have a questions?</span></a> <a href="#" class="small mr-3"><span class="icon-phone mr-2"></span> <span class="d-none d-lg-inline-block">10 20 123 456</span></a> <a href="#" class="small mr-3"><span class="icon-envelope mr-2"></span> <span class="d-none d-lg-inline-block"><span class="__cf_email__" data-cfemail="5c35323a331c31253833313d3532723f3331">[email&#160;protected]</span></span></a> </div> <div class="col-6 col-lg-3 text-right"> <a href="login.html" class="small mr-3"> <span class="icon-lock"></span>
Log In
</a> <a href="register.html" class="small"> <span class="icon-person"></span>
Register
</a> </div> </div> </div> </div> <div class="sticky-nav js-sticky-header"> <div class="container position-relative"> <div class="site-navigation text-center"> <a href="index.html" class="logo menu-absolute m-0">Lorem<span class="text-primary">.</span></a> <ul class="js-clone-nav d-none d-lg-inline-block site-menu"> <li class="active"><a href="index.html">Home</a></li> <li class="has-children"> <a href="#">Dropdown</a> <ul class="dropdown"> <li><a href="elements.html">Elements</a></li> <li class="has-children"> <a href="#">Menu Two</a> <ul class="dropdown"> <li><a href="#">Sub Menu One</a></li> <li><a href="#">Sub Menu Two</a></li> <li><a href="#">Sub Menu Three</a></li> </ul> </li> <li><a href="#">Menu Three</a></li> </ul> </li> <li><a href="staff.html">Our Staff</a></li> <li><a href="news.html">News</a></li> <li><a href="gallery.html">Gallery</a></li> <li><a href="about.html">About</a></li> <li><a href="contact.html">Contact</a></li> </ul> <a href="book-a-table.html" class="btn-book btn btn-primary btn-sm menu-absolute">Enroll Now</a> <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar"> <span></span> </a> </div> </div> </div> </nav>`;
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/src/components/Nav.astro", void 0);

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.includes(type)) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  try {
    const result = lookup(data);
    if (!result.height || !result.width || !result.type) {
      throw new AstroError({
        ...NoImageMetadata,
        message: NoImageMetadata.message(src)
      });
    }
    const { width, height, type, orientation } = result;
    const isPortrait = (orientation || 0) >= 5;
    return {
      width: isPortrait ? height : width,
      height: isPortrait ? width : height,
      format: type,
      orientation
    };
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../chunks/astro/assets-service_CecXjKid.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$1 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="site-footer"> <div class="container"> <div class="row"> <div class="col-lg-3 mr-auto"> <div class="widget"> <h3>About Loren<span class="text-primary">.</span></h3> <p>
Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
</p> </div> <div class="widget"> <h3>Connect</h3> <ul class="list-unstyled social"> <li> <a href="#"><span class="icon-instagram"></span></a> </li> <li> <a href="#"><span class="icon-twitter"></span></a> </li> <li> <a href="#"><span class="icon-facebook"></span></a> </li> <li> <a href="#"><span class="icon-linkedin"></span></a> </li> <li> <a href="#"><span class="icon-pinterest"></span></a> </li> <li> <a href="#"><span class="icon-dribbble"></span></a> </li> </ul> </div> </div> <div class="col-lg-2 ml-auto"> <div class="widget"> <h3>Projects</h3> <ul class="list-unstyled float-left links"> <li><a href="#">Web Design</a></li> <li><a href="#">HTML5</a></li> <li><a href="#">CSS3</a></li> <li><a href="#">jQuery</a></li> <li><a href="#">Bootstrap</a></li> </ul> </div> </div> <div class="col-lg-3"> <div class="widget"> <h3>Gallery</h3> <ul class="instafeed instagram-gallery list-unstyled"> <li> <a class="instagram-item" href="images/gal_1.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_1.jpg", "width": "72", "height": "72" })} </a> </li><li> <a class="instagram-item" href="images/gal_2.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_2.jpg", "width": "72", "height": "72" })} </a> </li><li> <a class="instagram-item" href="images/gal_3.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_3.jpg", "width": "72", "height": "72" })} </a> </li><li> <a class="instagram-item" href="images/gal_4.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_4.jpg", "width": "72", "height": "72" })} </a> </li><li> <a class="instagram-item" href="images/gal_5.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_5.jpg", "width": "72", "height": "72" })} </a> </li><li> <a class="instagram-item" href="images/gal_6.jpg" data-fancybox="gal">${renderComponent($$result, "Image", $$Image, { "inferSize": true, "alt": "", "src": "/assets/images/gal_6.jpg", "width": "72", "height": "72" })} </a> </li> <div class="col-lg-3"> <div class="widget"> <h3>Contact</h3> <address>
43 Raymouth Rd. Baltemoer,
                                                London 3910
</address> <ul class="list-unstyled links mb-4"> <li> <a href="tel://11234567890">+1(123)-456-7890</a> </li> <li> <a href="tel://11234567890">+1(123)-456-7890</a> </li> <li> <a href="/cdn-cgi/l/email-protection#b5dcdbd3daf5d8ccd1dad8d4dcdb9bd6dad8"><span class="__cf_email__" data-cfemail="7e171018113e13071a11131f1710501d1113">[email&#160;protected]</span></a> </li> </ul> </div> </div> <div class="row mt-5"> <div class="col-12 text-center"> <p>
Copyright &copy;2024 All rights
                                            reserved
</p> </div> </div> </ul> </div> </div> </div> </div> </div>`;
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description" content=""><meta name="keywords" content=""><link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Muli:wght@400;700&display=swap" rel="stylesheet"><title>Lorem</title>', "</head> <body> ", " ", " ", ' <div id="overlayer"></div> <div class="loader"> <div class="spinner-border" role="status"> <span class="sr-only">Loading...</span> </div> </div> <script src="/assets/js/jquery-3.4.1.min.js"><\/script> <script src="/assets/js/popper.min.js"><\/script> <script src="/assets/js/bootstrap.min.js"><\/script> <script src="/assets/js/owl.carousel.min.js"><\/script> <script src="/assets/js/jquery.animateNumber.min.js"><\/script> <script src="/assets/js/jquery.waypoints.min.js"><\/script> <script src="/assets/js/jquery.fancybox.min.js"><\/script> <script src="/assets/js/jquery.sticky.js"><\/script> <script src="/assets/js/aos.js"><\/script> <script src="/assets/js/custom.js"><\/script> </body> </html>'])), renderHead(), renderComponent($$result, "Nav", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="untree_co-hero overlay" style="background-image: url('../assets/images/hero_bg.jpg');"> <div class="container"> <div class="row align-items-center justify-content-center"> <div class="col-12"> <div class="row justify-content-left"> <div class="col-lg-6 text-center align-self-center order-lg-2"> <a href="https://vimeo.com/342333493" data-fancybox class="video-play-btn" data-aos="fade-up" data-aos-delay="400"> <span class="icon-play"></span> </a> </div> <div class="col-lg-6 text-center text-lg-left"> <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">
Learning Center for Your Kids
</h1> <div class="mb-5 text-white desc mx-" data-aos="fade-up" data-aos-delay="200"> <p>
Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cupiditate ipsa nam,
									facere laboriosam nesciunt quam libero amet
									vitae dolorum, eius quis qui et voluptatum
									quod hic quas sunt natus? Quibusdam!
</p> </div> <p class="mb-0" data-aos="fade-up" data-aos-delay="300"> <a href="#" class="btn btn-primary">Explore now</a> </p> </div> </div> </div> </div> </div> </div> <div class="untree_co-section py-0"> <div class="container"> <div class="row"> <div class="col-md-6 col-lg-4"> <div class="block-v1 color-1" data-aos="fade-up" data-aos-delay="0"> <span class="flaticon-teach"></span> <h3>Learn</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-md-6 col-lg-4"> <div class="block-v1 color-2" data-aos="fade-up" data-aos-delay="100"> <span class="flaticon-bear"></span> <h3>Play</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-md-6 col-lg-4"> <div class="block-v1 color-3" data-aos="fade-up" data-aos-delay="200"> <span class="flaticon-baby"></span> <h3>Meal</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> </div> </div> </div> <div class="untree_co-section"> <div class="container"> <div class="row justify-content-center mb-5"> <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0"> <h2 class="line-bottom text-center mb-4">What We Offer</h2> <p>
Far far away, behind the word mountains, far from the
						countries Vokalia and Consonantia, there live the blind
						texts.
</p> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100"> <div class="feature"> <span class="icon-music_note color-1"></span> <h3>Music Class</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200"> <div class="feature"> <span class="icon-calculator color-2"></span> <h3>Math Class</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300"> <div class="feature"> <span class="icon-leanpub color-3"></span> <h3>English Class</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100&quot;"> <div class="feature"> <span class="icon-book color-4"></span> <h3>Reading for Kids</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200"> <div class="feature"> <span class="icon-change_history color-5"></span> <h3>History Class</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300"> <div class="feature"> <span class="icon-class color-6"></span> <h3>Active Class</h3> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> </div> </div> </div> <div class="untree_co-section pt-0 bg-img overlay" style="background-image: url('../assets/images/hero_bg_2.jpg');"> <div class="container"> <div class="row align-items-center justify-content-center text-center"> <div class="col-lg-7"> <h2 class="text-white mb-3" data-aos="fade-up" data-aos-delay="0">
Education for Tomorrow's Leaders
</h2> <p class="text-white h5 mb-4" data-aos="fade-up" data-aos-delay="100">
Far far away, behind the word mountains, far from the
						countries Vokalia and Consonantia, there live the blind
						texts.
</p> <p> <a href="#" class="btn btn-primary" data-aos="fade-up" data-aos-delay="200">Enroll Now</a> </p> </div> </div> </div> </div> <div class="untree_co-section"> <div class="container"> <div class="row justify-content-between"> <div class="col-lg-5 mb-5"> <h2 class="line-bottom mb-4" data-aos="fade-up" data-aos-delay="0">
About Us
</h2> <p data-aos="fade-up" data-aos-delay="100">
Far far away, behind the word mountains, far from the
						countries Vokalia and Consonantia, there live the blind
						texts. Separated they live in Bookmarksgrove right at
						the coast of the Semantics, a large language ocean.
</p> <ul class="list-unstyled ul-check mb-5 primary" data-aos="fade-up" data-aos-delay="200"> <li>Separated they live</li> <li>Bookmarksgrove right at the coast</li> <li>large language ocean</li> </ul> <div class="row count-numbers mb-5"> <div class="col-4 col-lg-4" data-aos="fade-up" data-aos-delay="0"> <span class="counter d-block"><span data-number="4000">0</span><span>+</span></span> <span class="caption-2">Students</span> </div> <div class="col-4 col-lg-4" data-aos="fade-up" data-aos-delay="100"> <span class="counter d-block"><span data-number="49">0</span><span></span></span> <span class="caption-2">Teachers</span> </div> <div class="col-4 col-lg-4" data-aos="fade-up" data-aos-delay="100"> <span class="counter d-block"><span data-number="12">0</span><span></span></span> <span class="caption-2">Awards</span> </div> </div> <p data-aos="fade-up" data-aos-delay="200"> <a href="#" class="btn btn-primary">Admission</a> <a href="#" class="btn btn-outline-primary">Learn More</a> </p> </div> <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400"> <div class="bg-1"></div> <a href="https://vimeo.com/342333493" data-fancybox class="video-wrap"> <span class="play-wrap"><span class="icon-play"></span></span> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/about_1.jpg", "alt": "Image", "class": "img-fluid rounded" })} </a> </div> </div> </div> <div class="untree_co-section bg-light"> <div class="container"> <div class="row justify-content-center mb-5"> <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0"> <h2 class="line-bottom text-center mb-4">
School News
</h2> <p>
Far far away, behind the word mountains, far from
							the countries Vokalia and Consonantia, there live
							the blind texts.
</p> </div> </div> <div class="row align-items-stretch"> <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100"> <div class="media-h d-flex h-100"> <figure> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "../assets/images/hero_bg.jpg", "alt": "Image" })} <div class="media-h-body"> <h2 class="mb-3"> <a href="#">Education for Tomorrow's Leaders</a> </h2> <div class="meta"> <span class="icon-calendar mr-2"></span><span>June 22, 2020</span> <span class="icon-person mr-2"></span> </div> <p>
Far far away, behind the word mountains,
										far from the countries Vokalia and
										Consonantia, there live the blind texts.
</p> </div> </figure> </div> <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200"> <div class="media-h d-flex h-100"> <figure> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/hero_bg_2.jpg", "alt": "Image" })} <div class="media-h-body"> <h2 class="mb-3"> <a href="#">Enroll Your Kids This Summer to
												get 30% off</a> </h2> <div class="meta"> <span class="icon-calendar mr-2"></span><span>June 22, 2020</span> <span class="icon-person mr-2"></span> </div> <p>
Far far away, behind the word
											mountains, far from the countries
											Vokalia and Consonantia, there live
											the blind texts.
</p> </div> </figure> </div> </div> </div> </div> <div class="untree_co-section"> <div class="container"> <div class="row justify-content-center mb-5"> <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0"> <h2 class="line-bottom text-center mb-4">
Pricing
</h2> <p>
Far far away, behind the word mountains, far
									from the countries Vokalia and Consonantia,
									there live the blind texts.
</p> </div> </div> <div class="row"> <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="00"> <div class="pricing"> <div class="pricing-img mb-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/1x/asset-1.png", "alt": "Image", "class": "img-fluid" })} <div class="pricing-body"> <h3 class="pricing-plan">Infant</h3> <p class="mb-4">
Far far away, behind the word
												mountains, far from the
												countries Vokalia and
												Consonantia, there live the
												blind texts.
</p> <p> <a href="#" class="btn btn-outline-primary">Get Started</a> </p> </div> </div> </div> <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200"> <div class="pricing"> <div class="pricing-img mb-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/1x/asset-2.png", "alt": "Image", "class": "img-fluid" })} <div class="pricing-body"> <h3 class="pricing-plan">
Toddler
</h3> <p class="mb-4">
Far far away, behind the
													word mountains, far from the
													countries Vokalia and
													Consonantia, there live the
													blind texts.
</p> <p> <a href="#" class="btn btn-primary">Get Started</a> </p> </div> </div> </div> <div class="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="300"> <div class="pricing"> <div class="pricing-img mb-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/1x/asset-3.png", "alt": "Image", "class": "img-fluid" })} <div class="pricing-body"> <h3 class="pricing-plan">
Lad
</h3> <p class="mb-4">
Far far away, behind the
														word mountains, far from
														the countries Vokalia
														and Consonantia, there
														live the blind texts.
</p> <p> <a href="#" class="btn btn-outline-primary">Get Started</a> </p> </div> </div> </div> </div> </div> </div> <div class="untree_co-section"> <div class="bg-2"></div> <div class="container"> <div class="row"> <div class="col-lg-4 mr-auto mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0"> <h3 class="line-bottom mb-4">
Testimonials
</h3> <div class="owl-carousel wide-slider-testimonial"> <div class="item"> <blockquote class="block-testimonial"> <p>
&ldquo;Far far away,
															behind the word
															mountains, far from
															the countries
															Vokalia and
															Consonantia, there
															live the blind
															texts. Separated
															they live in
															Bookmarksgrove right
															at the coast of the
															Semantics, a large
															language
															ocean.&rdquo;
</p> <div class="author"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/person_1.jpg", "alt": "Free template by TemplateUX" }, { "default": ($$result3) => renderTemplate` <h3>
John Doe
</h3> <p class="position">
CEO, Founder
</p> ` })} </div> </blockquote> <div class="item"> <blockquote class="block-testimonial"> <p>
&ldquo;When she
																reached the
																first hills of
																the Italic
																Mountains, she
																had a last view
																back on the
																skyline of her
																hometown
																Bookmarksgrove,
																the headline of
																Alphabet Village
																and the subline
																of her own road,
																the Line Lane.
																Pityful a
																rethoric
																question ran
																over her cheek,
																then she
																continued her
																way.&rdquo;
</p> <div class="author"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/person_2.jpg", "alt": "Free template by TemplateUX" }, { "default": ($$result3) => renderTemplate` <h3>
James
																		Woodland
</h3> <p class="position">
Designer
																		at
																		Facebook
</p> ` })} </div> </blockquote> <div class="item"> <blockquote class="block-testimonial"> <p>
&ldquo;A
																	small river
																	named Duden
																	flows by
																	their place
																	and supplies
																	it with the
																	necessary
																	regelialia.
																	It is a
																	paradisematic
																	country, in
																	which
																	roasted
																	parts of
																	sentences
																	fly into
																	your
																	mouth.&rdquo;
</p> <div class="author"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/person_3.jpg", "alt": "Free template by TemplateUX" }, { "default": ($$result3) => renderTemplate` <h3>
Rob
																			Smith
</h3> <p class="position">
Product
																			Designer
																			at
																			Twitter
</p> ` })} </div> </blockquote> </div> </div> <div class="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay="100"> <h3 class="line-bottom mb-4">
Why Choose Us
</h3> <p>
Far far away, behind
															the word mountains,
															far from the
															countries Vokalia
															and Consonantia,
															there live the blind
															texts.
</p> <div class="custom-accordion" id="accordion_1"> <div class="accordion-item"> <h2 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Good
																		Teachers
																		and
																		Staffs</button> </h2> <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1"> <div class="accordion-body"> <div class="d-flex"> <div class="accordion-img mr-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/about_1.jpg", "alt": "Image", "class": "img-fluid" })} <div> <p>
Far
																						far
																						away,
																						behind
																						the
																						word
																						mountains,
																						far
																						from
																						the
																						countries
																						Vokalia
																						and
																						Consonantia,
																						there
																						live
																						the
																						blind
																						texts.
</p> <p>
Separated
																						they
																						live
																						in
																						Bookmarksgrove
																						right
																						at
																						the
																						coast
																						of
																						the
																						Semantics,
																						a
																						large
																						language
																						ocean.
</p> </div> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">We
																			Value
																			Good
																			Characters</button> </h2> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1"> <div class="accordion-body"> <div class="d-flex"> <div class="accordion-img mr-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/about_2.jpg", "alt": "Image", "class": "img-fluid" })} <div> <p>
Far
																							far
																							away,
																							behind
																							the
																							word
																							mountains,
																							far
																							from
																							the
																							countries
																							Vokalia
																							and
																							Consonantia,
																							there
																							live
																							the
																							blind
																							texts.
</p> <p>
Separated
																							they
																							live
																							in
																							Bookmarksgrove
																							right
																							at
																							the
																							coast
																							of
																							the
																							Semantics,
																							a
																							large
																							language
																							ocean.
</p> </div> </div> </div> </div> </div> <div class="accordion-item"> <h2 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Your
																				Children
																				are
																				Safe</button> </h2> <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion_1"> <div class="accordion-body"> <div class="d-flex"> <div class="accordion-img mr-4"> ${renderComponent($$result2, "Image", $$Image, { "inferSize": true, "src": "/assets/images/about_1.jpg", "alt": "Image", "class": "img-fluid" })} <div> <p>
When
																								she
																								reached
																								the
																								first
																								hills
																								of
																								the
																								Italic
																								Mountains,
																								she
																								had
																								a
																								last
																								view
																								back
																								on
																								the
																								skyline
																								of
																								her
																								hometown
																								Bookmarksgrove,
																								the
																								headline
																								of
																								Alphabet
																								Village
																								and
																								the
																								subline
																								of
																								her
																								own
																								road,
																								the
																								Line
																								Lane.
</p> <p>
Pityful
																								a
																								rethoric
																								question
																								ran
																								over
																								her
																								cheek,
																								then
																								she
																								continued
																								her
																								way.
</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/src/pages/index.astro", void 0);

const $$file = "/Users/christianohenriquecosta/Downloads/Colegio Bandeiras/site/colegio-bandeiras/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
