import React, { useEffect, useRef } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

import { nodes } from '../../data/nodes.json';

import '../../templates/sriniz_template';

const MyFamilyTree = () => {
  const ref = useRef();

  useEffect(() => {
    nodes.map((node) => {
      const avatar = node.gender === 'male' ? 'm' : 'f';

      let ageGroup = 0;
      if (node.dob) {
        const birthDate = new Date(node.dob);
        const age = new Date().getFullYear() - birthDate.getFullYear();

        if (age < 3) {
          ageGroup = 1;
        } else if (age > 2 && age < 11) {
          ageGroup = 2;
        } else if (age > 10 && age < 21) {
          ageGroup = 3;
        } else if (age > 20 && age < 31) {
          ageGroup = 4;
        } else if (age > 30 && age < 41) {
          ageGroup = 5;
        } else if (age > 40 && age < 51) {
          ageGroup = 6;
        } else if (age > 50 && age < 61) {
          ageGroup = 7;
        } else {
          ageGroup = 8;
        }

        node.img = node.img ? node.img : `${ageGroup}${avatar}.png`;
      } else {
        node.img = `${ageGroup}${avatar}.png`;
      }

      return node;
    });

    const family = new FamilyTree(ref.current, {
      template: 'sriniz',
      enableSearch: true,
      nodeMouseClick: FamilyTree.action.none,
      scaleInitial: FamilyTree.match.boundary,
      // orientation: FamilyTree.orientation.right,
      // nodeTreeMenu: true,
      nodeBinding: {
        field_0: 'name',
        img_0: 'img',
      },
      editForm: {
        buttons: {
          edit: null,
          share: null,
        },
        photoBinding: 'img',
      },
      nodes: nodes,
      toolbar: {
        fullScreen: true,
        zoom: true,
        fit: true,
        expandAll: true,
      },
    });

    family.on('render-link', function (sender, args) {
      if (args.cnode.ppid !== undefined)
        args.html += `<use data-ctrl-ec-id="${args.node.id}" xlink:href="#heart" x="${args.p.xb}" y="${args.p.ya}" />`;

      if (args.cnode.isPartner && args.node.partnerSeparation === 30)
        args.html += `<use data-ctrl-ec-id="${args.node.id}" xlink:href="#heart" x="${args.p.xb}" y="${args.p.yb}" />`;
    });
  }, []);

  return <div id="tree" ref={ref}></div>;
};

export default MyFamilyTree;
