import FamilyTree from '@balkangraph/familytree.js';

FamilyTree.templates.sriniz = Object.assign({}, FamilyTree.templates.base);

FamilyTree.templates.sriniz.size = [225, 90];
FamilyTree.templates.sriniz.node =
  '<rect x="0" y="0" height="90" width="225" stroke-width="1" rx="15" ry="15"></rect>';

// heart
/*<path fill="#d613af" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909  l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778 c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654 c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>*/
FamilyTree.templates.sriniz.defs = `
  <g transform="matrix(0.05,0,0,0.05,-8,-15)" id="heart">
    <image href="heart_in_circle_white.png" height="600" width="600" />
  </g>
  <g id="sriniz_male_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#039BE5', 7.5, 7.5)}
  </g>

  <g id="sriniz_female_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#FF46A3', 7.5, 7.5)}
  </g>`;

FamilyTree.templates.sriniz.ripple = {
  radius: 0,
  color: 'none',
  rect: null,
};

// TBD
FamilyTree.templates.sriniz.link12 =
  '<path stroke="#686868" stroke-width="1px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />';

// Male
FamilyTree.templates.sriniz_male = Object.assign(
  {},
  FamilyTree.templates.sriniz
);
FamilyTree.templates.sriniz_male.node =
  '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#039BE5" stroke="#aeaeae" rx="15" ry="15"></rect>';

FamilyTree.templates.sriniz_male.field_0 =
  '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
FamilyTree.templates.sriniz_male.field_1 =
  '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

// Female
FamilyTree.templates.sriniz_female = Object.assign(
  {},
  FamilyTree.templates.sriniz
);
FamilyTree.templates.sriniz_female.node =
  '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>';

FamilyTree.templates.sriniz_female.field_0 =
  '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
FamilyTree.templates.sriniz_female.field_1 =
  '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

const expandIconMale =
  '<circle cx="97" cy="-16" r="10" fill="#039BE5" stroke="#fff" stroke-width="1"><title>Expand</title></circle>' +
  '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
  '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

const expandIconFemale =
  '<circle cx="97" cy="-16" r="10" fill="#FF46A3" stroke="#fff" stroke-width="1"></circle>' +
  '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
  '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

FamilyTree.templates.sriniz_male.plus = expandIconMale;
FamilyTree.templates.sriniz_female.plus = expandIconFemale;

FamilyTree.templates.sriniz_male.minus =
  '<circle cx="0" cy="0" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>' +
  '<line x1="-11" y1="0" x2="11" y2="0" stroke-width="1" stroke="#aeaeae"></line>';

// Image
const imgTemplate =
  '<clipPath id="ulaImg">' +
  '<rect  height="75" width="75" x="7" y="7" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>' +
  '</clipPath>' +
  '<image x="7" y="7" preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" width="75" height="75">' +
  '</image>';

FamilyTree.templates.sriniz_male.img_0 = imgTemplate;
FamilyTree.templates.sriniz_female.img_0 = imgTemplate;

FamilyTree.templates.sriniz_male.up =
  '<use x="195" y="0" xlink:href="#sriniz_male_up"></use>';
FamilyTree.templates.sriniz_female.up =
  '<use x="195" y="0" xlink:href="#sriniz_female_up"></use>';

// Pointer
FamilyTree.templates.sriniz.pointer1 =
  '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
  '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />' +
  '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />' +
  '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />' +
  '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />' +
  '</g></g>';
