import FamilyTree from '../lib/familytree.js';

const TEMPLATE_NAME = 'sriniz';
const MALE_NODE = 'sriniz_male';
const FEMALE_NODE = 'sriniz_female';

const DECEASED_MALE_NODE = 'sriniz_male_deceased';
const DECEASED_FEMALE_NODE = 'sriniz_female_deceased';

const COLOR_CODE_MALE = '#039BE5';
const COLOR_CODE_FEMALE = '#FF46A3';

const COLOR_CODE_DECEASED_MALE = '#6EC5EE';
const COLOR_CODE_DECEASED_FEMALE = '#E476C7';

// Deceased image
// '<image x="-3" y="-3" xlink:href="wreath.png" width="93" height="93"></image>';

// Image
const imgTemplate =
  '<clipPath id="ulaImg">' +
  '<rect  height="75" width="75" x="7" y="7" stroke-width="1" stroke="#aeaeae" rx="15" ry="15"></rect>' +
  '</clipPath>' +
  '<image x="7" y="7" preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" width="75" height="75">' +
  '</image>';

const circleMenu = {
  radius: 10,
  x: 210,
  y: 50,
  color: '#fff',
  stroke: '#aeaeae',
};

const getNodeUp = (templateName, color) => {
  return `<g id="${templateName}_up">
  <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
  ${FamilyTree.icon.ft(15, 15, color, 7.5, 7.5)}
</g>`;
};

const getNodePlus = (templateName, color) => {
  return `
  <g id="${templateName}_plus" style="cursor:pointer;">
  <circle cx="97" cy="-16" r="10" fill="${color}" stroke="#fff" stroke-width="1"></circle>
  <line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>
  <line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>
  </g>`;
};

// Creating a template from base
const createTemplate = () => {
  FamilyTree.templates[TEMPLATE_NAME] = Object.assign(
    {},
    FamilyTree.templates.base
  );
  FamilyTree.templates[TEMPLATE_NAME].size = [225, 90];
  FamilyTree.templates[TEMPLATE_NAME].node = `
  <rect x="0" y="0" height="90" width="225" stroke-width="1" rx="15" ry="15"></rect>`;

  FamilyTree.templates[TEMPLATE_NAME].defs = `
  <g transform="matrix(0.05,0,0,0.05,-13 ,-12)" id="heart">
    <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:#fff;stroke:red;stroke-miterlimit:10;stroke-width:24px" fill="red"></path>
    <path d="M256,360a16,16,0,0,1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,20.4,0,35,10.63,44.1,20.41a6,6,0,0,0,8.72,0c9.11-9.78,23.7-20.41,44.1-20.41,30.31,0,55.22,25.27,55.53,56.33.28,27.1-9.31,52.13-29.3,76.5-9.38,11.44-26.4,29.73-65.7,56.41A16,16,0,0,1,256,360Z" fill="red"></path>
  </g>

  <g style="cursor: pointer;" id="sriniz_tree_menu">
    <rect x="0" y="0" width="25" height="25" fill="transparent"></rect>
    ${FamilyTree.icon.addUser(50, 50, '#fff', 0, 0)}
  </g>

  ${getNodePlus(MALE_NODE, COLOR_CODE_MALE)}

  ${getNodePlus(FEMALE_NODE, COLOR_CODE_FEMALE)}

  ${getNodePlus(DECEASED_MALE_NODE, COLOR_CODE_DECEASED_MALE)}

  ${getNodePlus(DECEASED_FEMALE_NODE, COLOR_CODE_DECEASED_FEMALE)}

  ${getNodeUp(MALE_NODE, COLOR_CODE_MALE)}

  ${getNodeUp(FEMALE_NODE, COLOR_CODE_FEMALE)}

  ${getNodeUp(DECEASED_MALE_NODE, COLOR_CODE_DECEASED_MALE)}

  ${getNodeUp(DECEASED_FEMALE_NODE, COLOR_CODE_DECEASED_FEMALE)}


  `;
};

// Create male/female node
const createNode = (nodeName, colorCode, templateName) => {
  FamilyTree.templates[nodeName] = Object.assign(
    {},
    FamilyTree.templates[templateName || TEMPLATE_NAME]
  );
  FamilyTree.templates[
    nodeName
  ].node = `<rect x="0" y="0" class="shadow" height="{h}" width="{w}" stroke-width="1" fill="${colorCode}" stroke="#aeaeae" rx="15" ry="15"></rect>`;

  FamilyTree.templates[
    nodeName
  ].up = `<use x="195" y="0" xlink:href="#${nodeName}_up"></use>`;

  FamilyTree.templates[
    nodeName
  ].plus = `<use xlink:href="#${nodeName}_plus"></use>`;

  if (!templateName) {
    FamilyTree.templates[nodeName].field_0 =
      '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
    FamilyTree.templates[nodeName].field_1 =
      '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

    FamilyTree.templates[nodeName].img_0 = imgTemplate;
  }
  FamilyTree.templates[nodeName].nodeCircleMenuButton = circleMenu;
};

createTemplate();

createNode(MALE_NODE, COLOR_CODE_MALE);

createNode(FEMALE_NODE, COLOR_CODE_FEMALE);

createNode(DECEASED_MALE_NODE, COLOR_CODE_DECEASED_MALE, MALE_NODE);

createNode(DECEASED_FEMALE_NODE, COLOR_CODE_DECEASED_FEMALE, FEMALE_NODE);

// Pointer
FamilyTree.templates.sriniz.pointer1 =
  '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
  '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />' +
  '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />' +
  '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />' +
  '</g></g>';
