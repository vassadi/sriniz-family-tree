import React from 'react';
import './header.css';
import styled from 'styled-components';
import FamilyTree from '../../lib/familytree.js';

const FlexDiv = styled.div`
  display: flex;
  align-items: ${(props) => (props.align ? props.align : 'center')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
`;

const Header = () => {
  const addIcon = FamilyTree.icon.user(50, 50, '#fff');
  return (
    <FlexDiv justify="space-between">
      <FlexDiv>
        <img src="sft_logo_2.png" width="120px" />
        <h1> Family Tree</h1>
      </FlexDiv>
      <div dangerouslySetInnerHTML={{ __html: addIcon }}></div>
    </FlexDiv>
  );
};

export default Header;
