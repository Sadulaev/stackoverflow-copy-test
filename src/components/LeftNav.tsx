import React from 'react';
import styled from 'styled-components';
import { Flex, PrimaryButton } from '../styles/components';
import teamsImg from '../assets/teams-img.svg'
import { NavLink } from 'react-router-dom';

const LeftNav = (): JSX.Element => {
    return (
        <StyledNav>
            <Flex direction='column'>
                <Link>Home</Link>
                <LinksTitle>PUBLIC</LinksTitle>
                <LinkList>
                    <NavLink to='/'><Link isActive={true}>Questions</Link></NavLink>
                    <NavLink to='/tags'><Link>Tags</Link></NavLink>
                    <Link>Users</Link>
                    <Link>Companies</Link>
                </LinkList>
                <LinksTitle>COLLECTIVES</LinksTitle>
                <LinkList>
                    <Link>Explore Collectives</Link>
                </LinkList>
                <LinksTitle>TEAMS</LinksTitle>
                <TeamsBlock>
                    <p><strong>Stack Overflow for Teams</strong> – Start collaborating and sharing organizational knowledge.</p>
                    <img src={teamsImg} alt="" />
                    <Button>Create a free Team</Button>
                    <span>Why Teams?</span>
                </TeamsBlock>
            </Flex>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    width: 164px;
    max-height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 24px 0 0 8px;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: gray;
    }
`

const LinksTitle = styled.h3`
    font-weight: 500;
    margin: 0;
    margin-top: 16px;
    font-size: 15px;
    color: hsl(210,8%,45%);
`
interface LinkProps {
    isActive?: boolean
}

const LinkList = styled.ul`
    margin: 0;
    padding-left: 20px;
    list-style-type: none;

`

const Link = styled.li<LinkProps>`
    height: 33px;
    display: flex;
    align-items: center;
    font-size: 15px;
    &:hover {
        ${({ isActive = false }) => isActive ? '' : `
            cursor: pointer;
            background: hsl(210,8%,90%);
        `}
    }
`

const TeamsBlock = styled.div`
    p {
        margin: 10px 0;
        font-size: 15px;
    }
    strong {
        font-weight: 800;

    }
    span {
        display: block;
        width: 129px;
        font-size: 12px;
        color: gray;
        text-align: center;
    }
`

const Button = styled.button`
    width: 129px;
    height: 30px;
    color: #ffffff;
    background: hsl(27,90%,55%);
    border-radius: 4px;
    font-size: 12px;
    border: 0px;
    box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,0.4);
    margin-bottom: 5px;
`

export default LeftNav;